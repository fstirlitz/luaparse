# luaparse [![Build Status](https://travis-ci.org/oxyc/luaparse.svg)](https://travis-ci.org/oxyc/luaparse)

A Lua parser written in JavaScript, for my bachelor's thesis at Arcada.

## Installation

Install through `bower install luaparse` or `npm install luaparse`.

## Usage

CommonJS

```js
var parser = require('luaparse');
var ast = parser.parse('i = 0');
console.log(JSON.stringify(ast));
```

AMD

```js
require(['luaparse'], function(parser) {
  var ast = parser.parse('i = 0');
  console.log(JSON.stringify(ast));
});
```

Browser

```html
<script src="luaparse.js"></script>
<script>
var ast = luaparse.parse('i = 0');
console.log(JSON.stringify(ast));
</script>
```

## Parser Interface

Basic usage:

```js
luaparse.parse(code, options);
```

The output of the parser is an Abstract Syntax Tree (AST) formatted in JSON.

The available options are:

- `wait: false` Explicitly tell the parser when the input ends.
- `comments: true` Store comments as an array in the chunk object.
- `scope: false` Track identifier scopes.
- `locations: false` Store location information on each syntax node.
- `ranges: false` Store the start and end character locations on each syntax
  node.
- `onCreateNode: null` A callback which will be invoked when a syntax node
  has been completed. The node which has been created will be passed as the
  only parameter.
- `onCreateScope: null` A callback which will be invoked when a new scope is
  created.
- `onDestroyScope: null` A callback which will be invoked when the current
  scope is destroyed.
- `onLocalDeclaration: null` A callback which will be invoked when a local
  variable is declared. The identifier will be passed as the only parameter.
- `luaVersion: '5.1'` The version of Lua the parser will target; supported
  values are `'5.1'`, `'5.2'`, `'5.3'` and `'LuaJIT'`.
- `extendedIdentifiers: false` Whether to allow code points ≥ U+0080 in
  identifiers, like LuaJIT does. See 'Note on character encodings' below
  if you wish to use this option. **Note:** setting `luaVersion: 'LuaJIT'`
  currently does *not* enable this option; this may change in the future.

The default options are also exposed through `luaparse.defaultOptions` where
they can be overriden globally.

There is a second interface which might be preferable when using the `wait`
option.

```js
var parser = luaparse.parse({ wait: true });
parser.write('foo = "');
parser.write('bar');
var ast = parser.end('"');
```

This would be identical to:

```js
var ast = luaparse.parse('foo = "bar"');
```

### AST format

If the following code is executed:

```js
luaparse.parse('foo = "bar"');
```

then the returned value will be:

```js
{
  "type": "Chunk",
  "body": [
    {
      "type": "AssignmentStatement",
      "variables": [
        {
          "type": "Identifier",
          "name": "foo"
        }
      ],
      "init": [
        {
          "type": "StringLiteral",
          "value": "bar",
          "raw": "\"bar\""
        }
      ]
    }
  ],
  "comments": []
}
```

#### Note on character encodings

Unlike strings in JavaScript, Lua strings are not Unicode strings, but
bytestrings (sequences of 8-bit values); likewise, implementations of Lua
parse the source code as a sequence of octets. However, the input to this
parser is a JavaScript string, i.e. a sequence of 16-bit code units (not
necessarily well-formed UTF-16). This poses a problem of how those code
units should be interpreted, particularly if they are outside the Basic
Latin block ('ASCII').

Currently, this parser handles Unicode input by encoding it in [WTF-8][wtf8],
and reinterpreting the resulting code units as Unicode code points. This
applies to string literals and (if `extendedIdentifiers` is enabled) to
identifiers as well. Lua byte escapes inside string literals are interpreted
directly as code points, while Lua 5.3 `\u{}` escapes are similarly decoded
as UTF-8 code units reinterpreted as code points. It is as if the parser input
was being interpreted as ISO-8859-1, while actually being encoded in UTF-8.

This ensures that no otherwise-valid input will be rejected due to encoding
errors. Assuming the input was originally encoded in UTF-8 (which includes
the case of only containing ASCII characters), it also preserves the following
properties:

- String literal nodes representing the same string value in Lua (and
  identifier nodes, if `extendedIdentifiers` is enabled) will have the same
  interpretation in the AST: e.g. the Lua literals `'💩'`, `'\u{1f4a9}'` and
  `'\240\159\146\169'` will all have `"\u00f0\u009f\u0092\u00a9"` in their
  `.value` property, and likewise `local 💩` will have the same string in
  its `.name` property.
- The `.length` property of decoded string values in the AST is equal to
  the value that the `#` operator would return in Lua.

Maintaining those properties makes the logic of static analysers and code
transformation tools simpler. However, it poses a problem when displaying
strings to the user and serialising AST back into a string; to recover the
original bytestrings, values transformed in this way will have to be encoded
in ISO-8859-1.

Other solutions to this problem may be considered in the future. Some of
them have been listed below, with their drawbacks:

- A mode that instead treats the input as if it were decoded according
  to ISO-8859-1 (or [the `x-user-defined` encoding][x-user-defined])
  and rejects code points that cannot appear in that encoding; may be
  useful for source code in encodings other than UTF-8
  - Still tricky to get semantics correctly
- Using an `ArrayBuffer` or `Uint8Array` for source code and/or string
  literals
  - May fail to be portable to older JavaScript engines
  - Cannot be (directly) serialised as JSON
  - Values of those types are fixed-length, which makes manipulation
    cumbersome; they cannot be incrementally built by appending.
  - They cannot be used as keys in objects; one has to use
    `Map` and `WeakMap` instead
- Using a plain `Array` of numbers in the range [0, 256)
  - Memory-inefficient
  - May bloat the JSON serialisation considerably
  - Cannot be used as keys in objects either
- Storing string literal values as ordinary `String` values, and requiring that
  escape sequences in literals constitute well-formed UTF-8; an exception
  is thrown if they do not
  - UTF-8 chauvinism; imposes semantics that may be unwanted
  - Reduced compatibility with other Lua implementations
- Like above, but instead of throwing an exception, ill-formed escapes are
  transformed to unpaired surrogates, just like Python's `surrogateescape`
  encoding error handler
  - Destroys the property that `("\xc4" .. "\x99") == "\xc4\x99"`
  - If the AST is encoded in JSON, some JSON libraries may refuse to parse it

### Custom AST

The default AST structure is somewhat inspired by the Mozilla Parser API but
can easily be overriden to customize the structure or to inject custom logic.

`luaparse.ast` is an object containing all functions used to create the AST, if
you for example wanted to trigger an event on node creations you could use the
following:

```js
var luaparse = require('luaparse'),
    events = new (require('events').EventEmitter);

Object.keys(luaparse.ast).forEach(function(type) {
  var original = luaparse.ast[type];
  luaparse.ast[type] = function() {
    var node = original.apply(null, arguments);
    events.emit(node.type, node);
    return node;
  };
});
events.on('Identifier', function(node) { console.log(node); });
luaparse.parse('i = "foo"');
```

_this is only an example to illustrate what is possible and this particular
example might not suit your needs as the end location of the node has not been
determined yet. If you desire events you should use the `onCreateNode` callback
instead)._


### Lexer

The lexer used by luaparse can be used independently of the recursive descent
parser. The lex function is exposed as `luaparse.lex()` and it will return the
next token up until `EOF` is reached.

Each token consists of:

- `type` expressed as an enum flag which can be matched with `luaparse.tokenTypes`.
- `value`
- `line`, `lineStart`
- `range` can be used to slice out raw values, eg. `foo = "bar"` will return a
`StringLiteral` token with the value `bar`. Slicing out the range on the other
hand will return `"bar"`.

```js
var parser = luaparse.parse('foo = "bar"', { wait: true });
parser.lex(); // { type: 8, value: "foo", line: 1, lineStart: 0, range: [0, 3] }
parser.lex(); // { type: 32, value: "=", line: 1, lineStart: 0, range: [4, 5]}
parser.lex(); // { type: 2, value: "bar", line: 1, lineStart: 0, range: [6, 11] }
parser.lex(); // { type: 1, value: "<eof>", line: 1, lineStart: 0, range: [11 11] }
parser.lex(); // { type: 1, value: "<eof>", line: 1, lineStart: 0, range: [11 11] }
```

## Examples

Have a look in the [examples directory](https://github.com/oxyc/luaparse/tree/master/examples)
of the repository for some code examples or check them out [live](https://oxyc.github.io/luaparse/examples.html).

## luaparse(1)

The `luaparse` executable can be used in your shell by installing `luaparse` globally using npm:

```bash
$ npm install -g luaparse
$ luaparse --help

Usage: luaparse [option]... [file|code]...

Options:
  -c|--code [code]   parse code snippet
  -f|--file [file]   parse from file
  -b|--beautify      output an indenteted AST
  --[no]-comments    store comments. defaults to true
  --[no]-scope       store variable scope. defaults to false
  --[no]-locations   store location data on syntax nodes. defaults to false
  --[no]-ranges      store start and end character locations. defaults to false
  -q|--quiet         suppress output
  -h|--help
  -v|--version
  --verbose

Examples:
  luaparse --no-comments -c "locale foo = \"bar\""
  luaparse foo.lua bar.lua
```

Example usage

```bash
$ luaparse "i = 0"

{"type":"Chunk","body":[{"type":"AssignmentStatement","variables":[{"type":"Identifier","name":"i"}],"init":[{"type":"NumericLiteral","value":0,"raw":"0"}]}],"comments":[]}
```

## Support

Has been tested in at least IE6+, Firefox 3+, Safari 4+, Chrome 10+, Opera 10+,
Node 0.4.0+, RingoJS 0.8-0.9, Narwhal 0.3.2, Rhino 1.7R4-1.7R5, Nashorn 1.8.0.

## Quality Assurance

_TL;DR simply run `make qa`. This will run all quality assurance scripts but
assumes you have it set up correctly._

Begin by cloning the repository and installing the development dependencies
with `npm install`. To test AMD loading for browsers you should run `bower
install` which will download RequireJS.

The luaparse test suite uses [testem](https://github.com/airportyh/testem) as a
test runner, and because of this it's very easy to run the tests using
different javascript engines or even on locally installed browsers. Currently
the default runner uses [PhantomJS](http://phantomjs.org/) and node so when
using `make test` or `npm test` you should have PhantomJS installed.

### Test runners

- `make test` uses PhantomJS and node.
- `make testem-engines` uses PhantomJS, node, narwhal, ringo, rhino and rhino
1.7R5. This requires that you have the engines installed.
- `make test-node` uses a custom command line reporter to make the output
easier on the eyes while practicing TDD.
- By installing `testem` globally you can also run the tests in a locally
installed browser.

### Other quality assurance measures

- You can check the function complexity using [complexity-report](https://github.com/philbooth/complexityReport.js)
using `make complexity-analysis`
- Running `make coverage` will generate the [coverage report](https://oxyc.github.io/luaparse/coverage.html).
To simply check that all code has coverage you can run `make coverage-analysis`.
- `make lint`, `make benchmark`, `make profile`.

### Documentation

By running `make docs` all [documentation](https://oxyc.github.io/luaparse/)
will be generated.

## Projects using/extending luaparse

- [@types/luaparse](https://www.npmjs.com/package/@types/luaparse), type definitions for luaparse.
- [luamin](http://mths.be/luamin), a Lua minifier written by Mathias Bynens.
- [Ace](https://github.com/ajaxorg/ace), an online code editor.

## Acknowledgements

* Initial tests are scaffolded from [yueliang][yueliang] and then manually checked for error.
* Much of the code is based on [LuaMinify][luaminify], the [Lua][lua] source and [Esprima][esprima]. All awesome projects.

## License

MIT

[luaminify]: https://github.com/stravant/LuaMinify
[yueliang]: http://yueliang.luaforge.net/
[lua]: https://www.lua.org
[esprima]: http://esprima.org
[wtf8]: https://simonsapin.github.io/wtf-8/
[x-user-defined]: https://encoding.spec.whatwg.org/#x-user-defined
