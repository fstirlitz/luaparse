/*global require, define, exports, load, console, print, module, emit, process, __loadScript */
(function (root) {
  var isLoader = typeof define === 'function' && !!define.amd
    , isModule = typeof require === 'function' && typeof exports === 'object' && exports && !isLoader
    , isBrowser = 'window' in root && root.window === root && typeof root.navigator !== 'undefined'
    , isEngine = !isBrowser && !isModule && typeof root.load === 'function'
    , isTestem = isBrowser && root.location.hash === '#testem'
    // Use the console reporter
    , isConsole = typeof process === 'object' && process.argv && process.argv.indexOf('--console') >= 0;

  function makeLoader(readTextFile) {
    function loadModule(id, filename) {
      /*jshint evil:true */
      var filedir = filename.replace(/[^/]+$/, '') || '.';
      var loader = new Function(
        "require", "exports", "module",
        readTextFile(filename)
      );
      var module = {
        id: id,
        exports: {}
      };
      loader(
        function (what) { return loadModule(what, filedir + '/' + what + '.js'); },
        module.exports, module
      );

      return module.exports;
    }

    return loadModule;
  }

  var load = function load(mod, path) {
    if (root[mod]) return root[mod];
    if (isModule) return require(path);
    var filename = path.replace(/\.js$/, '') + '.js';

    if (isEngine) {
      root.load(filename);
      return root[mod];
    }

    // Duktape
    if (typeof Duktape !== 'undefined' && typeof readFile === 'function') {
      return root[mod] = makeLoader(function (filename) {
        /*global readFile, TextDecoder */
        return (new TextDecoder('utf-8')).decode(readFile(filename));
      })(mod, filename);
    }

    // QuickJS
    if (typeof __loadScript !== 'undefined') {
      __loadScript(filename);
      return root[mod];
    }
  };

  var Spec = load('Spec', './lib/spec')
    , Newton = load('Newton', './lib/newton')
    , luaparse = load('luaparse', '../luaparse')
    , specs = root.specs = [
        './spec/assignments'
      , './spec/break'
      , './spec/comments'
      , './spec/conditional'
      , './spec/do'
      , './spec/escapesequences'
      , './spec/expressions'
      , './spec/for'
      , './spec/functioncalls'
      , './spec/functions'
      , './spec/labels'
      , './spec/literals'
      , './spec/local'
      , './spec/misc'
      , './spec/operators'
      , './spec/repeat'
      , './spec/return'
      , './spec/scope'
      , './spec/statements'
      , './spec/tableconstructors'
      , './spec/while'
    ]
    // Print function used for Spec reporters.
    , output = (function() {
      if (typeof console !== 'undefined' && console.log) return function(value) { console.log(value); };
      // In browsers, the global `print` function prints the current page.
      else if (typeof print === 'function' && !isBrowser) return print;
      else return function(value) { };
    }())
    // Create the test suite.
    , suite = new Spec.Suite('Luaparse Unit Tests');

  if (!('assign' in Object)) {
    Object.assign = function () {
      var args = arguments;
      var target = args[0];
      for (var i = 1; i < args.length; ++i) {
        var source = args[i];
        for (var k in source) {
          if (!Object.prototype.hasOwnProperty.call(source, k))
            continue;
          target[k] = source[k];
        }
      }
      return target;
    };
  }

  function escapeString(string) {
    return string.replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t')
      .replace(/\f/g, '\\f')
      .replace(/\v/g, '\\v');
  }

  // Expect a parse error to occur
  Spec.Test.prototype.parseError = function (source, expected, options) {
    var ok = false, actual;
    try {
      actual = luaparse.parse(source, options);
    } catch (exception) {
      actual = exception.message;
      ok = actual === expected;
    }
    return this.ok(ok, {
      'expected': expected,
      'actual': actual,
      'message': escapeString(source)
    });
  };

  // Expect the parsed AST to match.
  Spec.Test.prototype.parses = function (source, expected, options, variant) {
    return this.deepEqual(luaparse.parse(source, options), expected, escapeString(source) +
      (variant ? (' ' + variant) : ''));
  };

  Spec.Test.prototype.equalPrecedence = function (source, expected, options) {
    function normalise(node) {
      if (!node || typeof node !== 'object')
        return node;
      node.inParens = null;
      for (var key in node) if (node.hasOwnProperty(key)) {
        normalise(node[key]);
      }
      return node;
    }

    return this.deepEqual(
      normalise(luaparse.parse('a = ' + source, options)),
      normalise(luaparse.parse('a = ' + expected, options)),
      source + ' is equal to ' + expected
    );
  };

  // Create a test, and delegate to appropiate test function.
  function addTest(testName, tests) {
    // Make a semi-deep copy of the tree, modified by the visitor function.
    function rebuildTree(node, visit) {
      if (!node) return;

      node = Object.assign({}, node);
      visit(node);

      function visitKey(key) {
        if (!node[key]) return;

        if (Array.isArray(node[key])) {
          node[key] = node[key].map(function (item) {
            return rebuildTree(item, visit);
          });
        } else
          node[key] = rebuildTree(node[key], visit);
      }

      switch (node.type) {
        case 'LocalStatement':
        case 'AssignmentStatement':
          visitKey('variables');
          visitKey('init');
          break;
        case 'UnaryExpression':
          visitKey('argument');
          break;
        case 'BinaryExpression':
        case 'LogicalExpression':
          visitKey('left');
          visitKey('right');
          break;
        case 'FunctionDeclaration':
          visitKey('identifier');
          visitKey('parameters');
          visitKey('body');
          break;
        case 'ForGenericStatement':
          visitKey('variables');
          visitKey('iterators');
          visitKey('body');
          break;
        case 'IfClause':
        case 'ElseifClause':
        case 'WhileStatement':
        case 'RepeatStatement':
          visitKey('condition');
          /* fall through */
        case 'Chunk':
        case 'ElseClause':
        case 'DoStatement':
          visitKey('body');
          visitKey('globals');
          visitKey('comments');
          break;
        case 'ForNumericStatement':
          visitKey('variable');
          visitKey('start');
          visitKey('end');
          visitKey('step');
          visitKey('body');
          break;
        case 'ReturnStatement':
          visitKey('arguments');
          break;
        case 'IfStatement':
          visitKey('clauses');
          break;
        case 'MemberExpression':
          visitKey('base');
          visitKey('identifier');
          break;
        case 'IndexExpression':
          visitKey('base');
          visitKey('index');
          break;
        case 'LabelStatement':
          visitKey('label');
          break;
        case 'CallStatement':
          visitKey('expression');
          break;
        case 'GotoStatement':
          visitKey('label');
          break;
        case 'TableConstructorExpression':
          visitKey('fields');
          break;
        case 'TableKey':
        case 'TableKeyString':
          visitKey('key');
          /* fall through */
        case 'TableValue':
          visitKey('value');
          break;
        case 'CallExpression':
          visitKey('base');
          visitKey('arguments');
          break;
        case 'TableCallExpression':
          visitKey('base');
          visitKey('arguments');
          break;
        case 'StringCallExpression':
          visitKey('base');
          visitKey('argument');
          break;
        case 'Identifier':
        case 'NumericLiteral':
        case 'BooleanLiteral':
        case 'StringLiteral':
        case 'NilLiteral':
        case 'VarargLiteral':
        case 'BreakStatement':
        case 'Comment':
          break;
        default:
          throw new Error('Unhandled ' + node.type);
      }

      return node;
    }

    suite.addTest(testName, function() {
      var count = 0;
      for (var i = 0; i < tests.length; ++i) {
        var expected = tests[i].result;
        var opts = Object.assign({}, tests[i].options,
          { comments: true, locations: true, ranges: true, scope: true });
        if (typeof expected === 'string') {
          this.parseError(tests[i].source, expected, opts);
          count++;
        } else {
          count += 5;
          this.parses(tests[i].source, expected, opts);

          opts.locations = false;
          expected = rebuildTree(expected, function (node) {
            delete node.loc;
          });
          this.parses(tests[i].source, expected, opts, '(no locations)');

          opts.ranges = false;
          expected = rebuildTree(expected, function (node) {
            delete node.range;
          });
          this.parses(tests[i].source, expected, opts, '(no locations, ranges)');

          opts.comments = false;
          expected = Object.assign({}, expected);
          delete expected.comments;
          this.parses(tests[i].source, expected, opts, '(no locations, ranges, comments)');

          opts.scope = false;
          expected = rebuildTree(expected, function (node) {
            if (node.type !== 'FunctionDeclaration')
              delete node.isLocal;
          });
          delete expected.globals;
          this.parses(tests[i].source, expected, opts, '(no locations, ranges, comments, scopes)');
        }
      }
      this.done(count);
    });
  }

  // Reporters ----------------------------------------------------------------

  // Beautify console output Mocha-style.
  var consoleReporter = (function() {
    var failures = []
      , colors = {
          'red': 31
        , 'green': 32
        , 'gray': 90
        , 'white': 0
      }
      , line = '-------------------------------------------------'
      , colorize = function colorize(color, string) {
        return '\u001b[' + colors[color] + 'm' + string + '\u001b[0m';
      };

    return function consoleReporter(event) {
      switch (event.type) {
        case 'assertion':
          output('    ' + colorize('green', '✓ ') + colorize('gray', event.message));
          break;
        case 'failure':
          output('    ' + colorize('red', '✖ ' + event.message));
          failures.push(event);
          break;
        case 'start':
          output(this.name);
          break;
        case 'setup':
          output('\n  ' + colorize('white', event.target.name));
          break;
        case 'complete':
          var assertionCount = event.target.assertions
            , failureCount = event.target.failures
            , totalCount = assertionCount + failureCount;

          for (var i = 0, l = failures.length; i < l; i++) {
            var failure = failures[i]
              , expected = Newton.stringify(failure.expected)
              , actual = Newton.stringify(failure.actual);
            output(Newton.substitute('\n%s\n  Expected: %s\n  Actual:   %s', colorize('red', failure.message + ' ' + line), colorize('gray', expected), colorize('gray', actual)));
          }
          output('\n' + assertionCount + '/' + totalCount + ' assertions');
          break;
      }
    };
  }());

  var testemReporter = (function() {
    var id = 0
      , testResults = [];

    return function(event) {
      var test, isSuccess;
      switch (event.type) {
        case 'assertion':
        case 'failure':
          isSuccess = (event.type === 'assertion');
          test = {
              passed: isSuccess ? 1 : 0
            , failed: isSuccess ? 0 : 1
            , total: 1
            , id: id++
            , name: event.message
            , items: []
          };
          if (!isSuccess) {
            test.items.push({
                passed: false
              , message: Newton.substitute('Expected %o to match %o', event.expected, event.actual)
            });
          }
          testResults.push(test);
          root.Testem.emit('test-result', test);
          break;
        case 'complete':
          root.Testem.emit('all-test-results', {
              failed: this.failures
            , total: this.assertions
            , tests: []
          });
          break;
        case 'start':
          root.Testem.emit('tests-start');
          break;
      }
    };
  }());

  // Use the appropiate reporter depending on enviroment.
  var reporter = isBrowser ? Newton.createReport('suite') :
    isConsole ? consoleReporter :
    Newton.createTAP(output);

  if (isTestem) suite.on('all', testemReporter);

  suite.on('all', reporter);

  // Additional tests ---------------------------------------------------------

  suite.addTest('API', function() {
    this.equal(typeof luaparse, 'object', 'luaparse is an object');
    this.equal(typeof luaparse.parse, 'function', 'luaparse.parse() is a function');
    this.equal(typeof luaparse.write, 'function', 'luaparse.write() is a function');
    this.equal(typeof luaparse.end, 'function', 'luaparse.end() is a function');
    var parse = luaparse.parse({ wait: true });
    this.deepEqual(parse.end('return'), {
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": []
        }
      ],
      "comments": []
    }, 'should support waiting on input');

    var nodes = []
      , createdScopes = 0
      , destroyedScopes = 0
      , localDeclarations = [];

    parse = luaparse.parse('do local a = 1 b = 1 end -- comment', {
        scope: true
      , locations: true
      , ranges: true
      , onCreateNode: function(node) { nodes.push(node); }
      , onCreateScope: function() { createdScopes++; }
      , onDestroyScope: function() { destroyedScopes++; }
      , onLocalDeclaration: function(ident) { localDeclarations.push(ident); }
    });
    this.equal(createdScopes, 2, 'should invoke onCreateScope callback');
    this.equal(createdScopes, destroyedScopes, 'should invoke onDestroyScope callback');
    this.deepEqual(localDeclarations, ['a'], 'should invoke onLocalDeclaration callback');
    this.equal(nodes.length, 9, 'should invoke onCreateNode callback');
    this.deepEqual(
        nodes[0]
      , {"type": "Identifier", "name": "a", "loc": {"start": {"line": 1, "column": 9}, "end": {"line": 1, "column": 10}}, "range": [9, 10], "isLocal": true}
      , 'should invoke onCreateNode callback with syntax node parameter'
    );

    this.deepEqual(luaparse.parse('#!/usr/bin/lua\nreturn', { locations: true, ranges: true }), {
      "type": "Chunk", "body": [{"type": "ReturnStatement", "arguments": [], "loc": {"start": {"line": 2, "column": 0}, "end": {"line": 2, "column": 6}}, "range": [15, 21]}], "loc": {"start": {"line": 2, "column": 0}, "end": {"line": 2, "column": 6}}, "range": [15, 21], "comments": []
    }, 'should ignore shebangs');

    this.parseError('', "Lua version '4.0' not supported", { luaVersion: '4.0' });
    this.parseError('', "Encoding mode 'ebcdic' not supported", { encodingMode: 'ebcdic' });
    this.parseError('', "Lua version 'hasOwnProperty' not supported", { luaVersion: 'hasOwnProperty' });

    this.done(14);
  });

  suite.addTest('Interpretation of literals', function () {
    var testcases =
      [ [ '019'
        , '19'
        , '0x13'
        ]
      , [ '"a"'
        , '"\\97"'
        , '"\\097"'
        , '"\\x61"'
        , '"\\u{61}"'
        , '"\\u{061}"'
        ]
      , [ '"\\u{1f4a9}"'
        , '"\\u{000001f4a9}"'
        , '"\\xf0\\x9f\\x92\\xa9"'
        , '"\ud83d\udca9"'
        , "'\ud83d\udca9'"
        , '[[\ud83d\udca9]]'
        ]
      , [ '"\\\\a"'
        , '[==[\\a]==]'
        ]
      , [ '"\\nfoo"'
        , '"\\\nfoo"'
        , '"\\\rfoo"'
        , '"\\\r\nfoo"'
        , '"\\\n\rfoo"'
        , '[[\n\nfoo]]'
        ]
      ];
    var count = 0;

    function symbolicControlChars(s) {
      /* control characters should not appears in test output;
       * use characters from the 'Control Pictures' block instead
       */
      return s.replace(/[\x00-\x1f]/g, function (m) {
          return String.fromCharCode(0x2400 + m.charCodeAt(0));
        });
    }

    for (var i = 0; i < testcases.length; ++i) {
      count += testcases[i].length - 1;

      var list = testcases[i];
      var left = luaparse.parse('return ' + list[0],
                                { "luaVersion": "5.3" }).body[0].arguments[0];

      for (var j = 1; j < list.length; ++j) {
        var right = luaparse.parse('return ' + list[j],
                                   { "luaVersion": "5.3" }).body[0].arguments[0];

        this.equal(left.value, right.value, symbolicControlChars(left.raw) + ' == ' + symbolicControlChars(right.raw));
        left = right;
      }
    }

    this.done(count);
  });

  suite.addTest('Precedence', function() {
    this.equalPrecedence('2^3^2', '2^(3^2)');
    this.equalPrecedence('2^3*4', '(2^3)*4');
    this.equalPrecedence('2^2^3', '2^(2^3)');
    this.equalPrecedence('2^2^3^4', '2^(2^(3^4))');
    this.equalPrecedence('2^2^3^4+1', '2^(2^(3^4))+1');
    this.equalPrecedence('1*2/3', '(1*2)/3');
    this.equalPrecedence('1 + 1 * 2 > 3', '( 1 + ( 1 * 2 ) ) > 3');
    this.equalPrecedence('1 < 2 and 2 < 1', '(1 < 2) and (2 < 1)');
    this.equalPrecedence('1 / 2 + 4 * 2 > 8', '((1 / 2) + (4 * 2)) > 8');
    this.equalPrecedence('2 < 1 == true', '(2 < 1) == true');
    this.equalPrecedence('2 < 1 + 1 == true', '(2 < (1 + 1)) == true');
    this.equalPrecedence('not 1 + 1', '(not 1) + 1');
    this.equalPrecedence('not not 1 + 1', '(not (not (1)) + 1)');
    this.equalPrecedence('1 + #1', '1 + (#1)');
    this.equalPrecedence('-x^2', '-(x^2)');
    this.equalPrecedence('3~2&1', '3~(2&1)', { "luaVersion": "5.3" });
    this.equalPrecedence('3~2|1', '(3~2)|1', { "luaVersion": "5.3" });
    this.equalPrecedence('1<<2 ..3', '1<<(2 ..3)', { "luaVersion": "5.3" });
    this.done(18);
  });

  suite.addTest('EOL sequences', function() {
    var options = { locations: true }
      , baseline = luaparse.parse('foo = 1\nbar = 1', options);

    this.deepEqual(baseline, luaparse.parse('foo = 1\rbar = 1', options), 'carriage return');
    this.deepEqual(baseline, luaparse.parse('foo = 1\n\rbar = 1', options), 'newline followed by carriage return');
    this.deepEqual(baseline, luaparse.parse('foo = 1\r\nbar = 1', options), 'carriage return followed by newline');
    this.done(3);
  });

  suite.addTest('Encoding modes', function () {
    var cases = [
      { mode: 'x-user-defined', src: '"\\u{0}"', value: '\u0000' },
      { mode: 'x-user-defined', src: '"\\u{80}"', value: '\uf7c2\uf780' },
      { mode: 'x-user-defined', src: '"\\u{d800}"', value: '\uf7ed\uf7a0\uf780' },
      { mode: 'x-user-defined', src: '"\\u{20000}"', value: '\uf7f0\uf7a0\uf780\uf780' },
      { mode: 'x-user-defined', src: '"\\x80"', value: '\uf780' },
      { mode: 'x-user-defined', src: '"\\x61"', value: 'a' },
      { mode: 'x-user-defined', src: '"\\128"', value: '\uf780' },
      { mode: 'x-user-defined', src: '"\uf780"', value: '\uf780' },
      { mode: 'x-user-defined', src: '"\ud800"', error: true },
      { mode: 'x-user-defined', src: '"\u0080"', error: true },
      { mode: 'x-user-defined', src: '[[\uf780]]', value: '\uf780' },
      { mode: 'x-user-defined', src: '[[\ud800]]', error: true },
      { mode: 'x-user-defined', src: '[[\u0080]]', error: true },
      { mode: 'x-user-defined', src: '"a"', value: 'a' },
      { mode: 'x-user-defined', src: '\uf780', name: '\uf780' },
      { mode: 'x-user-defined', src: '\x80', error: true },
      { mode: 'x-user-defined', src: 'a', name: 'a' },

      { mode: 'pseudo-latin1', src: '"\\u{0}"', value: '\u0000' },
      { mode: 'pseudo-latin1', src: '"\\u{80}"', value: '\u00c2\u0080' },
      { mode: 'pseudo-latin1', src: '"\\u{d800}"', value: '\u00ed\u00a0\u0080' },
      { mode: 'pseudo-latin1', src: '"\\u{20000}"', value: '\u00f0\u00a0\u0080\u0080' },
      { mode: 'pseudo-latin1', src: '"\\x80"', value: '\u0080' },
      { mode: 'pseudo-latin1', src: '"\\x61"', value: 'a' },
      { mode: 'pseudo-latin1', src: '"\\128"', value: '\u0080' },
      { mode: 'pseudo-latin1', src: '"\uf780"', error: true },
      { mode: 'pseudo-latin1', src: '"\ud800"', error: true },
      { mode: 'pseudo-latin1', src: '"\u0080"', value: '\u0080' },
      { mode: 'pseudo-latin1', src: '[[\uf780]]', error: true },
      { mode: 'pseudo-latin1', src: '[[\ud800]]', error: true },
      { mode: 'pseudo-latin1', src: '[[\u0080]]', value: '\u0080' },
      { mode: 'pseudo-latin1', src: '"a"', value: 'a' },
      { mode: 'pseudo-latin1', src: '\uf780', error: true },
      { mode: 'pseudo-latin1', src: '\x80', name: '\x80' },
      { mode: 'pseudo-latin1', src: 'a', name: 'a' },

      { mode: 'none', src: '"\\u{80}"', value: null },
      { mode: 'none', src: '"\\u{d800}"', value: null },
      { mode: 'none', src: '"\\x80"', value: null },
      { mode: 'none', src: '"\\x61"', value: null },
      { mode: 'none', src: '"\\128"', value: null },
      { mode: 'none', src: '"\uf780"', value: null },
      { mode: 'none', src: '"\ud800"', value: null },
      { mode: 'none', src: '"\u0080"', value: null },
      { mode: 'none', src: '"a"', value: null },
      { mode: 'none', src: '[[a]]', value: null },
      { mode: 'none', src: '\uf780', name: '\uf780' },
      { mode: 'none', src: '\x80', name: '\x80' },
      { mode: 'none', src: 'a', name: 'a' },
    ];

    for (var i = 0; i < cases.length; ++i) {
      var label = cases[i].src + ' (' + cases[i].mode + ')';
      var opts = { luaVersion: "5.3", encodingMode: cases[i].mode, extendedIdentifiers: true };
      if (cases[i].error) {
        var ok = false;
        try {
          luaparse.parse("return " + cases[i].src, opts);
        } catch (e) {
          ok = true;
        }
        this.ok(ok, { 'message': label });
        continue;
      }
      var node = luaparse.parse("return " + cases[i].src, opts).body[0].arguments[0];
      if (cases[i].name)
        this.deepEqual(node.name, cases[i].name, label);
      else
        this.deepEqual(node.value, cases[i].value, label);
    }
    this.done(cases.length);
  });

  if (isLoader) {
    define(specs, function () {
      Spec.forEach(arguments, function(test) {
        addTest(test.name, test.spec);
      });
      suite.shuffle();
      return suite;
    });
  } else if (isBrowser || (!isModule || (typeof module === 'object' && module === require.main))) {
    var run = root.run = function() {
      // Add all tests. In a browser the tests are expected to be loaded
      // therefore this function is exposed as a wrapper around the test suites
      // `run()` so that it can run on load.
      Spec.forEach(specs, function(spec) {
        var name = spec.replace(/^[\s\S]*\/([^\/]+)$/, '$1')
          , tests = load(name, spec);

        addTest(tests.name, tests.spec);
      });
      suite.shuffle();
      suite.run();
    };

    if (!isBrowser) run();
  }
}(this));
