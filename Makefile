REPORTER?=spec
DOCS=docs/*.md
HTMLDOCS=$(DOCS:.md=.html)

all: build

build:
	@./node_modules/.bin/grunt build

lint:
	@./node_modules/.bin/grunt lint

test: test-spec

test-spec:
	@./node_modules/.bin/mocha \
			--reporter $(REPORTER) \
			test/spec/*.js

test-all: test-spec

coverage:
	@rm -rf lib-cov
	@jscoverage lib lib-cov
	@COVERAGE=1 $(MAKE) -s test REPORTER=html-cov > docs/coverage.html

lcov:
	@rm -rf lib-cov
	@istanbul instrument --output lib-cov --no-compact --variable global.__coverage__ lib
	@COVERAGE=1 ./node_modules/.bin/mocha --reporter mocha-istanbul test/spec/*

docco:
	@./node_modules/.bin/doccoh lib/*.js

docs-test:
	@$(MAKE) -s test REPORTER=doc \
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/tests.html

docs-index:
	@cat README.md docs/index.md | ./node_modules/.bin/marked --gfm\
		| cat docs/layout/head.html - docs/layout/foot.html \
		> docs/index.html

docs: docco coverage docs-test docs-index

clean:
	@rm -f docs/*.html docs/*.1
	@rm -rf lib-cov coverage html-report

.PHONY: test test-md coverage test-all docs
