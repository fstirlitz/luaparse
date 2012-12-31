# luaparse [![Build Status](https://travis-ci.org/oxyc/luaparse.png)](https://travis-ci.org/oxyc/luaparse)

A Lua parser written in JavaScript, for my bachelor's thesis at Arcada.

*Still in development*

## Getting started

CommonJS

```javascript
var parser = require('luaparse');
parser.parse('i = 0');
```

AMD

```javascript
require(['luaparse'], function(parser) {
  parser.parse('i = 0');
});
```

Browser

```javascript
luaparse.parse('i = 0');
```

### Makefile

Run the tests

    $ make test

Create the documentation

    $ make docs

Report code coverage

    $ make coverage

Build a distribution file

    $ make build

Scaffold the test files

    $ make scaffold-tests

Install necessary development packages

    $ make install

Before contributing any code follow the code style and run the lint tool

    $ make lint

## Todo

#### 0.1

- Optimize hot functions

#### 0.2

- Tolerant error handling
- Location tracking

## Acknowledgements

* Initial tests are scaffolded from [yueliang][yueliang] and then manually checked for error.
* Much of the code is based on [LuaMinify][luaminify], the [Lua][lua] source and [Esprima][esprima]. All awesome projects.

## License

MIT

[luaminify]: https://github.com/stravant/LuaMinify
[yueliang]: http://yueliang.luaforge.net/
[lua]: http://www.lua.org
[esprima]: http://esprima.org
