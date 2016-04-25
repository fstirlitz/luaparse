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
}(this, 'conditional', function (exports) {
  'use strict';

  exports.name = 'conditional';
  exports.spec = {
    "if": "<expression> expected near '<eof>'",
    "elseif": "unexpected keyword 'elseif' near '<eof>'",
    "else": "unexpected keyword 'else' near '<eof>'",
    "then": "unexpected keyword 'then' near '<eof>'",
    "if then": "<expression> expected near 'then'",
    "if 1": "'then' expected near '<eof>'",
    "if 1 then": "'end' expected near '<eof>'",
    "if 1 else": "'then' expected near 'else'",
    "if 1 then else": "'end' expected near '<eof>'",
    "if 1 then elseif": "<expression> expected near '<eof>'",
    "if 1 then end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
    "if 1 then local a end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    10,
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
    "if 1 then local a local b end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    10,
                    17
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
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 18
                    },
                    "end": {
                      "line": 1,
                      "column": 25
                    }
                  },
                  "range": [
                    18,
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
    },
    "if 1 then local a; local b; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    10,
                    17
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
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 31
        }
      },
      "range": [
        0,
        31
      ],
      "comments": [],
      "globals": []
    },
    "if 1 then else end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                  "column": 18
                }
              },
              "range": [
                0,
                18
              ]
            },
            {
              "type": "ElseClause",
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 10
                },
                "end": {
                  "line": 1,
                  "column": 14
                }
              },
              "range": [
                10,
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
    "if 1 then local a else local b end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    10,
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
                  "column": 34
                }
              },
              "range": [
                0,
                34
              ]
            },
            {
              "type": "ElseClause",
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
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 23
                    },
                    "end": {
                      "line": 1,
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
                  "line": 1,
                  "column": 18
                },
                "end": {
                  "line": 1,
                  "column": 30
                }
              },
              "range": [
                18,
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
    "if 1 then local a; else local b; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    10,
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
                  "column": 36
                }
              },
              "range": [
                0,
                36
              ]
            },
            {
              "type": "ElseClause",
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
                      ],
                      "isLocal": true
                    }
                  ],
                  "init": [],
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
                  "column": 19
                },
                "end": {
                  "line": 1,
                  "column": 32
                }
              },
              "range": [
                19,
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
      "globals": []
    },
    "if 1 then elseif 2": "'then' expected near '<eof>'",
    "if 1 then elseif 2 then": "'end' expected near '<eof>'",
    "if 1 then elseif 2 then end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                  "column": 27
                }
              },
              "range": [
                0,
                27
              ]
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
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
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 10
                },
                "end": {
                  "line": 1,
                  "column": 23
                }
              },
              "range": [
                10,
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
    "if 1 then local a elseif 2 then local b end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    10,
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
                  "column": 43
                }
              },
              "range": [
                0,
                43
              ]
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
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
                          "column": 38
                        },
                        "end": {
                          "line": 1,
                          "column": 39
                        }
                      },
                      "range": [
                        38,
                        39
                      ],
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 32
                    },
                    "end": {
                      "line": 1,
                      "column": 39
                    }
                  },
                  "range": [
                    32,
                    39
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
                  "column": 39
                }
              },
              "range": [
                18,
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
              "column": 43
            }
          },
          "range": [
            0,
            43
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
          "column": 43
        }
      },
      "range": [
        0,
        43
      ],
      "comments": [],
      "globals": []
    },
    "if 1 then local a; elseif 2 then local b; end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                      "isLocal": true
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 17
                    }
                  },
                  "range": [
                    10,
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
                  "column": 45
                }
              },
              "range": [
                0,
                45
              ]
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
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
                ]
              },
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
                    }
                  ],
                  "init": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 33
                    },
                    "end": {
                      "line": 1,
                      "column": 40
                    }
                  },
                  "range": [
                    33,
                    40
                  ]
                }
              ],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 19
                },
                "end": {
                  "line": 1,
                  "column": 41
                }
              },
              "range": [
                19,
                41
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
              "column": 45
            }
          },
          "range": [
            0,
            45
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
          "column": 45
        }
      },
      "range": [
        0,
        45
      ],
      "comments": [],
      "globals": []
    },
    "if 1 then elseif 2 then else end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                  "column": 32
                }
              },
              "range": [
                0,
                32
              ]
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2",
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
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 10
                },
                "end": {
                  "line": 1,
                  "column": 23
                }
              },
              "range": [
                10,
                23
              ]
            },
            {
              "type": "ElseClause",
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 24
                },
                "end": {
                  "line": 1,
                  "column": 28
                }
              },
              "range": [
                24,
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
      "globals": []
    },
    "if 1 then else if 2 then end end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
                  "column": 32
                }
              },
              "range": [
                0,
                32
              ]
            },
            {
              "type": "ElseClause",
              "body": [
                {
                  "type": "IfStatement",
                  "clauses": [
                    {
                      "type": "IfClause",
                      "condition": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2",
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
                        ]
                      },
                      "body": [],
                      "loc": {
                        "start": {
                          "line": 1,
                          "column": 15
                        },
                        "end": {
                          "line": 1,
                          "column": 28
                        }
                      },
                      "range": [
                        15,
                        28
                      ]
                    }
                  ],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 15
                    },
                    "end": {
                      "line": 1,
                      "column": 28
                    }
                  },
                  "range": [
                    15,
                    28
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
                  "column": 28
                }
              },
              "range": [
                10,
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
      "globals": []
    },
    "if 1 then else if 2 then end": "'end' expected near '<eof>'",
    "if 1 then return end": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
                ]
              },
              "body": [
                {
                  "type": "ReturnStatement",
                  "arguments": [],
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 10
                    },
                    "end": {
                      "line": 1,
                      "column": 16
                    }
                  },
                  "range": [
                    10,
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
    "if 1 then return return end": "'end' expected near 'return'",
    "if 1 then end; if 1 then end;": {
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 3
                  },
                  "end": {
                    "line": 1,
                    "column": 4
                  }
                },
                "range": [
                  3,
                  4
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
          ]
        },
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1",
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
                ]
              },
              "body": [],
              "loc": {
                "start": {
                  "line": 1,
                  "column": 15
                },
                "end": {
                  "line": 1,
                  "column": 28
                }
              },
              "range": [
                15,
                28
              ]
            }
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 15
            },
            "end": {
              "line": 1,
              "column": 28
            }
          },
          "range": [
            15,
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
          "column": 29
        }
      },
      "range": [
        0,
        29
      ],
      "comments": [],
      "globals": []
    },
    "if then end": "<expression> expected near 'then'",
    "if 1 then elseif then end": "<expression> expected near 'then'"
  };
}));
