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
	@echo
	@echo "Istanbul is required to generate coverage report"
	@echo "> npm install -g istanbul"

install-test:
	@cp ./node_modules/mocha/mocha.js test/lib/mocha/
	@cp ./node_modules/mocha/mocha.css test/lib/mocha/
	@cp ./node_modules/expect.js/expect.js test/lib/
	@cp ./node_modules/benchmark/benchmark.js test/lib/

update-browserscope:
	@sed -i "s/\(window\.commit = '\)[^']*\(';\)/\1$(HASH)\2/" test/benchmarks.html

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

coverage:
	@rm -rf lib-cov docs/coverage
	@istanbul instrument \
		--output lib-cov --no-compact --variable global.__coverage__ \
		lib
	@COVERAGE=1 $(MAKE) -s test REPORTER=mocha-istanbul
	@mv html-report docs/coverage

docco:
	@./node_modules/.bin/doccoh lib/*.js

docs-test:
	@$(MAKE) -s test REPORTER=doc \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/tests.html

docs-index:
	@cat README.md | ./node_modules/.bin/marked --gfm \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/index.html

docs-md: docs-index $(patsubst %.md,%.html, $(wildcard docs/*.md))

%.html: %.md
	@echo $<
	@cat $< | ./node_modules/.bin/marked --gfm \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> $@

# Benchmark
# ---------

benchmark:
	@./scripts/benchmark -v --samples=1000 benchmarks/lib/ParseLua.lua

# Cleanup
# -------

clean:
	@rm -f docs/*.html docs/*.1
	@rm -rf lib-cov coverage html-report docs/coverage/

.PHONY: test test-md coverage test-all docs
