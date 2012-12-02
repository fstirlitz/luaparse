MASTER=https://github.com/oxyc/luaparse.git

all: checkout clean

checkout:
	@git clone $(MASTER)
	@sed -i 's/\.\.\///g' luaparse/docs/layout/head.html
	@$(MAKE) -s -C luaparse install docs
	@mv luaparse/docs/* .
	@mv luaparse/test .

clean:
	@rm -rf layout
	@rm -rf luaparse
