MASTER=https://github.com/oxyc/luaparse.git
HASH=$(shell git --git-dir=luaparse/.git rev-parse HEAD | cut -c1-5)

all: checkout clean

update-browserscope:
	@sed -i "s/\(window\.commit = '\)[^']*\(';\)/\1$(HASH)\2/" test/benchmarks.html

checkout: clean-old
	@git clone $(MASTER)
	@sed -i 's/\.\.\///g' luaparse/docs/layout/head.html luaparse/docs/*.md
	@$(MAKE) -s -C luaparse install docs
	@mv luaparse/docs/* .
	@mv luaparse/examples .
	@mv luaparse/luaparse.js .
	@mv luaparse/benchmarks .
	@cp -rf luaparse/test .

clean-old:
	@rm -rf coverage examples lib benchmarks

clean:
	@rm -f *.md
	@rm -rf layout luaparse
