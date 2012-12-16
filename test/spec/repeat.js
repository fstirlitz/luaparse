describe('repeat', function() {
  it('repeat                                  -- FAIL', function() {
    expect(parser.parse('repeat', {wait:true}).end).throws("[1:6] 'until' expected near '<eof>'");
  });
  it('repeat until                            -- FAIL', function() {
    expect(parser.parse('repeat until', {wait:true}).end).throws("[1:12] <expression> expected near '<eof>'");
  });
  it('repeat until 0', function() {
    expect(parser.parse('repeat until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
          },
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('repeat until false', function() {
    expect(parser.parse('repeat until false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": false
          },
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('repeat until local                      -- FAIL', function() {
    expect(parser.parse('repeat until local', {wait:true}).end).throws("[1:13] <expression> expected near 'local'");
  });
  it('repeat end                              -- FAIL', function() {
    expect(parser.parse('repeat end', {wait:true}).end).throws("[1:7] 'until' expected near 'end'");
  });
  it('repeat 1                                -- FAIL', function() {
    expect(parser.parse('repeat 1', {wait:true}).end).throws("[1:7] Unexpected symbol '1' near '1'");
  });
  it('repeat =                                -- FAIL', function() {
    expect(parser.parse('repeat =', {wait:true}).end).throws("[1:7] Unexpected symbol '=' near '='");
  });
  it('repeat local a until 1', function() {
    expect(parser.parse('repeat local a until 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 1
          },
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a"
                }
              ],
              "init": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('repeat local a local b until 0', function() {
    expect(parser.parse('repeat local a local b until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
          },
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a"
                }
              ],
              "init": []
            },
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "b"
                }
              ],
              "init": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('repeat local a; local b; until 0', function() {
    expect(parser.parse('repeat local a; local b; until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
          },
          "body": [
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "a"
                }
              ],
              "init": []
            },
            {
              "type": "LocalStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "b"
                }
              ],
              "init": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('repeat 2 until 1                        -- FAIL', function() {
    expect(parser.parse('repeat 2 until 1', {wait:true}).end).throws("[1:7] Unexpected symbol '2' near '2'");
  });
  it('repeat "foo" until 1                    -- FAIL', function() {
    expect(parser.parse('repeat "foo" until 1', {wait:true}).end).throws("[1:7] Unexpected symbol 'foo' near 'foo'");
  });
  it('repeat return until 0', function() {
    expect(parser.parse('repeat return until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
          },
          "body": [
            {
              "type": "ReturnStatement",
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('repeat return return until 0            -- FAIL', function() {
    expect(parser.parse('repeat return return until 0', {wait:true}).end).throws("[1:14] 'until' expected near 'return'");
  });
  it('repeat break until 0', function() {
    expect(parser.parse('repeat break until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
          },
          "body": [
            {
              "type": "BreakStatement"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('repeat do end until 0', function() {
    expect(parser.parse('repeat do end until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
          },
          "body": [
            {
              "type": "DoStatement",
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('repeat do return end until 0', function() {
    expect(parser.parse('repeat do return end until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
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
      "comments": []
    });
  });
  it('repeat do break end until 0', function() {
    expect(parser.parse('repeat do break end until 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "RepeatStatement",
          "condition": {
            "type": "Literal",
            "value": 0
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
      "comments": []
    });
  });
});
