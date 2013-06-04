(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "functioncalls": {
      "a(": "[1:2] ')' expected near '<eof>'",
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
                "isLocal": false
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "a(1,)": "[1:4] <expression> expected near ')'",
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
                "isLocal": false
              },
              "arguments": [
                {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                },
                {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "1()": "[1:0] Unexpected number '1' near '('",
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
                  "isLocal": false
                },
                "arguments": []
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "a.1": "[1:0] Unexpected identifier 'a' near '<eof>'",
      "a.b": "[1:0] Unexpected identifier 'a' near '<eof>'",
      "a[b]": "[1:0] Unexpected identifier 'a' near '<eof>'",
      "a.b.(": "[1:4] <name> expected near '('",
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
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
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
                    "isLocal": false
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
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
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
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
                    "isLocal": false
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "c",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "a:b": "[1:3] function arguments expected near '<eof>'",
      "a:1": "[1:2] <name> expected near '1'",
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
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
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
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          }
        ]
      },
      "a:b:": "[1:3] function arguments expected near ':'",
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
                  "isLocal": false
                },
                "base": {
                  "type": "CallExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ":",
                    "identifier": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    }
                  },
                  "arguments": []
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          }
        ]
      },
      "a:b().c[d]:e()": {
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
                  "name": "e",
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    },
                    "base": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "arguments": []
                    }
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
            "isLocal": false
          }
        ]
      },
      "a:b()[c].d:e()": {
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
                  "name": "e",
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
                  },
                  "base": {
                    "type": "IndexExpression",
                    "base": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "arguments": []
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    }
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
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
                "isLocal": false
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "()()": "[1:1] <expression> expected near ')'",
      "(1)()": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": []
      },
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
                "raw": "\"foo\""
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": []
      },
      "(true)()": {
        "type": "Chunk",
        "body": [
          {
            "type": "CallStatement",
            "expression": {
              "type": "CallExpression",
              "base": {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              },
              "arguments": []
            }
          }
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
                  "isLocal": false
                },
                "arguments": []
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          }
        ]
      },
      "(a.b)()": {
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "(a[b])()": {
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
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
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
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "(a).b[c]:d()": {
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
                  "name": "d",
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    }
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "c",
                    "isLocal": false
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          }
        ]
      },
      "(a)[b].c:d()": {
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
                  "name": "d",
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "c",
                    "isLocal": false
                  },
                  "base": {
                    "type": "IndexExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    }
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          }
        ]
      },
      "(a):b():c()": {
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
                  "isLocal": false
                },
                "base": {
                  "type": "CallExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ":",
                    "identifier": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    }
                  },
                  "arguments": []
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          }
        ]
      },
      "(a):b().c[d]:e()": {
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
                  "name": "e",
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    },
                    "base": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "arguments": []
                    }
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
            "isLocal": false
          }
        ]
      },
      "(a):b()[c].d:e()": {
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
                  "name": "e",
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
                  },
                  "base": {
                    "type": "IndexExpression",
                    "base": {
                      "type": "CallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "arguments": []
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    }
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
            "isLocal": false
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
                "isLocal": false
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                "isLocal": false
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "[[foo]]"
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                "isLocal": false
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "arguments": []
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "argument": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "base": {
                  "type": "StringCallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "argument": {
                    "type": "StringLiteral",
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                    "isLocal": false
                  },
                  "argument": {
                    "type": "StringLiteral",
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "base": {
                  "type": "StringCallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "argument": {
                    "type": "StringLiteral",
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
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
                  "isLocal": false
                },
                "argument": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                }
              },
              "argument": {
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "argument": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                }
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    },
                    "base": {
                      "type": "StringCallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "argument": {
                        "type": "StringLiteral",
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    }
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
                  }
                }
              },
              "argument": {
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
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
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
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
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "argument": {
                        "type": "StringLiteral",
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    }
                  }
                }
              },
              "argument": {
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
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
                  "isLocal": false
                },
                "arguments": []
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "arguments": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "base": {
                  "type": "TableCallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "arguments": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                    "isLocal": false
                  },
                  "arguments": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
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
                  "isLocal": false
                },
                "base": {
                  "type": "TableCallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "arguments": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  }
                }
              },
              "arguments": []
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
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
                  "isLocal": false
                },
                "arguments": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "arguments": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
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
                  "isLocal": false
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    },
                    "base": {
                      "type": "TableCallExpression",
                      "base": {
                        "type": "MemberExpression",
                        "indexer": ":",
                        "identifier": {
                          "type": "Identifier",
                          "name": "b",
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "arguments": {
                        "type": "TableConstructorExpression",
                        "fields": []
                      }
                    }
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
                  }
                }
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
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
                  "isLocal": false
                },
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "d",
                    "isLocal": false
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
                          "isLocal": false
                        },
                        "base": {
                          "type": "Identifier",
                          "name": "a",
                          "isLocal": false
                        }
                      },
                      "arguments": {
                        "type": "TableConstructorExpression",
                        "fields": []
                      }
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": false
                    }
                  }
                }
              },
              "arguments": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "a",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "c",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "d",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "e",
            "isLocal": false
          }
        ]
      }
    }
  };

  if (freeExports && !freeExports.nodeType) {
    if (freeModule) freeModule.exports = tests; // In Node.js or Ringo v0.8.0+
    else { // In Narwhal or RingoJS v0.7.0-
      for (var test in tests) if (tests.hasOwnProperty(test)) {
         freeExports[test] = tests[test];
      }
    }
  } else { // In Rhino or web browser
    if (!root.testSuite) root.testSuite = {};
    root.testSuite['functioncalls'] = tests;
  }
}(this));
