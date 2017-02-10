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
}(this, 'literals', function (exports) {
  'use strict';

  exports.name = 'literals';
  exports.spec = {
    "a": "[1:0] unexpected identifier 'a' near '<eof>'",
    "a = 1": {
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
    },
    "a = .1": {
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
              "value": 0.1,
              "raw": ".1",
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
    "a = 1.1": {
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
              "value": 1.1,
              "raw": "1.1",
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
    },
    "a = 10.1": {
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
              "value": 10.1,
              "raw": "10.1",
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
        }
      ]
    },
    "a = 1e": "[1:7] malformed number near '1e'",
    "a = 1e1": {
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
              "value": 10,
              "raw": "1e1",
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
    },
    "a = 1E1": {
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
              "value": 10,
              "raw": "1E1",
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
    },
    "a = 1e+9": {
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
              "value": 1000000000,
              "raw": "1e+9",
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
        }
      ]
    },
    "a = 1e-1": {
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
              "value": 0.1,
              "raw": "1e-1",
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
        }
      ]
    },
    "a = 0x": "[1:7] malformed number near '0x'",
    "a = 0xf": {
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
              "value": 15,
              "raw": "0xf",
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
    },
    "a = 0xf.": {
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
              "value": 15,
              "raw": "0xf.",
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
        }
      ]
    },
    "a = 0xf.3": {
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
              "value": 15.1875,
              "raw": "0xf.3",
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
    },
    "a = 0xfp": "[1:9] malformed number near '0xfp'",
    "a = 0xfp1": {
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
              "value": 30,
              "raw": "0xfp1",
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
    },
    "a = 0xfp+1": {
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
              "value": 30,
              "raw": "0xfp+1",
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
    "a = 0xfp-1": {
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
              "value": 7.5,
              "raw": "0xfp-1",
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
    "a = 0xFP+9": {
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
              "value": 7680,
              "raw": "0xFP+9",
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
    "a = 1 .. 3 .. -2": {
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
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3",
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
                      "column": 14
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    14,
                    16
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  9,
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
    },
    "a = 1 .. \"bar\"": {
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
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\"",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  9,
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
        }
      ]
    },
    "a = \"bar": "[1:9] unfinished string near 'bar'",
    "a = 'bar'": {
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
              "type": "StringLiteral",
              "value": "bar",
              "raw": "'bar'",
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
    },
    "a = \"bar\"": {
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
              "type": "StringLiteral",
              "value": "bar",
              "raw": "\"bar\"",
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
    },
    "a = [=aa": "[1:2] '[' expected near '='",
    "a = nil": {
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
              "type": "NilLiteral",
              "value": null,
              "raw": "nil",
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
    },
    "a = true": {
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
        }
      ]
    },
    "a = false": {
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
              "type": "BooleanLiteral",
              "value": false,
              "raw": "false",
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
    },
    "a = ...": {
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
              "type": "VarargLiteral",
              "value": "...",
              "raw": "...",
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
    },
    "a = [[hello\nworld]]": {
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
              "type": "StringLiteral",
              "value": "hello\nworld",
              "raw": "[[hello\nworld]]",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 2,
                  "column": 7
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
              "line": 2,
              "column": 7
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
          "line": 2,
          "column": 7
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
    },
    "a = { 1, 2, [[hello\n\nworld]], \n 3 }": {
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
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
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
                  },
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
                  "type": "TableValue",
                  "value": {
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
                  "type": "TableValue",
                  "value": {
                    "type": "StringLiteral",
                    "value": "hello\n\nworld",
                    "raw": "[[hello\n\nworld]]",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 12
                      },
                      "end": {
                        "line": 2,
                        "column": 8
                      }
                    },
                    "range": [
                      12,
                      28
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 12
                    },
                    "end": {
                      "line": 2,
                      "column": 8
                    }
                  },
                  "range": [
                    12,
                    28
                  ]
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "NumericLiteral",
                    "value": 3,
                    "raw": "3",
                    "loc": {
                      "start": {
                        "line": 3,
                        "column": 1
                      },
                      "end": {
                        "line": 3,
                        "column": 2
                      }
                    },
                    "range": [
                      32,
                      33
                    ]
                  },
                  "loc": {
                    "start": {
                      "line": 3,
                      "column": 1
                    },
                    "end": {
                      "line": 3,
                      "column": 2
                    }
                  },
                  "range": [
                    32,
                    33
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 3,
                  "column": 4
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
              "line": 3,
              "column": 4
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
          "line": 3,
          "column": 4
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
    },
    "a = \"\\\r\"": {
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
              "type": "StringLiteral",
              "value": "\n",
              "raw": "\"\\\r\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 2,
                  "column": 1
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
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 1
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
          "line": 2,
          "column": 1
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
        }
      ]
    },
    "a = \"\\\n\"": {
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
              "type": "StringLiteral",
              "value": "\n",
              "raw": "\"\\\n\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 2,
                  "column": 1
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
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 1
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
          "line": 2,
          "column": 1
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
        }
      ]
    },
    "a = \"\\\r\n\"": {
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
              "type": "StringLiteral",
              "value": "\n",
              "raw": "\"\\\r\n\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 2,
                  "column": 1
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
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 1
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
          "line": 2,
          "column": 1
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
    },
    "a = \"\\\n\r\"": {
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
              "type": "StringLiteral",
              "value": "\n",
              "raw": "\"\\\n\r\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 4
                },
                "end": {
                  "line": 2,
                  "column": 1
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
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 1
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
          "line": 2,
          "column": 1
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
  };
}));
