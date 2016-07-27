/*globals require:true, define:true, exports:true, load:true, console:true, print:true, module:true, emit:true, process:true */
/*jshint eqeqeq:false */
(function (root) {
  var isLoader = typeof define === 'function' && !!define.amd
    , isModule = typeof require === 'function' && typeof exports === 'object' && exports && !isLoader
    , isBrowser = 'window' in root && root.window == root && typeof root.navigator !== 'undefined'
    , isEngine = !isBrowser && !isModule && typeof root.load === 'function'
    , isTestem = isBrowser && root.location.hash === '#testem'
    // Use the console reporter
    , isConsole = typeof process == 'object' && process.argv && process.argv.indexOf('--console') >= 0;

  var load = function load(mod, path) {
    if (root[mod]) return root[mod];
    if (isModule) return require(path);
    if (isEngine) {
      root.load(path.replace(/\.js$/, '') + '.js');
      return root[mod];
    }
  };

  var Spec = load('Spec', './lib/spec')
    , Newton = load('Newton', './lib/newton')
    , luaparse = load('luaparse', '../luaparse')
    , options = { scope: true, locations: true, ranges: true }
    , specs = root.specs = [
        './spec/assignments'
      , './spec/comments'
      , './spec/conditional'
      , './spec/do'
      , './spec/escapesequences'
      , './spec/expressions'
      , './spec/for'
      , './spec/functioncalls'
      , './spec/functions'
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
  Spec.Test.prototype.parses = function (source, expected, options) {
    return this.deepEqual(luaparse.parse(source, options), expected, escapeString(source));
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
    suite.addTest(testName, function() {
      var count = 0;
      for (var source in tests) if (tests.hasOwnProperty(source)) {
        var expected = tests[source];
        if (typeof expected === 'string') this.parseError(source, expected, options);
        else if (typeof expected.result === 'object')
          this.deepEqual(luaparse.parse(source, expected.options || options), expected.result, expected.name || escapeString(source));
        else if (typeof expected.result === 'string') this.parseError(source, expected.result, expected.options || options);
        else this.parses(source, expected, options);

        count++;
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
    this.deepEqual(parse.end('break'), {
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": []
    }, 'should support waiting on input');

    var nodes = []
      , createdScopes = 0
      , destroyedScopes = 0;

    parse = luaparse.parse('do local a = 1 b = 1 end -- comment', {
        scope: true
      , locations: true
      , ranges: true
      , onCreateNode: function(node) { nodes.push(node); }
      , onCreateScope: function() { createdScopes++; }
      , onDestroyScope: function() { destroyedScopes++; }
    });
    this.equal(createdScopes, 2, 'should invoke onCreateScope callback');
    this.equal(createdScopes, destroyedScopes, 'should invoke onDestroyScope callback');
    this.equal(nodes.length, 9, 'should invoke onCreateNode callback');
    this.deepEqual(
        nodes[0]
      , {"type": "Identifier", "name": "a", "loc": {"start": {"line": 1, "column": 9}, "end": {"line": 1, "column": 10}}, "range": [9, 10], "isLocal": true}
      , 'should invoke onCreateNode callback with syntax node parameter'
    );

    this.deepEqual(luaparse.parse('#!/usr/bin/lua\nbreak', { locations: true, ranges: true }), {
      "type": "Chunk", "body": [{"type": "BreakStatement", "loc": {"start": {"line": 2, "column": 0}, "end": {"line": 2, "column": 5}}, "range": [15, 20]}], "loc": {"start": {"line": 2, "column": 0}, "end": {"line": 2, "column": 5}}, "range": [15, 20], "comments": []
    }, 'should ignore shebangs');

    this.done(10);
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
    this.equalPrecedence('3~2&1', '3~(2&1)');
    this.equalPrecedence('3~2|1', '(3~2)|1');
    this.equalPrecedence('1<<2 ..3', '1<<(2 ..3)');
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
