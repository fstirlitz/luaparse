(function (root, name, factory) {
  'use strict';

  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports === freeExports && module
    , freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) root = freeGlobal;

  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  else if (freeExports && !freeExports.nodeType) {
    if (freeModule) factory(freeModule.exports);
    else factory(freeExports);
  }
  else factory((root[name] = {}));
}(this, 'return', function (exports) {
  'use strict';

  exports.name = 'return';
  exports.spec = [
    {
      "source": "return return",
      "result": "[1:7] unexpected keyword 'return' near '<eof>'"
    },
    {
      "source": "return 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              0,
              8
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 8
          }
        },
        "range": [
          0,
          8
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "return local",
      "result": "[1:7] unexpected keyword 'local' near '<eof>'"
    },
    {
      "source": "return \"foo\"",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "StringLiteral",
                "value": null,
                "raw": "\"foo\"",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  7,
                  12
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 12
              }
            },
            "range": [
              0,
              12
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "range": [
          0,
          12
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "return 1,",
      "result": "[1:9] <expression> expected near '<eof>'"
    },
    {
      "source": "return 1,2,3",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  9,
                  10
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 12
              }
            },
            "range": [
              0,
              12
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "range": [
          0,
          12
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "return a,b,c,d",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  9,
                  10
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  11,
                  12
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "d",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 13
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  13,
                  14
                ],
                "isLocal": false
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 14
              }
            },
            "range": [
              0,
              14
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "range": [
          0,
          14
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 8
              }
            },
            "range": [
              7,
              8
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 11
              },
              "end": {
                "line": 1,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "loc": {
              "start": {
                "line": 1,
                "column": 13
              },
              "end": {
                "line": 1,
                "column": 14
              }
            },
            "range": [
              13,
              14
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "return 1,2;",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 8
                  }
                },
                "range": [
                  7,
                  8
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  9,
                  10
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              0,
              11
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 11
          }
        },
        "range": [
          0,
          11
        ],
        "comments": [],
        "globals": []
      }
    }
  ];
}));
