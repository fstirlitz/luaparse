(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "repeat": {
      "repeat": "[1:6] 'until' expected near '<eof>'",
      "repeat until": "[1:12] <expression> expected near '<eof>'",
      "repeat until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat until false": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "BooleanLiteral",
              "value": false,
              "raw": "false"
            },
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat until local": "[1:13] <expression> expected near 'local'",
      "repeat end": "[1:7] 'until' expected near 'end'",
      "repeat 1": "[1:7] Unexpected number '1' near '<eof>'",
      "repeat =": "[1:7] Unexpected symbol '=' near '<eof>'",
      "repeat local a until 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": true
                  }
                ],
                "init": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat local a local b until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": true
                  }
                ],
                "init": []
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": true
                  }
                ],
                "init": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat local a; local b; until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": true
                  }
                ],
                "init": []
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": true
                  }
                ],
                "init": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat 2 until 1": "[1:7] Unexpected number '2' near 'until'",
      "repeat \"foo\" until 1": "[1:7] Unexpected string 'foo' near 'until'",
      "repeat return until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat return return until 0": "[1:14] 'until' expected near 'return'",
      "repeat break until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": [
              {
                "type": "BreakStatement"
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat do end until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": [
              {
                "type": "DoStatement",
                "body": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat do return end until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": [
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "arguments": []
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "repeat do break end until 0": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0"
            },
            "body": [
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "BreakStatement"
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      }
    }
  };

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function() { return tests; });
  } else if (freeExports && !freeExports.nodeType) {
    if (freeModule) freeModule.exports = tests; // In Node.js or Ringo v0.8.0+
    else { // In Narwhal or RingoJS v0.7.0-
      for (var test in tests) if (tests.hasOwnProperty(test)) {
         freeExports[test] = tests[test];
      }
    }
  } else { // In Rhino or web browser
    if (!root.testSuite) root.testSuite = {};
    root.testSuite['repeat'] = tests;
  }
}(this));
