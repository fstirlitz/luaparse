(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "operators": {
      "a = -10": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "NumericLiteral",
                  "value": 10,
                  "raw": "10"
                }
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
      "a = -\"foo\"": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                }
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
      "a = -a": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
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
      "a = -nil": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil"
                }
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
      "a = -true": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                }
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
      "a = -{}": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
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
      "a = -function() end": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                }
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
      "a = -a()": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "arguments": []
                }
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
      "a = -(a)": {
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
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
      "a = -": "[1:5] <expression> expected near '<eof>'",
      "a = not 10": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "NumericLiteral",
                  "value": 10,
                  "raw": "10"
                }
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
      "a = not \"foo\"": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                }
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
      "a = not a": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
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
      "a = not nil": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil"
                }
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
      "a = not true": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                }
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
      "a = not {}": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
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
      "a = not function() end": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                }
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
      "a = not a()": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "arguments": []
                }
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
      "a = not (a)": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
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
      "a = not": "[1:7] <expression> expected near '<eof>'",
      "a = 1 + 2; a = 1 - 2": {
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
            ]
          },
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
                "type": "BinaryExpression",
                "operator": "-",
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
      "a = 1 * 2; a = 1 / 2": {
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
                "type": "BinaryExpression",
                "operator": "*",
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
            ]
          },
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
                "type": "BinaryExpression",
                "operator": "/",
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
      "a = 1 ^ 2; a = 1 .. 2": {
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
                "type": "BinaryExpression",
                "operator": "^",
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
            ]
          },
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
                "type": "BinaryExpression",
                "operator": "..",
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
      "a = 1 +": "[1:7] <expression> expected near '<eof>'",
      "a = 1 ..": "[1:8] <expression> expected near '<eof>'",
      "a = 1 * /": "[1:8] <expression> expected near '/'",
      "a = 1 + -2; a = 1 - -2": {
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
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                }
              }
            ]
          },
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                }
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
      "a = 1 * -": "[1:9] <expression> expected near '<eof>'",
      "a = 1 * not 2; a = 1 / not 2": {
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                }
              }
            ]
          },
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
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                }
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
      "a = 1 / not": "[1:11] <expression> expected near '<eof>'",
      "a = 1 + 2 - 3 * 4 / 5 ^ 6": {
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
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
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 5,
                      "raw": "5"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6"
                    }
                  }
                }
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
      "a = ((1 + 2) - 3) * (4 / (5 ^ 6))": {
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
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
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 3,
                    "raw": "3"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 4,
                    "raw": "4"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 5,
                      "raw": "5"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6"
                    }
                  }
                }
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
      "a = (1 + (2 - (3 * (4 / (5 ^ ((6)))))))": {
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
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 4,
                        "raw": "4"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "^",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 5,
                          "raw": "5"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 6,
                          "raw": "6"
                        }
                      }
                    }
                  }
                }
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
      "a = ((1": "[1:7] ')' expected near '<eof>'",
      "a = ((1 + 2)": "[1:12] ')' expected near '<eof>'",
      "a = 1)": "[1:5] Unexpected symbol ')' near '<eof>'",
      "a = a + b - c": {
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
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
                },
                "right": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                }
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
      "a = \"foo\" + \"bar\"": {
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
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "bar",
                  "raw": "\"bar\""
                }
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
      "a = \"foo\"..\"bar\"..\"baz\"": {
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
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "..",
                  "left": {
                    "type": "StringLiteral",
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "right": {
                    "type": "StringLiteral",
                    "value": "baz",
                    "raw": "\"baz\""
                  }
                }
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
      "a = true + false - nil": {
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BooleanLiteral",
                    "value": true,
                    "raw": "true"
                  },
                  "right": {
                    "type": "BooleanLiteral",
                    "value": false,
                    "raw": "false"
                  }
                },
                "right": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil"
                }
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
      "a = {} * {}": {
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "TableConstructorExpression",
                  "fields": []
                },
                "right": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
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
      "a = function() end / function() end": {
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
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                },
                "right": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                }
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
      "a = a() ^ b()": {
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
                "type": "BinaryExpression",
                "operator": "^",
                "left": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "arguments": []
                },
                "right": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  },
                  "arguments": []
                }
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
      "a = 1 == 2; a = 1 ~= 2": {
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
                "type": "BinaryExpression",
                "operator": "==",
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
            ]
          },
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
                "type": "BinaryExpression",
                "operator": "~=",
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
      "a = 1 < 2; a = 1 <= 2": {
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
                "type": "BinaryExpression",
                "operator": "<",
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
            ]
          },
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
                "type": "BinaryExpression",
                "operator": "<=",
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
      "a = 1 > 2; a = 1 >= 2": {
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
                "type": "BinaryExpression",
                "operator": ">",
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
            ]
          },
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
                "type": "BinaryExpression",
                "operator": ">=",
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
      "a = 1 < 2 < 3": {
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
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "<",
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
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
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
      "a = 1 >= 2 >= 3": {
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
                "type": "BinaryExpression",
                "operator": ">=",
                "left": {
                  "type": "BinaryExpression",
                  "operator": ">=",
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
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
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
      "a = 1 ==": "[1:8] <expression> expected near '<eof>'",
      "a = `": "[1:5] Unexpected symbol '`' near '='",
      "a = ~": "[1:5] '=' expected near '~'",
      "a = ~= 2": "[1:4] <expression> expected near '~='",
      "a = \"foo\" == \"bar\"": {
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "bar",
                  "raw": "\"bar\""
                }
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
      "a = \"foo\" > \"bar\"": {
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
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "bar",
                  "raw": "\"bar\""
                }
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
      "a = a ~= b": {
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
                "type": "BinaryExpression",
                "operator": "~=",
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
      "a = true == false": {
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                },
                "right": {
                  "type": "BooleanLiteral",
                  "value": false,
                  "raw": "false"
                }
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
      "a = 1 and 2; a = 1 or 2": {
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
                "type": "LogicalExpression",
                "operator": "and",
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
            ]
          },
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
                "type": "LogicalExpression",
                "operator": "or",
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
      "a = 1 and": "[1:9] <expression> expected near '<eof>'",
      "a = or 1": "[1:4] <expression> expected near 'or'",
      "a = 1 and 2 and 3": {
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
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
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
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
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
      "a = 1 or 2 or 3": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "or",
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
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
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
      "a = 1 and 2 or 3": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
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
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
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
      "a = a and b or c": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
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
                },
                "right": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                }
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
      "a = a() and (b)() or c.d": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "CallExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    },
                    "arguments": []
                  },
                  "right": {
                    "type": "CallExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "arguments": []
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "c",
                    "isLocal": false
                  }
                }
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
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          }
        ]
      },
      "a = \"foo\" and \"bar\"": {
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
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "bar",
                  "raw": "\"bar\""
                }
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
      "a = true or false": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                },
                "right": {
                  "type": "BooleanLiteral",
                  "value": false,
                  "raw": "false"
                }
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
      "a = {} and {} or {}": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  },
                  "right": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  }
                },
                "right": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
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
      "a = (1) and (\"foo\") or (nil)": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "StringLiteral",
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "right": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil"
                }
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
      "a = function() end == function() end": {
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                },
                "right": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                }
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
      "a = function() end or function() end": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                },
                "right": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": []
                }
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
      "a = (((1 or false) and true) or false) == true": {
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "and",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "or",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "BooleanLiteral",
                        "value": false,
                        "raw": "false"
                      }
                    },
                    "right": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true"
                    }
                  },
                  "right": {
                    "type": "BooleanLiteral",
                    "value": false,
                    "raw": "false"
                  }
                },
                "right": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                }
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
      "a = (((nil and true) or false) and true) == false": {
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "LogicalExpression",
                      "operator": "and",
                      "left": {
                        "type": "NilLiteral",
                        "value": null,
                        "raw": "nil"
                      },
                      "right": {
                        "type": "BooleanLiteral",
                        "value": true,
                        "raw": "true"
                      }
                    },
                    "right": {
                      "type": "BooleanLiteral",
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "right": {
                    "type": "BooleanLiteral",
                    "value": true,
                    "raw": "true"
                  }
                },
                "right": {
                  "type": "BooleanLiteral",
                  "value": false,
                  "raw": "false"
                }
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
      "a = not ((true or false) and nil)": {
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true"
                    },
                    "right": {
                      "type": "BooleanLiteral",
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "right": {
                    "type": "NilLiteral",
                    "value": null,
                    "raw": "nil"
                  }
                }
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
      "a = true or false  and nil": {
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                },
                "right": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "BooleanLiteral",
                    "value": false,
                    "raw": "false"
                  },
                  "right": {
                    "type": "NilLiteral",
                    "value": null,
                    "raw": "nil"
                  }
                }
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
      "a = 2^-2 == 1/4 and -2^- -2 == - - -4": {
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
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 4,
                      "raw": "4"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "^",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "NumericLiteral",
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      }
                    }
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 4,
                          "raw": "4"
                        }
                      }
                    }
                  }
                }
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
      "a = -3-1-5 == 0+0-9": {
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 5,
                    "raw": "5"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 9,
                    "raw": "9"
                  }
                }
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
      "a = -2^2 == -4 and (-2)^2 == 4 and 2*2-3-1 == 0": {
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
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "^",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "NumericLiteral",
                        "value": 4,
                        "raw": "4"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "^",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 4,
                      "raw": "4"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        },
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                }
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
      "a = 2*1+3/3 == 3 and 1+2 .. 3*1 == \"33\"": {
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
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      }
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 3,
                    "raw": "3"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "..",
                    "left": {
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
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  },
                  "right": {
                    "type": "StringLiteral",
                    "value": "33",
                    "raw": "\"33\""
                  }
                }
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
      "a = not nil and 2 and not(2>3 or 3<2)": {
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
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "not",
                    "argument": {
                      "type": "NilLiteral",
                      "value": null,
                      "raw": "nil"
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                }
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
      "a = not(2+1 > 3*1) and \"a\"..\"b\" > \"a\"": {
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
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 3,
                        "raw": "3"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "..",
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
                  },
                  "right": {
                    "type": "StringLiteral",
                    "value": "a",
                    "raw": "\"a\""
                  }
                }
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
    root.testSuite['operators'] = tests;
  }
}(this));
