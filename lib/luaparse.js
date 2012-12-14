/*global exports:true require:true define:true console:true */

(function (root, name, factory) {
  'use strict';

  if (typeof exports === 'object') {
    factory(exports);
  } else if (typeof define === 'function' && define.amd) {
    define(name, function() {
      var exports = {};
      factory(exports);
      return exports;
    });
  } else {
    factory((root[name] = {}));
  }
}(this, 'luaparse', function (exports) {
  'use strict';

  exports.version = '0.0.1';

  var input, options, length;

  var defaultOptions = exports.defaultOptions = {
    // Explicitly tell the parser when the input ends.
      wait: false
    // Store comments as an array in the chunk object.
    , comments: true
    // Keep track of node locations.
    , location: true
  };

  var Tokens = exports.Tokens = {
      EOF: 0
    , StringLiteral: 1
    , Keyword: 2
    , Identifier: 3
    , NumericLiteral: 4
    , Punctuator: 5
    , BooleanLiteral: 6
    , NilLiteral: 7
    , DotsLiteral: 8
  };

  // As this parser is a bit different from luas own, the error messages
  // will be different in some situations.

  var errors = exports.errors = {
      unexpectedSymbol: 'Unexpected symbol \'%1\' near \'%2\''
    , unexpected: 'Unexpected symbol \'%1\' near \'%2\''
    , expected: '\'%1\' expected near \'%2\''
    , expectedToken: '%1 expected near \'%2\''
    , unfinishedString: 'unfinished string near \'%1\''
    , malformedNumber: 'malformed number near \'%1\''
  };

  // Regular expression matches exposed for modification.
  // _These will most likely be optimized into procedural functions later._

  var regexp = exports.regexp = {
      punctuator: /^(\+|\-|\*|\/|%|\^|#|==|~=|<=|>=|<|>|=|\(|\)|\{|\}|\[|\]|::|;|:|,|\.|\.\.|\.\.\.)$/
    , decDigit: /^[0-9]$/
    , hexDigit: /^[0-9a-fA-F]$/
    , whiteSpace: /^[ \t\u000B\u000C\u0020\u00A0\uFEFF]$/
    , lineTerminator: /^[\n\r\u2028\u2029]$/
    , identifierStart: /^[a-zA-Z_]$/
    , identifierPart: /^[a-zA-Z0-9_]$/
  };

  // ### Abstract Syntax Tree
  //
  // The default AST structure resembles the Mozilla Parser API but can easily
  // be changed by overriding these functions.
  // _Due to the insignificant call count these functions won't get inlined by
  // V8._

  var ast = exports.ast = {
      labelStatement: function(label) {
      return {
          type: 'LabelStatement'
        , label: label
      };
    }

    , breakStatement: function() {
      return {
          type: 'BreakStatement'
      };
    }

    , gotoStatement: function(label) {
      return {
          type: 'GotoStatement'
        , label: label
      };
    }

    , returnStatement: function(args) {
      return {
          type: 'ReturnStatement'
        , 'arguments': args // @TODO list?
      };
    }

    , ifStatement: function(clauses) {
      return {
          type: 'IfStatement'
        , clauses: clauses
      };
    }

    , whileStatement: function(condition, body) {
      return {
          type: 'WhileStatement'
        , condition: condition
        , body: body
      };
    }

    , doStatement: function(body) {
      return {
          type: 'DoStatement'
        , body: body
      };
    }

    , repeatStatement: function(condition, body) {
      return {
          type: 'RepeatStatement'
        , condition: condition
        , body: body
      };
    }

    , localStatement: function(variables, init) {
      return {
          type: 'LocalStatement'
        , variables: variables
        , init: init
      };
    }

    , assignmentStatement: function(variables, init) {
      return {
          type: 'AssignmentStatement'
        , variables: variables
        , init: init
      };
    }

    , callStatement: function(expression) {
      return {
          type: 'CallStatement'
        , expression: expression
      };
    }

    // @TODO this structure seems a bit too complicated to be honest. Maybe we
    // should separate local as a wrapper like CallStatement?
    //
    // > Vararg expressions, denoted by three dots ('...'), can only be used
    // when directly inside a vararg function (3.4 - Expressions)

    , functionStatement: function(identifier, parameters, isVararg, isLocal, body) {
      return {
          type: 'FunctionDeclaration'
        , identifier: identifier
        , vararg: isVararg
        , local: isLocal
        , parameters: parameters
        , body: body
      };
    }

    , forNumericStatement: function(variable, start, end, step, body) {
      return {
          type: 'ForNumericStatement'
        , variable: variable
        , start: start
        , end: end
        , step: step
        , body: body
      };
    }

    , forGenericStatement: function(variables, iterators, body) {
      return {
          type: 'ForGenericStatement'
        , variables: variables
        , iterators: iterators // @TODO is iterators a proper name?
        , body: body
      };
    }

    , chunk: function(body) {
      return {
          type: 'Chunk'
        , body: body
      };
    }

    , clause: function(condition, body) {
      return {
          condition: condition
        , body: body
      };
    }

    , identifier: function(name) {
      return {
          type: 'Identifier'
        , name: name
      };
    }

    , literal: function(value) {
      return {
          type: 'Literal'
        , value: value
      };
    }
    , varargLiteral: function() {
      return {
          type: 'VarargLiteral'
      };
    }
    , tableConstructorExpression: function(fields) {
      return {
          type: 'TableConstructorExpression'
        , fields: fields
      };
    }
    , tableKey: function(key, value) {
      return {
          type: 'TableKey'
        , key: key
        , value: value
      };
    }
    , tableKeyString: function(key, value) {
      return {
          type: 'TableKeyString'
        , key: key
        , value: value
      };
    }
    , tableValue: function(value) {
      return {
          type: 'TableValue'
        , value: value
      };
    }

    , binaryExpression: function(operator, left, right) {
      var type = (operator === 'and' || operator === 'or') ?
        'LogicalExpression' :
        'BinaryExpression';

      return {
          type: type
        , operator: operator
        , left: left
        , right: right
      };
    }
    , unaryExpression: function(operator, argument) {
      return {
          type: 'UnaryExpression'
        , operator: operator
        , argument: argument
      };
    }
    , memberExpression: function(base, indexer, identifier) {
      return {
          type: 'MemberExpression'
        , indexer: indexer
        , identifier: identifier
        , base: base
      };
    }

    , indexExpression: function(base, index) {
      return {
          type: 'IndexExpression'
        , base: base
        , index: index
      };
    }

    , callExpression: function(base, args) {
      return {
          type: 'CallExpression'
        , base: base
        , 'arguments': args
      };
    }

    , tableCallExpression: function(base, argument) {
      return {
          type: 'TableCallExpression'
        , base: base
        , argument: argument
      };
    }

    , stringCallExpression: function(base, argument) {
      return {
          type: 'StringCallExpression'
        , base: base
        , argument: argument
      };
    }
  };

  // Helpers
  // -------

  var slice = Array.prototype.slice
    , toString = Object.prototype.toString;

  // A sprintf implementation using %index (beginning at 1) to input
  // arguments in the format string.
  //
  // Example:
  //
  //     // Unexpected function in token
  //     sprintf('Unexpected %2 in %1.', 'token', 'function');

  function sprintf(format) {
    var args = slice.call(arguments, 1);
    format = format.replace(/%(\d)/g, function (match, index) {
      match = ''; // jshint
      return '' + args[index - 1] || '';
    });
    return format;
  }

  // Returns a new object with the properties from all objectes passed as
  // arguments. Last argument takes precedence.
  //
  // Example:
  //
  //     this.options = extend(options, { output: false });

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

  // @TODO to be removed.
  function logger() {
    var util = require('util');
    var args = slice.call(arguments);
    args.forEach(function(el) {
      console.log(util.inspect(el, false, null, true));
    });
  }

  // ### Error functions

  // #### Raise an exception.
  //
  // Raise an exception by passing a token as well as the format message
  // and parameters as arguments.
  //
  // If the token doesn't contain location information we use the lexers
  // current position. This way we can reuse this function both in the lexer
  // where tokens doesnt exist, and in the parser, where they do.
  //
  // Example:
  //
  //     // [1:0] expected [ near (
  //     raise(token, "expected %1 near %2", '[', token.value);

  function raise(token) {
    var message = sprintf.apply(null, slice.call(arguments, 1))
      , error, col;

    if (typeof token.line !== 'undefined') {
      col = token.range[0] - token.lineStart;
      error = new SyntaxError(sprintf('[%1:%2] %3', token.line, col, message));
      error.line = token.line;
      error.index = token.range[0];
      error.column = col;
    } else {
      col = index - lineStart + 1;
      error = new SyntaxError(sprintf('[%1:%2] %3', line, col, message));
      error.index = index;
      error.line = line;
      error.column = col;
    }
    throw error;
  }

  // #### Raise an unexpected token error.
  //
  // Example:
  //
  //     // expected <name> near '0'
  //     raiseUnexpectedToken('<name>', token);

  function raiseUnexpectedToken(type, token) {
    raise(token, errors.expectedToken, type, token.value);
  }

  // #### Raise a general unexpected error
  //
  // Usage should pass either a token object or a symbol string which was
  // expected. We can also pass a near token to manually specify eg. <eof>.
  // Otherwise the currently active token will be used.
  //
  // Example:
  //
  //     // Unexpected symbol 'end' near '<eof>'
  //     unexpected(token);
  //
  // If there's no token in the buffer it means we reached <eof>.

  function unexpected(tokenFound, near) {
    if (typeof token === 'undefined') token = { value: '<eof>' };
    if (typeof near === 'undefined') near = token.value;
    if (typeof tokenFound.type !== 'undefined') {
      switch (tokenFound.type) {
        case Tokens.EOF:
        case Tokens.StringLiteral:
        case Tokens.Keyword:
        case Tokens.Identifier:
        case Tokens.NumericLiteral:
        case Tokens.Punctuator:
        case Tokens.BooleanLiteral:
        case Tokens.NilLiteral:
        case Tokens.DotsLiteral:
          raise(tokenFound, errors.unexpected, tokenFound.value, near);
          break;
      }
    } else {
      raise(tokenFound, errors.unexpectedSymbol, tokenFound, near);
    }
  }

  // Lexer
  // -----
  //
  // The lexer, or the tokenizer reads the input string character by character
  // and derives a token based on how the set of character begins.
  //
  // If `options.comments` is enabled, all comments encountered will be stored
  // in an array which later will be appended to the chunk object. If disabled,
  // they will simply be disregarded.
  //
  // When the lexer has derived a valid token, it will be returned as an object
  // containing its value and as well as its position in the input (this is
  // always enabled to provide proper debug messages).
  //
  // The location information returned will contain the line number where the
  // token was first encountered (multiline strings), the index position where
  // that line began, as well as a range array containing the start and end
  // index of the token.
  //
  // `readToken()` starts lexing and returns the following token in the stream.

  var index
    , token
    , lookahead
    , comments
    , tokenStart
    , line
    , lineStart;

  function readToken() {
    skipWhiteSpace();
    if (input[index] === '-' && input[index + 1] === '-') {
      scanComment();
      skipWhiteSpace();
    }
    if (index >= length) return {
        type : Tokens.EOF
      , value: '<eof>'
      , line: line
      , lineStart: lineStart
      , range: [index, index]
    };

    var char = input[index]
      , next = input[index + 1]; // @TODO what if EOF?

    // Memorize the range index where the token begins.
    tokenStart = index;
    if (isIdentifierStart(char)) return scanIdentifierOrKeyword();

    switch (char) {
      case '\'': case '"':
        return scanStringLiteral();

      case '[':
        // Check for a multiline string.
        if (next === '[' || next === '=') return scanStringLiteral(true);
        return scanPunctuator(char);

      case '0': case '1': case '1': case '2': case '3': case '4': case '5':
      case '6': case '7': case '8': case '9':
        return scanNumericLiteral();

      case '.':
        // If the dot is followed by a digit it's a float.
        if (isDecDigit(next)) return scanNumericLiteral();
        if (next === '.') {
          if (input[index + 2] === '.') return scanPunctuator('...');
          return scanPunctuator('..');
        }
        return scanPunctuator(char);

      case '>':
        if (next === '=') return scanPunctuator('>=');
        return scanPunctuator(char);

      case '=':
        if (next === '=') return scanPunctuator('==');
        return scanPunctuator(char);

      case '<':
        if (next === '=') return scanPunctuator('<=');
        return scanPunctuator(char);

      case '~':
        if (next === '=') return scanPunctuator('~=');
        return raise({}, errors.expected, '=', '~');

      case ':':
        if (next === ':') return scanPunctuator('::');
        return scanPunctuator(char);

      case '*': case '/': case '^': case '%': case ',': case '{': case '}':
      case '[': case ']': case '(': case ')': case ';': case '#': case '-':
      case '+':
        return scanPunctuator(char);
    }

    return unexpected(char);
  }

  // Whitespace has no semantic meaning in lua so simply skip ahead, while
  // tracking the newlines we encounter. This will have to be tracked in all
  // token functions where multiline values is allowed.

  function skipWhiteSpace() {
    while (index < length) {
      if (isLineTerminator(input[index])) {
        index++;
        line++;
        lineStart = index;
      } else if (regexp.whiteSpace.test(input[index])) {
        index++;
      } else {
        break;
      }
    }
  }

  // Identifiers, keywords, booleans and nil all look the same syntax wise. We
  // simply go through them one by one defaulting to an identifier.

  function scanIdentifierOrKeyword() {
    var word = input[index++]
      , type;

    while (isIdentifierPart(input[index])) {
      word += input[index++];
    }

    type = isKeyword(word) ? Tokens.Keyword
      : word === 'true' || word === 'false' ? Tokens.BooleanLiteral
      : word === 'nil' ? Tokens.NilLiteral
      : Tokens.Identifier;

    return {
        type: type
      , value: word
      , line: line
      , lineStart: lineStart
      , range: [tokenStart, index]
    };
  }

  // Once a punctuator reaches this function it should already have been
  // validated so we simply return it as is.

  function scanPunctuator(value) {
    index += value.length;
    return {
        type: Tokens.Punctuator
      , value: value
      , line: line
      , lineStart: lineStart
      , range: [tokenStart, index]
    };
  }

  // Find the string literal by matching the delimiter marks used.
  // If we're looking for a multiline string it has to be mentioned
  // in the functioncall with a boolean parameter.
  //
  // Characters such as \t \n can be escaped with a backslash. If encountered
  // the following character in the stream will be read without validation.

  function scanStringLiteral(isLong) {
    var delimiter = input[index++]
      , string = ''
      , char;

    if (isLong) string = readLongString();
    else {
      while (index < length) {
        char = input[index++];
        if (char === delimiter) break;
        // Escape backslash symbols such as \n \t etc.
        if (char === '\\')
          string += char + input[index++];
        // EOF or `\n` terminates a string literal. If we haven't found the
        // ending delimiter by now, raise an exception.
        else if (index >= length || isLineTerminator(char))
          raise({}, errors.unfinishedString, string + char);
        else
          string += char;
      }
    }

    return {
        type: Tokens.StringLiteral
      , value: string
      , line: line
      , lineStart: lineStart
      , range: [tokenStart, index]
    };
  }

  // Numeric literals will be returned as floating-point numbers instead of
  // strings. The raw value will still be attached to the token in a separate
  // property.
  //
  // If a hexadecimal number is encountered, it will simply be converted.

  function scanNumericLiteral() {
    var char = input[index]
      , next = input[index + 1];

    if (char === '0' && ~'xX'.indexOf(next)) return scanHexLiteral();
    else return scanDecLiteral();
  }

  // Lua hexadecimals have an optional fraction part and an optional binary
  // exoponent part. These are not included in JavaScript so we will compute all
  // three parts separately and then sum them up at the end of the function.
  //
  //     Digit := toDec(digit)
  //     Fraction := toDec(fraction) / 16 ^ fractionCount
  //     BinaryExp := 2 ^ binaryExp
  //     Number := ( Digit + Fraction ) * BinaryExp

  function scanHexLiteral() {
    var fraction = 0 // defaults to 0 as it gets summed
      , binaryExponent = 1 // defaults to 1 as it gets multiplied
      , binarySign = 1 // positive
      , digit = '' // The main digit is required or this is not a valid hex.
      , raw = '0x';

    index += 2; // Skip 0x part

    // A minimum of one hex digit is required.
    if (!isHexDigit(input[index])) raise({}, errors.malformedNumber, raw);
    while (isHexDigit(input[index])) digit += input[index++];

    // Convert the hexadecimal digit to base 10.
    raw += digit;
    digit = parseInt(digit, 16);

    // Fraction part i optional.
    if (input[index] === '.') {
      fraction = '';
      raw += input[index++];

      while (isHexDigit(input[index])) fraction += input[index++];
      raw += fraction;

      // Empty fraction parts should default to 0.
      if (fraction === '') fraction = 0;
      // Convert the fraction part into 0.x so we can use summation.
      else fraction = parseInt(fraction, 16) / Math.pow(16, fraction.length);
    }

    // Binary exponents are optional
    if (~'pP'.indexOf(input[index])) {
      binaryExponent = '';
      raw += input[index++];

      // Sign part is optional and defaults to 1 (positive).
      if (~'+-'.indexOf(input[index])) {
        raw += input[index];
        binarySign = input[index++] === '+' ? 1 : -1;
      }
      // The binary exponent sign requires a decimal digit.
      if (!isDecDigit(input[index])) raise({}, errors.malformedNumber, raw);
      while (isDecDigit(input[index])) binaryExponent += input[index++];

      // Calculate the binary exponent of the number.
      raw += binaryExponent;
      binaryExponent = Math.pow(2, binaryExponent * binarySign);
    }

    return {
        type: Tokens.NumericLiteral
      , value: (digit + fraction) * binaryExponent
      , raw: raw
      , line: line
      , lineStart: lineStart
      , range: [tokenStart, index]
    };
  }

  // Decimal numbers are exactly the same in Lua and in JavaScript, but to
  // provide proper error messages and just for the heck of it, we parse them
  // manually instead of using native functions.

  function scanDecLiteral() {
    // We don't read in the first char as the number might be a floating point.
    var number = '';

    while (isDecDigit(input[index])) number += input[index++];
    // Fraction part is optional
    if (input[index] === '.') {
      number += input[index++];
      // Fraction part defaults to 0 in Lua.
      while (isDecDigit(input[index])) number += input[index++];
    }
    // Exponent part is optional.
    if (~'eE'.indexOf(input[index])) {
      number += input[index++]; // append e
      // Sign part is optional.
      if (~'+-'.indexOf(input[index])) number += input[index++];
      // An exponent is required to contain at least one decimal digit.
      if (!isDecDigit(input[index])) raise({}, errors.malformedNumber, number);
      while (isDecDigit(input[index])) number += input[index++];
    }

    return {
        type: Tokens.NumericLiteral
      , value: parseFloat(number)
      , raw: number
      , line: line
      , lineStart: lineStart
      , range: [tokenStart, index]
    };
  }

  // Comments begin with -- after which it will be decided if they are multiline
  // comments or not.
  //
  // The multiline functionality works the exact same way as with string
  // literals so we reuse the functionality.

  function scanComment() {
    tokenStart = index;
    index += 2; // --
    var char = input[index]
      , content = '';

    if (char === '[') {
      index++;
      content = readLongString();
    } else {
      while (index < length) {
        if (isLineTerminator(char = input[index])) break;
        index++;
        content += char;
      }
    }

    if (options.comments) {
      comments.push({
          type: 'Comment'
        , value: content
        // , line: line
        // , lineStart: lineStart
        // , range: [tokenStart, index]
      });
    }
  }

  // Read a multiline string by calculating the depth of `=` characters and
  // then appending until an equal depth is found.

  function readLongString() {
    var level = 0
      , content = ''
      , char
      , commentTerminator = false;

    // Calculate the depth of the comment.
    while (input[index + level] === '=') level++;
    if (input[index + level] !== '[')
      return raise({}, errors.expected, '[', input[index + level]); // @TODO ?

    index += level + 1;
    char = input[index];

    // If the first character is a newline, ignore it and begin on next line.
    if (isLineTerminator(char)) {
      char = input[++index];
      line++;
      lineStart = index;
    }

    while (index < length) {
      char = input[index++];

      // We have to keep track of newlines as `skipWhiteSpace()` does not get to
      // scan this part.
      if (isLineTerminator(char)) {
        line++;
        lineStart = index;
      }

      // Once the delimiter is found, iterate through the depth count and see if
      // it matches.

      if (char === ']') {
        commentTerminator = true;
        for (var i = 0; i < level; i++) {
          if (input[index + i] !== '=') commentTerminator = false;
        }
        if (input[index + level] !== ']') commentTerminator = false;
      }

      // We reached the end of the multiline string. Get out now.
      if (commentTerminator) break;
      content += char;
    }
    index += level + 3;

    return content;
  }

  // ## Lex functions and helpers.

  // Read the next token.
  //
  // This is actually done by setting the current token to the lookahead and
  // reading in a new lookahead token.

  function next() {
    token = lookahead;
    peek();
  }

  // Peak ahead and store the next token in the `lookahead` variable.

  function peek() {
    lookahead = readToken();
  }

  // Consume a token if its value matches. Once consumed or not, return the
  // success of the operation.

  function consume(value) {
    if (token.value === value) {
      next();
      return true;
    }
    return false;
  }

  // Expect the next token value to match. If not, throw an exception.

  function expect(value) {
    if (token.value === value) next();
    else raise(token, errors.expected, value, token.value);
  }

  // ### Validation functions
  //
  // These will be rethought.

  // @TODO add "Any other Unicode space separator"
  function isWhiteSpace(char) {
    return regexp.whiteSpace.test(char) || isLineTerminator(char);
  }

  // @TODO does lua conform with the unicode standard?
  // @see http://en.wikipedia.org/wiki/Newline#Unicode
  function isLineTerminator(char) {
    return regexp.lineTerminator.test(char);
  }

  // Punctuators
  function isPunctuator(id) {
    return regexp.punctuator.test(id);
  }

  function isDecDigit(char) {
    return regexp.decDigit.test(char);
  }

  function isHexDigit(char) {
    return regexp.hexDigit.test(char);
  }

  // Lua identifiers cannot use locale-dependent letters.
  // http://www.lua.org/manual/5.2/manual.html#8.1
  function isIdentifierStart(char) {
    return regexp.identifierStart.test(char);
  }

  function isIdentifierPart(char) {
    return regexp.identifierPart.test(char);
  }

  // @see http://www.lua.org/manual/5.2/manual.html#3.1
  // Nil, true, false
  function isKeyword(id) {
    var keyword = false;

    switch (id.length) {
      case 2:
        keyword = (id === 'do' || id === 'if' || id === 'in' || id === 'or');
        break;
      case 3:
        keyword = (id === 'and' || id === 'end' || id === 'for' || id === 'not');
        break;
      case 4:
        keyword = (id === 'else' || id === 'goto' || id === 'then');
        break;
      case 5:
        keyword = (id === 'break' || id === 'local' || id === 'until' || id === 'while');
        break;
      case 6:
        keyword = (id === 'elseif' || id === 'repeat' || id === 'return');
        break;
      case 8:
        keyword = (id === 'function');
        break;
    }
    // We make room here for reserved words, modifications etc.
    return keyword;
  }

  // @TODO this needs to be rethought.
  function isCallExpression(expression) {
    if (expression) {
      switch (expression.type) {
        case 'CallExpression':
        case 'TableCallExpression':
        case 'StringCallExpression':
          return true;
      }
    }
    return false;
  }

  // Check if the token syntactically closes a block.

  function isBlockFollow(token) {
    if (token.type === Tokens.EOF) return true;
    if (token.type !== Tokens.Keyword) return false;
    switch (token.value) {
      case 'else': case 'elseif':
      case 'end': case 'until':
        return true;
      default:
        return false;
    }
  }

  // Parse functions
  // ---------------

  // Chunk is the main program object. Syntactically it's the same as a block.
  //
  //     chunk ::= block

  function parseChunk() {
    peek();
    next();
    var body = parseBlock();
    if (token.type !== Tokens.EOF) unexpected(token.value, '<eof>');
    return ast.chunk(body);
  }

  // A block contains a list of statements with an optional return statement
  // as its last statement.
  //
  //     block ::= {stat} [retstat]

  function parseBlock(terminator) {
    var block = []
      , statement;

    while (!isBlockFollow(token)) {
      // Return has to be the last statement in a block.
      if (token.value === 'return') {
        block.push(parseStatement());
        break;
      }
      statement = parseStatement();
      // Statements are only added if they are returned, this allows us to
      // ignore some statements, such as EmptyStatement.
      if (statement) block.push(statement);
    }
    // Doesn't really need an ast node
    return block;
  }

  // ## Statements

  //     label ::= '::' Name '::'

  function parseLabelStatement() {
    var label = parseIdentifier();
    expect('::');
    return ast.labelStatement(label);
  }

  //     break ::= 'break'

  function parseBreakStatement() {
    return ast.breakStatement();
  }

  //     goto ::= 'goto' Name

  function parseGotoStatement() {
    var label = parseIdentifier();
    return ast.gotoStatement(label);
  }

  //     do ::= 'do' block 'end'

  function parseDoStatement() {
    var body = parseBlock();
    expect('end');
    return ast.doStatement(body);
  }

  //     while ::= 'while' exp 'do' block 'end'

  function parseWhileStatement() {
    var condition = parseExpression();
    expect('do');
    var body = parseBlock();
    expect('end');
    return ast.whileStatement(condition, body);
  }

  //     repeat ::= 'repeat' block 'until' exp

  function parseRepeatStatement() {
    var body = parseBlock();
    expect('until');
    var condition = parseExpression();
    if (condition == null) raiseUnexpectedToken('<expression>', token);
    return ast.repeatStatement(condition, body);
  }

  //     retstat ::= 'return' [exp {',' exp}] [';']

  function parseReturnStatement() {
    var expressions = [];
    // @TODO what happens if return is somewhere in the middle of a block as
    // lua \n dont have semantic meaning? Lua C compiler ends return
    // statements if they are followed by else|elseif|end|eos.
    // @see block_follow
    if (token.value !== 'end') {
      var expression = parseExpression();
      if (expression) expressions.push(expression);
      while (consume(',')) {
        expression = parseExpression();
        // @TODO this should be abstracted for all lists
        if (expression == null) raiseUnexpectedToken('<expression>', token);
        expressions.push(expression);
      }
      consume(';'); // grammar tells us ; is optional here.
    }
    return ast.returnStatement(expressions);
  }

  //     if ::= 'if' exp 'then' block {elif} ['else' block] 'end'
  //     elif ::= 'elseif' exp 'then' block

  function parseIfStatement() {
    var clauses = []
      , condition
      , body;

    do {
      condition = parseExpression();
      expect('then');
      body = parseBlock();
      clauses.push(ast.clause(condition, body));
    } while (consume('elseif'));

    if (consume('else')) {
      body = parseBlock();
      clauses.push(ast.clause(null, body));
    }

    expect('end');
    return ast.ifStatement(clauses);
  }

  // There are two types of for statements, generic and numeric.
  //
  //     for ::= Name '=' exp ',' exp [',' exp] 'do' block 'end'
  //     for ::= namelist 'in' explist 'do' block 'end'
  //     namelist ::= Name {',' Name}
  //     explist ::= exp {',' exp}

  function parseForStatement() {
    var variable = parseIdentifier()
      , body;

    if (consume('=')) {
      // Start expression
      var start = parseExpression();
      expect(',');
      // End expression
      var end = parseExpression();
      // Optional step expression
      var step = consume(',') ? parseExpression() : null;

      expect('do');
      body = parseBlock();
      expect('end');

      return ast.forNumericStatement(variable, start, end, step, body);

    // If the first expression is not followed by a `=` punctuator, this is a
    // Generic For Statement.
    } else {
      // The namelist can contain one or more identifiers.
      var variables = [variable];
      while (consume(',')) variables.push(parseIdentifier());
      expect('in');
      var iterators = [];

      // One or more expressions in the explist.
      do {
        var expression = parseExpression();
        if (expression == null) raiseUnexpectedToken('<expression>', token); // @TODO
        iterators.push(expression);
      } while (consume(','));

      expect('do');
      body = parseBlock();
      expect('end');

      return ast.forGenericStatement(variables, iterators, body);
    }
  }

  // Local statements can either be variable assignments or function
  // definitions. If a function definition is found, it will be delegated to
  // `parseFunctionDeclaration()` with the isLocal boolean.
  //
  // This AST structure might change into a local assignment with a function
  // child.
  //
  //     local ::= 'local' 'function' Name funcdecl
  //        | 'local' Name {',' Name} ['=' exp {',' exp}

  function parseLocalStatement() {
    if (token.type === Tokens.Identifier) {
      var variables = [];
      var init = [];

      do {
        variables.push(parseIdentifier());
      } while (consume(','));

      if (consume('=')) {
        do {
          var expression = parseExpression();
          if (expression == null) raiseUnexpectedToken('<expression>', token);
          init.push(expression);
        } while (consume(','));
      }

      return ast.localStatement(variables, init);
    }
    if (consume('function')) {
      var name = parseIdentifier();
      return parseFunctionDeclaration(name, true);
    } else {
      raiseUnexpectedToken('<name>', token);
    }
  }


  // ### Non-statements

  // 3.4.10 Function Definitions
  //
  // Parse the functions parameters and body block. The name should already
  // have been parsed and passed to this declaration function. By separating
  // this we allow for anonymous functions in expression.
  //
  // For local functions there's a boolean parameter which needs to be set
  // when parsing the declaration.
  //
  //     funcdecl ::= '(' [parlist] ')' block 'end'
  //     parlist ::= Name {',' Name} | [',' '...'] | '...'

  function parseFunctionDeclaration(name, isLocal) {
    var isVararg = false;
    var parameters = [];
    expect('(');

    if (consume('...')) isVararg = true;
    else if (token.type === Tokens.Identifier) { // @TODO not only identifiers
      do {
        if (consume('...')) {
          isVararg = true;
          break;
        }
        parameters.push(parseIdentifier());
      } while (consume(','));
    }
    if (!consume(')')) raiseUnexpectedToken('<name> or \'...\'', token);

    var body = parseBlock();
    expect('end');

    return ast.functionStatement(name, parameters, isVararg, isLocal || false, body);
  }

  // Parse the function name as identifiers and member expressions.
  //
  //     Name {'.' Name} [':' Name]

  function parseFunctionName() {
    var base = parseIdentifier();

    while (consume('.')) {
      base = ast.memberExpression(base, '.', parseIdentifier());
    }

    if (consume(':')) {
      base = ast.memberExpression(base, ':', parseIdentifier());
    }

    return base;
  }

  // There are two types of statements, simple and compound.
  // Statements are executed solely for their side effects.
  //
  //     statement ::= break | goto | do | while | repeat | return
  //          | if | for | function | local | label | assignment
  //          | functioncall | ';'

  function parseStatement() {
    if (token.type === Tokens.Keyword) {
      switch (token.value) { // @TODO make next() inlinable
        case 'break':    next(); return parseBreakStatement();
        case 'goto':     next(); return parseGotoStatement();
        case 'do':       next(); return parseDoStatement();
        case 'while':    next(); return parseWhileStatement();
        case 'repeat':   next(); return parseRepeatStatement();
        case 'return':   next(); return parseReturnStatement();
        case 'if':       next(); return parseIfStatement();
        case 'for':      next(); return parseForStatement();
        case 'function':
          next();
          var name = parseFunctionName();
          return parseFunctionDeclaration(name);
        case 'local':    next(); return parseLocalStatement(); // @TODO
      }
    }

    if (token.type === Tokens.Punctuator) {
      if (consume('::')) return parseLabelStatement();
    }

    var expression = parsePrefixExpression();

    if (expression) {
      // AssignmentStatement
      if (~',='.indexOf(token.value)) {
        var variables = [expression];
        var init = [];
        // @TODO need to check grammar properly for this
        // we should only allow Name | Indexed | Member
        while (consume(',')) variables.push(parsePrefixExpression());
        expect('=');
        do {
          var exp = parseExpression();
          if (exp == null) raiseUnexpectedToken('<expression>', token);
          init.push(exp);
        } while (consume(','));
        return ast.assignmentStatement(variables, init);
      }

      // CallStatement
      if (isCallExpression(expression)) { // @TODO ast change can break this.
        return ast.callStatement(expression);
      }
    }

    // What's lua practice regarding semicolon? If it's used more often we
    // should place it at the top of the function as Lua core does it.
    //
    // When a `;` is encounted, simply eat it and return nothing.
    if (consume(';')) return;

    unexpected(token.value);
  }

  //     Identifier ::= Name
  function parseIdentifier() {
    var identifier = token.value;
    if (token.type !== Tokens.Identifier) raiseUnexpectedToken('<name>', token);
    next();
    return ast.identifier(identifier);
  }

  // Expression parser
  // -----------------
  //
  // Expressions are evaluated and always return a value. Sometimes with side
  // effects depending on the language.
  //
  //     exp ::= (unop exp | primary | prefixexp ) { binop exp }
  //
  //     primary ::= nil | false | true | Number | String | '...'
  //          | functiondef | tableconstructor
  //
  //     prefixexp ::= (Name | '(' exp ')' ) { '[' exp ']'
  //          | '.' Name | ':' Name args | args }
  //

  function parseExpression() {
    var expression = parseSubExpression(0);
    return expression;
  }

  // Return the precedence priority of the operator.
  //
  // As unary `-` can't be distinguished from binary `-`, unary precedence isn't
  // described in this table but in `parseSubExpression()` itself.

  function binaryPrecedence(operator) {
    switch (operator) {
      case '^': return 10;
      case '*': case '/': case '%': return 7;
      case '+': case '-': return 6;
      case '..': return 5;
      case '<': case '<=': case '>': case '>=': case '==': case '~=': return 3;
      case 'and': return 2;
      case 'or': return 1;
    }
    return 0;
  }

  // Implement an operator-precedence parser to handle binary operator
  // precedence.
  //
  // We use this algorithm because it's compact, it's fast and Lua core uses the
  // same so we can be sure our expressions are parsed in the same manner
  // without too many tests.
  //
  //     exp ::= (unop exp | primary | prefixexp ) { binop exp }

  function parseSubExpression(minPrecedence) {
    var operator = token.value;
    // The left-hand side in binary operations.
    var expression;

    // UnaryExpression
    if (operator === '#' || operator === '-' || operator === 'not') {
      next();
      var argument = parseSubExpression(8);
      expression = ast.unaryExpression(operator, argument);
    } else {
      // PrimaryExpression
      expression = parsePrimaryExpression();

      // PrefixExpression
      if (!expression) {
        expression = parsePrefixExpression();
      }
    }

    while (true) {
      operator = token.value;
      var precedence = binaryPrecedence(operator);
      if (precedence === 0 || precedence <= minPrecedence) break;
      // Right-hand precedence operators
      if (operator === '^' || operator === '..') precedence--;
      next();
      var right = parseSubExpression(precedence);
      expression = ast.binaryExpression(operator, expression, right);
    }
    return expression;
  }

  //     prefixexp ::= prefix {suffix}
  //     prefix ::= Name | '(' exp ')'
  //     suffix ::= '[' exp ']' | '.' Name | ':' Name args | args
  //
  //     args ::= '(' [explist] ')' | tableconstructor | String

  function parsePrefixExpression() {
    var base;

    // The prefix
    if (token.type === Tokens.Identifier) {
      base = parseIdentifier();
    } else if (consume('(')) {
      base = parseExpression();
      expect(')');
    } else {
      return null;
    }

    // The suffix
    var expression, identifier;
    while (true) {
      if (token.type === Tokens.Punctuator) {
        switch (token.value) {
          case '[':
            next();
            expression = parseExpression();
            base = ast.indexExpression(base, expression);
            expect(']');
            break;
          case '.':
            next();
            identifier = parseIdentifier();
            base = ast.memberExpression(base, '.', identifier);
            break;
          case ':':
            next();
            identifier = parseIdentifier();
            base = ast.memberExpression(base, ':', identifier);
            base = parseCallExpression(base);
            break;
          case '(': case '{': // args
            base = parseCallExpression(base);
            break;
          default:
            return base;
        }
      } else if (token.type === Tokens.StringLiteral) {
        base = parseCallExpression(base);
      } else {
        return base;
      }
    }

    return base;
  }

  //     args ::= '(' [explist] ')' | tableconstructor | String

  function parseCallExpression(base) {
    if (token.type === Tokens.Punctuator) {
      switch (token.value) {
        case '(':
          next();

          // List of expressions
          var expressions = [];
          var expression = parseExpression();
          if (expression) expressions.push(expression);
          while (consume(',')) expressions.push(parseExpression());

          expect(')');
          return ast.callExpression(base, expressions);

        case '{':
          next();
          var table = parseTableConstructor();
          return ast.tableCallExpression(base, table);
      }

    } else if (token.type === Tokens.StringLiteral) {
      var string = token.value;
      next();
      return ast.stringCallExpression(base, string);
    }

    return; // @TODO why not throw exception?
  }

  //     primary ::= String | Numeric | nil | true | false
  //          | functiondef | tableconstructor | '...'

  function parsePrimaryExpression() {
    var node;
    switch (token.type) {
      case Tokens.StringLiteral:
      case Tokens.NumericLiteral:
        node = ast.literal(token.value);
        break;
      case Tokens.NilLiteral:
        node = ast.literal(null);
        break;
      case Tokens.BooleanLiteral:
        node = ast.literal(token.value === 'true');
        break;
      case Tokens.Keyword:
        if (token.value === 'function') {
          next();
          return parseFunctionDeclaration(null); // @TODO isLocal?
        }
        break;
      case Tokens.Punctuator:
        if (consume('...')) return ast.varargLiteral(token.value); // @TODO needs check?
        if (consume('{')) return parseTableConstructor();
        break;
    }
    if (node) next();
    return node;
  }


  //     tableconstructor ::= '{' [fieldlist] '}'
  //     fieldlist ::= field {fieldsep field} fieldsep
  //     field ::= '[' exp ']' '=' exp | Name = 'exp' | exp
  //
  //     fieldsep ::= ',' | ';'

  function parseTableConstructor() {
    var fields = []
      , key, value;

    while (index <= length) {
      // @TODO optional fieldlist?
      if (token.type === Tokens.Punctuator && consume('[')) {
        key = parseExpression();
        expect(']');
        expect('=');
        value = parseExpression();
        fields.push(ast.tableKey(key, value));
      } else if (token.type === Tokens.Identifier) {
        // @TODO parsePrefixExpression
        key = ast.literal(token.value);
        next();
        if (consume('=')) {
          value = parseExpression();
          fields.push(ast.tableKeyString(key, value));
        } else {
          fields.push(ast.tableValue(key));
        }
      } else {
        value = parseExpression();
        if (value == null) break;
        fields.push(ast.tableValue(value));
      }
      if (~',;'.indexOf(token.value)) {
        next();
        continue;
      }
      if (token.value === '}') break;
    }
    expect('}');
    return ast.tableConstructorExpression(fields);
  }

  // Inject location information onto ast nodes by overriding and delegating
  // the functioncall.
  //
  // _This is currently not in use._

  function injectLocation(ast) {
    for (var node in ast) if (ast.hasOwnProperty(node)) {
      if (toString.call(ast[node]) !== '[object Function]') continue;
      ast[node] = (function(source) {
        return function() {
          var tree = source.apply(null, slice.call(arguments));
          return tree;
        };
      }(ast[node]));
    }
  }

  // Parser
  // ------

  // Export the main parser.
  //
  //   - `wait` Hold parsing until end() is called. Defaults to false
  //
  // Example:
  //
  //     var parser = require('luaparser');
  //     parser.parse('i = 0');

  exports.parse = parse;

  function parse(_input, _options) {
    if (typeof _options === 'undefined' && typeof _input === 'object') {
      _options = _input;
      _input = undefined;
    }
    if (!_options) _options = {};

    input = _input || '';
    options = extend(defaultOptions, _options);

    if (options.comments) comments = [];

    if (!options.wait) return end();
    return exports;
  }

  // Write to the source code buffer without beginning the parse.
  exports.write = write;

  function write(_input) {
    input += String(_input);
    return exports;
  }

  // Send an EOF and begin parsing.
  exports.end = end;

  function end(_input) {
    if (typeof _input !== 'undefined') write(_input);

    length = input.length;
    index = 0;
    line = 1;
    lineStart = 0;

    var chunk = parseChunk();
    if (options.comments) chunk.comments = comments;
    return chunk;
  }

}));
/* vim: set sw=2 ts=2 et tw=80 : */
