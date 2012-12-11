MASTER=https://github.com/oxyc/luaparse.git

all: checkout clean

checkout: clean-old
	@git clone $(MASTER)
	@sed -i 's/\.\.\///g' luaparse/docs/layout/head.html luaparse/docs/*.md
	@$(MAKE) -s -C luaparse install docs
	@mv luaparse/docs/* .
	@mv luaparse/examples .
	@cp -rf luaparse/test .

clean-old:
	@rm -rf coverage examples

clean:
	@rm -f *.md
	@rm -rf layout luaparse
