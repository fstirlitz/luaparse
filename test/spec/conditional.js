(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "conditional": {
      "if": "[1:2] <expression> expected near '<eof>'",
      "elseif": "[1:0] Unexpected keyword 'elseif' near '<eof>'",
      "else": "[1:0] Unexpected keyword 'else' near '<eof>'",
      "then": "[1:0] Unexpected keyword 'then' near '<eof>'",
      "if then": "[1:3] <expression> expected near 'then'",
      "if 1": "[1:4] 'then' expected near '<eof>'",
      "if 1 then": "[1:9] 'end' expected near '<eof>'",
      "if 1 else": "[1:5] 'then' expected near 'else'",
      "if 1 then else": "[1:14] 'end' expected near '<eof>'",
      "if 1 then elseif": "[1:16] <expression> expected near '<eof>'",
      "if 1 then end": {
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
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then local a end": {
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
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then local a local b end": {
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
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then local a; local b; end": {
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
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then else end": {
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
                "type": "ElseClause",
                "body": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then local a else local b end": {
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
              },
              {
                "type": "ElseClause",
                "body": [
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
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then local a; else local b; end": {
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
              },
              {
                "type": "ElseClause",
                "body": [
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
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then elseif 2": "[1:18] 'then' expected near '<eof>'",
      "if 1 then elseif 2 then": "[1:23] 'end' expected near '<eof>'",
      "if 1 then elseif 2 then end": {
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
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then local a elseif 2 then local b end": {
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
              },
              {
                "type": "ElseifClause",
                "condition": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                },
                "body": [
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
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then local a; elseif 2 then local b; end": {
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
              },
              {
                "type": "ElseifClause",
                "condition": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                },
                "body": [
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
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then elseif 2 then else end": {
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
        "comments": [],
        "globals": []
      },
      "if 1 then else if 2 then end end": {
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
                "type": "ElseClause",
                "body": [
                  {
                    "type": "IfStatement",
                    "clauses": [
                      {
                        "type": "IfClause",
                        "condition": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        },
                        "body": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if 1 then else if 2 then end": "[1:28] 'end' expected near '<eof>'",
      "if 1 then return end": {
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
      "if 1 then return return end": "[1:17] 'end' expected near 'return'",
      "if 1 then end; if 1 then end;": {
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
              }
            ]
          },
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
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "if then end": "[1:3] <expression> expected near 'then'",
      "if 1 then elseif then end": "[1:17] <expression> expected near 'then'"
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
    root.testSuite['conditional'] = tests;
  }
}(this));
