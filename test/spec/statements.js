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
}(this, 'statements', function (exports) {
  'use strict';

  exports.name = 'statements';
  exports.spec = {
    "break": {
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement",
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            0,
            5
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
          "column": 5
        }
      },
      "range": [
        0,
        5
      ],
      "comments": [],
      "globals": []
    },
    "nil": "[1:0] unexpected symbol 'nil' near '<eof>'",
    "::foo": {
      "result": "[1:5] '::' expected near '<eof>'",
      "options": {
        "scope": true,
        "locations": true,
        "ranges": true,
        "luaVersion": "5.2"
      }
    },
    "::foo::": {
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LabelStatement",
            "label": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 2
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                2,
                5
              ],
              "isLocal": true
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "range": [
              0,
              7
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
            "column": 7
          }
        },
        "range": [
          0,
          7
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "scope": true,
        "locations": true,
        "ranges": true,
        "luaVersion": "5.2"
      }
    },
    "goto": {
      "result": "[1:4] <name> expected near '<eof>'",
      "options": {
        "scope": true,
        "locations": true,
        "ranges": true,
        "luaVersion": "5.2"
      }
    },
    "goto foo": {
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "GotoStatement",
            "label": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 5
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                5,
                8
              ]
            },
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
      },
      "options": {
        "scope": true,
        "locations": true,
        "ranges": true,
        "luaVersion": "5.2"
      }
    },
    "call1();(0)()": {
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "call1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  0,
                  5
                ],
                "isLocal": false
              },
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                0,
                7
              ]
            },
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
          },
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "NumericLiteral",
                "value": 0,
                "raw": "0",
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
                "inParens": true
              },
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              },
              "range": [
                8,
                13
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 13
              }
            },
            "range": [
              8,
              13
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
            "column": 13
          }
        },
        "range": [
          0,
          13
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "call1",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              0,
              5
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "scope": true,
        "locations": true,
        "ranges": true,
        "luaVersion": "5.1"
      }
    },
    ";;": {
      "result": "[1:0] unexpected symbol ';' near ';'",
      "options": {
        "scope": true,
        "locations": true,
        "ranges": true,
        "luaVersion": "5.1"
      }
    },
    ";;": {
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 2
          }
        },
        "range": [
          0,
          2
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "scope": true,
        "locations": true,
        "ranges": true,
        "luaVersion": "5.2"
      }
    },
  };
}));
