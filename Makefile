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
	@sed -i "s|\(exports\.version = '\)[^']*\('\)|\1$(VERSION)\2|" luaparse.js
	@git add package.json bower.json luaparse.js
	@git commit -m "Version $(VERSION)"
	@git tag -a "v$(VERSION)" -m "v$(VERSION)"

# Tests
# -----

test-node:
	@node test/runner.js --console

test:
	@$(LIB)/testem/testem.js ci

testem-engines:
	@$(LIB)/testem/testem.js -l PhantomJS,node,narwhal,ringo,rhino,rhino1.7R5

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
	@$(BIN)/docco luaparse.js

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

coverage:
	@rm -rf html-report docs/coverage
	@$(BIN)/istanbul cover --report html --dir docs/coverage test/runner.js >/dev/null

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
		luaparse.js

coverage-analysis: coverage
	@$(BIN)/istanbul check-coverage --statements -7 --branches -11 --functions -1 \
		docs/coverage/coverage.json

qa:
	@$(MAKE) -s test lint complexity-analysis coverage-analysis

clean:
	@rm -f docs/*.html docs/*.1
	@rm -rf lib-cov coverage html-report docs/coverage/

.PHONY: test test-md coverage test-all docs
