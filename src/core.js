// AMD & CommonJS compliance.
(function (name, definition) {

  'use strict';

  var exported = definition();

  // AMD
  if (typeof define === 'function' && define.amd) {
    define(exported);
  // CommonJS
  } else if (typeof exports !== 'undefined') {
    exports[name] = exported;
  // Attach to global, ie. window for browsers.
  } else {
    this[name] = exported;
  }
}('luaparse', function () {
  'use strict';

  var REGEXP
    , ERROR;

  // White Space
  function isWhiteSpace(char) {
    //return (char === ' ' || /^[\t\u000B\u000C\u0020\u00A0\uFEFF]$/.test(char));
    throw new Error('Not fully implemented yet');
    // @TODO add "Any other Unicode space separator" <USP>
  }

  // Line Terminator
  function isLineTerminator(char) {
    return (char === '\n' || /^[\r\u2028\u2029]$/.test(char));
  }

  // Comments
  // @TODO hmm...
  function isComment() {
    throw new Error('Not fully implemented yet');
  }

  // Tokens
  // Identifier Names and Identifiers
  // Reserved Keywords

  // Punctuators
  function isPunctuator(id) {
    return REGEXP.punctuator.test(id);
  }

  // Literals
  // Null Literals
  // Boolean Literals
  // Numeric Literals
  function isDecDigit(char) {
    return ~'0123456789'.indexOf(char);
  }
  function isHexDigit(char) {
    return REGEXP.hexDigit.test(char);
  }
  // ExponentIndicator :: one of
  // String Literals
  // Regular Expression Literals

  function sprintf(format) {
    var args = slice.call(arguments, 1);
    format.replace(/%(\d)/g, function (match, index) {
      return args[index] || '';
    });
    return format;
  }

  exports.parse = function (code, options) {
    // @TODO figure out options, but we probably want them.

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

  REGEXP = {
      punctuator: /^(\{|\}|\(|\)|\[|\]|\.|\;|\,|<|>|<=|>=|==|!=|==|!=|\+|\-|\*|%|\+\+|\-\-|<<|>>|>>>|\&|\||^|!|~|\&\&|\|\||\?|:|=|\+=|\-=|\*=|%=|<<=|>>=|>>>=|\&=|\|=|\^=)$/
    , hexDigit: /^[0-9a-fA-F]$/
  };

  return exports;
}));

/* vim: set sw=2 ts=2 et tw=80 : */
