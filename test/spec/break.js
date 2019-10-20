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
}(this, 'break', function (exports) {
  'use strict';

  exports.name = 'break';
  exports.spec = [
    {
      "source": "break",
      "result": "[1:5] no loop to break near '<eof>'"
    },
    {
      "source": "do break end",
      "result": "[1:9] no loop to break near 'end'"
    },
    {
      "source": "if 0 then break end",
      "result": "[1:16] no loop to break near 'end'"
    },
    {
      "source": "if 0 then else break end",
      "result": "[1:21] no loop to break near 'end'"
    },
    {
      "source": "while 0 do function x() break end end",
      "result": "[1:30] no loop to break near 'end'"
    },
    {
      "source": "repeat function x() break end until 0",
      "result": "[1:26] no loop to break near 'end'"
    },
    {
      "source": "repeat x = function() break end until 0",
      "result": "[1:28] no loop to break near 'end'"
    },
    {
      "source": "repeat break until 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
            },
            "body": [
              {
                "type": "BreakStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  7,
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
      }
    },
    {
      "source": "repeat do break end until 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
                "type": "DoStatement",
                "body": [
                  {
                    "type": "BreakStatement",
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
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  7,
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
    },
    {
      "source": "repeat if 0 then break end until 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
              ]
            },
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                      ]
                    },
                    "body": [
                      {
                        "type": "BreakStatement",
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
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 7
                      },
                      "end": {
                        "line": 1,
                        "column": 22
                      }
                    },
                    "range": [
                      7,
                      22
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
                    "column": 26
                  }
                },
                "range": [
                  7,
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
      }
    },
    {
      "source": "repeat if 0 then else break end until 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
              ]
            },
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                      ]
                    },
                    "body": [],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 7
                      },
                      "end": {
                        "line": 1,
                        "column": 16
                      }
                    },
                    "range": [
                      7,
                      16
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "BreakStatement",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 22
                          },
                          "end": {
                            "line": 1,
                            "column": 27
                          }
                        },
                        "range": [
                          22,
                          27
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
                        "column": 27
                      }
                    },
                    "range": [
                      17,
                      27
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
                    "column": 31
                  }
                },
                "range": [
                  7,
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
                "column": 39
              }
            },
            "range": [
              0,
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
      "source": "while 0 do break end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
      }
    },
    {
      "source": "while 0 do do break end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
    },
    {
      "source": "while 0 do if 0 then break end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                    "body": [
                      {
                        "type": "BreakStatement",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 21
                          },
                          "end": {
                            "line": 1,
                            "column": 26
                          }
                        },
                        "range": [
                          21,
                          26
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
                        "column": 26
                      }
                    },
                    "range": [
                      11,
                      26
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
                    "column": 30
                  }
                },
                "range": [
                  11,
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
      }
    },
    {
      "source": "while 0 do if 0 then else break end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "WhileStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                    "body": [],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 11
                      },
                      "end": {
                        "line": 1,
                        "column": 20
                      }
                    },
                    "range": [
                      11,
                      20
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "BreakStatement",
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
                        "column": 21
                      },
                      "end": {
                        "line": 1,
                        "column": 31
                      }
                    },
                    "range": [
                      21,
                      31
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
                    "column": 35
                  }
                },
                "range": [
                  11,
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
                "column": 39
              }
            },
            "range": [
              0,
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
      "source": "for i = 1, 2 do break end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "i",
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
              "value": 2,
              "raw": "2",
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
            "body": [
              {
                "type": "BreakStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 16
                  },
                  "end": {
                    "line": 1,
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
        "globals": []
      }
    },
    {
      "source": "for i = 1, 2 do do break end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "i",
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
              "value": 2,
              "raw": "2",
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
            "body": [
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 19
                      },
                      "end": {
                        "line": 1,
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
                    "line": 1,
                    "column": 16
                  },
                  "end": {
                    "line": 1,
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
      }
    },
    {
      "source": "for i = 1, 2 do if 0 then break end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "i",
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
              "value": 2,
              "raw": "2",
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
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                    },
                    "body": [
                      {
                        "type": "BreakStatement",
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
                        "column": 16
                      },
                      "end": {
                        "line": 1,
                        "column": 31
                      }
                    },
                    "range": [
                      16,
                      31
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
                    "column": 35
                  }
                },
                "range": [
                  16,
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
                "column": 39
              }
            },
            "range": [
              0,
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
      "source": "for i = 1, 2 do if 0 then else break end end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "i",
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
              "value": 2,
              "raw": "2",
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
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                    },
                    "body": [],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 16
                      },
                      "end": {
                        "line": 1,
                        "column": 25
                      }
                    },
                    "range": [
                      16,
                      25
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "BreakStatement",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 31
                          },
                          "end": {
                            "line": 1,
                            "column": 36
                          }
                        },
                        "range": [
                          31,
                          36
                        ]
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 1,
                        "column": 26
                      },
                      "end": {
                        "line": 1,
                        "column": 36
                      }
                    },
                    "range": [
                      26,
                      36
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
                    "column": 40
                  }
                },
                "range": [
                  16,
                  40
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
                "column": 44
              }
            },
            "range": [
              0,
              44
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
            "column": 44
          }
        },
        "range": [
          0,
          44
        ],
        "comments": [],
        "globals": []
      }
    },
    {
      "source": "for a in b do break end",
      "result": {
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
              }
            ],
            "iterators": [
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
                "isLocal": false
              }
            ],
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
                "column": 0
              },
              "end": {
                "line": 1,
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
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
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
      "source": "for a in b do do break end end",
      "result": {
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
              }
            ],
            "iterators": [
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
                  }
                ],
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 14
                  },
                  "end": {
                    "line": 1,
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
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "for a in b do if 0 then break end end",
      "result": {
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
              }
            ],
            "iterators": [
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
                "isLocal": false
              }
            ],
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                    "body": [
                      {
                        "type": "BreakStatement",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 24
                          },
                          "end": {
                            "line": 1,
                            "column": 29
                          }
                        },
                        "range": [
                          24,
                          29
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
                        "column": 29
                      }
                    },
                    "range": [
                      14,
                      29
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
                    "column": 33
                  }
                },
                "range": [
                  14,
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
        "globals": [
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
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "for a in b do if 0 then else break end end",
      "result": {
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
              }
            ],
            "iterators": [
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
                "isLocal": false
              }
            ],
            "body": [
              {
                "type": "IfStatement",
                "clauses": [
                  {
                    "type": "IfClause",
                    "condition": {
                      "type": "NumericLiteral",
                      "value": 0,
                      "raw": "0",
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
                        "column": 14
                      },
                      "end": {
                        "line": 1,
                        "column": 23
                      }
                    },
                    "range": [
                      14,
                      23
                    ]
                  },
                  {
                    "type": "ElseClause",
                    "body": [
                      {
                        "type": "BreakStatement",
                        "loc": {
                          "start": {
                            "line": 1,
                            "column": 29
                          },
                          "end": {
                            "line": 1,
                            "column": 34
                          }
                        },
                        "range": [
                          29,
                          34
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
                        "column": 34
                      }
                    },
                    "range": [
                      24,
                      34
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
                    "column": 38
                  }
                },
                "range": [
                  14,
                  38
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
                "column": 42
              }
            },
            "range": [
              0,
              42
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
            "column": 42
          }
        },
        "range": [
          0,
          42
        ],
        "comments": [],
        "globals": [
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
            "isLocal": false
          }
        ]
      }
    },
    {
      "source": "function x() break end",
      "result": "[1:19] no loop to break near 'end'"
    },
    {
      "source": "local function x() break end",
      "result": "[1:25] no loop to break near 'end'"
    },
    {
      "source": "function x() repeat break until 0 end",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "FunctionDeclaration",
            "identifier": {
              "type": "Identifier",
              "name": "x",
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
                "type": "RepeatStatement",
                "condition": {
                  "type": "NumericLiteral",
                  "value": 0,
                  "raw": "0",
                  "loc": {
                    "start": {
                      "line": 1,
                      "column": 32
                    },
                    "end": {
                      "line": 1,
                      "column": 33
                    }
                  },
                  "range": [
                    32,
                    33
                  ]
                },
                "body": [
                  {
                    "type": "BreakStatement",
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
                    "column": 13
                  },
                  "end": {
                    "line": 1,
                    "column": 33
                  }
                },
                "range": [
                  13,
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
        "globals": [
          {
            "type": "Identifier",
            "name": "x",
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
      "source": "break",
      "result": "[1:5] no loop to break near '<eof>'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "do break end",
      "result": "[1:9] no loop to break near 'end'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "if 0 then break end",
      "result": "[1:16] no loop to break near 'end'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "if 0 then else break end",
      "result": "[1:21] no loop to break near 'end'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "while 0 do function x() break end end",
      "result": "[1:30] no loop to break near 'end'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "repeat function x() break end until 0",
      "result": "[1:26] no loop to break near 'end'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "repeat x = function() break end until 0",
      "result": "[1:28] no loop to break near 'end'",
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "repeat break until 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
            },
            "body": [
              {
                "type": "BreakStatement",
                "loc": {
                  "start": {
                    "line": 1,
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 12
                  }
                },
                "range": [
                  7,
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
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    },
    {
      "source": "repeat do break end until 0",
      "result": {
        "type": "Chunk",
        "body": [
          {
            "type": "RepeatStatement",
            "condition": {
              "type": "NumericLiteral",
              "value": 0,
              "raw": "0",
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
                "type": "DoStatement",
                "body": [
                  {
                    "type": "BreakStatement",
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
                    "column": 7
                  },
                  "end": {
                    "line": 1,
                    "column": 19
                  }
                },
                "range": [
                  7,
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
      "options": {
        "comments": true,
        "locations": true,
        "ranges": true,
        "scope": true,
        "luaVersion": "5.2"
      }
    }
  ];
}));
