DOCS=docs/*.md
HTMLDOCS=$(DOCS:.md=.html)
REPORTER=dot

all: grunt

test: test-unit

grunt:
	@grunt

test-unit:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER)
		$(MOCHA_OPTS)


test-browser:
	@$(BROWSER) http://localhost:3000 &
	@./node_modules/.bin/serve ./test

test-md:
	@./node_modules/.bin/mocha \
		--reporter markdown \
		> docs/test.md

docs: test-md $(patsubst %.md,%.html,$(wildcard docs/*.md))

%.html: %.md
	@cat docs/layout/head.html > $@
	@markdown $< >> $@
	@cat docs/layout/foot.html >> $@


clean:
	@rm -f dist/* docs/*.html docs/*.1

.PHONY: test docs
