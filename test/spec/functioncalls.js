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
}(this, 'functioncalls', function (exports) {
  'use strict';

  exports.name = 'functioncalls';
  exports.spec = {
    "a(": "')' expected near '<eof>'",
    "a()": {
      "type": "Chunk",
      "body": [
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
              "column": 3
            }
          },
          "range": [
            0,
            3
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
          "column": 3
        }
      },
      "range": [
        0,
        3
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
    "a(1)": {
      "type": "Chunk",
      "body": [
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
            "arguments": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
              }
            ],
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
              "column": 4
            }
          },
          "range": [
            0,
            4
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
          "column": 4
        }
      },
      "range": [
        0,
        4
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
    "a(1,)": "<expression> expected near ')'",
    "a(1,2,3)": {
      "type": "Chunk",
      "body": [
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
            "arguments": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
              {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
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
                "value": 3,
                "raw": "3",
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
                "column": 8
              }
            },
            "range": [
              0,
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
    "1()": "unexpected number '1' near '('",
    "a()()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": [],
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
    "a.b()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": [],
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
    "a[b]()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
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
                  "column": 6
                }
              },
              "range": [
                0,
                6
              ]
            },
            "arguments": [],
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
    },
    "a.1": "unexpected identifier 'a' near '<eof>'",
    "a.b": "unexpected identifier 'a' near '<eof>'",
    "a[b]": "unexpected identifier 'a' near '<eof>'",
    "a.b.(": "<name> expected near '('",
    "a.b.c()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                    "column": 7
                  }
                },
                "range": [
                  0,
                  7
                ]
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
            },
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
    "a[b][c]()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                  "column": 9
                }
              },
              "range": [
                0,
                9
              ]
            },
            "arguments": [],
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
    },
    "a[b].c()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                    "column": 8
                  }
                },
                "range": [
                  0,
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
            "arguments": [],
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
    },
    "a.b[c]()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                    "column": 8
                  }
                },
                "range": [
                  0,
                  8
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
                  "column": 8
                }
              },
              "range": [
                0,
                8
              ]
            },
            "arguments": [],
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
    },
    "a:b()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": [],
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
    "a:b": "function arguments expected near '<eof>'",
    "a:1": "<name> expected near '1'",
    "a.b:c()": {
      "type": "Chunk",
      "body": [
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
                    "column": 7
                  }
                },
                "range": [
                  0,
                  7
                ]
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
            },
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
    "a[b]:c()": {
      "type": "Chunk",
      "body": [
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
                    "column": 8
                  }
                },
                "range": [
                  0,
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
            "arguments": [],
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
    },
    "a:b:": "function arguments expected near ':'",
    "a:b():c()": {
      "type": "Chunk",
      "body": [
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
                      "column": 9
                    }
                  },
                  "range": [
                    0,
                    9
                  ]
                },
                "arguments": [],
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
            "arguments": [],
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
    "(a)()": {
      "type": "Chunk",
      "body": [
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
              "isLocal": false,
              "inParens": true
            },
            "arguments": [],
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
          "isLocal": false,
          "inParens": true
        }
      ]
    },
    "()()": "<expression> expected near ')'",
    "(\"foo\")()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 1
                },
                "end": {
                  "line": 1,
                  "column": 6
                }
              },
              "range": [
                1,
                6
              ],
              "inParens": true
            },
            "arguments": [],
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
    },
    "(a)()()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "CallExpression",
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
                "isLocal": false,
                "inParens": true
              },
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
            },
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
          "isLocal": false,
          "inParens": true
        }
      ]
    },
    "(a).b()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                "isLocal": false,
                "inParens": true
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
            },
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
          "isLocal": false,
          "inParens": true
        }
      ]
    },
    "(a)[b]()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
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
                "isLocal": false,
                "inParens": true
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
                  "column": 8
                }
              },
              "range": [
                0,
                8
              ]
            },
            "arguments": [],
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
          "isLocal": false,
          "inParens": true
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
    },
    "(a):b()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
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
                "isLocal": false,
                "inParens": true
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
            },
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
          "isLocal": false,
          "inParens": true
        }
      ]
    },
    "a\"foo\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
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
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 1
                },
                "end": {
                  "line": 1,
                  "column": 6
                }
              },
              "range": [
                1,
                6
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
    "a[[foo]]": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
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
              "value": "foo",
              "raw": "[[foo]]",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 1
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                1,
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
    "a.b\"foo\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
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
                  "column": 8
                }
              },
              "range": [
                0,
                8
              ]
            },
            "argument": {
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                3,
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
    "a[b]\"foo\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
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
                  "column": 9
                }
              },
              "range": [
                0,
                9
              ]
            },
            "argument": {
              "type": "StringLiteral",
              "value": "foo",
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
        }
      ]
    },
    "a:b\"foo\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
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
                  "column": 8
                }
              },
              "range": [
                0,
                8
              ]
            },
            "argument": {
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                3,
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
    "a()\"foo\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
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
                  "column": 8
                }
              },
              "range": [
                0,
                8
              ]
            },
            "argument": {
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                3,
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
    "a\"foo\"()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
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
                "value": "foo",
                "raw": "\"foo\"",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 1
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  1,
                  6
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
            "arguments": [],
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
    "a\"foo\".b()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b",
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
              },
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
                  "value": "foo",
                  "raw": "\"foo\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    1,
                    6
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
            },
            "arguments": [],
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
    "a\"foo\"[b]()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                  "value": "foo",
                  "raw": "\"foo\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    1,
                    6
                  ]
                },
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
              },
              "index": {
                "type": "Identifier",
                "name": "b",
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
                  "column": 11
                }
              },
              "range": [
                0,
                11
              ]
            },
            "arguments": [],
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
          },
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
        }
      ]
    },
    "a\"foo\":c()": {
      "type": "Chunk",
      "body": [
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
              },
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
                  "value": "foo",
                  "raw": "\"foo\"",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 1
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    1,
                    6
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
            },
            "arguments": [],
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
    "a\"foo\"\"bar\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
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
                "value": "foo",
                "raw": "\"foo\"",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 1
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  1,
                  6
                ]
              },
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
            },
            "argument": {
              "type": "StringLiteral",
              "value": "bar",
              "raw": "\"bar\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
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
          },
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
    },
    "a\"foo\"{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
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
                "value": "foo",
                "raw": "\"foo\"",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 1
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  1,
                  6
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
            "arguments": {
              "type": "TableConstructorExpression",
              "fields": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 6
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                6,
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
    "(a):b\"foo\".c[d]:e\"bar\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e",
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
                "type": "IndexExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "c",
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
                    "type": "StringCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
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
                        "isLocal": false,
                        "inParens": true
                      },
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
                        "column": 22
                      }
                    },
                    "range": [
                      0,
                      22
                    ]
                  },
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
                },
                "index": {
                  "type": "Identifier",
                  "name": "d",
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
              },
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
            },
            "argument": {
              "type": "StringLiteral",
              "value": "bar",
              "raw": "\"bar\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 17
                },
                "end": {
                  "line": 1,
                  "column": 22
                }
              },
              "range": [
                17,
                22
              ]
            },
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
          },
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
          "isLocal": false,
          "inParens": true
        },
        {
          "type": "Identifier",
          "name": "d",
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
        }
      ]
    },
    "(a):b\"foo\"[c].d:e\"bar\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e",
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
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d",
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
                  ]
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "StringCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
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
                        "isLocal": false,
                        "inParens": true
                      },
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
                        "column": 22
                      }
                    },
                    "range": [
                      0,
                      22
                    ]
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "c",
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
                    "isLocal": false
                  },
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
                },
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
              },
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
            },
            "argument": {
              "type": "StringLiteral",
              "value": "bar",
              "raw": "\"bar\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 17
                },
                "end": {
                  "line": 1,
                  "column": 22
                }
              },
              "range": [
                17,
                22
              ]
            },
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
          },
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
          "isLocal": false,
          "inParens": true
        },
        {
          "type": "Identifier",
          "name": "c",
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
          "isLocal": false
        }
      ]
    },
    "a{}\"foo\"": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
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
                  "column": 8
                }
              },
              "range": [
                0,
                8
              ]
            },
            "argument": {
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 8
                }
              },
              "range": [
                3,
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
    "a{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
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
    "a.b{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": {
              "type": "TableConstructorExpression",
              "fields": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                3,
                5
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
    "a[b]{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
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
                  "column": 6
                }
              },
              "range": [
                0,
                6
              ]
            },
            "arguments": {
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
    },
    "a:b{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": {
              "type": "TableConstructorExpression",
              "fields": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                3,
                5
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
    "a(){}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": {
              "type": "TableConstructorExpression",
              "fields": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                3,
                5
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
    "a{}()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": [],
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
    "a{}.b()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                    "column": 7
                  }
                },
                "range": [
                  0,
                  7
                ]
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
            },
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
    "a{}[b]()": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
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
                    "column": 8
                  }
                },
                "range": [
                  0,
                  8
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
                  "column": 8
                }
              },
              "range": [
                0,
                8
              ]
            },
            "arguments": [],
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
    },
    "a{}:c()": {
      "type": "Chunk",
      "body": [
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
                    "column": 7
                  }
                },
                "range": [
                  0,
                  7
                ]
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
            },
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
    "a{}{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
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
                  "column": 5
                }
              },
              "range": [
                0,
                5
              ]
            },
            "arguments": {
              "type": "TableConstructorExpression",
              "fields": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 5
                }
              },
              "range": [
                3,
                5
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
    "(a):b{}.c[d]:e{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e",
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
                "type": "IndexExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
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
                    ]
                  },
                  "base": {
                    "type": "TableCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
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
                        "isLocal": false,
                        "inParens": true
                      },
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
                    "arguments": {
                      "type": "TableConstructorExpression",
                      "fields": [],
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 5
                        },
                        "end": {
                          "line": 1,
                          "column": 7
                        }
                      },
                      "range": [
                        5,
                        7
                      ]
                    },
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
                "index": {
                  "type": "Identifier",
                  "name": "d",
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
                    "column": 16
                  }
                },
                "range": [
                  0,
                  16
                ]
              },
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
            "arguments": {
              "type": "TableConstructorExpression",
              "fields": [],
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
          "isLocal": false,
          "inParens": true
        },
        {
          "type": "Identifier",
          "name": "d",
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
    },
    "(a):b{}[c].d:e{}": {
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e",
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
                  "name": "d",
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
                  "type": "IndexExpression",
                  "base": {
                    "type": "TableCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
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
                        "isLocal": false,
                        "inParens": true
                      },
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
                    "arguments": {
                      "type": "TableConstructorExpression",
                      "fields": [],
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 5
                        },
                        "end": {
                          "line": 1,
                          "column": 7
                        }
                      },
                      "range": [
                        5,
                        7
                      ]
                    },
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
            "arguments": {
              "type": "TableConstructorExpression",
              "fields": [],
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
          "isLocal": false,
          "inParens": true
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
  };
}));
