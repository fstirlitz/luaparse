MASTER=https://github.com/oxyc/luaparse.git

all: checkout clean

checkout:
	@git clone $(MASTER)
	@sed -i 's/\.\.\///g' luaparse/docs/layout/head.html
	@$(MAKE) -s -C luaparse install docs
	@mv luaparse/docs/* .
	@cp -rf luaparse/test .

clean:
	@rm -f *.md
	@rm -rf layout luaparse

