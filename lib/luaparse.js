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
    , line // @TODO

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

  // @TODO In the future add comments and locations.
  exports.defaultOptions = defaultOptions = {
    // Explicitly tell the parser when the input ends.
      incremental: false
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
      emptyStatement: function() {
      return {
          type: 'EmptyStatement'
      };
    }

    , labelStatement: function(label) {
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

    , localStatement: function(list, init) {
      return {
          type: 'LocalStatement'
        , list: list
        , init: init
      };
    }

    , assignmentStatement: function(left, right) {
      return {
          type: 'AssignmentStatement'
        , left: left
        , right: right
      };
    }

    , callStatement: function(expression) {
      return {
          type: 'CallStatement'
        , expression: expression
      };
    }

    , functionStatement: function(identifier, parameters, isVararg, body) {
      return {
          type: 'FunctionDeclaration'
        , identifier: identifier
        , vararg: isVararg
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
    , tableConstructor: function(fields) {
      return {
          type: 'TableConstructor'
        , fields: fields
      };
    }
    , binaryExpression: function(operator, left, right) {
      var type = (operator === 'and' || operator === 'or') ? 'LogicalExpression'
        : 'BinaryExpression';

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
    , variableExpression: function(name) {
      return {
          type: 'VariableExpression'
        , name: name
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
    , callExpression: function(identifier, args) {
      return {
          type: 'CallExpression'
        , identifier: identifier
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
    , toString = Object.prototype.toString
    , noop = function noop() {};

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
    while (isWhiteSpace(input[index])) index++;

    if (input[index] === '-' && input[index + 1] === '-') scanComment();
    while (isWhiteSpace(input[index])) index++;
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

  // DotsLiteral is not included in this
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
    var number = input[index++]
      , char = number
      , next = input[index];

    if (char === '0' && ~'xX'.indexOf(next)) {
      number += next;
      next = input[++index];
      // if (!isHexDigit(input[index])) raise('Invalid hex');
      while (isHexDigit(next)) {
        number += char = input[index++];
        next = input[index];
      }
      if (~'pP'.indexOf(next)) {
        number += input[index++]; // append p
        next = input[index];
        if (~'+-'.indexOf(next)) number += next;
        else raise('missing +- in hex'); // @TODO are +- mandatory?
        index++;
        if (!isDecDigit(input[index])) raise('Invalid p in hex');
        while (isDecDigit(input[index])) number += input[index++];
      }
    } else {
      while (isDecDigit(input[index])) number += input[index++];
      if (input[index] === '.') {
        number += input[index++];
        while (isDecDigit(input[index])) number += input[index++];
      }
      if (~'eE'.indexOf(input[index])) {
        number += input[index++]; // append e
        // @TODO +-
        if (!isDecDigit(input[index])) raise('invalid e in dec'); // @TODO mandatory?
        while (isDecDigit(input[index])) number += input[index++];
      }
    }

    return {
        type: Tokens.NumericLiteral
      , value: number
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

    comments.push({
        type: 'Comment'
      , value: content
    });
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

  // Parse function
  // --------------

  // Syntactically same as block
  function parseChunk() {
    peek();
    next();
    var body = parseBlock();
    return ast.chunk(body);
  }

  function parseBlock(terminator) {
    var block = []
      , statement;

    while (token.type !== Tokens.EOF) {
      statement = parseStatement();
      if (!statement) break;
      block.push(statement);
    }
    // Doesn't really need an ast node
    return block;
  }

  function parseAssignmentStatement() {}
  function parseCallStatement() {}
  function parseEmptyStatement() {
    return ast.emptyStatement();
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
    return ast.doStatement(body);
  }

  function parseWhileStatement() {
    var condition = parseExpression();
    expect('do');
    var body = parseBlock();
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
    if (token.value !== 'end') { // @TODO hmm
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
        // for
        // for namelist
  function parseForStatement() {
    var variable = parseIdentifier();
    var body;
    if (consume('=')) {
      var start = parseExpression();
      consume(',');
      var end = parseExpression();
      var step; // @TODO should null be returned?
      if (consume(',')) step = parseExpression();
      expect('do');
      body = parseBlock();
      expect('end');
      return ast.forNumericStatement(variable, start, end, step, body);
    }
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
    return ast.forGenericStatement(variables, iterators, body);
  }

  // 3.4.10 Function Definitions
  function parseFunctionDeclaration() {
    if (token.type !== Tokens.Identifier) unexpected('Function name required');
    var functionName = parseFunctionName();
    var isVararg = false;
    var parameters = [];
    expect('(');
    while(token.type === Tokens.Identifier) {
      parameters.push(ast.identifier(token.value));
      next();
      if (!consume(',')) break;
    }
    if (consume('...')) isVararg = true;
    expect(')');
    var body = parseBlock();
    return ast.functionStatement(functionName, parameters, isVararg, body);
  }

  function parseFunctionName() {
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
  }

  function parseStatement() {
    // Optimization
    switch (token.value) {
      case ';':        next(); return parseEmptyStatement(); // optimize
      case '::':       next(); return parseLabelStatement();
    }

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
        case 'function': next(); return parseFunctionDeclaration();
        case 'local':    next(); return parseLocalStatement();
      }
    }
    return false;

    // var expression = parseSuffixedExpression();

    // parseAssignmentStatement();
    // parseCallStatement();
    // return unexpected(token.value);
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

  function parseExpression(terminator) {
    var expression = parseSubExpression(0);

    return expression;
  }

  // Implement this the same way as Lua does it to make sure precedence is
  // correct. _Previous implementation should work._
  // @benchmark
  function parseSubExpression(minPrecedence) {
    var operator = token.value;
    var left;
    switch (operator) {
      case '#': case '-': case 'not':
        next();
        var argument = parseSubExpression(8);
        left = ast.unaryExpression(operator, argument);
        break;
      default:
        left = parsePrimaryExpression();
        break;
    }

    while (true) {
      operator = token.value;
      var precedence = binaryPrecedence(operator);
      if (precedence === 0 || precedence <= minPrecedence) break;
      // Right-hand precedence operators
      if (operator === '^' || operator === '..') precedence--;
      next();
      var right = parseSubExpression(precedence);
      left = ast.binaryExpression(operator, left, right);
    }
    return left;
  }

  function parsePrimaryExpression() {
    var node;
    switch(token.type) {
      case Tokens.Identifier:
        if (lookahead.value === '(') {
          var identifier = ast.identifier(token.value);
          var expressions = [];
          next(); next();
          do {
            expressions.push(parseExpression());
          } while (consume(','));
          node = ast.callExpression(identifier, expressions);
        } else {
          node = ast.identifier(token.value);
        }
        break;
      case Tokens.StringLiteral:
      case Tokens.NumericLiteral:
        // We don't want to cast numbers as lua allows exponents in hexadecimal
        // while javascript do not.
        node = ast.literal(token.value);
        break;
      case Tokens.NilLiteral:
        node = ast.literal(null);
        break;
      case Tokens.BooleanLiteral:
        node = ast.literal(token.value === 'true');
        break;
      case Tokens.Keyword:
        node = ast.literal(token.value);
        break;
        // if (token.value === 'function') {
        // }
      case Tokens.Punctuator:
        if (consume('...')) return ast.dotsLiteral(token.value); // @TODO needs check?
        else if (consume('{')) return parseTableConstructor();
        else if (consume('(')) {
          var expression = parseExpression();
          expect(')');
          return expression;
        }
        break;
    }
    next();
    return node;
  }

  function parseTableConstructor() {
    next();
    var fields = []
      , key, value;

    while (index < length) {
      // @TODO optional fieldlist
      if (token.type === Tokens.Punctuator && token.value === '[') {
        key = parseExpression();
        expect(']');
        expect('=');
        value = parseExpression();
        // fields.push(ast(key, value));
      } else if (token.type === Tokens.Identifier) {
        // We need lookahead
        key = ast.identifier(token.value);
        expect('=');
        value = parse.expression();
        // fields.push(ast(key, value));
      } else {
        value = parseExpression();
        // fields.push(ast(value));
      }
      if (token.type === Tokens.Punctuator) {
        if (~',;'.indexOf(token.value)) {
          next();
          continue;
        }
        if (token.value === '}') break;
      }
    }
    return ast.tableConstructor(fields);
  }

  function parseExpressionList() {
    var expressions = [];
  }
  function parseField() {
      // if (token.value === '[') {
      // }
  }


  // Parser
  // ------

  // Export the main parser.
  //
  //   - `incremental` Incremental parsing. Defaults to false
  //
  // Example:
  //
  //     var parser = require('luaparser');
  //     parser.parse('var i = 0;');
  //
  //     var parser = require('luaparser');
  //     parser.parse('var i = 0', { incremental: true });
  //     parser.write(';');
  //     parser.end('console.log(i);');
  //
  //     define(['luaparser'], function(parser) {
  //       parser.parse('var i = 0');
  //     });

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

    if (!options.incremental && input) return end();
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
    line = 1;
    index = 0;

    var chunk = parseChunk();
    if (options.comments) chunk.comments = comments;
    return chunk;
  }

}));
/* vim: set sw=2 ts=2 et tw=80 : */
