describe('do', function() {
  it('do                                      -- FAIL', function() {
    expect(parser.parse('do', {wait:true}).end).to.throwError("[1:2] 'end' expected near '<eof>'");
  });
  it('end                                     -- FAIL', function() {
    expect(parser.parse('end', {wait:true}).end).to.throwError("[1:0] Unexpected keyword 'end' near '<eof>'");
  });
  it('do end', function() {
    expect(parser.parse('do end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "DoStatement",
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('do 1 end                                -- FAIL', function() {
    expect(parser.parse('do 1 end', {wait:true}).end).to.throwError("[1:3] Unexpected number '1' near 'end'");
  });
  it('do "foo" end                            -- FAIL', function() {
    expect(parser.parse('do "foo" end', {wait:true}).end).to.throwError("[1:3] Unexpected string 'foo' near 'end'");
  });
  it('do local a, b end', function() {
    expect(parser.parse('do local a, b end')).to.eql({
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
                  "name": "a"
                },
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
  it('do local a local b end', function() {
    expect(parser.parse('do local a local b end')).to.eql({
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
  it('do local a; local b; end', function() {
    expect(parser.parse('do local a; local b; end')).to.eql({
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
  it('do local a = 1 end', function() {
    expect(parser.parse('do local a = 1 end')).to.eql({
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
                  "name": "a"
                }
              ],
              "init": [
                {
                  "type": "Literal",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('do do end end', function() {
    expect(parser.parse('do do end end')).to.eql({
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
      "comments": []
    });
  });
  it('do do end; end', function() {
    expect(parser.parse('do do end; end')).to.eql({
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
      "comments": []
    });
  });
  it('do do do end end end', function() {
    expect(parser.parse('do do do end end end')).to.eql({
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
      "comments": []
    });
  });
  it('do do do end; end; end', function() {
    expect(parser.parse('do do do end; end; end')).to.eql({
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
      "comments": []
    });
  });
  it('do do do return end end end', function() {
    expect(parser.parse('do do do return end end end')).to.eql({
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
      "comments": []
    });
  });
  it('do end do                               -- FAIL', function() {
    expect(parser.parse('do end do', {wait:true}).end).to.throwError("[1:9] 'end' expected near '<eof>'");
  });
  it('do end end                              -- FAIL', function() {
    expect(parser.parse('do end end', {wait:true}).end).to.throwError("[1:7] Unexpected keyword 'end' near '<eof>'");
  });
  it('do return end', function() {
    expect(parser.parse('do return end')).to.eql({
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
      "comments": []
    });
  });
  it('do return return end                    -- FAIL', function() {
    expect(parser.parse('do return return end', {wait:true}).end).to.throwError("[1:10] 'end' expected near 'return'");
  });
});
