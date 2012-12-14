REPORTER?=spec
DOCS=docs/*.md
HTMLDOCS=$(DOCS:.md=.html)

all: build

install:
	@npm install
	@echo
	@echo "Istanbul is required to generate coverage report"
	@echo "> npm install -g istanbul"

build:
	@./node_modules/.bin/grunt build

lint:
	@./node_modules/.bin/grunt lint

test: test-spec

test-spec:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		test/spec/scaffolded

test-all: test-spec

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

docs: docco coverage docs-test docs-md

clean:
	@rm -f docs/*.html docs/*.1
	@rm -rf lib-cov coverage html-report docs/coverage/

.PHONY: test test-md coverage test-all docs
