describe('while', function() {
  it('while                                   -- FAIL', function() {
    expect(parser.parse('while', {wait:true}).end).to.throwError(/^\[1:5\] <expression> expected near '<eof>'$/);
  });
  it('while do                                -- FAIL', function() {
    expect(parser.parse('while do', {wait:true}).end).to.throwError(/^\[1:6\] <expression> expected near 'do'$/);
  });
  it('while =                                 -- FAIL', function() {
    expect(parser.parse('while =', {wait:true}).end).to.throwError(/^\[1:6\] <expression> expected near '='$/);
  });
  it('while 1 do                              -- FAIL', function() {
    expect(parser.parse('while 1 do', {wait:true}).end).to.throwError(/^\[1:10\] 'end' expected near '<eof>'$/);
  });
  it('while 1 do end', function() {
    expect(parser.parse('while 1 do end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
          },
          "body": []
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('while 1 do local a end', function() {
    expect(parser.parse('while 1 do local a end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
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
  it('while 1 do local a local b end', function() {
    expect(parser.parse('while 1 do local a local b end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
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
  it('while 1 do local a; local b; end', function() {
    expect(parser.parse('while 1 do local a; local b; end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
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
  it('while 1 do 2 end                        -- FAIL', function() {
    expect(parser.parse('while 1 do 2 end', {wait:true}).end).to.throwError(/^\[1:11\] Unexpected number '2' near 'end'$/);
  });
  it('while 1 do "foo" end                    -- FAIL', function() {
    expect(parser.parse('while 1 do "foo" end', {wait:true}).end).to.throwError(/^\[1:11\] Unexpected string 'foo' near 'end'$/);
  });
  it('while true do end', function() {
    expect(parser.parse('while true do end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "BooleanLiteral",
            "value": true,
            "raw": "true"
          },
          "body": []
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('while 1 do while                        -- FAIL', function() {
    expect(parser.parse('while 1 do while', {wait:true}).end).to.throwError(/^\[1:16\] <expression> expected near '<eof>'$/);
  });
  it('while 1 end                             -- FAIL', function() {
    expect(parser.parse('while 1 end', {wait:true}).end).to.throwError(/^\[1:8\] 'do' expected near 'end'$/);
  });
  it('while 1 2 do                            -- FAIL', function() {
    expect(parser.parse('while 1 2 do', {wait:true}).end).to.throwError(/^\[1:8\] 'do' expected near '2'$/);
  });
  it('while 1 = 2 do                          -- FAIL', function() {
    expect(parser.parse('while 1 = 2 do', {wait:true}).end).to.throwError(/^\[1:8\] 'do' expected near '='$/);
  });
  it('while 1 do return end', function() {
    expect(parser.parse('while 1 do return end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
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
  it('while 1 do return return end            -- FAIL', function() {
    expect(parser.parse('while 1 do return return end', {wait:true}).end).to.throwError(/^\[1:18\] 'end' expected near 'return'$/);
  });
  it('while 1 do do end end', function() {
    expect(parser.parse('while 1 do do end end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
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
  it('while 1 do do return end end', function() {
    expect(parser.parse('while 1 do do return end end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
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
  it('while 1 do break end', function() {
    expect(parser.parse('while 1 do break end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
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
  it('while 1 do do break end end', function() {
    expect(parser.parse('while 1 do do break end end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "WhileStatement",
          "condition": {
            "type": "NumericLiteral",
            "value": 1,
            "raw": "1"
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
