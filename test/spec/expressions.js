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
}(this, 'expressions', function (exports) {
  'use strict';

  exports.name = 'expressions';
  exports.spec = {
    "a =": "<expression> expected near '<eof>'",
    "a = [[foo]]": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "StringLiteral",
              "value": "foo",
              "raw": "[[foo]]",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = {}": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "TableConstructorExpression",
              "fields": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 6
                }
              },
              "range": [
                4,
                6
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 6
        }
      },
      "range": [
        0,
        6
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = (a)": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "Identifier",
              "name": "a",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 5
                },
                "end": {
                  "line": 0,
                  "column": 6
                }
              },
              "range": [
                5,
                6
              ],
              "isLocal": false,
              "inParens": true
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = (nil)": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "NilLiteral",
              "value": null,
              "raw": "nil",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 5
                },
                "end": {
                  "line": 0,
                  "column": 8
                }
              },
              "range": [
                5,
                8
              ],
              "inParens": true
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = (true)": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "BooleanLiteral",
              "value": true,
              "raw": "true",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 5
                },
                "end": {
                  "line": 0,
                  "column": 9
                }
              },
              "range": [
                5,
                9
              ],
              "inParens": true
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = (1)": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
                  "line": 0,
                  "column": 5
                },
                "end": {
                  "line": 0,
                  "column": 6
                }
              },
              "range": [
                5,
                6
              ],
              "inParens": true
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = (\"foo\")": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 5
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                5,
                10
              ],
              "inParens": true
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = ([[foo]])": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "StringLiteral",
              "value": "foo",
              "raw": "[[foo]]",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 5
                },
                "end": {
                  "line": 0,
                  "column": 12
                }
              },
              "range": [
                5,
                12
              ],
              "inParens": true
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = ({})": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "TableConstructorExpression",
              "fields": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 5
                },
                "end": {
                  "line": 0,
                  "column": 7
                }
              },
              "range": [
                5,
                7
              ],
              "inParens": true
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = a.b": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 6
                  },
                  "end": {
                    "line": 0,
                    "column": 7
                  }
                },
                "range": [
                  6,
                  7
                ]
              },
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 4
                  },
                  "end": {
                    "line": 0,
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
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 7
                }
              },
              "range": [
                4,
                7
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = a.b.": "<name> expected near '<eof>'",
    "a = a.b.c": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 8
                  },
                  "end": {
                    "line": 0,
                    "column": 9
                  }
                },
                "range": [
                  8,
                  9
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
                      "line": 0,
                      "column": 6
                    },
                    "end": {
                      "line": 0,
                      "column": 7
                    }
                  },
                  "range": [
                    6,
                    7
                  ]
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 4
                    },
                    "end": {
                      "line": 0,
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
                    "line": 0,
                    "column": 4
                  },
                  "end": {
                    "line": 0,
                    "column": 9
                  }
                },
                "range": [
                  4,
                  9
                ]
              },
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 9
                }
              },
              "range": [
                4,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = a:b": "function arguments expected near '<eof>'",
    "a = a[]": "<expression> expected near ']'",
    "a = a[b]": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 4
                  },
                  "end": {
                    "line": 0,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 6
                  },
                  "end": {
                    "line": 0,
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
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 7
                }
              },
              "range": [
                4,
                7
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
              "line": 0,
              "column": 6
            },
            "end": {
              "line": 0,
              "column": 7
            }
          },
          "range": [
            6,
            7
          ],
          "isLocal": false
        }
      ]
    },
    "a = a[1]": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 4
                  },
                  "end": {
                    "line": 0,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              },
              "index": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 6
                  },
                  "end": {
                    "line": 0,
                    "column": 7
                  }
                },
                "range": [
                  6,
                  7
                ]
              },
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 7
                }
              },
              "range": [
                4,
                7
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = a[\"foo\"]": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 4
                  },
                  "end": {
                    "line": 0,
                    "column": 5
                  }
                },
                "range": [
                  4,
                  5
                ],
                "isLocal": false
              },
              "index": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\"",
                "loc": {
                  "start": {
                    "line": 0,
                    "column": 6
                  },
                  "end": {
                    "line": 0,
                    "column": 11
                  }
                },
                "range": [
                  6,
                  11
                ]
              },
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 12
        }
      },
      "range": [
        0,
        12
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = ()": "<expression> expected near ')'",
    "a = function": "'(' expected near '<eof>'",
    "a = function 1": "'(' expected near '1'",
    "a = function a": "'(' expected near 'a'",
    "a = function end": "'(' expected near 'end'",
    "a = function(": "<name> or '...' expected near '<eof>'",
    "a = function() end": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [],
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = function(1": "<name> or '...' expected near '1'",
    "a = function(p) end": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 13
                    },
                    "end": {
                      "line": 0,
                      "column": 14
                    }
                  },
                  "range": [
                    13,
                    14
                  ],
                  "isLocal": true
                }
              ],
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = function(p,)": "<name> or '...' expected near ')'",
    "a = function(p q": "<name> or '...' expected near '<eof>'",
    "a = function(p,q,r) end": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 13
                    },
                    "end": {
                      "line": 0,
                      "column": 14
                    }
                  },
                  "range": [
                    13,
                    14
                  ],
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "q",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 15
                    },
                    "end": {
                      "line": 0,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "r",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 17
                    },
                    "end": {
                      "line": 0,
                      "column": 18
                    }
                  },
                  "range": [
                    17,
                    18
                  ],
                  "isLocal": true
                }
              ],
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = function(p,q,1": "<name> or '...' expected near '1'",
    "a = function(...) end": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "VarargLiteral",
                  "value": "...",
                  "raw": "...",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 13
                    },
                    "end": {
                      "line": 0,
                      "column": 16
                    }
                  },
                  "range": [
                    13,
                    16
                  ]
                }
              ],
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 21
                }
              },
              "range": [
                4,
                21
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
              "column": 21
            }
          },
          "range": [
            0,
            21
          ]
        }
      ],
      "loc": {
        "start": {
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 21
        }
      },
      "range": [
        0,
        21
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = function(...,": "')' expected near ','",
    "a = function(p,...) end": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 13
                    },
                    "end": {
                      "line": 0,
                      "column": 14
                    }
                  },
                  "range": [
                    13,
                    14
                  ],
                  "isLocal": true
                },
                {
                  "type": "VarargLiteral",
                  "value": "...",
                  "raw": "...",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 15
                    },
                    "end": {
                      "line": 0,
                      "column": 18
                    }
                  },
                  "range": [
                    15,
                    18
                  ]
                }
              ],
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = function(p,q,r,...) end": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 13
                    },
                    "end": {
                      "line": 0,
                      "column": 14
                    }
                  },
                  "range": [
                    13,
                    14
                  ],
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "q",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 15
                    },
                    "end": {
                      "line": 0,
                      "column": 16
                    }
                  },
                  "range": [
                    15,
                    16
                  ],
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "r",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 17
                    },
                    "end": {
                      "line": 0,
                      "column": 18
                    }
                  },
                  "range": [
                    17,
                    18
                  ],
                  "isLocal": true
                },
                {
                  "type": "VarargLiteral",
                  "value": "...",
                  "raw": "...",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 19
                    },
                    "end": {
                      "line": 0,
                      "column": 22
                    }
                  },
                  "range": [
                    19,
                    22
                  ]
                }
              ],
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 27
                }
              },
              "range": [
                4,
                27
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
              "column": 27
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 27
        }
      },
      "range": [
        0,
        27
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = {'-'}": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "StringLiteral",
                    "value": "-",
                    "raw": "'-'",
                    "loc": {
                      "start": {
                        "line": 0,
                        "column": 5
                      },
                      "end": {
                        "line": 0,
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
                      "line": 0,
                      "column": 5
                    },
                    "end": {
                      "line": 0,
                      "column": 8
                    }
                  },
                  "range": [
                    5,
                    8
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 9
                }
              },
              "range": [
                4,
                9
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = {'not'}": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "StringLiteral",
                    "value": "not",
                    "raw": "'not'",
                    "loc": {
                      "start": {
                        "line": 0,
                        "column": 5
                      },
                      "end": {
                        "line": 0,
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
                      "line": 0,
                      "column": 5
                    },
                    "end": {
                      "line": 0,
                      "column": 10
                    }
                  },
                  "range": [
                    5,
                    10
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
    "a = {not true}": {
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
                  "line": 0,
                  "column": 0
                },
                "end": {
                  "line": 0,
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
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "not",
                    "argument": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true",
                      "loc": {
                        "start": {
                          "line": 0,
                          "column": 9
                        },
                        "end": {
                          "line": 0,
                          "column": 13
                        }
                      },
                      "range": [
                        9,
                        13
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 0,
                        "column": 5
                      },
                      "end": {
                        "line": 0,
                        "column": 13
                      }
                    },
                    "range": [
                      5,
                      13
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 5
                    },
                    "end": {
                      "line": 0,
                      "column": 13
                    }
                  },
                  "range": [
                    5,
                    13
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 14
                }
              },
              "range": [
                4,
                14
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
  };
}));
