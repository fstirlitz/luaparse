describe('conditional', function() {
  it('if                                      -- FAIL', function() {
    expect(parser.parse('if', {wait:true}).end).to.throwError(/^\[1:2\] 'then' expected near '<eof>'$/);
  });
  it('elseif                                  -- FAIL', function() {
    expect(parser.parse('elseif', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected keyword 'elseif' near '<eof>'$/);
  });
  it('else                                    -- FAIL', function() {
    expect(parser.parse('else', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected keyword 'else' near '<eof>'$/);
  });
  it('then                                    -- FAIL', function() {
    expect(parser.parse('then', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected keyword 'then' near '<eof>'$/);
  });
  it('if then                                 -- FAIL', function() {
    expect(parser.parse('if then', {wait:true}).end).to.throwError(/^\[1:7\] 'end' expected near '<eof>'$/);
  });
  it('if 1                                    -- FAIL', function() {
    expect(parser.parse('if 1', {wait:true}).end).to.throwError(/^\[1:4\] 'then' expected near '<eof>'$/);
  });
  it('if 1 then                               -- FAIL', function() {
    expect(parser.parse('if 1 then', {wait:true}).end).to.throwError(/^\[1:9\] 'end' expected near '<eof>'$/);
  });
  it('if 1 else                               -- FAIL', function() {
    expect(parser.parse('if 1 else', {wait:true}).end).to.throwError(/^\[1:5\] 'then' expected near 'else'$/);
  });
  it('if 1 then else                          -- FAIL', function() {
    expect(parser.parse('if 1 then else', {wait:true}).end).to.throwError(/^\[1:14\] 'end' expected near '<eof>'$/);
  });
  it('if 1 then elseif                        -- FAIL', function() {
    expect(parser.parse('if 1 then elseif', {wait:true}).end).to.throwError(/^\[1:16\] 'then' expected near '<eof>'$/);
  });
  it('if 1 then end', function() {
    expect(parser.parse('if 1 then end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a end', function() {
    expect(parser.parse('if 1 then local a end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
                      "name": "a"
                    }
                  ],
                  "init": []
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a local b end', function() {
    expect(parser.parse('if 1 then local a local b end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a; local b; end', function() {
    expect(parser.parse('if 1 then local a; local b; end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then else end', function() {
    expect(parser.parse('if 1 then else end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            },
            {
              "type": "ElseClause",
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a else local b end', function() {
    expect(parser.parse('if 1 then local a else local b end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
                      "name": "a"
                    }
                  ],
                  "init": []
                }
              ]
            },
            {
              "type": "ElseClause",
              "body": [
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a; else local b; end', function() {
    expect(parser.parse('if 1 then local a; else local b; end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
                      "name": "a"
                    }
                  ],
                  "init": []
                }
              ]
            },
            {
              "type": "ElseClause",
              "body": [
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then elseif 2                      -- FAIL', function() {
    expect(parser.parse('if 1 then elseif 2', {wait:true}).end).to.throwError(/^\[1:18\] 'then' expected near '<eof>'$/);
  });
  it('if 1 then elseif 2 then                 -- FAIL', function() {
    expect(parser.parse('if 1 then elseif 2 then', {wait:true}).end).to.throwError(/^\[1:23\] 'end' expected near '<eof>'$/);
  });
  it('if 1 then elseif 2 then end', function() {
    expect(parser.parse('if 1 then elseif 2 then end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              },
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a elseif 2 then local b end', function() {
    expect(parser.parse('if 1 then local a elseif 2 then local b end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
                      "name": "a"
                    }
                  ],
                  "init": []
                }
              ]
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              },
              "body": [
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a; elseif 2 then local b; end', function() {
    expect(parser.parse('if 1 then local a; elseif 2 then local b; end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
                      "name": "a"
                    }
                  ],
                  "init": []
                }
              ]
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              },
              "body": [
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then elseif 2 then else end', function() {
    expect(parser.parse('if 1 then elseif 2 then else end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            },
            {
              "type": "ElseifClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              },
              "body": []
            },
            {
              "type": "ElseClause",
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then else if 2 then end end', function() {
    expect(parser.parse('if 1 then else if 2 then end end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            },
            {
              "type": "ElseClause",
              "body": [
                {
                  "type": "IfStatement",
                  "clauses": [
                    {
                      "type": "IfClause",
                      "condition": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "body": []
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
  it('if 1 then else if 2 then end            -- FAIL', function() {
    expect(parser.parse('if 1 then else if 2 then end', {wait:true}).end).to.throwError(/^\[1:28\] 'end' expected near '<eof>'$/);
  });
  it('if 1 then return end', function() {
    expect(parser.parse('if 1 then return end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then return return end             -- FAIL', function() {
    expect(parser.parse('if 1 then return return end', {wait:true}).end).to.throwError(/^\[1:17\] 'end' expected near 'return'$/);
  });
  it('if 1 then end; if 1 then end;', function() {
    expect(parser.parse('if 1 then end; if 1 then end;')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            }
          ]
        },
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
});
