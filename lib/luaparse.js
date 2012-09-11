/* global exports:true */

// Be compliant with AMD and CommonJS.
(function (name, definition) {

  'use strict';

  var exported = definition();

  if (typeof define === 'function' && define.amd) {
    define(name, exported);
  } else if (typeof exports !== 'undefined') {
    exports[name] = exported;
  } else {
    window[name] = exported;
  }
}('luaparse', function () {

  'use strict';

  var exports = {}
    , SYNTAX
    , TOKEN
    , REGEXP
    , ERROR
    , slice = Array.prototype.slice;

  SYNTAX = {
      AssignmentExpression: 'AssignmentExpression'
    , BlockStatement: 'BlockStatement'
    , BreakStatement: 'BreakStatement'
    , ChunkStatement: 'ChunkStatement'
    , ForStatement: 'ForStatement'
    , FunctionDefinition: 'FunctionDefinition'
    , GotoStatement: 'GotoStatement'
    , Identifier: 'Identifier'
    , IfStatement: 'IfStatement'
    , LogicalExpression: 'LogicalExpression'
    , Program: 'Program'
    , ReturnStatement: 'ReturnStatement'
    , WhileStatement: 'WhileStatement'
  };

  TOKEN = {
      EOF: 0
    , Literal: 1
  };

  REGEXP = {
      punctuator: /^(\+|\-|\*|\/|%|\^|#|==|~=|<=|>=|<|>|=|\(|\)|\{|\}|\[|\]|::|;|:|,|\.|\.\.|\.\.\.)$/
    , hexDigit: /^[0-9a-fA-F]$/
  };

  // V8 uses the follow error messages: http://goo.gl/KhTAv
  // @TODO we should read read up on LUA errors
  ERROR = {
      unexpectedToken: ''
    , unexpectedTokenNumber: ''
    , unexpectedTokenString: ''
    , unexpectedTokenIdentifier: ''
    , unexpectedReserved: ''
    , unexpectedStrictReserved: ''
    , unexpectedEOS: ''
    , malformedRegexp: ''
    , unterminatedRegexp: ''
    , regexpFlags: ''
  };

  // Identification functions
  // ------------------------

  // @TODO add "Any other Unicode space separator"
  function isWhiteSpace(char) {
    return (char === ' ' || char === '\t' || /^[\u000B\u000C\u0020\u00A0\uFEFF]$/.test(char));
  }

  // @TODO does lua conform with the unicode standard?
  // @see http://en.wikipedia.org/wiki/Newline#Unicode
  function isLineTerminator(char) {
    return (char === '\n' || /^[\r\u2028\u2029]$/.test(char));
  }

  // Comments
  // Tokens
  // Identifier Names and Identifiers

  // Keywords
  // @see http://www.lua.org/manual/5.2/manual.html#3.1
  function isKeyword(id) {
    var keyword = false;

    switch (id.length) {
      case 2:
        keyword = (id === 'do' || id === 'if' || id === 'in' || id === 'or');
        break;
      case 3:
        keyword = (id === 'and' || id === 'end' || id === 'for' || id === 'nil' || id === 'not');
        break;
      case 4:
        keyword = (id === 'else' || id === 'goto' || id === 'then' || id === 'true');
        break;
      case 5:
        keyword = (id === 'break' || id === 'false' || id === 'local' || id === 'until' || id === 'while');
        break;
      case 6:
        keyword = (id === 'elseif' || id === 'repeat' || id === 'return');
        break;
      case 8:
        keyword = (id === 'function');
        break;
    }
    return keyword;
    // We make room here for reserved words, engine differences etc.
  }

  // Punctuators
  function isPunctuator(id) {
    return REGEXP.punctuator.test(id);
  }

  // Literals
  // Null Literals
  // Boolean Literals
  // Numeric Literals
  function isDecDigit(char) {
    return '0123456789'.indexOf(char) >= 0;
  }

  function isHexDigit(char) {
    return REGEXP.hexDigit.test(char);
  }
  // ExponentIndicator :: one of
  // String Literals
  // Regular Expression Literals

  // Helpers
  // -------

  // JS really should get a sprintf function. This one used %INDEX to input
  // arguments in the supplied fromat string.
  //
  // Example:
  //
  //   - `sprintf('Unexpected %2 in %1.', 'token', 'function');`
  //
  function sprintf(format) {
    var args = slice.call(arguments, 1);
    format.replace(/%(\d)/g, function (match, index) {
      match = ''; // @TODO jshint bugs about unused variable
      return args[index] || '';
    });
    return format;
  }

  // Returns a new object with the properties from all objectes passed as
  // arguments. Last argument takes precedence.
  //
  // Example:
  //
  //   - `this.options = extend(options, { output: false });`
  //
  function extend() {
    var args = slice.call(arguments)
      , dest = {}
      , src, prop;

    for (var i = 0, l = args.length; i < l; i++) {
      src = args[i];
      for (prop in src) if (src.hasOwnProperty(prop)) {
        dest[prop] = src[prop];
      }
    }
    return dest;
  }

  // Testing...
  // @TODO remove once used, for jshint
  isLineTerminator('aa');
  isWhiteSpace('aa');
  isKeyword('aa');
  isPunctuator('aa');
  isDecDigit('aa');
  isHexDigit('aa');
  sprintf('aa');

  function Lexer() {
  }

  // Parser
  // ------

  // Export the main parser.
  //
  // Example:
  //
  //     var parser = require('luaparser');
  //     parser = parser.parse('var i = 0;');
  //
  //     var parser = require('luaparser');
  //     parser = parser.parse('var i = 0', { incremental: true });
  //     parser.write(';');
  //     parser.end('console.log(i);');
  //
  exports.parse = function (code, options) {
    return new Parser(code, options);
  };

  //
  // Initialize the parser. This constructor should be created through the
  // exported wrapper function.
  //
  // Options:
  //
  //   - `incremental` Incremental parsing. Defaults to false
  //   - `comments` Keep comments. Default to false
  //   - `loc` Attach node location information. Defaults to false
  //
  function Parser(code, options) {
    if (typeof options === 'undefined' && typeof code === 'object') {
      options = code;
      code = undefined;
    }
    if (!options) options = {};

    this.source = code || "";
    this.options = extend({
        comments: false
      , incremental: false
      , loc: false
    }, options);

    this.lexer = new Lexer();

    if (!this.options.incremental) this.end();
  }

  // Write to the source code buffer without beginning the parse.
  Parser.prototype.write = function (code) {
    this.source += String(code);
    return this;
  };

  // Send and EOF and begin parsing.
  Parser.prototype.end = function (code) {
    if (typeof code !== 'undefined') this.write(code);
    return this;
  };

  Parser.prototype.parseStatement = function () {
  };

  Parser.prototype.parseProgram = function () {
  };

  Parser.prototype.getTree = function () {
    return this.tree;
  };

  return exports;
}));

/* vim: set sw=2 ts=2 et tw=80 : */
