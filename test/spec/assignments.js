(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "assignments": {
      "a": "[1:0] Unexpected identifier 'a' near '<eof>'",
      "a,": "[1:2] <expression> expected near '<eof>'",
      "a,b,c": "[1:5] '=' expected near '<eof>'",
      "a,b =": "[1:5] <expression> expected near '<eof>'",
      "a = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "a = 1,2,3": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "a,b,c = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
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
          }
        ]
      },
      "a,b,c = 1,2,3": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
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
          }
        ]
      },
      "a.b = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
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
      "a.b.c = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
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
          }
        ]
      },
      "a[b] = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
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
      "a[b][c] = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "IndexExpression",
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                }
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
          }
        ]
      },
      "a.b[c] = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "IndexExpression",
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
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                }
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
          }
        ]
      },
      "a[b].c = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  }
                }
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
          }
        ]
      },
      "a[b], a[c] = 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                }
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
          }
        ]
      },
      "0 =": "[1:0] Unexpected number '0' near '='",
      "\"foo\" =": "[1:0] Unexpected string 'foo' near '='",
      "true =": "[1:0] Unexpected boolean 'true' near '='",
      "(a) =": "[1:5] <expression> expected near '<eof>'",
      "{} =": "[1:0] Unexpected symbol '{' near '}'",
      "a:b() =": "[1:7] <expression> expected near '<eof>'",
      "a() =": "[1:5] <expression> expected near '<eof>'",
      "a.b:c() =": "[1:9] <expression> expected near '<eof>'",
      "a[b]() =": "[1:8] <expression> expected near '<eof>'",
      "a = a b": "[1:6] Unexpected identifier 'b' near '<eof>'",
      "a = 1 2": "[1:6] Unexpected number '2' near '<eof>'",
      "a = a = 1": "[1:6] Unexpected symbol '=' near '1'"
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
    root.testSuite['assignments'] = tests;
  }
}(this));
