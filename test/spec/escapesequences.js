(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "escapesequences": {
      "a = \"bar\nbaz\"": "[1:10] unfinished string near 'bar\n'",
      "a = \"bar\rbaz\"": "[1:10] unfinished string near 'bar\r'",
      "a = \"bar\\\n\\\r\\\t\tbaz\"": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "bar\n\r\t\tbaz",
                "raw": "\"bar\\\n\\\r\\\t\tbaz\""
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
          }
        ]
      },
      "a = \"bar\\80baz\\800\\0foo\"": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "bar\\80baz\\800\\0foo",
                "raw": "\"bar\\80baz\\800\\0foo\""
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
          }
        ]
      },
      "a = \"bar\\\\z    baz\"": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "bar\\z    baz",
                "raw": "\"bar\\\\z    baz\""
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
          }
        ]
      },
      "a = \"bar\\\f\\\u000b\\\\bbaz\"": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "bar\f\u000b\\bbaz",
                "raw": "\"bar\\\f\\\u000b\\\\bbaz\""
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
          }
        ]
      },
      "a = \"bar\f\u000b\\bbaz\"": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "bar\f\u000b\bbaz",
                "raw": "\"bar\f\u000b\\bbaz\""
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
          }
        ]
      },
      "a = '\\\\'": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "\\",
                "raw": "'\\\\'"
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
          }
        ]
      },
      "a = '\\''": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "'",
                "raw": "'\\''"
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
          }
        ]
      },
      "a = '\\123'": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "\\123",
                "raw": "'\\123'"
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
          }
        ]
      },
      "a = '\\x23'": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "\\x23",
                "raw": "'\\x23'"
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
          }
        ]
      },
      "a = '\\xx'": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "\\xx",
                "raw": "'\\xx'"
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
          }
        ]
      },
      "a = '[[bar\f\u000b\\bbaz]]'": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "[[bar\f\u000b\bbaz]]",
                "raw": "'[[bar\f\u000b\\bbaz]]'"
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
          }
        ]
      },
      "a = '[[\\]'": {
        "type": "Chunk",
        "body": [
          {
            "type": "AssignmentStatement",
            "variables": [
              {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            ],
            "init": [
              {
                "type": "StringLiteral",
                "value": "[[]",
                "raw": "'[[\\]'"
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
    root.testSuite['escapesequences'] = tests;
  }
}(this));
