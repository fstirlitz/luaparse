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

## Makefile

### Common

    # Run the tests
    make test

    # Create the documentation
    make docs

    # Build a distribution file
    make build

### Development

    # Install necessary development packages
    make install

    # Update mocha, expect.js and benchmark scripts.
    make update

    # Version bump
    make VERSION=0.1.1 version-bump

    # Scaffold the test files, useful if something has changed in the AST.
    make scaffold-tests

    # Before contributing any code check quality assurance.
    make qa

    # Check complexity
    make complexity-analysis

    # Check coverage
    make coverage-analysis

    # Lint code
    make lint

### Benchmark

    # Run simple benchmark
    make benchmark

    # Profile v8 internals (Expects /opt/v8/tools/linux-tick-processor)
    # Alternatively you can specify the tick-processor path using a PROCESSOR variable.
    make profile

    # Compare current current commit to previous
    make benchmark-previous

## Todo

#### 0.1.0

- Tolerant error handling
- Location tracking

## Support

Has been tested in at least IE6+, Firefox 3+, Safari 4+, Chrome 10+, Opera 10+, Node 0.4.0+, RingoJS 0.8, Narwhal 0.2.2, Rhino 1.7R4-1.7R5.

## Acknowledgements

* Initial tests are scaffolded from [yueliang][yueliang] and then manually checked for error.
* Much of the code is based on [LuaMinify][luaminify], the [Lua][lua] source and [Esprima][esprima]. All awesome projects.

## License

MIT

[luaminify]: https://github.com/stravant/LuaMinify
[yueliang]: http://yueliang.luaforge.net/
[lua]: http://www.lua.org
[esprima]: http://esprima.org
