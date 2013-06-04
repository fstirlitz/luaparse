(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "do": {
      "do": "[1:2] 'end' expected near '<eof>'",
      "end": "[1:0] Unexpected keyword 'end' near '<eof>'",
      "do end": {
        "type": "Chunk",
        "body": [
          {
            "type": "DoStatement",
            "body": []
          }
        ],
        "comments": [],
        "globals": []
      },
      "do 1 end": "[1:3] Unexpected number '1' near 'end'",
      "do \"foo\" end": "[1:3] Unexpected string 'foo' near 'end'",
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
                    "isLocal": true
                  },
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
                    "isLocal": true
                  }
                ],
                "init": [
                  {
                    "type": "NumericLiteral",
                    "value": 1,
                    "raw": "1"
                  }
                ]
              }
            ]
          }
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
                "body": []
              }
            ]
          }
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
                "body": []
              }
            ]
          }
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
                    "body": []
                  }
                ]
              }
            ]
          }
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
                    "body": []
                  }
                ]
              }
            ]
          }
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
                        "arguments": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "do end do": "[1:9] 'end' expected near '<eof>'",
      "do end end": "[1:7] Unexpected keyword 'end' near '<eof>'",
      "do return end": {
        "type": "Chunk",
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
        ],
        "comments": [],
        "globals": []
      },
      "do return return end": "[1:10] 'end' expected near 'return'"
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
    root.testSuite['do'] = tests;
  }
}(this));
