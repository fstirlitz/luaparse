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
}(this, 'for', function (exports) {
  'use strict';

  exports.name = 'for';
  exports.spec = {
    "for": "<name> expected near '<eof>'",
    "for do": "<name> expected near 'do'",
    "for end": "<name> expected near 'end'",
    "for 1": "<name> expected near '1'",
    "for a": "'in' expected near '<eof>'",
    "for true": "<name> expected near 'true'",
    "for a, in": "<name> expected near 'in'",
    "for a in": "<expression> expected near '<eof>'",
    "for a do": "'in' expected near 'do'",
    "for a in do": "<expression> expected near 'do'",
    "for a in b do": "'end' expected near '<eof>'",
    "for a in b end": "'do' expected near 'end'",
    "for a in b, do": "<expression> expected near 'do'",
    "for a in b do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
          "name": "b",
          "loc": {
            "start": {
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for a in b do local a local b end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 20
                    },
                    "end": {
                      "line": 0,
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
              "init": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 14
                },
                "end": {
                  "line": 0,
                  "column": 21
                }
              },
              "range": [
                14,
                21
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
                      "line": 0,
                      "column": 28
                    },
                    "end": {
                      "line": 0,
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
                  "line": 0,
                  "column": 22
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for a in b do local a; local b; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 20
                    },
                    "end": {
                      "line": 0,
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
              "init": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 14
                },
                "end": {
                  "line": 0,
                  "column": 21
                }
              },
              "range": [
                14,
                21
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
                      "line": 0,
                      "column": 29
                    },
                    "end": {
                      "line": 0,
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
              "init": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 23
                },
                "end": {
                  "line": 0,
                  "column": 30
                }
              },
              "range": [
                23,
                30
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
          "name": "b",
          "loc": {
            "start": {
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for a in b do 1 end": "unexpected number '1' near 'end'",
    "for a in b do \"foo\" end": "unexpected string 'foo' near 'end'",
    "for a b in": "'in' expected near 'b'",
    "for a, b, c in p do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 7
                },
                "end": {
                  "line": 0,
                  "column": 8
                }
              },
              "range": [
                7,
                8
              ],
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "c",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 10
                },
                "end": {
                  "line": 0,
                  "column": 11
                }
              },
              "range": [
                10,
                11
              ],
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "p",
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
              "isLocal": false
            }
          ],
          "body": [],
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
          "name": "p",
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
          "isLocal": false
        }
      ]
    },
    "for a, b, c in p, q, r do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 7
                },
                "end": {
                  "line": 0,
                  "column": 8
                }
              },
              "range": [
                7,
                8
              ],
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "c",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 10
                },
                "end": {
                  "line": 0,
                  "column": 11
                }
              },
              "range": [
                10,
                11
              ],
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "p",
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
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "q",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 18
                },
                "end": {
                  "line": 0,
                  "column": 19
                }
              },
              "range": [
                18,
                19
              ],
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "r",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 21
                },
                "end": {
                  "line": 0,
                  "column": 22
                }
              },
              "range": [
                21,
                22
              ],
              "isLocal": false
            }
          ],
          "body": [],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 29
        }
      },
      "range": [
        0,
        29
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "p",
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
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "q",
          "loc": {
            "start": {
              "line": 0,
              "column": 18
            },
            "end": {
              "line": 0,
              "column": 19
            }
          },
          "range": [
            18,
            19
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "r",
          "loc": {
            "start": {
              "line": 0,
              "column": 21
            },
            "end": {
              "line": 0,
              "column": 22
            }
          },
          "range": [
            21,
            22
          ],
          "isLocal": false
        }
      ]
    },
    "for a in 1 do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ]
            }
          ],
          "body": [],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
    "for a in true do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
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
            }
          ],
          "body": [],
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
      "globals": []
    },
    "for a in \"foo\" do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\"",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 14
                }
              },
              "range": [
                9,
                14
              ]
            }
          ],
          "body": [],
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
      "globals": []
    },
    "for a in b do break end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [
            {
              "type": "BreakStatement",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 14
                },
                "end": {
                  "line": 0,
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
          "name": "b",
          "loc": {
            "start": {
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for a in b do return end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [
            {
              "type": "ReturnStatement",
              "arguments": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 14
                },
                "end": {
                  "line": 0,
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
          "name": "b",
          "loc": {
            "start": {
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for a in b do return return end": "'end' expected near 'return'",
    "for a in b do do end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [
            {
              "type": "DoStatement",
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 14
                },
                "end": {
                  "line": 0,
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
          "name": "b",
          "loc": {
            "start": {
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for a in b do do break end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 17
                    },
                    "end": {
                      "line": 0,
                      "column": 22
                    }
                  },
                  "range": [
                    17,
                    22
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 14
                },
                "end": {
                  "line": 0,
                  "column": 26
                }
              },
              "range": [
                14,
                26
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
          "name": "b",
          "loc": {
            "start": {
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for a in b do do return end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
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
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 9
                },
                "end": {
                  "line": 0,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "isLocal": false
            }
          ],
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 17
                    },
                    "end": {
                      "line": 0,
                      "column": 23
                    }
                  },
                  "range": [
                    17,
                    23
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 14
                },
                "end": {
                  "line": 0,
                  "column": 27
                }
              },
              "range": [
                14,
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
              "column": 31
            }
          },
          "range": [
            0,
            31
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
          "column": 31
        }
      },
      "range": [
        0,
        31
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "b",
          "loc": {
            "start": {
              "line": 0,
              "column": 9
            },
            "end": {
              "line": 0,
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
    },
    "for =": "<name> expected near '='",
    "for a =": "<expression> expected near '<eof>'",
    "for a, b =": "'in' expected near '='",
    "for a = do": "<expression> expected near 'do'",
    "for a = 1, do": "<expression> expected near 'do'",
    "for a = p, q, do": "<expression> expected near 'do'",
    "for a = p q do": "',' expected near 'q'",
    "for a = b do end": "',' expected near 'do'",
    "for a = 1, 2, 3, 4 do end": "'do' expected near ','",
    "for a = p, q do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "Identifier",
            "name": "p",
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
            ],
            "isLocal": false
          },
          "end": {
            "type": "Identifier",
            "name": "q",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "isLocal": false
          },
          "step": null,
          "body": [],
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
          "name": "p",
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
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "q",
          "loc": {
            "start": {
              "line": 0,
              "column": 11
            },
            "end": {
              "line": 0,
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
    "for a = 1, 2 do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
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
          "end": {
            "type": "NumericLiteral",
            "value": 2,
            "raw": "2",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
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
      "globals": []
    },
    "for a = 1, 2 do local a local b end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
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
          "end": {
            "type": "NumericLiteral",
            "value": 2,
            "raw": "2",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ]
          },
          "step": null,
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 22
                    },
                    "end": {
                      "line": 0,
                      "column": 23
                    }
                  },
                  "range": [
                    22,
                    23
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 16
                },
                "end": {
                  "line": 0,
                  "column": 23
                }
              },
              "range": [
                16,
                23
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
                      "line": 0,
                      "column": 30
                    },
                    "end": {
                      "line": 0,
                      "column": 31
                    }
                  },
                  "range": [
                    30,
                    31
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 24
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
          "column": 35
        }
      },
      "range": [
        0,
        35
      ],
      "comments": [],
      "globals": []
    },
    "for a = 1, 2 do local a; local b; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
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
          "end": {
            "type": "NumericLiteral",
            "value": 2,
            "raw": "2",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ]
          },
          "step": null,
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 22
                    },
                    "end": {
                      "line": 0,
                      "column": 23
                    }
                  },
                  "range": [
                    22,
                    23
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 16
                },
                "end": {
                  "line": 0,
                  "column": 23
                }
              },
              "range": [
                16,
                23
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
                      "line": 0,
                      "column": 31
                    },
                    "end": {
                      "line": 0,
                      "column": 32
                    }
                  },
                  "range": [
                    31,
                    32
                  ],
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 25
                },
                "end": {
                  "line": 0,
                  "column": 32
                }
              },
              "range": [
                25,
                32
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
              "column": 37
            }
          },
          "range": [
            0,
            37
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
          "column": 37
        }
      },
      "range": [
        0,
        37
      ],
      "comments": [],
      "globals": []
    },
    "for a = 1, 2 do 3 end": "unexpected number '3' near 'end'",
    "for a = 1, 2 do \"foo\" end": "unexpected string 'foo' near 'end'",
    "for a = p, q, r do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "Identifier",
            "name": "p",
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
            ],
            "isLocal": false
          },
          "end": {
            "type": "Identifier",
            "name": "q",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "isLocal": false
          },
          "step": {
            "type": "Identifier",
            "name": "r",
            "loc": {
              "start": {
                "line": 0,
                "column": 14
              },
              "end": {
                "line": 0,
                "column": 15
              }
            },
            "range": [
              14,
              15
            ],
            "isLocal": false
          },
          "body": [],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
          "name": "p",
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
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "q",
          "loc": {
            "start": {
              "line": 0,
              "column": 11
            },
            "end": {
              "line": 0,
              "column": 12
            }
          },
          "range": [
            11,
            12
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "r",
          "loc": {
            "start": {
              "line": 0,
              "column": 14
            },
            "end": {
              "line": 0,
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
    "for a = 1, 2, 3 do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
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
          "end": {
            "type": "NumericLiteral",
            "value": 2,
            "raw": "2",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ]
          },
          "step": {
            "type": "NumericLiteral",
            "value": 3,
            "raw": "3",
            "loc": {
              "start": {
                "line": 0,
                "column": 14
              },
              "end": {
                "line": 0,
                "column": 15
              }
            },
            "range": [
              14,
              15
            ]
          },
          "body": [],
          "loc": {
            "start": {
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
    "for a = p, q do break end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "Identifier",
            "name": "p",
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
            ],
            "isLocal": false
          },
          "end": {
            "type": "Identifier",
            "name": "q",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "isLocal": false
          },
          "step": null,
          "body": [
            {
              "type": "BreakStatement",
              "loc": {
                "start": {
                  "line": 0,
                  "column": 16
                },
                "end": {
                  "line": 0,
                  "column": 21
                }
              },
              "range": [
                16,
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
          "name": "p",
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
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "q",
          "loc": {
            "start": {
              "line": 0,
              "column": 11
            },
            "end": {
              "line": 0,
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
    "for a = 1, 2 do return end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1",
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
          "end": {
            "type": "NumericLiteral",
            "value": 2,
            "raw": "2",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ]
          },
          "step": null,
          "body": [
            {
              "type": "ReturnStatement",
              "arguments": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 16
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
              "column": 26
            }
          },
          "range": [
            0,
            26
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
          "column": 26
        }
      },
      "range": [
        0,
        26
      ],
      "comments": [],
      "globals": []
    },
    "for a = 1, 2 do return return end": "'end' expected near 'return'",
    "for a = p, q do do end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "Identifier",
            "name": "p",
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
            ],
            "isLocal": false
          },
          "end": {
            "type": "Identifier",
            "name": "q",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "isLocal": false
          },
          "step": null,
          "body": [
            {
              "type": "DoStatement",
              "body": [],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 16
                },
                "end": {
                  "line": 0,
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
              "line": 0,
              "column": 0
            },
            "end": {
              "line": 0,
              "column": 26
            }
          },
          "range": [
            0,
            26
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
          "name": "p",
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
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "q",
          "loc": {
            "start": {
              "line": 0,
              "column": 11
            },
            "end": {
              "line": 0,
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
    "for a = p, q do do break end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "Identifier",
            "name": "p",
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
            ],
            "isLocal": false
          },
          "end": {
            "type": "Identifier",
            "name": "q",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "isLocal": false
          },
          "step": null,
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 19
                    },
                    "end": {
                      "line": 0,
                      "column": 24
                    }
                  },
                  "range": [
                    19,
                    24
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 16
                },
                "end": {
                  "line": 0,
                  "column": 28
                }
              },
              "range": [
                16,
                28
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
          "name": "p",
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
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "q",
          "loc": {
            "start": {
              "line": 0,
              "column": 11
            },
            "end": {
              "line": 0,
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
    "for a = p, q do do return end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
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
            "isLocal": true
          },
          "start": {
            "type": "Identifier",
            "name": "p",
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
            ],
            "isLocal": false
          },
          "end": {
            "type": "Identifier",
            "name": "q",
            "loc": {
              "start": {
                "line": 0,
                "column": 11
              },
              "end": {
                "line": 0,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "isLocal": false
          },
          "step": null,
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 0,
                      "column": 19
                    },
                    "end": {
                      "line": 0,
                      "column": 25
                    }
                  },
                  "range": [
                    19,
                    25
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 0,
                  "column": 16
                },
                "end": {
                  "line": 0,
                  "column": 29
                }
              },
              "range": [
                16,
                29
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
          "line": 0,
          "column": 0
        },
        "end": {
          "line": 0,
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
          "name": "p",
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
          ],
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "q",
          "loc": {
            "start": {
              "line": 0,
              "column": 11
            },
            "end": {
              "line": 0,
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
    }
  };
}));
