(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "functions": {
      "function": "[1:8] <name> expected near '<eof>'",
      "function 1": "[1:9] <name> expected near '1'",
      "function end": "[1:9] <name> expected near 'end'",
      "function a": "[1:10] '(' expected near '<eof>'",
      "function a end": "[1:11] '(' expected near 'end'",
      "function a( end": "[1:12] <name> or '...' expected near 'end'",
      "function a() end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a(1": "[1:11] <name> or '...' expected near '1'",
      "function a(\"foo\"": "[1:11] <name> or '...' expected near 'foo'",
      "function a(p": "[1:12] <name> or '...' expected near '<eof>'",
      "function a(p,)": "[1:13] <name> or '...' expected near ')'",
      "function a(p q": "[1:14] <name> or '...' expected near '<eof>'",
      "function a(p) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a(p,q,) end": "[1:15] <name> or '...' expected near ')'",
      "function a(p,q,r) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a(p,q,1": "[1:15] <name> or '...' expected near '1'",
      "function a(p) do": "[1:16] 'end' expected near '<eof>'",
      "function a(p) 1 end": "[1:14] Unexpected number '1' near 'end'",
      "function a(p) return end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a(p) return return end": "[1:21] 'end' expected near 'return'",
      "function a(p) do end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a.(": "[1:11] <name> expected near '('",
      "function a.1": "[1:10] '(' expected near '0.1'",
      "function a.b() end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              },
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            },
            "isLocal": false,
            "parameters": [],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "function a.b,": "[1:12] '(' expected near ','",
      "function a.b.(": "[1:13] <name> expected near '('",
      "function a.b.c.d() end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "d",
                "isLocal": false
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  }
                }
              }
            },
            "isLocal": false,
            "parameters": [],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          }
        ]
      },
      "function a:": "[1:11] <name> expected near '<eof>'",
      "function a:1": "[1:11] <name> expected near '1'",
      "function a:b() end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              },
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            },
            "isLocal": false,
            "parameters": [],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "function a:b:": "[1:12] '(' expected near ':'",
      "function a:b.": "[1:12] '(' expected near '.'",
      "function a.b.c:d() end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "d",
                "isLocal": false
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  }
                }
              }
            },
            "isLocal": false,
            "parameters": [],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          }
        ]
      },
      "function a(...) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a(...,": "[1:14] ')' expected near ','",
      "function a(p,...) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a(...,p) end": "[1:14] ')' expected near ','",
      "function a(p,q,r,...) end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a() local a local b end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a() local a; local b; end": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "function a() end; function a() end;": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [],
            "body": []
          },
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      }
    }
  };

  if (freeExports && !freeExports.nodeType) {
    if (freeModule) freeModule.exports = tests; // In Node.js or Ringo v0.8.0+
    else { // In Narwhal or RingoJS v0.7.0-
      for (var test in tests) if (tests.hasOwnProperty(test)) {
         freeExports[test] = tests[test];
      }
    }
  } else { // In Rhino or web browser
    if (!root.testSuite) root.testSuite = {};
    root.testSuite['functions'] = tests;
  }
}(this));
