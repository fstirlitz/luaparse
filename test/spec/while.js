describe('while', function() {
  it('while                                   -- FAIL', function() {
    expect(parser.parse('while', {wait:true}).end).throws("[1:5] 'do' expected near '<eof>'");
  });
  it('while do                                -- FAIL', function() {
    expect(parser.parse('while do', {wait:true}).end).throws("[1:8] 'end' expected near '<eof>'");
  });
  it('while =                                 -- FAIL', function() {
    expect(parser.parse('while =', {wait:true}).end).throws("[1:6] 'do' expected near '='");
  });
  it('while 1 do                              -- FAIL', function() {
    expect(parser.parse('while 1 do', {wait:true}).end).throws("[1:10] 'end' expected near '<eof>'");
  });
  it('while 1 do end', function() {
    expect(parser.parse('while 1 do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "Literal",
            "value": 1
          },
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('while 1 do local a end', function() {
    expect(parser.parse('while 1 do local a end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
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
  it('while 1 do local a local b end', function() {
    expect(parser.parse('while 1 do local a local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
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
  it('while 1 do local a; local b; end', function() {
    expect(parser.parse('while 1 do local a; local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
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
  it('while 1 do 2 end                        -- FAIL', function() {
    expect(parser.parse('while 1 do 2 end', {wait:true}).end).throws("[1:11] Unexpected symbol '2' near '2'");
  });
  it('while 1 do "foo" end                    -- FAIL', function() {
    expect(parser.parse('while 1 do "foo" end', {wait:true}).end).throws("[1:11] Unexpected symbol 'foo' near 'foo'");
  });
  it('while true do end', function() {
    expect(parser.parse('while true do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "Literal",
            "value": true
          },
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('while 1 do while                        -- FAIL', function() {
    expect(parser.parse('while 1 do while', {wait:true}).end).throws("[1:16] 'do' expected near '<eof>'");
  });
  it('while 1 end                             -- FAIL', function() {
    expect(parser.parse('while 1 end', {wait:true}).end).throws("[1:8] 'do' expected near 'end'");
  });
  it('while 1 2 do                            -- FAIL', function() {
    expect(parser.parse('while 1 2 do', {wait:true}).end).throws("[1:8] 'do' expected near '2'");
  });
  it('while 1 = 2 do                          -- FAIL', function() {
    expect(parser.parse('while 1 = 2 do', {wait:true}).end).throws("[1:8] 'do' expected near '='");
  });
  it('while 1 do return end', function() {
    expect(parser.parse('while 1 do return end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "Literal",
            "value": 1
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
  it('while 1 do return return end            -- FAIL', function() {
    expect(parser.parse('while 1 do return return end', {wait:true}).end).throws("[1:18] 'end' expected near 'return'");
  });
  it('while 1 do do end end', function() {
    expect(parser.parse('while 1 do do end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "Literal",
            "value": 1
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
  it('while 1 do do return end end', function() {
    expect(parser.parse('while 1 do do return end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "Literal",
            "value": 1
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
  it('while 1 do break end', function() {
    expect(parser.parse('while 1 do break end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "Literal",
            "value": 1
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
  it('while 1 do do break end end', function() {
    expect(parser.parse('while 1 do do break end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "Literal",
            "value": 1
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


