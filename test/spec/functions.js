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
}(this, 'functions', function (exports) {
  'use strict';

  exports.name = 'functions';
  exports.spec = [
    {
      "source": "function",
      "result": "[1:8] <name> expected near '<eof>'"
    },
    {
      "source": "function 1",
      "result": "[1:9] <name> expected near '1'"
    },
    {
      "source": "function end",
      "result": "[1:9] <name> expected near 'end'"
    },
    {
      "source": "function a",
      "result": "[1:10] '(' expected near '<eof>'"
    },
    {
      "source": "function a end",
      "result": "[1:11] '(' expected near 'end'"
    },
    {
      "source": "function a( end",
      "result": "[1:12] <name> or '...' expected near 'end'"
    },
    {
      "source": "function a() end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [],
            "body": [],
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
      "source": "function a(1",
      "result": "[1:11] <name> or '...' expected near '1'"
    },
    {
      "source": "function a(\"foo\"",
      "result": "[1:11] <name> or '...' expected near '\"foo\"'"
    },
    {
      "source": "function a(p",
      "result": "[1:12] ')' expected near '<eof>'"
    },
    {
      "source": "function a(p,)",
      "result": "[1:13] <name> or '...' expected near ')'"
    },
    {
      "source": "function a(p q",
      "result": "[1:13] ')' expected near 'q'"
    },
    {
      "source": "function a(p) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
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
                "isLocal": true
              }
            ],
            "body": [],
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
      "source": "function a(p,q) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
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
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "q",
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
                "isLocal": true
              }
            ],
            "body": [],
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
      "source": "function a(p q) end",
      "result": "[1:13] ')' expected near 'q'"
    },
    {
      "source": "function a(p,q,) end",
      "result": "[1:15] <name> or '...' expected near ')'"
    },
    {
      "source": "function a(p,q,r) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
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
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "q",
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
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "r",
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
                "isLocal": true
              }
            ],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
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
      "source": "function a(p,q,1",
      "result": "[1:15] <name> or '...' expected near '1'"
    },
    {
      "source": "function a(p) do",
      "result": "[1:16] 'end' expected near '<eof>'"
    },
    {
      "source": "function a(p) 1 end",
      "result": "[1:14] unexpected number '1' near 'end'"
    },
    {
      "source": "function a(p) return end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
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
                "isLocal": true
              }
            ],
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  14,
                  20
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
      "source": "function a(p) return return end",
      "result": "[1:21] 'end' expected near 'return'"
    },
    {
      "source": "function a(p) do end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
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
                "isLocal": true
              }
            ],
            "body": [
              {
                "type": "DoStatement",
                "body": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  14,
                  20
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
      "source": "function a.(",
      "result": "[1:11] <name> expected near '('"
    },
    {
      "source": "function a.1",
      "result": "[1:10] '(' expected near '.1'"
    },
    {
      "source": "function a.b() end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b",
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
              },
              "base": {
                "type": "Identifier",
                "name": "a",
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
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 12
                }
              },
              "range": [
                9,
                12
              ]
            },
            "isLocal": false,
            "parameters": [],
            "body": [],
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
      "source": "function a.b,",
      "result": "[1:12] '(' expected near ','"
    },
    {
      "source": "function a.b.(",
      "result": "[1:13] <name> expected near '('"
    },
    {
      "source": "function a.b.c.d() end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "d",
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
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "c",
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
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
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
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
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
                      "column": 9
                    },
                    "end": {
                      "line": 1,
                      "column": 12
                    }
                  },
                  "range": [
                    9,
                    12
                  ]
                },
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
            "isLocal": false,
            "parameters": [],
            "body": [],
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
      "source": "function a:",
      "result": "[1:11] <name> expected near '<eof>'"
    },
    {
      "source": "function a:1",
      "result": "[1:11] <name> expected near '1'"
    },
    {
      "source": "function a:b() end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "b",
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
              },
              "base": {
                "type": "Identifier",
                "name": "a",
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
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 12
                }
              },
              "range": [
                9,
                12
              ]
            },
            "isLocal": false,
            "parameters": [],
            "body": [],
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
      "source": "function a:b:",
      "result": "[1:12] '(' expected near ':'"
    },
    {
      "source": "function a:b.",
      "result": "[1:12] '(' expected near '.'"
    },
    {
      "source": "function a.b.c:d() end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "d",
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
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "c",
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
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
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
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
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
                      "column": 9
                    },
                    "end": {
                      "line": 1,
                      "column": 12
                    }
                  },
                  "range": [
                    9,
                    12
                  ]
                },
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
            "isLocal": false,
            "parameters": [],
            "body": [],
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
      "source": "function a(...) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  11,
                  14
                ]
              }
            ],
            "body": [],
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
      "source": "function a(...,",
      "result": "[1:14] ')' expected near ','"
    },
    {
      "source": "function a(p,...) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
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
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 13
                  },
                  "end": {
                    "line": 1,
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
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
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
      "source": "function a(...,p) end",
      "result": "[1:14] ')' expected near ','"
    },
    {
      "source": "function a(p,q,r,...) end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "Identifier",
                "name": "p",
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
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "q",
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
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "r",
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
                "isLocal": true
              },
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 17
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  17,
                  20
                ]
              }
            ],
            "body": [],
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
      "source": "function a() local a local b end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [],
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "a",
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
                    ],
                    "isLocal": true
                  }
                ],
                "init": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 13
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  13,
                  20
                ]
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
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
                    ],
                    "isLocal": true
                  }
                ],
                "init": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 21
                  },
                  "end": {
                    "line": 1,
                    "column": 28
                  }
                },
                "range": [
                  21,
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
                "column": 32
              }
            },
            "range": [
              0,
              32
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
            "column": 32
          }
        },
        "range": [
          0,
          32
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
      "source": "function a() local a; local b; end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [],
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "a",
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
                    ],
                    "isLocal": true
                  }
                ],
                "init": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 13
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  13,
                  20
                ]
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 28
                      },
                      "end": {
                        "line": 1,
                        "column": 29
                      }
                    },
                    "range": [
                      28,
                      29
                    ],
                    "isLocal": true
                  }
                ],
                "init": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 22
                  },
                  "end": {
                    "line": 1,
                    "column": 29
                  }
                },
                "range": [
                  22,
                  29
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
                "column": 34
              }
            },
            "range": [
              0,
              34
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
            "column": 34
          }
        },
        "range": [
          0,
          34
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
      "source": "function a() end; function a() end;",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [],
            "body": [],
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
          },
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
              ],
              "isLocal": false
            },
            "isLocal": false,
            "parameters": [],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 18
              },
              "end": {
                "line": 1,
                "column": 34
              }
            },
            "range": [
              18,
              34
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
      "source": "return ...",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  7,
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
        "globals": []
      }
    },
    {
      "source": "function a(...) return ... end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "a",
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
            "isLocal": false,
            "parameters": [
              {
                "type": "VarargLiteral",
                "value": "...",
                "raw": "...",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 11
                  },
                  "end": {
                    "line": 1,
                    "column": 14
                  }
                },
                "range": [
                  11,
                  14
                ]
              }
            ],
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": [
                  {
                    "type": "VarargLiteral",
                    "value": "...",
                    "raw": "...",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 23
                      },
                      "end": {
                        "line": 1,
                        "column": 26
                      }
                    },
                    "range": [
                      23,
                      26
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
                    "column": 26
                  }
                },
                "range": [
                  16,
                  26
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
                "column": 30
              }
            },
            "range": [
              0,
              30
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
            "column": 30
          }
        },
        "range": [
          0,
          30
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
      "source": "function a() return ... end",
      "result": "[1:20] cannot use '...' outside a vararg function near '...'"
    },
    {
      "source": "function a(...) function b() return ... end end",
      "result": "[1:36] cannot use '...' outside a vararg function near '...'"
    }
  ];
}));
