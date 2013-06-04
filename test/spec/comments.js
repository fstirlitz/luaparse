(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "comments": {
      "-- comment": {
        "type": "Chunk",
        "body": [],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment"
          }
        ],
        "globals": []
      },
      "-- comment\n-- comment": {
        "type": "Chunk",
        "body": [],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment"
          },
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment"
          }
        ],
        "globals": []
      },
      "--coment": {
        "type": "Chunk",
        "body": [],
        "comments": [
          {
            "type": "Comment",
            "value": "coment",
            "raw": "--coment"
          }
        ],
        "globals": []
      },
      "-- comment\nbreak": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement"
          }
        ],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment"
          }
        ],
        "globals": []
      },
      "break--comment": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement"
          }
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--comment"
          }
        ],
        "globals": []
      },
      "--[[comment]]": {
        "type": "Chunk",
        "body": [],
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--[[comment]]"
          }
        ],
        "globals": []
      },
      "if true--[[comment]]then end": {
        "type": "Chunk",
        "body": [
          {
            "type": "IfStatement",
            "clauses": [
              {
                "type": "IfClause",
                "condition": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                },
                "body": []
              }
            ]
          }
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--[[comment]]"
          }
        ],
        "globals": []
      },
      "--[=[comment]=]break": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement"
          }
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment",
            "raw": "--[=[comment]=]"
          }
        ],
        "globals": []
      },
      "--[===[comment\n--[=[sub]=]--\n]===]break": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement"
          }
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "comment\n--[=[sub]=]--\n",
            "raw": "--[===[comment\n--[=[sub]=]--\n]===]"
          }
        ],
        "globals": []
      },
      "--[[comment\nline two]]": {
        "type": "Chunk",
        "body": [],
        "comments": [
          {
            "type": "Comment",
            "value": "comment\nline two",
            "raw": "--[[comment\nline two]]"
          }
        ],
        "globals": []
      },
      "--[[\ncomment\nline two\n]]": {
        "type": "Chunk",
        "body": [],
        "comments": [
          {
            "type": "Comment",
            "value": "comment\nline two\n",
            "raw": "--[[\ncomment\nline two\n]]"
          }
        ],
        "globals": []
      },
      "--[==\nbreak --]]": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement"
          }
        ],
        "comments": [
          {
            "type": "Comment",
            "value": "[==",
            "raw": "--[=="
          },
          {
            "type": "Comment",
            "value": "]]",
            "raw": "--]]"
          }
        ],
        "globals": []
      },
      "if true -- comment\nthen end": {
        "type": "Chunk",
        "body": [
          {
            "type": "IfStatement",
            "clauses": [
              {
                "type": "IfClause",
                "condition": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                },
                "body": []
              }
            ]
          }
        ],
        "comments": [
          {
            "type": "Comment",
            "value": " comment",
            "raw": "-- comment"
          }
        ],
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
    root.testSuite['comments'] = tests;
  }
}(this));
