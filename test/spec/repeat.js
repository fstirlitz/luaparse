describe('repeat', function() {
  it('repeat                                  -- FAIL', function() {
    expect(parser.parse('repeat', {wait:true}).end).to.throwError(/^\[1:6\] 'until' expected near '<eof>'$/);
  });
  it('repeat until                            -- FAIL', function() {
    expect(parser.parse('repeat until', {wait:true}).end).to.throwError(/^\[1:12\] <expression> expected near '<eof>'$/);
  });
  it('repeat until 0', function() {
    expect(parser.parse('repeat until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
          "body": []
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('repeat until false', function() {
    expect(parser.parse('repeat until false', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "BooleanLiteral",
            "value": false,
            "raw": "false"
          },
          "body": []
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('repeat until local                      -- FAIL', function() {
    expect(parser.parse('repeat until local', {wait:true}).end).to.throwError(/^\[1:13\] <expression> expected near 'local'$/);
  });
  it('repeat end                              -- FAIL', function() {
    expect(parser.parse('repeat end', {wait:true}).end).to.throwError(/^\[1:7\] 'until' expected near 'end'$/);
  });
  it('repeat 1                                -- FAIL', function() {
    expect(parser.parse('repeat 1', {wait:true}).end).to.throwError(/^\[1:7\] Unexpected number '1' near '<eof>'$/);
  });
  it('repeat =                                -- FAIL', function() {
    expect(parser.parse('repeat =', {wait:true}).end).to.throwError(/^\[1:7\] Unexpected symbol '=' near '<eof>'$/);
  });
  it('repeat local a until 1', function() {
    expect(parser.parse('repeat local a until 1', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
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
            }
          ]
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('repeat local a local b until 0', function() {
    expect(parser.parse('repeat local a local b until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
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
    });
  });
  it('repeat local a; local b; until 0', function() {
    expect(parser.parse('repeat local a; local b; until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
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
    });
  });
  it('repeat 2 until 1                        -- FAIL', function() {
    expect(parser.parse('repeat 2 until 1', {wait:true}).end).to.throwError(/^\[1:7\] Unexpected number '2' near 'until'$/);
  });
  it('repeat "foo" until 1                    -- FAIL', function() {
    expect(parser.parse('repeat "foo" until 1', {wait:true}).end).to.throwError(/^\[1:7\] Unexpected string 'foo' near 'until'$/);
  });
  it('repeat return until 0', function() {
    expect(parser.parse('repeat return until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
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
    });
  });
  it('repeat return return until 0            -- FAIL', function() {
    expect(parser.parse('repeat return return until 0', {wait:true}).end).to.throwError(/^\[1:14\] 'until' expected near 'return'$/);
  });
  it('repeat break until 0', function() {
    expect(parser.parse('repeat break until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
          "body": [
            {
              "type": "BreakStatement"
            }
          ]
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('repeat do end until 0', function() {
    expect(parser.parse('repeat do end until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
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
    });
  });
  it('repeat do return end until 0', function() {
    expect(parser.parse('repeat do return end until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
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
      "globals": []
    });
  });
  it('repeat do break end until 0', function() {
    expect(parser.parse('repeat do break end until 0', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 0,
            "raw": "0"
          },
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
      "globals": []
    });
  });
});
