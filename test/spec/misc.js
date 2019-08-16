(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    // While CommonJS defines `module` as an object, component define it as a
    // function
    , freeModule = (typeof module === 'object' || typeof module === 'function') &&
        module && module.exports === freeExports && module;

  // Detect free variable `global`, from Node.js or Browserified code, and use
  // it as `root`
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)
    root = freeGlobal;

  // Some AMD build optimizers, like r.js, check for specific condition
  // patterns like the following:
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  }
  // check for `exports` after `define` in case a build optimizer adds an
  // `exports` object
  else if (freeExports && !freeExports.nodeType) {
    // in Node.js or RingoJS v0.8.0+
    if (freeModule) factory(freeModule.exports);
    // in RingoJS v0.7.0-
    else factory(freeExports);
  }
  // in a browser or Rhino
  else {
    factory((root[name] = {}));
  }
}(this, 'misc', function (exports) {

  exports.name = 'misc';
  exports.options = { };
  exports.spec = {
    'function foo.bar:baz(a) goto foo end local function a() local a, b ::c:: for a,b in c.d:e() do end end do while a do end repeat until 0 end for a = 1, 1 do end a = function() end': {
      options: { "luaVersion": "5.2" },
      name: 'should not scope by default',
      result: {
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
          },
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "WhileStatement",
                "condition": {
                  "type": "Identifier",
                  "name": "a"
                },
                "body": []
              },
              {
                "type": "RepeatStatement",
                "condition": {
                  "type": "NumericLiteral",
                  "value": 0,
                  "raw": "0"
                },
                "body": []
              }
            ]
          },
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "a"
            },
            "start": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "end": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "step": null,
            "body": []
          },
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a"
              }
            ],
            "init": [
              {
                "type": "FunctionDeclaration",
                "identifier": null,
                "isLocal": false,
                "parameters": [],
                "body": []
              }
            ]
          }
        ],
        "comments": []
      }
    },
    '--comment\nif 1 then elseif 2 then else end': {
      options: { },
      name: 'should not track locations or ranges by default',
      result: {
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
      }
    },
    'foo = 1': {
      options: { locations: true },
      name: 'should be able to track only locations',
      result: {
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
      }
    },
    'foo = 2': {
      options: { ranges: true },
      name: 'should be able to track only ranges',
      result: {
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
                "value": 2,
                "raw": "2",
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
      }
    },
    '': {
      name: 'should produce empty tree on empty input',
      options: {},
      result: {
        "type": "Chunk",
        "body": [],
        "comments": []
      }
    },
    '--comment': {
      name: 'should ignore comments if told to',
      options: { comments: false },
      result: {
        "type": "Chunk",
        "body": []
      }
    }
  };
}));
