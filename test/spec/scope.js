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
}(this, 'scope', function (exports) {
  'use strict';

  exports.name = 'scope';
  exports.spec = [
    {
      "source": "local foo = 1 do foo = 2 end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "foo",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  6,
                  9
                ],
                "isLocal": true
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
          },
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
                    ],
                    "isLocal": true
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 23
                      },
                      "end": {
                        "line": 1,
                        "column": 24
                      }
                    },
                    "range": [
                      23,
                      24
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 17
                  },
                  "end": {
                    "line": 1,
                    "column": 24
                  }
                },
                "range": [
                  17,
                  24
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 14
              },
              "end": {
                "line": 1,
                "column": 28
              }
            },
            "range": [
              14,
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
      }
    },
    {
      "source": "do local foo = 1 end foo = 2",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
                    ],
                    "isLocal": true
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
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  3,
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
          },
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "foo",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 21
                  },
                  "end": {
                    "line": 1,
                    "column": 24
                  }
                },
                "range": [
                  21,
                  24
                ],
                "isLocal": false
              }
            ],
            "init": [
              {
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
              }
            ],
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
            "name": "foo",
            "loc": {
              "start": {
                "line": 1,
                "column": 21
              },
              "end": {
                "line": 1,
                "column": 24
              }
            },
            "range": [
              21,
              24
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "do local foo = 1 end do foo = 2 end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
                    ],
                    "isLocal": true
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
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 16
                  }
                },
                "range": [
                  3,
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
          },
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
                    ],
                    "isLocal": false
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 30
                      },
                      "end": {
                        "line": 1,
                        "column": 31
                      }
                    },
                    "range": [
                      30,
                      31
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 24
                  },
                  "end": {
                    "line": 1,
                    "column": 31
                  }
                },
                "range": [
                  24,
                  31
                ]
              }
            ],
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
            "name": "foo",
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
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "local foo do foo = 1 do foo = 2 end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "foo",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 6
                  },
                  "end": {
                    "line": 1,
                    "column": 9
                  }
                },
                "range": [
                  6,
                  9
                ],
                "isLocal": true
              }
            ],
            "init": [],
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
          {
            "type": "DoStatement",
            "body": [
              {
                "type": "AssignmentStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "foo",
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
                    ],
                    "isLocal": true
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
                  }
                ],
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
                "type": "DoStatement",
                "body": [
                  {
                    "type": "AssignmentStatement",
                    "variables": [
                      {
                        "type": "Identifier",
                        "name": "foo",
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
                        ],
                        "isLocal": true
                      }
                    ],
                    "init": [
                      {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 30
                          },
                          "end": {
                            "line": 1,
                            "column": 31
                          }
                        },
                        "range": [
                          30,
                          31
                        ]
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 24
                      },
                      "end": {
                        "line": 1,
                        "column": 31
                      }
                    },
                    "range": [
                      24,
                      31
                    ]
                  }
                ],
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
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 39
              }
            },
            "range": [
              10,
              39
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
            "column": 39
          }
        },
        "range": [
          0,
          39
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "local function foo() end foo()",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "foo",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 15
                },
                "end": {
                  "line": 1,
                  "column": 18
                }
              },
              "range": [
                15,
                18
              ],
              "isLocal": true
            },
            "isLocal": true,
            "parameters": [],
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
          },
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "foo",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 25
                  },
                  "end": {
                    "line": 1,
                    "column": 28
                  }
                },
                "range": [
                  25,
                  28
                ],
                "isLocal": true
              },
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 25
                },
                "end": {
                  "line": 1,
                  "column": 30
                }
              },
              "range": [
                25,
                30
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 25
              },
              "end": {
                "line": 1,
                "column": 30
              }
            },
            "range": [
              25,
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
      }
    },
    {
      "source": "local a = { a }",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
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
                    },
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
      "source": "local b = { b, b.a, b[a], b:a() }",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "b",
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
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "Identifier",
                      "name": "b",
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
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
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
                        ]
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "b",
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
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 15
                        },
                        "end": {
                          "line": 1,
                          "column": 18
                        }
                      },
                      "range": [
                        15,
                        18
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 15
                      },
                      "end": {
                        "line": 1,
                        "column": 18
                      }
                    },
                    "range": [
                      15,
                      18
                    ]
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "IndexExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "b",
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
                        ],
                        "isLocal": false
                      },
                      "index": {
                        "type": "Identifier",
                        "name": "a",
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
                        ],
                        "isLocal": false
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 20
                        },
                        "end": {
                          "line": 1,
                          "column": 24
                        }
                      },
                      "range": [
                        20,
                        24
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 20
                      },
                      "end": {
                        "line": 1,
                        "column": 24
                      }
                    },
                    "range": [
                      20,
                      24
                    ]
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "a",
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
                          ]
                        },
                        "base": {
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
                          "isLocal": false
                        },
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 26
                          },
                          "end": {
                            "line": 1,
                            "column": 29
                          }
                        },
                        "range": [
                          26,
                          29
                        ]
                      },
                      "arguments": [],
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 26
                        },
                        "end": {
                          "line": 1,
                          "column": 31
                        }
                      },
                      "range": [
                        26,
                        31
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 26
                      },
                      "end": {
                        "line": 1,
                        "column": 31
                      }
                    },
                    "range": [
                      26,
                      31
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 33
                  }
                },
                "range": [
                  10,
                  33
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
                "column": 33
              }
            },
            "range": [
              0,
              33
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
            "column": 33
          }
        },
        "range": [
          0,
          33
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
          {
            "type": "Identifier",
            "name": "a",
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
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "local b = {} local a = { b, b.a, b[a], b:a() }",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "b",
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
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  10,
                  12
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
                "column": 12
              }
            },
            "range": [
              0,
              12
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
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
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
                    },
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
                    ]
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "MemberExpression",
                      "indexer": ".",
                      "identifier": {
                        "type": "Identifier",
                        "name": "a",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 30
                          },
                          "end": {
                            "line": 1,
                            "column": 31
                          }
                        },
                        "range": [
                          30,
                          31
                        ]
                      },
                      "base": {
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
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 28
                        },
                        "end": {
                          "line": 1,
                          "column": 31
                        }
                      },
                      "range": [
                        28,
                        31
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 28
                      },
                      "end": {
                        "line": 1,
                        "column": 31
                      }
                    },
                    "range": [
                      28,
                      31
                    ]
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "IndexExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 33
                          },
                          "end": {
                            "line": 1,
                            "column": 34
                          }
                        },
                        "range": [
                          33,
                          34
                        ],
                        "isLocal": true
                      },
                      "index": {
                        "type": "Identifier",
                        "name": "a",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 35
                          },
                          "end": {
                            "line": 1,
                            "column": 36
                          }
                        },
                        "range": [
                          35,
                          36
                        ],
                        "isLocal": false
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 33
                        },
                        "end": {
                          "line": 1,
                          "column": 37
                        }
                      },
                      "range": [
                        33,
                        37
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 33
                      },
                      "end": {
                        "line": 1,
                        "column": 37
                      }
                    },
                    "range": [
                      33,
                      37
                    ]
                  },
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "a",
                          "loc": {
                            "start": {
                              "line": 1,
                              "column": 41
                            },
                            "end": {
                              "line": 1,
                              "column": 42
                            }
                          },
                          "range": [
                            41,
                            42
                          ]
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "b",
                          "loc": {
                            "start": {
                              "line": 1,
                              "column": 39
                            },
                            "end": {
                              "line": 1,
                              "column": 40
                            }
                          },
                          "range": [
                            39,
                            40
                          ],
                          "isLocal": true
                        },
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 39
                          },
                          "end": {
                            "line": 1,
                            "column": 42
                          }
                        },
                        "range": [
                          39,
                          42
                        ]
                      },
                      "arguments": [],
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 39
                        },
                        "end": {
                          "line": 1,
                          "column": 44
                        }
                      },
                      "range": [
                        39,
                        44
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 39
                      },
                      "end": {
                        "line": 1,
                        "column": 44
                      }
                    },
                    "range": [
                      39,
                      44
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 23
                  },
                  "end": {
                    "line": 1,
                    "column": 46
                  }
                },
                "range": [
                  23,
                  46
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 13
              },
              "end": {
                "line": 1,
                "column": 46
              }
            },
            "range": [
              13,
              46
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
            "column": 46
          }
        },
        "range": [
          0,
          46
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "loc": {
              "start": {
                "line": 1,
                "column": 35
              },
              "end": {
                "line": 1,
                "column": 36
              }
            },
            "range": [
              35,
              36
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "local c local a = { b[c] }",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "LocalStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "c",
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
                "isLocal": true
              }
            ],
            "init": [],
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
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": [
                  {
                    "type": "TableValue",
                    "value": {
                      "type": "IndexExpression",
                      "base": {
                        "type": "Identifier",
                        "name": "b",
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
                        ],
                        "isLocal": false
                      },
                      "index": {
                        "type": "Identifier",
                        "name": "c",
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
                        ],
                        "isLocal": true
                      },
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 20
                        },
                        "end": {
                          "line": 1,
                          "column": 24
                        }
                      },
                      "range": [
                        20,
                        24
                      ]
                    },
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 20
                      },
                      "end": {
                        "line": 1,
                        "column": 24
                      }
                    },
                    "range": [
                      20,
                      24
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 26
                  }
                },
                "range": [
                  18,
                  26
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 26
              }
            },
            "range": [
              8,
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
            "column": 26
          }
        },
        "range": [
          0,
          26
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "local a = function() end a()",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
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
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 24
                  }
                },
                "range": [
                  10,
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
            ]
          },
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
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
              },
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 25
                },
                "end": {
                  "line": 1,
                  "column": 28
                }
              },
              "range": [
                25,
                28
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 25
              },
              "end": {
                "line": 1,
                "column": 28
              }
            },
            "range": [
              25,
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
      }
    },
    {
      "source": "local a, b = 1, a",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
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
                "isLocal": true
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
              },
              {
                "type": "Identifier",
                "name": "a",
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
                ],
                "isLocal": false
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
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "local a, b = 1, function() b = 2 end",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
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
                "isLocal": true
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
              },
              {
                "type": "FunctionDeclaration",
                "identifier": null,
                "isLocal": false,
                "parameters": [],
                "body": [
                  {
                    "type": "AssignmentStatement",
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
                        "isLocal": false
                      }
                    ],
                    "init": [
                      {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 31
                          },
                          "end": {
                            "line": 1,
                            "column": 32
                          }
                        },
                        "range": [
                          31,
                          32
                        ]
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 27
                      },
                      "end": {
                        "line": 1,
                        "column": 32
                      }
                    },
                    "range": [
                      27,
                      32
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
                    "column": 36
                  }
                },
                "range": [
                  16,
                  36
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
                "column": 36
              }
            },
            "range": [
              0,
              36
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
            "column": 36
          }
        },
        "range": [
          0,
          36
        ],
        "comments": [],
        "globals": [
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
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "local a (a):b():c()",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
              }
            ],
            "init": [],
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
          },
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ":",
                "identifier": {
                  "type": "Identifier",
                  "name": "c",
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
                "base": {
                  "type": "CallExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ":",
                    "identifier": {
                      "type": "Identifier",
                      "name": "b",
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
                      "isLocal": true
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
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 8
                    },
                    "end": {
                      "line": 1,
                      "column": 15
                    }
                  },
                  "range": [
                    8,
                    15
                  ]
                },
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 8
                  },
                  "end": {
                    "line": 1,
                    "column": 17
                  }
                },
                "range": [
                  8,
                  17
                ]
              },
              "arguments": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 8
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                8,
                19
              ]
            },
            "loc": {
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              8,
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
        "globals": []
      }
    },
    {
      "source": "local a, b for i, a, b in c do end",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
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
                "isLocal": true
              }
            ],
            "init": [],
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
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "i",
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
                "type": "Identifier",
                "name": "a",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  18,
                  19
                ],
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
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
                ],
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "c",
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
                "isLocal": false
              }
            ],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 11
              },
              "end": {
                "line": 1,
                "column": 34
              }
            },
            "range": [
              11,
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
            "name": "c",
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
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "local a, b, c for i, a, b in c do end",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
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
                "isLocal": true
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
                "isLocal": true
              }
            ],
            "init": [],
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
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "i",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 18
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  18,
                  19
                ],
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "a",
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
                ],
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
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
                ],
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "c",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 29
                  },
                  "end": {
                    "line": 1,
                    "column": 30
                  }
                },
                "range": [
                  29,
                  30
                ],
                "isLocal": true
              }
            ],
            "body": [],
            "loc": {
              "start": {
                "line": 1,
                "column": 14
              },
              "end": {
                "line": 1,
                "column": 37
              }
            },
            "range": [
              14,
              37
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
            "column": 37
          }
        },
        "range": [
          0,
          37
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "local a = {} function a:b() return self end self = nil",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
              }
            ],
            "init": [
              {
                "type": "TableConstructorExpression",
                "fields": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  10,
                  12
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
                "column": 12
              }
            },
            "range": [
              0,
              12
            ]
          },
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
              "base": {
                "type": "Identifier",
                "name": "a",
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
                ],
                "isLocal": true
              },
              "loc": {
                "start": {
                  "line": 1,
                  "column": 22
                },
                "end": {
                  "line": 1,
                  "column": 25
                }
              },
              "range": [
                22,
                25
              ]
            },
            "isLocal": false,
            "parameters": [],
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "self",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 35
                      },
                      "end": {
                        "line": 1,
                        "column": 39
                      }
                    },
                    "range": [
                      35,
                      39
                    ],
                    "isLocal": true
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 28
                  },
                  "end": {
                    "line": 1,
                    "column": 39
                  }
                },
                "range": [
                  28,
                  39
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 13
              },
              "end": {
                "line": 1,
                "column": 43
              }
            },
            "range": [
              13,
              43
            ]
          },
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "self",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 44
                  },
                  "end": {
                    "line": 1,
                    "column": 48
                  }
                },
                "range": [
                  44,
                  48
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
                    "column": 51
                  },
                  "end": {
                    "line": 1,
                    "column": 54
                  }
                },
                "range": [
                  51,
                  54
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 44
              },
              "end": {
                "line": 1,
                "column": 54
              }
            },
            "range": [
              44,
              54
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
            "column": 54
          }
        },
        "range": [
          0,
          54
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "self",
            "loc": {
              "start": {
                "line": 1,
                "column": 44
              },
              "end": {
                "line": 1,
                "column": 48
              }
            },
            "range": [
              44,
              48
            ],
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "repeat local a = true until a",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "Identifier",
              "name": "a",
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
                "init": [
                  {
                    "type": "BooleanLiteral",
                    "value": true,
                    "raw": "true",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 17
                      },
                      "end": {
                        "line": 1,
                        "column": 21
                      }
                    },
                    "range": [
                      17,
                      21
                    ]
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 21
                  }
                },
                "range": [
                  7,
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
                "column": 29
              }
            },
            "range": [
              0,
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
            "column": 29
          }
        },
        "range": [
          0,
          29
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "local a = function (b) end b = 0",
      "result": {
        "type": "Chunk",
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
                "isLocal": true
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
                    "name": "b",
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
                    ],
                    "isLocal": true
                  }
                ],
                "body": [],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 10
                  },
                  "end": {
                    "line": 1,
                    "column": 26
                  }
                },
                "range": [
                  10,
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
                "column": 26
              }
            },
            "range": [
              0,
              26
            ]
          },
          {
            "type": "AssignmentStatement",
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
                "isLocal": false
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
                    "column": 31
                  },
                  "end": {
                    "line": 1,
                    "column": 32
                  }
                },
                "range": [
                  31,
                  32
                ]
              }
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 27
              },
              "end": {
                "line": 1,
                "column": 32
              }
            },
            "range": [
              27,
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
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "for a = 1, 5 do end a = 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
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
              "isLocal": true
            },
            "start": {
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
            "end": {
              "type": "NumericLiteral",
              "value": 5,
              "raw": "5",
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
            "step": null,
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
                ],
                "isLocal": false
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
              }
            ],
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
            ],
            "isLocal": false
          }
        ]
      }
    }
  ];
}));
