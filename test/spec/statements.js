(function (root) {
  var freeExports = typeof exports === 'object' && exports
    , freeModule = typeof module === 'object' && module && module.exports == freeExports && module
    , freeGlobal = typeof global === 'object' && global;

  if (freeGlobal.global == freeGlobal) root = freeGlobal;

  var tests = {
    "statements": {
      "break": {
        "type": "Chunk",
        "body": [
          {
            "type": "BreakStatement"
          }
        ],
        "comments": [],
        "globals": []
      },
      "::foo": "[1:5] '::' expected near '<eof>'",
      "::foo::": {
        "type": "Chunk",
        "body": [
          {
            "type": "LabelStatement",
            "label": {
              "type": "Identifier",
              "name": "foo",
              "isLocal": true
            }
          }
        ],
        "comments": [],
        "globals": []
      },
      "goto": "[1:4] <name> expected near '<eof>'",
      "goto foo": {
        "type": "Chunk",
        "body": [
          {
            "type": "GotoStatement",
            "label": {
              "type": "Identifier",
              "name": "foo",
              "isLabel": false
            }
          }
        ],
        "comments": [],
        "globals": []
      },
      "nil": "[1:0] Unexpected symbol 'nil' near '<eof>'"
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
    root.testSuite['statements'] = tests;
  }
}(this));
