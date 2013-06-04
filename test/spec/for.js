(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "for": {
      "for": "[1:3] <name> expected near '<eof>'",
      "for do": "[1:4] <name> expected near 'do'",
      "for end": "[1:4] <name> expected near 'end'",
      "for 1": "[1:4] <name> expected near '1'",
      "for a": "[1:5] 'in' expected near '<eof>'",
      "for true": "[1:4] <name> expected near 'true'",
      "for a, in": "[1:7] <name> expected near 'in'",
      "for a in": "[1:8] <expression> expected near '<eof>'",
      "for a do": "[1:6] 'in' expected near 'do'",
      "for a in do": "[1:9] <expression> expected near 'do'",
      "for a in b do": "[1:13] 'end' expected near '<eof>'",
      "for a in b end": "[1:11] 'do' expected near 'end'",
      "for a in b, do": "[1:12] <expression> expected near 'do'",
      "for a in b do end": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
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
                    "isLocal": true
                  }
                ],
                "init": []
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": true
                  }
                ],
                "init": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
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
                    "isLocal": true
                  }
                ],
                "init": []
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": true
                  }
                ],
                "init": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "for a in b do 1 end": "[1:14] Unexpected number '1' near 'end'",
      "for a in b do \"foo\" end": "[1:14] Unexpected string 'foo' near 'end'",
      "for a b in": "[1:6] 'in' expected near 'b'",
      "for a, b, c in p do end": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": false
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
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
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": true
              },
              {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "p",
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "q",
                "isLocal": false
              },
              {
                "type": "Identifier",
                "name": "r",
                "isLocal": false
              }
            ],
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "q",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "r",
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              }
            ],
            "body": []
          }
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              }
            ],
            "body": []
          }
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            ],
            "body": []
          }
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            ],
            "body": [
              {
                "type": "BreakStatement"
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            ],
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "for a in b do return return end": "[1:21] 'end' expected near 'return'",
      "for a in b do do end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForGenericStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            ],
            "body": [
              {
                "type": "DoStatement",
                "body": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            ],
            "body": [
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "BreakStatement"
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
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
                "isLocal": true
              }
            ],
            "iterators": [
              {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            ],
            "body": [
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "arguments": []
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "b",
            "isLocal": false
          }
        ]
      },
      "for =": "[1:4] <name> expected near '='",
      "for a =": "[1:7] <expression> expected near '<eof>'",
      "for a, b =": "[1:9] 'in' expected near '='",
      "for a = do": "[1:8] <expression> expected near 'do'",
      "for a = 1, do": "[1:11] <expression> expected near 'do'",
      "for a = p, q, do": "[1:14] <expression> expected near 'do'",
      "for a = p q do": "[1:10] ',' expected near 'q'",
      "for a = b do end": "[1:10] ',' expected near 'do'",
      "for a = 1, 2, 3, 4 do end": "[1:15] 'do' expected near ','",
      "for a = p, q do end": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "start": {
              "type": "Identifier",
              "name": "p",
              "isLocal": false
            },
            "end": {
              "type": "Identifier",
              "name": "q",
              "isLocal": false
            },
            "step": null,
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "q",
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
              "isLocal": true
            },
            "start": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "end": {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            },
            "step": null,
            "body": []
          }
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
              "isLocal": true
            },
            "start": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "end": {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            },
            "step": null,
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": true
                  }
                ],
                "init": []
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": true
                  }
                ],
                "init": []
              }
            ]
          }
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
              "isLocal": true
            },
            "start": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "end": {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            },
            "step": null,
            "body": [
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": true
                  }
                ],
                "init": []
              },
              {
                "type": "LocalStatement",
                "variables": [
                  {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": true
                  }
                ],
                "init": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "for a = 1, 2 do 3 end": "[1:16] Unexpected number '3' near 'end'",
      "for a = 1, 2 do \"foo\" end": "[1:16] Unexpected string 'foo' near 'end'",
      "for a = p, q, r do end": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "start": {
              "type": "Identifier",
              "name": "p",
              "isLocal": false
            },
            "end": {
              "type": "Identifier",
              "name": "q",
              "isLocal": false
            },
            "step": {
              "type": "Identifier",
              "name": "r",
              "isLocal": false
            },
            "body": []
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "q",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "r",
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
              "isLocal": true
            },
            "start": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "end": {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            },
            "step": {
              "type": "NumericLiteral",
              "value": 3,
              "raw": "3"
            },
            "body": []
          }
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
              "isLocal": true
            },
            "start": {
              "type": "Identifier",
              "name": "p",
              "isLocal": false
            },
            "end": {
              "type": "Identifier",
              "name": "q",
              "isLocal": false
            },
            "step": null,
            "body": [
              {
                "type": "BreakStatement"
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "q",
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
              "isLocal": true
            },
            "start": {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            "end": {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            },
            "step": null,
            "body": [
              {
                "type": "ReturnStatement",
                "arguments": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "for a = 1, 2 do return return end": "[1:23] 'end' expected near 'return'",
      "for a = p, q do do end end": {
        "type": "Chunk",
        "body": [
          {
            "type": "ForNumericStatement",
            "variable": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "start": {
              "type": "Identifier",
              "name": "p",
              "isLocal": false
            },
            "end": {
              "type": "Identifier",
              "name": "q",
              "isLocal": false
            },
            "step": null,
            "body": [
              {
                "type": "DoStatement",
                "body": []
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "q",
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
              "isLocal": true
            },
            "start": {
              "type": "Identifier",
              "name": "p",
              "isLocal": false
            },
            "end": {
              "type": "Identifier",
              "name": "q",
              "isLocal": false
            },
            "step": null,
            "body": [
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "BreakStatement"
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "q",
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
              "isLocal": true
            },
            "start": {
              "type": "Identifier",
              "name": "p",
              "isLocal": false
            },
            "end": {
              "type": "Identifier",
              "name": "q",
              "isLocal": false
            },
            "step": null,
            "body": [
              {
                "type": "DoStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "arguments": []
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": [
          {
            "type": "Identifier",
            "name": "p",
            "isLocal": false
          },
          {
            "type": "Identifier",
            "name": "q",
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
    root.testSuite['for'] = tests;
  }
}(this));
