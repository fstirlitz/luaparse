(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "tableconstructors": {
      "a = {": "[1:5] '}' expected near '<eof>'",
      "a = {}": {
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
                "type": "TableConstructorExpression",
                "fields": []
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
      "a = {,}": "[1:5] '}' expected near ','",
      "a = {;}": "[1:5] '}' expected near ';'",
      "a = {,,}": "[1:5] '}' expected near ','",
      "a = {;;}": "[1:5] '}' expected near ';'",
      "a = {{": "[1:6] '}' expected near '<eof>'",
      "a = {{{}}}": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "TableConstructorExpression",
                      "fields": [
                        {
                          "type": "TableValue",
                          "value": {
                            "type": "TableConstructorExpression",
                            "fields": []
                          }
                        }
                      ]
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
      "a = {{},{},{{}},}": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "TableConstructorExpression",
                      "fields": []
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "TableConstructorExpression",
                      "fields": []
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "TableConstructorExpression",
                      "fields": [
                        {
                          "type": "TableValue",
                          "value": {
                            "type": "TableConstructorExpression",
                            "fields": []
                          }
                        }
                      ]
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
      "a = { 1 }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
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
      "a = { 1, }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
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
      "a = { 1; }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
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
      "a = { 1, 2 }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
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
      "a = { a, b, c, }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    }
                  },
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
                      "type": "Identifier",
                      "name": "c",
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
      "a = { true; false, nil; }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true"
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "BooleanLiteral",
                      "value": false,
                      "raw": "false"
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "NilLiteral",
                      "value": null,
                      "raw": "nil"
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
      "a = { a.b, a[b]; a:c(), }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
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
                  },
                  {
                    "type": "TableValue",
                    "value": {
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
                          "name": "c",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
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
      "a = { 1 + 2, a > b, \"a\" or \"b\" }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "name": "a",
                        "isLocal": false
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": false
                      }
                    }
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "LogicalExpression",
                      "operator": "or",
                      "left": {
                        "type": "StringLiteral",
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "right": {
                        "type": "StringLiteral",
                        "value": "b",
                        "raw": "\"b\""
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
      "a = { a=1, }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    },
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
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
      "a = { a=1, b=\"foo\", c=nil }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    },
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "value": {
                      "type": "StringLiteral",
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    },
                    "value": {
                      "type": "NilLiteral",
                      "value": null,
                      "raw": "nil"
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
      "a = { a": "[1:7] '}' expected near '<eof>'",
      "a = { a=": "[1:8] <expression> expected near '<eof>'",
      "a = { a=,": "[1:8] <expression> expected near ','",
      "a = { a=;": "[1:8] <expression> expected near ';'",
      "a = { 1, a=\"foo\"": "[1:16] '}' expected near '<eof>'",
      "a = { 1, a=\"foo\"; b={}, d=true; }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    },
                    "value": {
                      "type": "StringLiteral",
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "value": {
                      "type": "TableConstructorExpression",
                      "fields": []
                    }
                  },
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "d",
                      "isLocal": false
                    },
                    "value": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true"
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
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          }
        ]
      },
      "a = { [": "[1:7] <expression> expected near '<eof>'",
      "a = { [1": "[1:8] ']' expected near '<eof>'",
      "a = { [1]": "[1:9] '=' expected near '<eof>'",
      "a = { [a]=": "[1:10] <expression> expected near '<eof>'",
      "a = { [\"foo\"]=\"bar\" }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableKey",
                    "key": {
                      "type": "StringLiteral",
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "value": {
                      "type": "StringLiteral",
                      "value": "bar",
                      "raw": "\"bar\""
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
      "a = { [1]=a, [2]=b, }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableKey",
                    "key": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    },
                    "value": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    }
                  },
                  {
                    "type": "TableKey",
                    "key": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    },
                    "value": {
                      "type": "Identifier",
                      "name": "b",
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
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "a = { true, a=1; [\"foo\"]=\"bar\", }": {
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
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true"
                    }
                  },
                  {
                    "type": "TableKeyString",
                    "key": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    },
                    "value": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "TableKey",
                    "key": {
                      "type": "StringLiteral",
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "value": {
                      "type": "StringLiteral",
                      "value": "bar",
                      "raw": "\"bar\""
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
      "a = { [] }": "[1:7] <expression> expected near ']'",
      "a = { a= }": "[1:9] <expression> expected near '}'"
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
    root.testSuite['tableconstructors'] = tests;
  }
}(this));
