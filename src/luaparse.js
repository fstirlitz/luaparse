// AMD & CommonJS compliance.
(function (name, definition) {

  'use strict';

  var exported = definition();

  // AMD
  if (typeof define === 'function' && define.amd) {
    define(name, exported);
  // CommonJS
  } else if (typeof exports !== 'undefined') {
    exports[name] = exported;
  // Attach to global, ie. window for browsers.
  } else {
    this[name] = exported;
  }
}('luaparse', function () {

  'use strict';

  var SYNTAX
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

  // http://code.google.com/p/v8/source/browse/branches/bleeding_edge/src/messages.js?r=12010#138
  // @TODO read up on LUA errors
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

  // White Space
  function isWhiteSpace(char) {
    // @TODO add "Any other Unicode space separator"
    return (char === ' ' || char === '\t' || /^[\u000B\u000C\u0020\u00A0\uFEFF]$/.test(char));
  }

  // Line Terminator
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

  // Helpers {{{1

  function sprintf(format) {
    var args = slice.call(arguments, 1);
    format.replace(/%(\d)/g, function (match, index) {
      return args[index] || '';
    });
    return format;
  }

  function extend() {
    var args = slice.call(arguments)
      , dest = {}
      , src, prop;

    for (var i = 0, l = args.length; i < l; i++) {
      src = args[i];
      for (prop in src) if src.hasOwnProperty(prop) {
        dest[prop] = src[prop];
      }
    }
    return dest;
  }

  // }}}
  function Lexer() {
  }

  function parse(code, options) {
    return new Parser(code, options);
  };

  /**
   * Initialize the parser
   *
   * Options:
   *
   *   - `incremental` Incremental parsing. Defaults to false
   *   - `comments` Keep comments. Default to false
   *   - `loc` Attach node location information. Defaults to false
   *
   * @param {String} code
   * @param {Object} options
   * @api public
   */
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

  /**
   * Write to the source code buffer.
   *
   * @param {String} code
   * @return {Parser}
   */
  Parser.prototype.write = function(code) {
    this.source += String(code);
    return this;
  };

  /**
   * Send an EOF and begin parsing.
   *
   * @param {String} code
   * @return {Parser}
   */
  Parser.prototype.end = function(code) {
    if (typeof code !== 'undefined') this.write(code);
    return this;
  };

  Parser.prototype.parseStatement = function() {
  };

  Parser.prototype.parseProgram = function() {
  };

  Parser.prototype.getTree = function() {
    return this.tree;
  };

  exports = parser;
  return exports;
}));

/* vim: set sw=2 ts=2 et tw=80 : */
