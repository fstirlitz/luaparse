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
}(this, 'assignments', function (exports) {
  'use strict';

  exports.name = 'assignments';
  exports.spec = [
    {
      "source": "a",
      "result": "[1:1] '=' expected near '<eof>'"
    },
    {
      "source": "a,",
      "result": "[1:2] unexpected symbol near '<eof>'"
    },
    {
      "source": "a,b,c",
      "result": "[1:5] '=' expected near '<eof>'"
    },
    {
      "source": "a,b =",
      "result": "[1:5] <expression> expected near '<eof>'"
    },
    {
      "source": "a = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a = 1,2,3",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 7
                  }
                },
                "range": [
                  6,
                  7
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
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
                "column": 9
              }
            },
            "range": [
              0,
              9
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
            "column": 9
          }
        },
        "range": [
          0,
          9
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a,b,c = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 2
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "range": [
                  2,
                  3
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
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
                "column": 9
              }
            },
            "range": [
              0,
              9
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
            "column": 9
          }
        },
        "range": [
          0,
          9
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              4,
              5
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a,b,c = 1,2,3",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 1
                  }
                },
                "range": [
                  0,
                  1
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 2
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "range": [
                  2,
                  3
                ],
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  10,
                  11
                ]
              },
              {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 12
                  },
                  "end": {
                    "line": 1,
                    "column": 13
                  }
                },
                "range": [
                  12,
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
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              4,
              5
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a.b = 1",
      "result": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ]
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 3
                  }
                },
                "range": [
                  0,
                  3
                ]
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 7
                  }
                },
                "range": [
                  6,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a.b.c = 1",
      "result": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    4,
                    5
                  ]
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 2
                      },
                      "end": {
                        "line": 1,
                        "column": 3
                      }
                    },
                    "range": [
                      2,
                      3
                    ]
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 1
                      }
                    },
                    "range": [
                      0,
                      1
                    ],
                    "isLocal": false
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    0,
                    3
                  ]
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
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
                "column": 9
              }
            },
            "range": [
              0,
              9
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
            "column": 9
          }
        },
        "range": [
          0,
          9
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a[b] = 1",
      "result": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  0,
                  4
                ]
              }
            ],
            "init": [
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a[b][c] = 1",
      "result": {
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
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 1
                      }
                    },
                    "range": [
                      0,
                      1
                    ],
                    "isLocal": false
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 2
                      },
                      "end": {
                        "line": 1,
                        "column": 3
                      }
                    },
                    "range": [
                      2,
                      3
                    ],
                    "isLocal": false
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 4
                    }
                  },
                  "range": [
                    0,
                    4
                  ]
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    5,
                    6
                  ],
                  "isLocal": false
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  10,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 5
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              5,
              6
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a.b[c] = 1",
      "result": {
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
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 2
                      },
                      "end": {
                        "line": 1,
                        "column": 3
                      }
                    },
                    "range": [
                      2,
                      3
                    ]
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 1
                      }
                    },
                    "range": [
                      0,
                      1
                    ],
                    "isLocal": false
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    0,
                    3
                  ]
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    4,
                    5
                  ],
                  "isLocal": false
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
                "column": 10
              }
            },
            "range": [
              0,
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
            "column": 10
          }
        },
        "range": [
          0,
          10
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              4,
              5
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a[b].c = 1",
      "result": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    5,
                    6
                  ]
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 1
                      }
                    },
                    "range": [
                      0,
                      1
                    ],
                    "isLocal": false
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 2
                      },
                      "end": {
                        "line": 1,
                        "column": 3
                      }
                    },
                    "range": [
                      2,
                      3
                    ],
                    "isLocal": false
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 4
                    }
                  },
                  "range": [
                    0,
                    4
                  ]
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
                "column": 10
              }
            },
            "range": [
              0,
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
            "column": 10
          }
        },
        "range": [
          0,
          10
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a[b], a[c] = 1",
      "result": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 1
                    }
                  },
                  "range": [
                    0,
                    1
                  ],
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 2
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    2,
                    3
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 0
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  0,
                  4
                ]
              },
              {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 6
                    },
                    "end": {
                      "line": 1,
                      "column": 7
                    }
                  },
                  "range": [
                    6,
                    7
                  ],
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 8
                    },
                    "end": {
                      "line": 1,
                      "column": 9
                    }
                  },
                  "range": [
                    8,
                    9
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  6,
                  10
                ]
              }
            ],
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 2
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              2,
              3
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "loc": {
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 9
              }
            },
            "range": [
              8,
              9
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a().b = 1",
      "result": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    4,
                    5
                  ]
                },
                "base": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 1
                      }
                    },
                    "range": [
                      0,
                      1
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
                      "column": 3
                    }
                  },
                  "range": [
                    0,
                    3
                  ]
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
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
                "column": 9
              }
            },
            "range": [
              0,
              9
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
            "column": 9
          }
        },
        "range": [
          0,
          9
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "({})[b] = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "IndexExpression",
                "base": {
                  "type": "TableConstructorExpression",
                  "fields": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    1,
                    3
                  ]
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    5,
                    6
                  ],
                  "isLocal": false
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  10,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 5
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              5,
              6
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a\"\"[b] = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "IndexExpression",
                "base": {
                  "type": "StringCallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 1
                      }
                    },
                    "range": [
                      0,
                      1
                    ],
                    "isLocal": false
                  },
                  "argument": {
                    "type": "StringLiteral",
                    "value": null,
                    "raw": "\"\"",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 1
                      },
                      "end": {
                        "line": 1,
                        "column": 3
                      }
                    },
                    "range": [
                      1,
                      3
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    0,
                    3
                  ]
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    4,
                    5
                  ],
                  "isLocal": false
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
                "column": 10
              }
            },
            "range": [
              0,
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
            "column": 10
          }
        },
        "range": [
          0,
          10
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              4,
              5
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a{}[b] = 1",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "IndexExpression",
                "base": {
                  "type": "TableCallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 0
                      },
                      "end": {
                        "line": 1,
                        "column": 1
                      }
                    },
                    "range": [
                      0,
                      1
                    ],
                    "isLocal": false
                  },
                  "arguments": {
                    "type": "TableConstructorExpression",
                    "fields": [],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 1
                      },
                      "end": {
                        "line": 1,
                        "column": 3
                      }
                    },
                    "range": [
                      1,
                      3
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 3
                    }
                  },
                  "range": [
                    0,
                    3
                  ]
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    4,
                    5
                  ],
                  "isLocal": false
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
                "column": 10
              }
            },
            "range": [
              0,
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
            "column": 10
          }
        },
        "range": [
          0,
          10
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 1
              }
            },
            "range": [
              0,
              1
            ],
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              4,
              5
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "({{}})[a][b] = 1",
      "result": {
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
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "TableConstructorExpression",
                          "fields": [],
                          "loc": {
                            "start": {
                              "line": 1,
                              "column": 2
                            },
                            "end": {
                              "line": 1,
                              "column": 4
                            }
                          },
                          "range": [
                            2,
                            4
                          ]
                        },
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 2
                          },
                          "end": {
                            "line": 1,
                            "column": 4
                          }
                        },
                        "range": [
                          2,
                          4
                        ]
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 1
                      },
                      "end": {
                        "line": 1,
                        "column": 5
                      }
                    },
                    "range": [
                      1,
                      5
                    ]
                  },
                  "index": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 0
                    },
                    "end": {
                      "line": 1,
                      "column": 9
                    }
                  },
                  "range": [
                    0,
                    9
                  ]
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 11
                    }
                  },
                  "range": [
                    10,
                    11
                  ],
                  "isLocal": false
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 15
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  15,
                  16
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
                "column": 16
              }
            },
            "range": [
              0,
              16
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
            "column": 16
          }
        },
        "range": [
          0,
          16
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
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              10,
              11
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "(a).b = 1",
      "result": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    4,
                    5
                  ]
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 2
                    }
                  },
                  "range": [
                    1,
                    2
                  ],
                  "isLocal": false
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
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
                "column": 9
              }
            },
            "range": [
              0,
              9
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
            "column": 9
          }
        },
        "range": [
          0,
          9
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 1
              },
              "end": {
                "line": 1,
                "column": 2
              }
            },
            "range": [
              1,
              2
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "(1).a = 0",
      "result": {
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
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 5
                    }
                  },
                  "range": [
                    4,
                    5
                  ]
                },
                "base": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 2
                    }
                  },
                  "range": [
                    1,
                    2
                  ]
                },
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
            "init": [
              {
                "type": "NumericLiteral",
                "value": 0,
                "raw": "0",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
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
                "column": 9
              }
            },
            "range": [
              0,
              9
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
            "column": 9
          }
        },
        "range": [
          0,
          9
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "0 = 0",
      "result": "[1:0] unexpected number '0' near '='"
    },
    {
      "source": "\"foo\" = 0",
      "result": "[1:0] unexpected string '\"foo\"' near '='"
    },
    {
      "source": "true = 0",
      "result": "[1:0] unexpected boolean 'true' near '='"
    },
    {
      "source": "(a) = 0",
      "result": "[1:4] unexpected symbol '=' near '0'"
    },
    {
      "source": "{} = 0",
      "result": "[1:0] unexpected symbol '{' near '}'"
    },
    {
      "source": "a, b() c()",
      "result": "[1:7] unexpected identifier 'c' near '('"
    },
    {
      "source": "a, b(), c",
      "result": "[1:6] unexpected symbol ',' near 'c'"
    },
    {
      "source": "a:b() = 0",
      "result": "[1:6] unexpected symbol '=' near '0'"
    },
    {
      "source": "a() = 0",
      "result": "[1:4] unexpected symbol '=' near '0'"
    },
    {
      "source": "a.b:c() = 0",
      "result": "[1:8] unexpected symbol '=' near '0'"
    },
    {
      "source": "a[b]() = 0",
      "result": "[1:7] unexpected symbol '=' near '0'"
    },
    {
      "source": "a = a b",
      "result": "[1:7] '=' expected near '<eof>'"
    },
    {
      "source": "a = 1 2",
      "result": "[1:6] unexpected number '2' near '<eof>'"
    },
    {
      "source": "a = a = 1",
      "result": "[1:6] unexpected symbol '=' near '1'"
    }
  ];
}));
