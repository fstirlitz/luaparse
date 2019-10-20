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
}(this, 'comments', function (exports) {
  'use strict';

  exports.name = 'comments';
  exports.spec = [
    {
      "source": "-- comment",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 10
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "range": [
          10,
          10
        ],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              0,
              10
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "-- comment\n-- comment",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 2,
            "column": 10
          },
          "end": {
            "line": 2,
            "column": 10
          }
        },
        "range": [
          21,
          21
        ],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              0,
              10
            ]
          },
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment",
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 10
              }
            },
            "range": [
              11,
              21
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--coment",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 8
          },
          "end": {
            "line": 1,
            "column": 8
          }
        },
        "range": [
          8,
          8
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "coment",
            "raw": "--coment",
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
        "globals": []
      }
    },
    {
      "source": "-- comment\nreturn",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [],
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 6
              }
            },
            "range": [
              11,
              17
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 6
          }
        },
        "range": [
          11,
          17
        ],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              0,
              10
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "return --comment \n",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              0,
              6
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
            "column": 6
          }
        },
        "range": [
          0,
          6
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment ",
            "raw": "--comment ",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 17
              }
            },
            "range": [
              7,
              17
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--[[comment]]",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 1,
            "column": 13
          },
          "end": {
            "line": 1,
            "column": 13
          }
        },
        "range": [
          13,
          13
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--[[comment]]",
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
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "if true--[[comment]]then end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "IfStatement",
            "clauses": [
              {
                "type": "IfClause",
                "condition": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 3
                    },
                    "end": {
                      "line": 1,
                      "column": 7
                    }
                  },
                  "range": [
                    3,
                    7
                  ]
                },
                "body": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 24
                  }
                },
                "range": [
                  0,
                  24
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
                "column": 28
              }
            },
            "range": [
              0,
              28
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
            "column": 28
          }
        },
        "range": [
          0,
          28
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--[[comment]]",
            "loc": {
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 20
              }
            },
            "range": [
              7,
              20
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--[=[comment]=] return",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 16
              },
              "end": {
                "line": 1,
                "column": 22
              }
            },
            "range": [
              16,
              22
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 16
          },
          "end": {
            "line": 1,
            "column": 22
          }
        },
        "range": [
          16,
          22
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--[=[comment]=]",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 15
              }
            },
            "range": [
              0,
              15
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--[===[comment\n--[=[sub]=]--\n]===]return",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [],
            "loc": {
              "start": {
                "line": 3,
                "column": 5
              },
              "end": {
                "line": 3,
                "column": 11
              }
            },
            "range": [
              34,
              40
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 3,
            "column": 5
          },
          "end": {
            "line": 3,
            "column": 11
          }
        },
        "range": [
          34,
          40
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment\n--[=[sub]=]--\n",
            "raw": "--[===[comment\n--[=[sub]=]--\n]===]",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 3,
                "column": 5
              }
            },
            "range": [
              0,
              34
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--[[comment\nline two]]",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 2,
            "column": 10
          },
          "end": {
            "line": 2,
            "column": 10
          }
        },
        "range": [
          22,
          22
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment\nline two",
            "raw": "--[[comment\nline two]]",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 10
              }
            },
            "range": [
              0,
              22
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--[[\ncomment\nline two\n]]",
      "result": {
        "type": "Chunk",
        "body": [],
        "loc": {
          "start": {
            "line": 4,
            "column": 2
          },
          "end": {
            "line": 4,
            "column": 2
          }
        },
        "range": [
          24,
          24
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment\nline two\n",
            "raw": "--[[\ncomment\nline two\n]]",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "range": [
              0,
              24
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--[==\nreturn --]]",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [],
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 6
              }
            },
            "range": [
              6,
              12
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 6
          }
        },
        "range": [
          6,
          12
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "[==",
            "raw": "--[==",
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
          },
          {
            "type": "Comment",
            "value": "]]",
            "raw": "--]]",
            "loc": {
              "start": {
                "line": 2,
                "column": 7
              },
              "end": {
                "line": 2,
                "column": 11
              }
            },
            "range": [
              13,
              17
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "if true -- comment\nthen end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "IfStatement",
            "clauses": [
              {
                "type": "IfClause",
                "condition": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 3
                    },
                    "end": {
                      "line": 1,
                      "column": 7
                    }
                  },
                  "range": [
                    3,
                    7
                  ]
                },
                "body": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 2,
                    "column": 4
                  }
                },
                "range": [
                  0,
                  23
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 8
              }
            },
            "range": [
              0,
              27
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 8
          }
        },
        "range": [
          0,
          27
        ],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment",
            "loc": {
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 18
              }
            },
            "range": [
              8,
              18
            ]
          }
        ],
        "globals": []
      }
    },
    {
      "source": "--[=[x]x",
      "result": "[1:9] unfinished long comment (starting at line 1) near '<eof>'"
    }
  ];
}));
