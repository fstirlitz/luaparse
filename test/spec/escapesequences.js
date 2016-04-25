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
}(this, 'escapesequences', function (exports) {
  'use strict';

  exports.name = 'escapesequences';
  exports.spec = {
    "a = \"bar\nbaz\"": "unfinished string near 'bar\n'",
    "a = \"bar\rbaz\"": "unfinished string near 'bar\r'",
    "a = \"bar\\n\\r\\t\tbaz\"": {
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
              "value": "bar\n\r\t\tbaz",
              "raw": "\"bar\\n\\r\\t\tbaz\"",
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
    "a = \"bar\\80baz\\800\\0foo\"": {
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
              "value": "bar\\80baz\\800\\0foo",
              "raw": "\"bar\\80baz\\800\\0foo\"",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 24
                }
              },
              "range": [
                4,
                24
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 24
        }
      },
      "range": [
        0,
        24
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
    "a = \"bar\\z    baz\"": {
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
              "value": "barbaz",
              "raw": "\"bar\\z    baz\"",
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
    "a = \"bar\\f\\v\\bbaz\"": {
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
              "value": "bar\f\u000b\bbaz",
              "raw": "\"bar\\f\\v\\bbaz\"",
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
    "a = \"bar\f\u000b\baz\"": {
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
              "value": "bar\f\u000b\baz",
              "raw": "\"bar\f\u000b\baz\"",
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
    },
    "a = '\\\\'": {
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
              "value": "\\",
              "raw": "'\\\\'",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 8
                }
              },
              "range": [
                4,
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
    "a = '\\''": {
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
              "value": "'",
              "raw": "'\\''",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 8
                }
              },
              "range": [
                4,
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
    "a = '\\123'": {
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
              "value": "\\123",
              "raw": "'\\123'",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
    "a = '\\x23'": {
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
              "value": "\\x23",
              "raw": "'\\x23'",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
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
    "a = '\\xx'": {
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
              "value": "\\xx",
              "raw": "'\\xx'",
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
    "a = [[bar\\f\\v\\bbaz]]": {
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
              "value": "bar\\f\\v\\bbaz",
              "raw": "[[bar\\f\\v\\bbaz]]",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 4
                },
                "end": {
                  "line": 0,
                  "column": 20
                }
              },
              "range": [
                4,
                20
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
              "column": 20
            }
          },
          "range": [
            0,
            20
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
          "column": 20
        }
      },
      "range": [
        0,
        20
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
    "a = [[\\]]": {
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
              "value": "\\",
              "raw": "[[\\]]",
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
    }
  };
}));
