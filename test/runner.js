/*globals require:true define:true exports:true load:true console:true print:true module:true emit:true process:true */
/*jshint eqeqeq:false */
(function (root) {
  var isLoader = typeof define === 'function' && !!define.amd
    , isModule = typeof require === 'function' && typeof exports === 'object' && exports && !isLoader
    , isBrowser = 'window' in root && root.window == root && typeof root.navigator !== 'undefined'
    , isEngine = !isBrowser && !isModule && typeof root.load === 'function'
    , isTestem = isBrowser && root.location.hash === '#testem'
    , isTestling = isBrowser && root.location.hash === '#testling'
    // Use the console reporter
    , isConsole = typeof process == 'object' && process.argv && process.argv.indexOf('--console') >= 0;

  var load = function load(module, path) {
    if (root.testSuite && root.testSuite[module]) return root.testSuite[module];
    if (root[module]) return root[module];
    if (isModule) return require(path);
    if (isEngine) {
      root.load(path.replace(/\.js$/, '') + '.js');
      if (root.testSuite && root.testSuite[module]) return root.testSuite[module];
      return root[module];
    }
  };

  var Spec = load('Spec', './lib/spec')
    , Newton = load('Newton', './lib/newton')
    , luaparse = load('luaparse', '../luaparse')
    , options = { scope: true, locations: true, ranges: true }
    , specs = [
        'assignments'
      , 'comments'
      , 'conditional'
      , 'do'
      , 'escapesequences'
      , 'expressions'
      , 'for'
      , 'stringcalls'
      , 'tablecalls'
      , 'functioncalls'
      , 'functions'
      , 'literals'
      , 'local'
      , 'operators'
      , 'repeat'
      , 'return'
      , 'scope'
      , 'statements'
      , 'tableconstructors'
      , 'while'
    ]
    , output = (function() {
      if (isTestling || (typeof console !== 'undefined' && console.log)) return function(value) { console.log(value); };
      // In browsers, the global `print` function prints the current page.
      else if (typeof print === 'function' && !isBrowser) return print;
      else return function(value) { };
    }())

    // Create the test suite.
    , testSuite = luaparse.testSuite = new Spec.Suite('Luaparse Unit Tests');

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
    return this.deepEqual(luaparse.parse('a = ' + source, options), luaparse.parse('a = ' + expected, options), source + ' is equal to ' + expected);
  };

  // Create a test, and delegate to appropiate test function.
  function addTest(testName, tests) {
    testSuite.addTest(testName, function() {
      var count = 0;
      for (var source in tests) if (tests.hasOwnProperty(source)) {
        var expected = tests[source];
        if (typeof expected === 'string') this.parseError(source, expected, options);
        else this.parses(source, expected, options);
        count++;
      }
      this.done(count);
    });
  }

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
  var reporter = isTestling ? Newton.createTAP(output) :
    isBrowser ? Newton.createReport('suite') :
    isConsole ? consoleReporter :
    Newton.createTAP(output);

  if (isTestem) testSuite.on('all', testemReporter);

  if (isTestling) console.log('TAP version 13');
  testSuite.on('all', reporter);

  // Add all tests. In browsers the specs are expected to exist already.
  Spec.forEach(specs, function(spec) {
    var tests = load(spec, './spec/' + spec);
    for (var testName in tests) if (tests.hasOwnProperty(testName)) {
      addTest(testName, tests[testName]);
    }
  });

  // Tests
  testSuite.addTest('API', function() {
    this.equal(typeof luaparse, 'object', 'luaparse is an object');
    this.equal(typeof luaparse.parse, 'function', 'luaparse.parse() is a function');
    this.equal(typeof luaparse.write, 'function', 'luaparse.write() is a function');
    this.equal(typeof luaparse.end, 'function', 'luaparse.end() is a function');
    this.deepEqual(luaparse.parse('--comment', { comments:false }), {
      "type": "Chunk",
      "body": []
    }, 'should ignore comments if told to');
    this.deepEqual(luaparse.parse(''), {
      "type": "Chunk",
      "body": [],
      "comments": []
    }, 'should produce empty tree on empty input');
    var parse = luaparse.parse({ wait: true });
    this.deepEqual(luaparse.end('break'), {
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": []
    }, 'should support waiting on input');

    // Bump coverage for scopes.
    this.deepEqual(luaparse.parse('function foo.bar:baz(a) goto foo end local function a() local a, b ::c:: for a,b in c.d:e() do end end'), {
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "MemberExpression",
            "indexer": ":",
            "identifier": {
              "type": "Identifier",
              "name": "baz"
            },
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "bar"
              },
              "base": {
                "type": "Identifier",
                "name": "foo"
              }
            }
          },
          "isLocal": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "body": [
            {
              "type": "GotoStatement",
              "label": {
                "type": "Identifier",
                "name": "foo"
              }
            }
          ]
        },
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "isLocal": true,
          "parameters": [],
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a"
                },
                {
                  "type": "Identifier",
                  "name": "b"
                }
              ],
              "init": []
            },
            {
              "type": "LabelStatement",
              "label": {
                "type": "Identifier",
                "name": "c"
              }
            },
            {
              "type": "ForGenericStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a"
                },
                {
                  "type": "Identifier",
                  "name": "b"
                }
              ],
              "iterators": [
                {
                  "type": "CallExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ":",
                    "identifier": {
                      "type": "Identifier",
                      "name": "e"
                    },
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "d"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "c"
                      }
                    }
                  },
                  "arguments": []
                }
              ],
              "body": []
            }
          ]
        }
      ],
      "comments": []
    }, 'should not scope by default');

    // Bump coverage for ranges and locations

    this.deepEqual(luaparse.parse('--comment\nif 1 then elseif 2 then else end'), {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              },
              "body": []
            },
            {
              "type": "ElseClause",
              "body": []
            }
          ]
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--comment"
        }
      ]
    }, 'should not track locations or ranges by default');

    this.deepEqual(luaparse.parse('foo = 1', { ranges: true }), {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "foo",
              "range": [
                0,
                3
              ]
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "range": [
                6,
                7
              ]
            }
          ],
          "range": [
            0,
            7
          ]
        }
      ],
      "range": [
        0,
        7
      ],
      "comments": []
    }, 'should be able to track only ranges');

    this.deepEqual(luaparse.parse('foo = 1', { locations: true }), {
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 3
                }
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              }
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 7
            }
          }
        }
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "comments": []
    }, 'should be able to track only locations');
    this.done(11);
  });

  testSuite.addTest('Precedence', function() {
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
    this.done(15);
  });

  testSuite.shuffle();

  if (isLoader) {
    define(function () { return testSuite; });
  } else if (!isBrowser && (!isModule || (typeof module === 'object' && module === require.main))) {
    testSuite.run();
  }
}(this));
