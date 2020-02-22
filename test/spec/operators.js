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
}(this, 'operators', function (exports) {
  'use strict';

  exports.name = 'operators';
  exports.spec = [
    {
      "source": "a = -\"foo\"",
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
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "StringLiteral",
                  "value": null,
                  "raw": "\"foo\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 10
                    }
                  },
                  "range": [
                    5,
                    10
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  4,
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
          }
        ]
      }
    },
    {
      "source": "a = -",
      "result": "[1:5] <expression> expected near '<eof>'"
    },
    {
      "source": "a = not 10",
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
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "NumericLiteral",
                  "value": 10,
                  "raw": "10",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 8
                    },
                    "end": {
                      "line": 1,
                      "column": 10
                    }
                  },
                  "range": [
                    8,
                    10
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  4,
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
          }
        ]
      }
    },
    {
      "source": "a = not",
      "result": "[1:7] <expression> expected near '<eof>'"
    },
    {
      "source": "a = 1 +",
      "result": "[1:7] <expression> expected near '<eof>'"
    },
    {
      "source": "a = 1 ..",
      "result": "[1:8] <expression> expected near '<eof>'"
    },
    {
      "source": "a = 1 * /",
      "result": "[1:8] <expression> expected near '/'"
    },
    {
      "source": "a = 1 + -2; a = 1 - -2",
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
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
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
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 8
                    },
                    "end": {
                      "line": 1,
                      "column": 10
                    }
                  },
                  "range": [
                    8,
                    10
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  4,
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
          },
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
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
                ],
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
                  "raw": "1",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 16
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    16,
                    17
                  ]
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 21
                      },
                      "end": {
                        "line": 1,
                        "column": 22
                      }
                    },
                    "range": [
                      21,
                      22
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 20
                    },
                    "end": {
                      "line": 1,
                      "column": 22
                    }
                  },
                  "range": [
                    20,
                    22
                  ]
                },
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
                "column": 12
              },
              "end": {
                "line": 1,
                "column": 22
              }
            },
            "range": [
              12,
              22
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
            "column": 22
          }
        },
        "range": [
          0,
          22
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
      "source": "a = 1 * -",
      "result": "[1:9] <expression> expected near '<eof>'"
    },
    {
      "source": "a = 1 * not 2; a = 1 / not 2",
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
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
                "right": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2",
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
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 13
                  }
                },
                "range": [
                  4,
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
          },
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
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
                ],
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
                  "raw": "1",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 19
                    },
                    "end": {
                      "line": 1,
                      "column": 20
                    }
                  },
                  "range": [
                    19,
                    20
                  ]
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 27
                      },
                      "end": {
                        "line": 1,
                        "column": 28
                      }
                    },
                    "range": [
                      27,
                      28
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 23
                    },
                    "end": {
                      "line": 1,
                      "column": 28
                    }
                  },
                  "range": [
                    23,
                    28
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 19
                  },
                  "end": {
                    "line": 1,
                    "column": 28
                  }
                },
                "range": [
                  19,
                  28
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
                "column": 28
              }
            },
            "range": [
              15,
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
      "source": "a = 1 / not",
      "result": "[1:11] <expression> expected near '<eof>'"
    },
    {
      "source": "a = 1 + 2 - 3 * 4 / 5 ^ 6",
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
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
                  "right": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2",
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 9
                    }
                  },
                  "range": [
                    4,
                    9
                  ]
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
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 4,
                      "raw": "4",
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 16
                        },
                        "end": {
                          "line": 1,
                          "column": 17
                        }
                      },
                      "range": [
                        16,
                        17
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 12
                      },
                      "end": {
                        "line": 1,
                        "column": 17
                      }
                    },
                    "range": [
                      12,
                      17
                    ]
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 5,
                      "raw": "5",
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 20
                        },
                        "end": {
                          "line": 1,
                          "column": 21
                        }
                      },
                      "range": [
                        20,
                        21
                      ]
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 6,
                      "raw": "6",
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 24
                        },
                        "end": {
                          "line": 1,
                          "column": 25
                        }
                      },
                      "range": [
                        24,
                        25
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 20
                      },
                      "end": {
                        "line": 1,
                        "column": 25
                      }
                    },
                    "range": [
                      20,
                      25
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 12
                    },
                    "end": {
                      "line": 1,
                      "column": 25
                    }
                  },
                  "range": [
                    12,
                    25
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 25
                  }
                },
                "range": [
                  4,
                  25
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
                "column": 25
              }
            },
            "range": [
              0,
              25
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
            "column": 25
          }
        },
        "range": [
          0,
          25
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
      "source": "a = ((1",
      "result": "[1:7] ')' expected near '<eof>'"
    },
    {
      "source": "a = ((1 + 2)",
      "result": "[1:12] ')' expected near '<eof>'"
    },
    {
      "source": "a = 1)",
      "result": "[1:5] unexpected symbol ')' near '<eof>'"
    },
    {
      "source": "a = a + b - c",
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
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
                    ],
                    "isLocal": false
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "b",
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
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 9
                    }
                  },
                  "range": [
                    4,
                    9
                  ]
                },
                "right": {
                  "type": "Identifier",
                  "name": "c",
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
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 13
                  }
                },
                "range": [
                  4,
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
          {
            "type": "Identifier",
            "name": "c",
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
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "a = \"foo\" + \"bar\"",
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
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "StringLiteral",
                  "value": null,
                  "raw": "\"foo\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 9
                    }
                  },
                  "range": [
                    4,
                    9
                  ]
                },
                "right": {
                  "type": "StringLiteral",
                  "value": null,
                  "raw": "\"bar\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 12
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    12,
                    17
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 17
                  }
                },
                "range": [
                  4,
                  17
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
                "column": 17
              }
            },
            "range": [
              0,
              17
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
            "column": 17
          }
        },
        "range": [
          0,
          17
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
      "source": "a = \"foo\"..\"bar\"..\"baz\"",
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
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "StringLiteral",
                  "value": null,
                  "raw": "\"foo\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 9
                    }
                  },
                  "range": [
                    4,
                    9
                  ]
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "..",
                  "left": {
                    "type": "StringLiteral",
                    "value": null,
                    "raw": "\"bar\"",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 11
                      },
                      "end": {
                        "line": 1,
                        "column": 16
                      }
                    },
                    "range": [
                      11,
                      16
                    ]
                  },
                  "right": {
                    "type": "StringLiteral",
                    "value": null,
                    "raw": "\"baz\"",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 18
                      },
                      "end": {
                        "line": 1,
                        "column": 23
                      }
                    },
                    "range": [
                      18,
                      23
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 11
                    },
                    "end": {
                      "line": 1,
                      "column": 23
                    }
                  },
                  "range": [
                    11,
                    23
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 23
                  }
                },
                "range": [
                  4,
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
                "line": 1,
                "column": 23
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
            "line": 1,
            "column": 23
          }
        },
        "range": [
          0,
          23
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
      "source": "a = true + false - nil",
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
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BooleanLiteral",
                    "value": true,
                    "raw": "true",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 4
                      },
                      "end": {
                        "line": 1,
                        "column": 8
                      }
                    },
                    "range": [
                      4,
                      8
                    ]
                  },
                  "right": {
                    "type": "BooleanLiteral",
                    "value": false,
                    "raw": "false",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 11
                      },
                      "end": {
                        "line": 1,
                        "column": 16
                      }
                    },
                    "range": [
                      11,
                      16
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    4,
                    16
                  ]
                },
                "right": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 19
                    },
                    "end": {
                      "line": 1,
                      "column": 22
                    }
                  },
                  "range": [
                    19,
                    22
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 22
                  }
                },
                "range": [
                  4,
                  22
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
                "column": 22
              }
            },
            "range": [
              0,
              22
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
            "column": 22
          }
        },
        "range": [
          0,
          22
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
      "source": "a = {} * {}",
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
                "type": "BinaryExpression",
                "operator": "*",
                "left": {
                  "type": "TableConstructorExpression",
                  "fields": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    4,
                    6
                  ]
                },
                "right": {
                  "type": "TableConstructorExpression",
                  "fields": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 9
                    },
                    "end": {
                      "line": 1,
                      "column": 11
                    }
                  },
                  "range": [
                    9,
                    11
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 11
                  }
                },
                "range": [
                  4,
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
          }
        ]
      }
    },
    {
      "source": "a = function() end / function() end",
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
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 18
                    }
                  },
                  "range": [
                    4,
                    18
                  ]
                },
                "right": {
                  "type": "FunctionDeclaration",
                  "identifier": null,
                  "isLocal": false,
                  "parameters": [],
                  "body": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 21
                    },
                    "end": {
                      "line": 1,
                      "column": 35
                    }
                  },
                  "range": [
                    21,
                    35
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 35
                  }
                },
                "range": [
                  4,
                  35
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
                "column": 35
              }
            },
            "range": [
              0,
              35
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
            "column": 35
          }
        },
        "range": [
          0,
          35
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
      "source": "a = a() ^ b()",
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
                "type": "BinaryExpression",
                "operator": "^",
                "left": {
                  "type": "CallExpression",
                  "base": {
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
                    ],
                    "isLocal": false
                  },
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 7
                    }
                  },
                  "range": [
                    4,
                    7
                  ]
                },
                "right": {
                  "type": "CallExpression",
                  "base": {
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
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 13
                    }
                  },
                  "range": [
                    10,
                    13
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 13
                  }
                },
                "range": [
                  4,
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
      "source": "a = 1 == 2; a = 1 ~= 2",
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
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
                "right": {
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
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  4,
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
          },
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
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
                ],
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
                  "raw": "1",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 16
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    16,
                    17
                  ]
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 21
                    },
                    "end": {
                      "line": 1,
                      "column": 22
                    }
                  },
                  "range": [
                    21,
                    22
                  ]
                },
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
                "column": 12
              },
              "end": {
                "line": 1,
                "column": 22
              }
            },
            "range": [
              12,
              22
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
            "column": 22
          }
        },
        "range": [
          0,
          22
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
      "source": "a = 1 < 2 <= 2 > 2 >= 2 == 2",
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
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": ">=",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "<=",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
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
                        "right": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2",
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
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 4
                          },
                          "end": {
                            "line": 1,
                            "column": 9
                          }
                        },
                        "range": [
                          4,
                          9
                        ]
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2",
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
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 4
                        },
                        "end": {
                          "line": 1,
                          "column": 14
                        }
                      },
                      "range": [
                        4,
                        14
                      ]
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2",
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 17
                        },
                        "end": {
                          "line": 1,
                          "column": 18
                        }
                      },
                      "range": [
                        17,
                        18
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 4
                      },
                      "end": {
                        "line": 1,
                        "column": 18
                      }
                    },
                    "range": [
                      4,
                      18
                    ]
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 22
                      },
                      "end": {
                        "line": 1,
                        "column": 23
                      }
                    },
                    "range": [
                      22,
                      23
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 23
                    }
                  },
                  "range": [
                    4,
                    23
                  ]
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 27
                    },
                    "end": {
                      "line": 1,
                      "column": 28
                    }
                  },
                  "range": [
                    27,
                    28
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 28
                  }
                },
                "range": [
                  4,
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
      "source": "a = 1 ==",
      "result": "[1:8] <expression> expected near '<eof>'"
    },
    {
      "source": "a = `",
      "result": "[1:5] unexpected symbol '`' near '='"
    },
    {
      "source": "a = ~",
      "result": "[1:5] unexpected symbol '~' near '='"
    },
    {
      "source": "a = ~= 2",
      "result": "[1:4] <expression> expected near '~='"
    },
    {
      "source": "a = a ~= b",
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
                "type": "BinaryExpression",
                "operator": "~=",
                "left": {
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
                  ],
                  "isLocal": false
                },
                "right": {
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
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  4,
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
          }
        ]
      }
    },
    {
      "source": "a = 1 and 2 or 2",
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
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
                  "right": {
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 11
                    }
                  },
                  "range": [
                    4,
                    11
                  ]
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2",
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
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  4,
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
      "source": "a = 1 and",
      "result": "[1:9] <expression> expected near '<eof>'"
    },
    {
      "source": "a = or 1",
      "result": "[1:4] <expression> expected near 'or'"
    },
    {
      "source": "a = {} and {} or {}",
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "TableConstructorExpression",
                    "fields": [],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 4
                      },
                      "end": {
                        "line": 1,
                        "column": 6
                      }
                    },
                    "range": [
                      4,
                      6
                    ]
                  },
                  "right": {
                    "type": "TableConstructorExpression",
                    "fields": [],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 11
                      },
                      "end": {
                        "line": 1,
                        "column": 13
                      }
                    },
                    "range": [
                      11,
                      13
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 13
                    }
                  },
                  "range": [
                    4,
                    13
                  ]
                },
                "right": {
                  "type": "TableConstructorExpression",
                  "fields": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 17
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    17,
                    19
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  4,
                  19
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
                "column": 19
              }
            },
            "range": [
              0,
              19
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
            "column": 19
          }
        },
        "range": [
          0,
          19
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
      "source": "a = (1) and (\"foo\") or (nil)",
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
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 1,
                    "raw": "1",
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
                  "right": {
                    "type": "StringLiteral",
                    "value": null,
                    "raw": "\"foo\"",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 13
                      },
                      "end": {
                        "line": 1,
                        "column": 18
                      }
                    },
                    "range": [
                      13,
                      18
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    4,
                    19
                  ]
                },
                "right": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 24
                    },
                    "end": {
                      "line": 1,
                      "column": 27
                    }
                  },
                  "range": [
                    24,
                    27
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 28
                  }
                },
                "range": [
                  4,
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
      "source": "a = 1 // 0",
      "result": "[1:7] <expression> expected near '/'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "a = p ~ q",
      "result": "[1:7] unexpected symbol '~' near 'p'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "a = p & q",
      "result": "[1:7] unexpected symbol '&' near 'p'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "a = 1 // 0",
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
                "type": "BinaryExpression",
                "operator": "//",
                "left": {
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
                "right": {
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
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  4,
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
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.3"
      }
    },
    {
      "source": "a = p ~ q >> r | s",
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
                "type": "BinaryExpression",
                "operator": "|",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "~",
                  "left": {
                    "type": "Identifier",
                    "name": "p",
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
                  "right": {
                    "type": "BinaryExpression",
                    "operator": ">>",
                    "left": {
                      "type": "Identifier",
                      "name": "q",
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
                    "right": {
                      "type": "Identifier",
                      "name": "r",
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
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 8
                      },
                      "end": {
                        "line": 1,
                        "column": 14
                      }
                    },
                    "range": [
                      8,
                      14
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 14
                    }
                  },
                  "range": [
                    4,
                    14
                  ]
                },
                "right": {
                  "type": "Identifier",
                  "name": "s",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 17
                    },
                    "end": {
                      "line": 1,
                      "column": 18
                    }
                  },
                  "range": [
                    17,
                    18
                  ],
                  "isLocal": false
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 18
                  }
                },
                "range": [
                  4,
                  18
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
                "column": 18
              }
            },
            "range": [
              0,
              18
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
            "column": 18
          }
        },
        "range": [
          0,
          18
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
            "name": "p",
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
          {
            "type": "Identifier",
            "name": "q",
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
          {
            "type": "Identifier",
            "name": "r",
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
          },
          {
            "type": "Identifier",
            "name": "s",
            "loc": {
              "start": {
                "line": 1,
                "column": 17
              },
              "end": {
                "line": 1,
                "column": 18
              }
            },
            "range": [
              17,
              18
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.3"
      }
    },
    {
      "source": "a = ~ p ~ q / r",
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
                "type": "BinaryExpression",
                "operator": "~",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "~",
                  "argument": {
                    "type": "Identifier",
                    "name": "p",
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
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 4
                    },
                    "end": {
                      "line": 1,
                      "column": 7
                    }
                  },
                  "range": [
                    4,
                    7
                  ]
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Identifier",
                    "name": "q",
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
                  "right": {
                    "type": "Identifier",
                    "name": "r",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 14
                      },
                      "end": {
                        "line": 1,
                        "column": 15
                      }
                    },
                    "range": [
                      14,
                      15
                    ],
                    "isLocal": false
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 15
                    }
                  },
                  "range": [
                    10,
                    15
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 4
                  },
                  "end": {
                    "line": 1,
                    "column": 15
                  }
                },
                "range": [
                  4,
                  15
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
                "column": 15
              }
            },
            "range": [
              0,
              15
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
            "column": 15
          }
        },
        "range": [
          0,
          15
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
            "name": "p",
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
          {
            "type": "Identifier",
            "name": "q",
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
          {
            "type": "Identifier",
            "name": "r",
            "loc": {
              "start": {
                "line": 1,
                "column": 14
              },
              "end": {
                "line": 1,
                "column": 15
              }
            },
            "range": [
              14,
              15
            ],
            "isLocal": false
          }
        ]
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.3"
      }
    },
    {
      "source": "a = a <=",
      "result": "[1:8] <expression> expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.3"
      }
    },
    {
      "source": "a = a >=",
      "result": "[1:8] <expression> expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.3"
      }
    }
  ];
}));
