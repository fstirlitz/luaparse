(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "local": {
      "local": "[1:5] <name> expected near '<eof>'",
      "local;": "[1:5] <name> expected near ';'",
      "local =": "[1:6] <name> expected near '='",
      "local end": "[1:6] <name> expected near 'end'",
      "local a": {
        "type": "Chunk",
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
        ],
        "comments": [],
        "globals": []
      },
      "local a;": {
        "type": "Chunk",
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
        ],
        "comments": [],
        "globals": []
      },
      "local a, b, c": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              }
            ],
            "init": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a; local b local c;": {
        "type": "Chunk",
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
          },
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              }
            ],
            "init": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a = 1": {
        "type": "Chunk",
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a local b = a": {
        "type": "Chunk",
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
            "init": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a, b = 1, 2": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a, b, c = 1, 2, 3": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              },
              {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a, b, c = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a = 1, 2, 3": {
        "type": "Chunk",
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              },
              {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3"
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a, local": "[1:9] <name> expected near 'local'",
      "local 1": "[1:6] <name> expected near '1'",
      "local \"foo\"": "[1:6] <name> expected near 'foo'",
      "local a = local": "[1:10] <expression> expected near 'local'",
      "local a, b, =": "[1:12] <name> expected near '='",
      "local a, b = 1, local": "[1:16] <expression> expected near 'local'",
      "local a, b = , local": "[1:13] <expression> expected near ','",
      "local function": "[1:14] <name> expected near '<eof>'",
      "local function 1": "[1:15] <name> expected near '1'",
      "local function end": "[1:15] <name> expected near 'end'",
      "local function a": "[1:16] '(' expected near '<eof>'",
      "local function a end": "[1:17] '(' expected near 'end'",
      "local function a( end": "[1:18] <name> or '...' expected near 'end'",
      "local function a() end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [],
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local function a(1": "[1:17] <name> or '...' expected near '1'",
      "local function a(\"foo\"": "[1:17] <name> or '...' expected near 'foo'",
      "local function a(p": "[1:18] <name> or '...' expected near '<eof>'",
      "local function a(p,)": "[1:19] <name> or '...' expected near ')'",
      "local function a(p q": "[1:20] <name> or '...' expected near '<eof>'",
      "local function a(p) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": true
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local function a(p,q,) end": "[1:21] <name> or '...' expected near ')'",
      "local function a(p,q,r) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "q",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "r",
                "isLocal": true
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local function a(p,q,1": "[1:21] <name> or '...' expected near '1'",
      "local function a(p) do": "[1:22] 'end' expected near '<eof>'",
      "local function a(p) 1 end": "[1:20] Unexpected number '1' near 'end'",
      "local function a(p) return end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": true
              }
            ],
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
      "local function a(p) return return end": "[1:27] 'end' expected near 'return'",
      "local function a(p) do end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": true
              }
            ],
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
      "local function a.": "[1:16] '(' expected near '.'",
      "local function a:": "[1:16] '(' expected near ':'",
      "local function a(...) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "..."
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local function a(...,": "[1:20] ')' expected near ','",
      "local function a(p,...) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "..."
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local function a(p,q,r,...) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "q",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "r",
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "..."
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "local function a() local a local b end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [],
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
      "local function a() local a; local b; end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [],
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
      "local function a() end; local function a() end;": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [],
            "body": []
          },
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [],
            "body": []
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
    root.testSuite['local'] = tests;
  }
}(this));
