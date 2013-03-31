(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "while": {
      "while": "[1:5] <expression> expected near '<eof>'",
      "while do": "[1:6] <expression> expected near 'do'",
      "while =": "[1:6] <expression> expected near '='",
      "while 1 do": "[1:10] 'end' expected near '<eof>'",
      "while 1 do end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "while 1 do local a end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
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
      "while 1 do local a local b end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
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
      "while 1 do local a; local b; end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
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
      "while 1 do 2 end": "[1:11] Unexpected number '2' near 'end'",
      "while 1 do \"foo\" end": "[1:11] Unexpected string 'foo' near 'end'",
      "while true do end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "BooleanLiteral",
              "value": true,
              "raw": "true"
            },
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "while 1 do while": "[1:16] <expression> expected near '<eof>'",
      "while 1 end": "[1:8] 'do' expected near 'end'",
      "while 1 2 do": "[1:8] 'do' expected near '2'",
      "while 1 = 2 do": "[1:8] 'do' expected near '='",
      "while 1 do return end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
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
      "while 1 do return return end": "[1:18] 'end' expected near 'return'",
      "while 1 do do end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
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
      "while 1 do do return end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
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
      "while 1 do break end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
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
      "while 1 do do break end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
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
    root.testSuite['while'] = tests;
  }
}(this));
