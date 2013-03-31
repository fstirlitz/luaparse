DOCS := docs/*.md
REPORTER ?= spec
PROCESSOR ?= "/opt/v8/tools/linux-tick-processor"
LIB := ./node_modules
BIN := $(LIB)/.bin

all: build

# Main tasks
# ----------

build:
	@$(BIN)/grunt build

lint:
	@$(BIN)/grunt lint

# Install and internal updates
# ----------------------------

install:
	@npm install

# This is required if mocha, expect or benchmark is updated.
update:
	@cp -v $(LIB)/spec/lib/* test/lib/
	@cp -v $(LIB)/benchmark/benchmark.js test/lib/

# Usage: make VERSION=0.1.0 version-bump
version-bump:
	@sed -i 's|\("version": "\)[^"]*\("\)|\1$(VERSION)\2|' bower.json package.json
	@sed -i "s|\(exports\.version = '\)[^']*\('\)|\1$(VERSION)\2|" lib/luaparse.js
	@git add package.json bower.json lib/luaparse.js
	@git commit -m "Version $(VERSION)"
	@git tag "v$(VERSION)"

# Tests
# -----

test: test-mocha

test-mocha:
	@$(BIN)/mocha \
		--reporter $(REPORTER) \
		test/spec/*.js

testem:
	@testem

testem-modern:
	@testem -l bs_ie_9.0,bs_ie_10.0,bs_chrome_27.0,bs_ff_20.0,bs_safari_6.0,bs_opera_12.14

testem-legacy:
	@testem -l bs_ie_6.0,bs_ie_7.0,bs_ie_8.0,bs_opera_10.0,bs_safari_4.0

# Scaffold all test files in the scaffolding dir.
scaffold-tests:
	@$(foreach file,\
		$(notdir $(wildcard test/scaffolding/*)),\
		$(MAKE) -s scaffold-test FILE=$(file);\
	)

scaffold-test:
	@./scripts/scaffold-test --name=$(FILE) \
		test/scaffolding/$(FILE) \
		> test/spec/$(FILE).js

# Documentation
# -------------

docs: docco coverage docs-test docs-md

docco:
	@$(BIN)/doccoh lib/*.js

docs-test:
	@$(MAKE) -s test REPORTER=doc \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/tests.html

docs-index:
	@$(BIN)/marked README.md --gfm \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/index.html

docs-md: docs-index $(patsubst %.md,%.html, $(wildcard docs/*.md))

%.html: %.md
	@echo $<
	@$(BIN)/marked $< --gfm \
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
	@$(BIN)/istanbul instrument \
		--output lib-cov --no-compact --variable global.__coverage__ \
		lib

# Benchmark
# ---------

benchmark:
	@./scripts/benchmark -v benchmarks/lib/ParseLua.lua

profile:
	@bash benchmarks/run.sh -v --processor $(PROCESSOR) --profile HEAD

benchmark-previous:
	@bash benchmarks/run.sh --js HEAD HEAD~1

# Quality Assurance
# -----------------

complexity-analysis:
	@echo "===================== Complexity analysis ============================"
	@./scripts/complexity 10
	@node $(LIB)/complexity-report/src/cli.js \
		-lws --maxcc 15 \
		lib/luaparse.js

coverage-analysis: coverage-instrument coverage-cover
	@node $(LIB)/istanbul/lib/cli.js check-coverage \
		--statements -7 --branches -11 --functions -1 \
		coverage.json
	@rm -f coverage.json

qa:
	@$(MAKE) -s test REPORTER=dot
	@$(MAKE) -s lint complexity-analysis coverage-analysis

clean:
	@rm -f docs/*.html docs/*.1
	@rm -rf lib-cov coverage html-report docs/coverage/

.PHONY: test test-md coverage test-all docs
