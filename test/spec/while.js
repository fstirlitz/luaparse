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
}(this, 'while', function (exports) {
  'use strict';

  exports.name = 'while';
  exports.spec = {
    "while": "[1:5] <expression> expected near '<eof>'",
    "while do": "[1:6] <expression> expected near 'do'",
    "while =": "[1:6] <expression> expected near '='",
    "while 1 do": "[1:10] 'end' expected near '<eof>'",
    "while 1 do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
          "body": [],
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
      "globals": []
    },
    "while 1 do local a end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 11
                },
                "end": {
                  "line": 1,
                  "column": 18
                }
              },
              "range": [
                11,
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
      "globals": []
    },
    "while 1 do local a local b end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 11
                },
                "end": {
                  "line": 1,
                  "column": 18
                }
              },
              "range": [
                11,
                18
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
                      "column": 25
                    },
                    "end": {
                      "line": 1,
                      "column": 26
                    }
                  },
                  "range": [
                    25,
                    26
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 19
                },
                "end": {
                  "line": 1,
                  "column": 26
                }
              },
              "range": [
                19,
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
      "globals": []
    },
    "while 1 do local a; local b; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 11
                },
                "end": {
                  "line": 1,
                  "column": 18
                }
              },
              "range": [
                11,
                18
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
                      "column": 26
                    },
                    "end": {
                      "line": 1,
                      "column": 27
                    }
                  },
                  "range": [
                    26,
                    27
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 20
                },
                "end": {
                  "line": 1,
                  "column": 27
                }
              },
              "range": [
                20,
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
      "globals": []
    },
    "while 1 do 2 end": "[1:11] Unexpected number '2' near 'end'",
    "while 1 do \"foo\" end": "[1:11] Unexpected string 'foo' near 'end'",
    "while true do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "BooleanLiteral",
            "value": true,
            "raw": "true",
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
          },
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
      "globals": []
    },
    "while 1 do while": "[1:16] <expression> expected near '<eof>'",
    "while 1 end": "[1:8] 'do' expected near 'end'",
    "while 1 2 do": "[1:8] 'do' expected near '2'",
    "while 1 = 2 do": "[1:8] 'do' expected near '='",
    "while 1 do return end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
          "body": [
            {
              "type": "ReturnStatement",
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 11
                },
                "end": {
                  "line": 1,
                  "column": 17
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
      "globals": []
    },
    "while 1 do return return end": "[1:18] 'end' expected near 'return'",
    "while 1 do do end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
          "body": [
            {
              "type": "DoStatement",
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 11
                },
                "end": {
                  "line": 1,
                  "column": 17
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
      "globals": []
    },
    "while 1 do do return end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
          "body": [
            {
              "type": "DoStatement",
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
                  "column": 11
                },
                "end": {
                  "line": 1,
                  "column": 24
                }
              },
              "range": [
                11,
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
      "comments": [],
      "globals": []
    },
    "while 1 do break end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
          "body": [
            {
              "type": "BreakStatement",
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
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 20
        }
      },
      "range": [
        0,
        20
      ],
      "comments": [],
      "globals": []
    },
    "while 1 do do break end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
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
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 14
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    14,
                    19
                  ]
                }
              ],
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
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 27
        }
      },
      "range": [
        0,
        27
      ],
      "comments": [],
      "globals": []
    }
  };
}));
