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
  exports.spec = [
    {
      "source": "break",
      "result": {
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
      }
    },
    {
      "source": "nil",
      "result": "[1:0] unexpected symbol 'nil' near '<eof>'"
    },
    {
      "source": "return;",
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
      }
    },
    {
      "source": ";",
      "result": "[1:0] unexpected symbol ';' near '<eof>'"
    },
    {
      "source": "goto \"foo\"",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "StringCallExpression",
              "base": {
                "type": "Identifier",
                "name": "goto",
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
                ],
                "isLocal": false
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
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
            "name": "goto",
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
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "goto foo",
      "result": "[1:0] unexpected identifier 'goto' near '<eof>'"
    },
    {
      "source": "return;",
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
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "return;;",
      "result": "[1:7] unexpected symbol ';' near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": ";",
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
            "column": 1
          }
        },
        "range": [
          0,
          1
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "::foo",
      "result": "[1:5] '::' expected near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "::foo::",
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
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "goto \"foo\"",
      "result": "[1:5] <name> expected near 'foo'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "goto foo ::foo::",
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
          },
          {
            "type": "LabelStatement",
            "label": {
              "type": "Identifier",
              "name": "foo",
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
              ],
              "isLocal": true
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
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "goto l1 do ::l1:: end",
      "result": "[1:8] no visible label 'l1' for <goto>",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "do ::l1:: end goto l1",
      "result": "[1:21] no visible label 'l1' for <goto>",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "::l1:: ::l1::",
      "result": "[1:11] label 'l1' already defined",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "goto l1; local aa ::l1:: ::l2:: print(3)",
      "result": "[1:7] <goto l1> jumps into the scope of local 'aa'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "do local bb, cc; goto l1; end; local aa; ::l1:: print(3)",
      "result": "[1:24] <goto l1> jumps into the scope of local 'aa'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "repeat if x then goto cont end; local xuxu = 10; ::cont:: until xuxu < x",
      "result": "[1:27] <goto cont> jumps into the scope of local 'xuxu'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "do goto l1 local a = 23 ::l1:: end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "GotoStatement",
                "label": {
                  "type": "Identifier",
                  "name": "l1",
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
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  3,
                  10
                ]
              },
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
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 23,
                    "raw": "23",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 21
                      },
                      "end": {
                        "line": 1,
                        "column": 23
                      }
                    },
                    "range": [
                      21,
                      23
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
              },
              {
                "type": "LabelStatement",
                "label": {
                  "type": "Identifier",
                  "name": "l1",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 26
                    },
                    "end": {
                      "line": 1,
                      "column": 28
                    }
                  },
                  "range": [
                    26,
                    28
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 24
                  },
                  "end": {
                    "line": 1,
                    "column": 30
                  }
                },
                "range": [
                  24,
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
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "do goto l1 goto l2 local x ::l1:: ::l2:: ::l3:: end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "GotoStatement",
                "label": {
                  "type": "Identifier",
                  "name": "l1",
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
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 10
                  }
                },
                "range": [
                  3,
                  10
                ]
              },
              {
                "type": "GotoStatement",
                "label": {
                  "type": "Identifier",
                  "name": "l2",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 16
                    },
                    "end": {
                      "line": 1,
                      "column": 18
                    }
                  },
                  "range": [
                    16,
                    18
                  ]
                },
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
                    "name": "x",
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
              },
              {
                "type": "LabelStatement",
                "label": {
                  "type": "Identifier",
                  "name": "l1",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 29
                    },
                    "end": {
                      "line": 1,
                      "column": 31
                    }
                  },
                  "range": [
                    29,
                    31
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 27
                  },
                  "end": {
                    "line": 1,
                    "column": 33
                  }
                },
                "range": [
                  27,
                  33
                ]
              },
              {
                "type": "LabelStatement",
                "label": {
                  "type": "Identifier",
                  "name": "l2",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 36
                    },
                    "end": {
                      "line": 1,
                      "column": 38
                    }
                  },
                  "range": [
                    36,
                    38
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 34
                  },
                  "end": {
                    "line": 1,
                    "column": 40
                  }
                },
                "range": [
                  34,
                  40
                ]
              },
              {
                "type": "LabelStatement",
                "label": {
                  "type": "Identifier",
                  "name": "l3",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 43
                    },
                    "end": {
                      "line": 1,
                      "column": 45
                    }
                  },
                  "range": [
                    43,
                    45
                  ],
                  "isLocal": true
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 41
                  },
                  "end": {
                    "line": 1,
                    "column": 47
                  }
                },
                "range": [
                  41,
                  47
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
                "column": 51
              }
            },
            "range": [
              0,
              51
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
            "column": 51
          }
        },
        "range": [
          0,
          51
        ],
        "comments": [],
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "::foo::",
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
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "LuaJIT"
      }
    },
    {
      "source": "goto \"foo\"",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "StringCallExpression",
              "base": {
                "type": "Identifier",
                "name": "goto",
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
                ],
                "isLocal": false
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
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
            "name": "goto",
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
        "luaVersion": "LuaJIT"
      }
    },
    {
      "source": "goto foo ::foo::",
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
          },
          {
            "type": "LabelStatement",
            "label": {
              "type": "Identifier",
              "name": "foo",
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
              ],
              "isLocal": true
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
        "globals": []
      },
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "LuaJIT"
      }
    },
    {
      "source": "goto goto",
      "result": "[1:0] unexpected identifier 'goto' near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "LuaJIT"
      }
    }
  ];
}));
