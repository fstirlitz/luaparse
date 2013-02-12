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

    # Scaffold the test files
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

    # Profile v8 internals
    make profile

    # Run full benchmark
    make benchmark-full

## Scripts

Benchmark a code snippet or a script file

    ./scripts/benchmark [snippet|file]...

    Flags:
      -v|--verbose
      --samples=5
      --minTime=0

    Example:
      ./scripts/benchmark -v --samples=100 --minTime=10 'local i = 1' 'i = 1'

List function complexity with an optional threshold defaulting to 10.

    ./scripts/complexity [threshold]

    Example:
      ./scripts/complexity 5

Create a test from a snippet or a file of snippets separated by a newline.
If a snippet ends with "-- FAIL" it will generate a failing test.

    ./scripts/make-test [snippet|file]...

    Flags:
      --ignore-errors
      --name=

    Example:
      ./scripts/make-test 'local i = 1' 'local 1 = 1 -- FAIL'

## Todo

#### 0.2

- Tolerant error handling
- Location tracking

## Support

Has been tested in IE6+, Firefox 3+, Safari 4+, Chrome 10+, Node

## Acknowledgements

* Initial tests are scaffolded from [yueliang][yueliang] and then manually checked for error.
* Much of the code is based on [LuaMinify][luaminify], the [Lua][lua] source and [Esprima][esprima]. All awesome projects.

## License

MIT

[luaminify]: https://github.com/stravant/LuaMinify
[yueliang]: http://yueliang.luaforge.net/
[lua]: http://www.lua.org
[esprima]: http://esprima.org
