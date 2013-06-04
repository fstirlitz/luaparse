(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "return": {
      "return return": "[1:7] Unexpected keyword 'return' near '<eof>'",
      "return 1": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "return local": "[1:7] Unexpected keyword 'local' near '<eof>'",
      "return \"foo\"": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
              {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
      },
      "return 1,": "[1:9] <expression> expected near '<eof>'",
      "return 1,2,3": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
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
        ],
        "comments": [],
        "globals": []
      },
      "return a,b,c,d": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
            "arguments": [
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
      "return 1,2;": {
        "type": "Chunk",
        "body": [
          {
            "type": "ReturnStatement",
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
              }
            ]
          }
        ],
        "comments": [],
        "globals": []
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
    root.testSuite['return'] = tests;
  }
}(this));
