REPORTER?=spec
DOCS=docs/*.md
HTMLDOCS=$(DOCS:.md=.html)
HASH=$(shell git rev-parse HEAD | cut -c1-5)

all: build

# Main tasks
# ----------

build:
	@./node_modules/.bin/grunt build

lint:
	@./node_modules/.bin/grunt lint

# Install and internal updates
# ----------------------------

install:
	@npm install

install-test:
	@cp ./node_modules/mocha/mocha.js test/lib/mocha/
	@cp ./node_modules/mocha/mocha.css test/lib/mocha/
	@cp ./node_modules/expect.js/expect.js test/lib/
	@cp ./node_modules/benchmark/benchmark.js test/lib/

update-browserscope:
	@sed -i "s/\(window\.commit = '\)[^']*\(';\)/\1$(HASH)\2/" test/benchmarks.html

# Usage: make VERSION=0.1.0 version-bump
version-bump:
	@sed -i 's|\("version": "\)[^"]*\("\)|\1$(VERSION)\2|' bower.json package.json
	@sed -i "s|\(exports\.version = '\)[^']*\('\)|\1$(VERSION)\2|" lib/luaparse.js
	@git add package.json bower.json lib/luaparse.js
	@git commit -m "Version $(VERSION)"
	@git tag "v$(VERSION)"

# Tests
# -----

test: test-spec

test-spec:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		test/spec/*

test-all: test-spec

# Scaffold all test files in the scaffolding dir.
scaffold-tests:
	@$(foreach file,\
		$(notdir $(wildcard test/scaffolding/*)),\
		$(MAKE) -s scaffold-test FILE=$(file);\
	)

scaffold-test:
	@./scripts/make-test --name=$(FILE) \
		test/scaffolding/$(FILE) \
		> test/spec/$(FILE).js

# Documentation
# -------------

docs: docco coverage docs-test docs-md

docco:
	@./node_modules/.bin/doccoh lib/*.js

docs-test:
	@$(MAKE) -s test REPORTER=doc \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/tests.html

docs-index:
	@./node_modules/.bin/marked README.md --gfm \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/index.html

docs-md: docs-index $(patsubst %.md,%.html, $(wildcard docs/*.md))

%.html: %.md
	@echo $<
	@./node_modules/.bin/marked $< --gfm \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> $@

# Coverage
# --------

coverage: coverage-instrument
	@rm -rf html-report docs/coverage
	@ISTANBUL_REPORTERS=html,text-summary COVERAGE=1 \
		$(MAKE) -s test REPORTER=mocha-istanbul
	@mv html-report docs/coverage

coverage-cover:
	@ISTANBUL_REPORTERS=text-summary,json COVERAGE=1 \
		$(MAKE) -s test REPORTER=mocha-istanbul

coverage-instrument:
	@rm -rf lib-cov
	@./node_modules/.bin/istanbul instrument \
		--output lib-cov --no-compact --variable global.__coverage__ \
		lib

# Benchmark
# ---------

benchmark:
	@./scripts/benchmark -v benchmarks/lib/ParseLua.lua

profile:
	@bash benchmarks/run.sh -v --d8 HEAD

benchmark-full:
	@bash benchmarks/run.sh -v --js --lua --esprima HEAD

# Quality Assurance
# -----------------

complexity-analysis:
	@echo "===================== Complexity analysis ============================"
	@./scripts/complexity 10
	@node ./node_modules/complexity-report/src/cli.js \
		-lws --maxcc 15 \
		lib/luaparse.js

coverage-analysis: coverage-instrument coverage-cover
	@node ./node_modules/istanbul/lib/cli.js check-coverage \
		--statements -7 --branches -11 --functions -1 \
		coverage.json
	@rm -f coverage.json

qa:
	@$(MAKE) -s test-spec REPORTER=dot
	@$(MAKE) -s lint complexity-analysis coverage-analysis

clean:
	@rm -f docs/*.html docs/*.1
	@rm -rf lib-cov coverage html-report docs/coverage/

.PHONY: test test-md coverage test-all docs
