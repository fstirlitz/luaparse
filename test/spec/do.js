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
}(this, 'do', function (exports) {
  'use strict';

  exports.name = 'do';
  exports.spec = {
    "do": "'end' expected near '<eof>'",
    "end": "unexpected keyword 'end' near '<eof>'",
    "do end": {
      "type": "Chunk",
      "body": [
        {
          "type": "DoStatement",
          "body": [],
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
      "globals": []
    },
    "do 1 end": "unexpected number '1' near 'end'",
    "do \"foo\" end": "unexpected string 'foo' near 'end'",
    "do local a, b end": {
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
                  "isLocal": true
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              },
              "range": [
                3,
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
    "do local a local b end": {
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
                }
              ],
              "init": [],
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
                  "name": "b",
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
    "do local a; local b; end": {
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
                }
              ],
              "init": [],
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
                  "name": "b",
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
                }
              ],
              "init": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 12
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              },
              "range": [
                12,
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
      "globals": []
    },
    "do local a = 1 end": {
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
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                3,
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
      "globals": []
    },
    "do do end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "DoStatement",
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                3,
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
      "globals": []
    },
    "do do end; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "DoStatement",
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                3,
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
    "do do do end end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "DoStatement",
                  "body": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 6
                    },
                    "end": {
                      "line": 1,
                      "column": 12
                    }
                  },
                  "range": [
                    6,
                    12
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
    "do do do end; end; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "DoStatement",
                  "body": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 6
                    },
                    "end": {
                      "line": 1,
                      "column": 12
                    }
                  },
                  "range": [
                    6,
                    12
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
                  "column": 17
                }
              },
              "range": [
                3,
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
    "do do do return end end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "DoStatement",
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
                          "column": 9
                        },
                        "end": {
                          "line": 1,
                          "column": 15
                        }
                      },
                      "range": [
                        9,
                        15
                      ]
                    }
                  ],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 6
                    },
                    "end": {
                      "line": 1,
                      "column": 19
                    }
                  },
                  "range": [
                    6,
                    19
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
                  "column": 23
                }
              },
              "range": [
                3,
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
    },
    "do end do": "'end' expected near '<eof>'",
    "do end end": "unexpected keyword 'end' near '<eof>'",
    "do return end": {
      "type": "Chunk",
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
                  "column": 3
                },
                "end": {
                  "line": 1,
                  "column": 9
                }
              },
              "range": [
                3,
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
      "globals": []
    },
    "do return return end": "'end' expected near 'return'"
  };
}));
