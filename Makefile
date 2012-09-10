DOCS=docs/*.md
HTMLDOCS=$(DOCS:.md=.html)
REPORTER=dot

all: grunt

grunt:
	@grunt

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

.PHONY: docs
