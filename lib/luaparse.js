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

  var ast
    , regexp
    , defaultOptions
    , lexer
    , Tokens
    , enable_log = true // @TODO

    , input
    , options

    , length

    // V8 uses the following error messages: http://goo.gl/KhTAv
    // @TODO we should read read up on LUA errors
    , errorMessages = {
    };

  exports.Tokens = Tokens = {
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

  exports.defaultOptions = defaultOptions = {
    // Explicitly tell the parser when the input ends.
      wait: false
    , comments: true
  };

  // Regular expression matches exposed for modification.
  // _These will most likely be optimized into procedural functions later._

  exports.regexp = regexp = {
      punctuator: /^(\+|\-|\*|\/|%|\^|#|==|~=|<=|>=|<|>|=|\(|\)|\{|\}|\[|\]|::|;|:|,|\.|\.\.|\.\.\.)$/
    , decDigit: /^[0-9]$/
    , hexDigit: /^[0-9a-fA-F]$/
    , whiteSpace: /^[ \t\u000B\u000C\u0020\u00A0\uFEFF]$/
    , lineTerminator: /^[\n\r\u2028\u2029]$/
    , identifierStart: /^[a-zA-Z_]$/
    , identifierPart: /^[a-zA-Z0-9_]$/
  };

  // Default AST structure exposed for modification.
  // _These won't get inlined by V8 due to their insignificant call count._

  exports.ast = ast = {
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

    , clause: function(condition, body) {
      return {
          condition: condition
        , body: body
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
        , iterators: iterators
        , body: body
      };
    }

    , chunk: function(body) {
      return {
          type: 'Chunk'
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

  // JS really should get a sprintf function. This one uses %INDEX to input
  // arguments in the supplied format string.
  //
  // Example:
  //
  //   - `sprintf('Unexpected %2 in %1.', 'token', 'function');`

  function sprintf(format) {
    var args = slice.call(arguments, 1);
    format.replace(/%(\d)/g, function (match, index) {
      match = ''; // jshint
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

  function logger() {
    if (!enable_log) return;
    var util = require('util');
    var args = slice.call(arguments);
    args.forEach(function(el) {
      console.log(util.inspect(el, false, null, true));
    });
  }

  // Raise an expection

  function raise(message) {
    throw new SyntaxError(message);
  }
  function unexpected(msg) {
    raise("Unexpected " + msg);
  }

  // Lexer
  // -----

  var index
    , token
    , lookahead
    , comments;

  function readToken() {
    // @TODO track comments, whitespace and line numbers at some point.
    skipWhiteSpace();
    if (input[index] === '-' && input[index + 1] === '-') {
      scanComment();
      skipWhiteSpace();
    }
    if (index >= length) return { type : Tokens.EOF }; // EOF

    var char = input[index]
      , next = input[index + 1]; // @TODO what if EOF?

    if (isIdentifierStart(char)) return scanIdentifierOrKeyword();

    switch (char) {
      case '\'': case '"':
        return scanStringLiteral();

      case '[':
        // @TODO is this _always_ true?
        if (next === '[' || next === '=') scanStringLiteral(true);
        return scanPunctuator(char);

      case '0': case '1': case '1': case '2': case '3': case '4': case '5':
      case '6': case '7': case '8': case '9':
        return scanNumericLiteral();

      case '.':
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
        return unexpected('~');

      case ':':
        if (next === ':') return scanPunctuator('::');
        return scanPunctuator(char);

      case '*': case '/': case '^': case '%': case ',': case '{': case '}':
      case '[': case ']': case '(': case ')': case ';': case '#': case '-':
      case '+':
        return scanPunctuator(char);
    }

    return unexpected("readToken " + char);
  }

  function skipWhiteSpace() {
    if (!options.location) {
      while (isWhiteSpace(input[index])) index++;
    } else {
      if (isLineTerminator(input[index])) {
        index++;
      }
      while (regexp.whiteSpace.test(input[index])) {
        index++;
      }
    }
  }

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
    };
  }

  function scanPunctuator(value) {
    index += value.length;
    return {
        type: Tokens.Punctuator
      , value: value
    };
  }

  function scanStringLiteral(long) {
    var delimiter = input[index++]
      , string = ''
      , char;

    if (long) string = readLongString();
    else {
      while (index < length) {
        char = input[index++];
        if (char === delimiter) break;
        if (char === '\\') string += char + input[index++];
        else if (!isLineTerminator(char)) string += char;
        else {
          unexpected('line terminator in string');
          break;
        }
      }
    }

    return {
        type: Tokens.StringLiteral
      , value: string
    };
  }

  function scanNumericLiteral() {
    var char = input[index]
      , next = input[index + 1];

    if (char === '0' && ~'xX'.indexOf(next)) return scanHexLiteral();
    else return scanDecLiteral();
  }

  // Lua Hexadecimals have an optional fraction part and an optional binary
  // exoponent part.
  // As JavaScript do not have these we will compute all three parts separately
  // and the add them together at the end of the function.
  //
  //    Digit := toDec(digit)
  //    Fraction := toDec(fraction) / 16 ^ fractionCount
  //    BinaryExp := 2 ^ binaryExp
  //    Number := ( Digit + Fraction ) * BinaryExp

  function scanHexLiteral() {
    var fraction = 0 // defaults to 0 as it gets summed
      , binaryExponent = 1 // defaults to 1 as it gets multiplied
      , binarySign = 1 // positive
      , digit = ''; // The main digit is required or this is not a valid hex.

    index += 2; // Skip 0x part

    // A minimum of one hex digit is required.
    if (!isHexDigit(input[index])) raise('malformed number near hexdigit');
    while (isHexDigit(input[index])) digit += input[index++];

    // Convert the hexadecimal digit to base 10.
    digit = parseInt(digit, 16);

    // Fraction part i optional.
    if (input[index] === '.') {
      fraction = '';
      index++;

      while (isHexDigit(input[index])) fraction += input[index++];

      // Empty fraction parts should default to 0.
      if (fraction === '') fraction = 0;
      // Convert the fraction part into 0.x so we can use summation.
      else fraction = parseInt(fraction, 16) / Math.pow(16, fraction.length);
    }

    // Optional binary exponent
    if (~'pP'.indexOf(input[index])) {
      binaryExponent = '';
      index++;
      // Sign part is optional and defaults to 1 (positive).
      if (~'+-'.indexOf(input[index])) {
        binarySign = input[index++] === '+' ? 1 : -1;
      }
      // The binary exponent sign requires a decimal digit.
      if (!isDecDigit(input[index])) raise('malformed number near binary exponent');
      while (isDecDigit(input[index])) binaryExponent += input[index++];

      // Calculate the binary exponent of the number.
      binaryExponent = Math.pow(2, binaryExponent * binarySign);
    }

    return {
        type: Tokens.NumericLiteral
      , value: (digit + fraction) * binaryExponent
    };
  }

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
      if (~'+-'.indexOf(next)) number += input[index];
      // An exponent is required to contain at least one decimal digit.
      if (!isDecDigit(input[index])) raise('malformed number near ' + number);
      while (isDecDigit(input[index])) number += input[index++];
    }

    return {
        type: Tokens.NumericLiteral
      , value: parseFloat(number)
    };
  }


  function scanComment() {
    index += 2; // --
    var char = input[index]
      , content = '';

    if (char === '[') {
      index++;
      content = readLongString();
    } else {
      while (index < length) {
        if (isLineTerminator(char = input[index++])) break;
        content += char;
      }
    }
    if (options.comments) {
      comments.push({
          type: 'Comment'
        , value: content
      });
    }
  }

  function readLongString(type) {
    var level = 0
      , content = ''
      , char
      , commentTerminator = false;

    while (input[index + level] === '=') level++;
    if (input[index + level] !== '[') return unexpected('char, expected ['); // @TODO ?

    index += level + 1;
    char = input[index];

    // If the first character is a newline, ignore it and begin on next line.
    if (isLineTerminator(char)) char = input[++index];

    while (index < length) {
      char = input[index++];
      if (char === ']') {
        commentTerminator = true;
        for (var i = 0; i < level; i++) {
          if (input[index + i] !== '=') commentTerminator = false;
        }
        if (input[index + level] !== ']') commentTerminator = false;
      }

      if (commentTerminator) break;
      content += char;
    }
    index += level + 3;

    return content;
  }

  function next() {
    token = lookahead;
    lookahead = readToken();
  }

  function peek() {
    lookahead = readToken();
    return lookahead;
  }


  function match() {

  }

  function consume(value) {
    if (token.value === value) {
      next();
      return true;
    }
    return false;
  }

  function expect(value) {
    if (token.value === value) next();
    else unexpected(token.value + ' expecting ' + value);
  }

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

  // Parse function
  // --------------

  // Syntactically same as block
  function parseChunk() {
    peek();
    next();
    var body = parseBlock();
    if (token.type !== Tokens.EOF) unexpected(token.value + ' at <eof>');
    return ast.chunk(body);
  }

  function parseBlock(terminator) {
    var block = []
      , statement;

    while (!isBlockFollow(token)) {
      // Lua exits on a return token, but we still continue parsing.
      statement = parseStatement();
      // Statements are only added if they are returned, this allows us to
      // ignore some statements, such as EmptyStatement.
      if (statement) block.push(statement);
    }
    // Doesn't really need an ast node
    return block;
  }

  function parseLabelStatement() {
    var label = parseIdentifier();
    expect('::');
    return ast.labelStatement(label);
  }

  function parseBreakStatement() {
    return ast.breakStatement();
  }

  function parseGotoStatement() {
    var label = parseIdentifier();
    return ast.gotoStatement(label);
  }

  function parseDoStatement() {
    var body = parseBlock();
    expect('end');
    return ast.doStatement(body);
  }

  function parseWhileStatement() {
    var condition = parseExpression();
    expect('do');
    var body = parseBlock();
    expect('end');
    return ast.whileStatement(condition, body);
  }

  function parseRepeatStatement() {
    var body = parseBlock();
    expect('until');
    var condition = parseExpression();
    return ast.repeatStatement(condition, body);
  }

  function parseReturnStatement() {
    var expressions = [];
    // @TODO what happens if return is somewhere in the middle of a block as
    // lua \n dont have semantic meaning? Lua C compiler ends return
    // statements if they are followed by else|elseif|end|eos.
    // @see block_follow
    if (token.value !== 'end') {
      var expression = parseExpression();
      if (expression) {
        expressions.push(expression);
        while (consume(',')) expressions.push(parseExpression());
      }
      consume(';'); // grammar tells us ; is optional here.
    }
    return ast.returnStatement(expressions);
  }

  // 3.3.4 Control Structures
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

  function parseForStatement() {
    var variable = parseIdentifier();
    var body;
    if (consume('=')) {
      var start = parseExpression();
      consume(',');
      var end = parseExpression();
      var step = null;
      if (consume(',')) step = parseExpression();
      expect('do');
      body = parseBlock();
      expect('end');
      return ast.forNumericStatement(variable, start, end, step, body);
    } else {
      // Generic For Statement
      var variables = [variable];
      while (consume(',')) variables.push(parseIdentifier());
      expect('in');
      var iterators = [];
      do {
        iterators.push(parseExpression());
      } while(consume(','));
      expect('do');
      body = parseBlock();
      expect('end');
      return ast.forGenericStatement(variables, iterators, body);
    }
  }

  // 3.4.10 Function Definitions

  function parseFunctionDeclaration(name, isLocal) {
    var isVararg = false;
    var parameters = [];
    expect('(');
    while (token.type === Tokens.Identifier) { // @TODO not only identifiers
      parameters.push(ast.identifier(token.value));
      next();
      if (!consume(',')) break;
    }
    if (consume('...')) isVararg = true;
    expect(')');
    var body = parseBlock();
    expect('end');
    return ast.functionStatement(name, parameters, isVararg, isLocal || false, body);
  }

  function parseFunctionName() {
    if (token.type !== Tokens.Identifier) unexpected('Function name required');
    var base = ast.identifier(token.value);
    next();
    while (consume('.')) {
      if (token.type !== Tokens.Identifier) return unexpected('identifier');
      base = ast.memberExpression(base, '.', ast.identifier(token.value));
      next();
    }
    if (consume(':')) {
      if (token.type !== Tokens.Identifier) unexpected('not identifier');
      base = ast.memberExpression(base, ':', ast.identifier(token.value));
      next();
    }
    return base;
  }

  function parseLocalStatement() {
    if (token.type === Tokens.Identifier) {
      var variables = [];
      var init = [];
      do {
        variables.push(parseIdentifier());
      } while (consume(','));
      // @TODO = has to be followed by at least one exp right?
      // @TODO should we create all array elements and set them as null?
      if (consume('=')) {
        do {
          init.push(parseExpression());
        } while (consume(','));
      }
      return ast.localStatement(variables, init);
    }
    if (consume('function')) {
      var name = parseIdentifier();
      return parseFunctionDeclaration(name, true);
    } else {
      raise('local var or function definition expected.');
    }
  }

  // There are two types of statements, simple and compound.
  // Statements are executed solely for their side effects.

  function parseStatement() {
    if (token.type === Tokens.Keyword) {
      switch (token.value) { // @TODO would be nice to make these v8 inlinable
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
    // AssignmentStatement
    if (~',='.indexOf(token.value)) {
      var variables = [expression];
      var init = [];
      // @TODO need to check grammar properly for this
      // we should only allow Name | Indexed | Member
      while (consume(',')) variables.push(parsePrefixExpression());
      expect('=');
      do {
        init.push(parseExpression());
      } while (consume(','));
      return ast.assignmentStatement(variables, init);
    }
    // CallStatement
    if (isCallExpression(expression)) { // @TODO ast change can break this.
      return ast.callStatement(expression);
    }

    // What's lua practice regarding semicolon? If it's used more often we
    // should place it at the top of the function as Lua core does it.
    if (consume(';')) return;
    unexpected(token.value);
  }

  function parseIdentifier() {
    var identifier = token.value;
    if (token.type !== Tokens.Identifier) unexpected(token.type);
    next();
    return ast.identifier(identifier);
  }

  // As unary - can't be distinguished from binary - unary precedence isn't
  // described in this table but in parseSubExpression itself.
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

  // Expression parser
  // -----------------
  //
  // Expressions are evaluated and always return a value. Sometimes with side
  // effects depending on the language.
  // @see http://striky.ece.jhu.edu/~sasha/SOFTWARE/FORTRAN/007-0710-060/sgi_html/ch03.html

  // exp ::= (unop exp | primary | prefixexp ) { binop exp }
  // primary ::= nil | false | true | Number | String | '...' | functiondef | tableconstructor
  // prefixexp ::= (Name | '(' exp ')' ) { '[' exp ']' | '.' Name | ':' Name args | args }

  function parseExpression() {
    var expression = parseSubExpression(0);
    return expression;
  }

  // Implement this the same way as Lua does it to make sure precedence is
  // correct. _Previous implementation should work._
  // @benchmark

  // exp ::= (unop exp | primary | prefixexp ) { binop exp }

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

  // > (Name | '(' exp ')' ) { '[' exp ']' | '.' Name | ':' Name args | args }

  function parsePrefixExpression() {
    var base;
    // The prefix
    // > Name | '(' exp ')'
    if (token.type === Tokens.Identifier) {
      base = parseIdentifier();
    } else if (consume('(')) {
      base = parseExpression();
      expect(')');
    } else {
      return null;
    }

    // Suffix
    // > { '[' exp ']' | '.' Name | ':' Name args | args }
    var expression, identifier;
    while (true) {
      switch (token.value) {
        case '[':
          expression = parseExpression();
          base = ast.indexExpression(base, expression);
          break;
        case '.':
          identifier = parseIdentifier();
          base = ast.memberExpression(base, '.', identifier);
          break;
        case ':':
          identifier = parseIdentifier();
          base = ast.memberExpression(base, ':', identifier);
          base = parseCallExpression(base);
          break;
        case '(': case '"': case '{': // args
          base = parseCallExpression(base);
          break;
        default:
          return base;
      }
    }

    return base;
  }

  // > '(' [explist] ')' | tableconstructor | String

  function parseCallExpression(base) {
    if (token.type === Tokens.Punctuator) {
      switch (token.value) {
        case '(':
          next();
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
      return ast.stringCallExpression(base, token.value);
    }
    return;
  }

  // > String | Numeric | nil | true | false | functiondef | tableconstructor | '...'

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
          node = parseFunctionDeclaration(null); // @TODO isLocal?
        }
        break;
      case Tokens.Punctuator:
        if (consume('...')) return ast.dotsLiteral(token.value); // @TODO needs check?
        if (consume('{')) {
          node = parseTableConstructor();
        }
        break;
    }
    if (node) next();
    return node;
  }

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

  function injectLocation(ast) {
    for (var node in ast) if (ast.hasOwnProperty(node)) {
      if (toString.call(ast[node]) !== '[object Function]') continue;
      ast[node] = (function(source) {
        return function() {
          var tree = source.apply(null, slice.call(arguments));
          tree.loc = { start: null, end: null };
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
    // if (options.location) injectLocation(ast);

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

    var chunk = parseChunk();
    if (options.comments) chunk.comments = comments;
    return chunk;
  }

}));
/* vim: set sw=2 ts=2 et tw=80 : */
