MOCHA_OPTS=
REPORTER=dot

all: grunt

test: test-unit

grunt:
	@grunt

test-unit:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)

clean:
	@rm -f dist/*
