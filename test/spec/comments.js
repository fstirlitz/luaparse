(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "comments": {
      "-- comment": {
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
      },
      "-- comment\n-- comment": {
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
      },
      "--coment": {
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
      },
      "-- comment\nbreak": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement",
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 5
              }
            },
            "range": [
              11,
              16
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
            "column": 5
          }
        },
        "range": [
          11,
          16
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
      },
      "break--comment": {
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
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--comment",
            "loc": {
              "start": {
                "line": 1,
                "column": 5
              },
              "end": {
                "line": 1,
                "column": 14
              }
            },
            "range": [
              5,
              14
            ]
          }
        ],
        "globals": []
      },
      "--[[comment]]": {
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
      },
      "if true--[[comment]]then end": {
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
      },
      "--[=[comment]=]break": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement",
            "loc": {
              "start": {
                "line": 1,
                "column": 15
              },
              "end": {
                "line": 1,
                "column": 20
              }
            },
            "range": [
              15,
              20
            ]
          }
        ],
        "loc": {
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 1,
            "column": 20
          }
        },
        "range": [
          15,
          20
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
      },
      "--[===[comment\n--[=[sub]=]--\n]===]break": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement",
            "loc": {
              "start": {
                "line": 3,
                "column": 5
              },
              "end": {
                "line": 3,
                "column": 10
              }
            },
            "range": [
              34,
              39
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
            "column": 10
          }
        },
        "range": [
          34,
          39
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
      },
      "--[[comment\nline two]]": {
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
      },
      "--[[\ncomment\nline two\n]]": {
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
      },
      "--[==\nbreak --]]": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement",
            "loc": {
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 2,
                "column": 5
              }
            },
            "range": [
              6,
              11
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
            "column": 5
          }
        },
        "range": [
          6,
          11
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
                "column": 6
              },
              "end": {
                "line": 2,
                "column": 10
              }
            },
            "range": [
              12,
              16
            ]
          }
        ],
        "globals": []
      },
      "if true -- comment\nthen end": {
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
    root.testSuite['comments'] = tests;
  }
}(this));
