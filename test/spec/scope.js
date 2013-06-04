(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "scope": {
      "local foo = 1 do foo = 2 end": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "foo",
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
          },
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
                    "isLocal": true
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "do local foo = 1 end foo = 2": {
        "type": "Chunk",
        "body": [
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
            ]
          },
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "foo",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "foo",
            "isLocal": false
          }
        ]
      },
      "do local foo = 1 end do foo = 2 end": {
        "type": "Chunk",
        "body": [
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
            ]
          },
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
                    "isLocal": false
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "foo",
            "isLocal": false
          }
        ]
      },
      "local foo do foo = 1 do foo = 2 end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "foo",
                "isLocal": true
              }
            ],
            "init": []
          },
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
              },
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "AssignmentStatement",
                    "variables": [
                      {
                        "type": "Identifier",
                        "name": "foo",
                        "isLocal": true
                      }
                    ],
                    "init": [
                      {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
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
      "local function foo() end foo()": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "foo",
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [],
            "body": []
          },
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "foo",
                "isLocal": true
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a = { a }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    }
                  }
                ]
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
      "local b = { b, b.a, b[a], b:a() }": {
        "type": "Chunk",
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
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "a",
                        "isLocal": false
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": false
                      }
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "IndexExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": false
                      },
                      "index": {
                        "type": "Identifier",
                        "name": "a",
                        "isLocal": false
                      }
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": false
                        }
                      },
                      "arguments": []
                    }
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "local b = {} local a = { b, b.a, b[a], b:a() }": {
        "type": "Chunk",
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
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": []
              }
            ]
          },
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": true
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "a",
                        "isLocal": true
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": true
                      }
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "IndexExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": true
                      },
                      "index": {
                        "type": "Identifier",
                        "name": "a",
                        "isLocal": false
                      }
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": true
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": true
                        }
                      },
                      "arguments": []
                    }
                  }
                ]
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
      "local c local a = { b[c] }": {
        "type": "Chunk",
        "body": [
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
          },
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "IndexExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": false
                      },
                      "index": {
                        "type": "Identifier",
                        "name": "c",
                        "isLocal": true
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "local a = function() end a()": {
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
                "type": "FunctionDeclaration",
                "identifier": null,
                "isLocal": false,
                "parameters": [],
                "body": []
              }
            ]
          },
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a, b = 1, a": {
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
                "type": "Identifier",
                "name": "a",
                "isLocal": false
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
      "local a, b = 1, function() b = 2 end": {
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
                "type": "FunctionDeclaration",
                "identifier": null,
                "isLocal": false,
                "parameters": [],
                "body": [
                  {
                    "type": "AssignmentStatement",
                    "variables": [
                      {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": false
                      }
                    ],
                    "init": [
                      {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "local a (a):b():c()": {
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
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ":",
                "identifier": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": true
                },
                "base": {
                  "type": "CallExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ":",
                    "identifier": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": true
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": true
                    }
                  },
                  "arguments": []
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": []
      },
      "local a, b for i, a, b in c do end": {
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
            "init": []
          },
          {
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "i",
                "isLocal": true
              },
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
            "iterators": [
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": false
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          }
        ]
      },
      "local a, b, c for i, a, b in c do end": {
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
          },
          {
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "i",
                "isLocal": true
              },
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
            "iterators": [
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": []
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
    root.testSuite['scope'] = tests;
  }
}(this));
