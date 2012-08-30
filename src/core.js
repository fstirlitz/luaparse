var exports
  , REGEXP
  , ERROR
  , slice = Array.prototype.slice;

// White Space
function isWhiteSpace(char) {
  // @TODO add "Any other Unicode space separator"
  return (char === ' ' || char === '\t' || /^[\u000B\u000C\u0020\u00A0\uFEFF]$/.test(char));
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

// Keywords
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
  if (keyword) {
    return true;
  }
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
    punctuator: /^(\+|\-|\*|\/|%|\^|#|==|~=|<=|>=|<|>|=|\(|\)|\{|\}|\[|\]|::|;|:|,|\.|\.\.|\.\.\.)$/
  , hexDigit: /^[0-9a-fA-F]$/
};
/* vim: set sw=2 ts=2 et tw=80 : */
