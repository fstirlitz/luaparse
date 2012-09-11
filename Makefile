REPORTER?=spec
DOCS=docs/*.md
HTMLDOCS=$(DOCS:.md=.html)

all: build

build:
	@yeoman build

test: test-spec

test-spec:
	@./node_modules/.bin/mocha \
			--reporter $(REPORTER) \
			test/spec/*.js

test-all: test-spec

coverage:
	@rm -rf lib-cov
	@jscoverage lib lib-cov
	@LUAPARSE_COV=1 $(MAKE) -s test REPORTER=html-cov > docs/coverage.html

test-md:
	@$(MAKE) -s test REPORTER=markdown > docs/tests.md

docco:
	@docco lib/*.js

docs-test: test-md $(patsubst %.md,%.html,$(wildcard docs/*.md))

docs: docco coverage docs-test

%.html: %.md
	@cat docs/layout/head.html > $@
	@markdown $< >> $@
	@cat docs/layout/foot.html >> $@


clean:
	@rm -f dist/* docs/*.html docs/*.1
	@rm -rf lib-cov

.PHONY: test test-md coverage test-all docs
