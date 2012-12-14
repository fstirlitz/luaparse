  it('a                                       -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end)
      .throws('[1:1] Unexpected symbol \'<eof>\' near \'<eof>\'');
  });
  it('a,                                      -- FAIL', function() {
    expect(parser.parse('a,', {wait:true}).end)
      .throws('[1:2] \'=\' expected near \'<eof>\'');
  });
  it('a,b,c                                   -- FAIL', function() {
    expect(parser.parse('a,b,c', {wait:true}).end)
      .throws('[1:5] \'=\' expected near \'<eof>\'');
  });
  it('a,b =                                   -- FAIL', function() {
    expect(parser.parse('a,b =', {wait:true}).end)
      .throws('[1:5] <expression> expected near \'<eof>\'');
  });
  it('a = 1', function() {
    expect(parser.parse('a = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
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
      ],
      "comments": []
    });
  });
  it('a = 1,2,3', function() {
    expect(parser.parse('a = 1,2,3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
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
            },
            {
              "type": "Literal",
              "value": 2
            },
            {
              "type": "Literal",
              "value": 3
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a,b,c = 1', function() {
    expect(parser.parse('a,b,c = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            },
            {
              "type": "Identifier",
              "name": "b"
            },
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a,b,c = 1,2,3', function() {
    expect(parser.parse('a,b,c = 1,2,3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            },
            {
              "type": "Identifier",
              "name": "b"
            },
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            },
            {
              "type": "Literal",
              "value": 2
            },
            {
              "type": "Literal",
              "value": 3
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a.b = 1', function() {
    expect(parser.parse('a.b = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a.b.c = 1', function() {
    expect(parser.parse('a.b.c = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              }
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a[b] = 1', function() {
    expect(parser.parse('a[b] = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a[b][c] = 1', function() {
    expect(parser.parse('a[b][c] = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a.b[c] = 1', function() {
    expect(parser.parse('a.b[c] = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a[b].c = 1', function() {
    expect(parser.parse('a[b].c = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              }
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('0 =                                     -- FAIL', function() {
    expect(parser.parse('0 =', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'0\' near \'0\'');
  });
  it('"foo" =                                 -- FAIL', function() {
    expect(parser.parse('"foo" =', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'foo\' near \'foo\'');
  });
  it('true =                                  -- FAIL', function() {
    expect(parser.parse('true =', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'true\' near \'true\'');
  });
  it('(a) =                                   -- FAIL', function() {
    expect(parser.parse('(a) =', {wait:true}).end)
      .throws('[1:5] <expression> expected near \'<eof>\'');
  });
  it('{} =                                    -- FAIL', function() {
    expect(parser.parse('{} =', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'{\' near \'{\'');
  });
  it('a:b() =                                 -- FAIL', function() {
    expect(parser.parse('a:b() =', {wait:true}).end)
      .throws('[1:7] <expression> expected near \'<eof>\'');
  });
  it('a() =                                   -- FAIL', function() {
    expect(parser.parse('a() =', {wait:true}).end)
      .throws('[1:5] <expression> expected near \'<eof>\'');
  });
  it('a.b:c() =                               -- FAIL', function() {
    expect(parser.parse('a.b:c() =', {wait:true}).end)
      .throws('[1:9] <expression> expected near \'<eof>\'');
  });
  it('a[b]() =                                -- FAIL', function() {
    expect(parser.parse('a[b]() =', {wait:true}).end)
      .throws('[1:8] <expression> expected near \'<eof>\'');
  });
  it('a = a b                                 -- FAIL', function() {
    expect(parser.parse('a = a b', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'<eof>\' near \'<eof>\'');
  });
  it('a = 1 2                                 -- FAIL', function() {
    expect(parser.parse('a = 1 2', {wait:true}).end)
      .throws('[1:6] Unexpected symbol \'2\' near \'2\'');
  });
  it('a = a = 1                               -- FAIL', function() {
    expect(parser.parse('a = a = 1', {wait:true}).end)
      .throws('[1:6] Unexpected symbol \'=\' near \'=\'');
  });
  it('-- comment', function() {
    expect(parser.parse('-- comment')).to.deep.equal({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": " comment"
        }
      ]
    });
  });
  it('--coment', function() {
    expect(parser.parse('--coment')).to.deep.equal({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "coment"
        }
      ]
    });
  });
  it('-- comment\\nbreak', function() {
    expect(parser.parse('-- comment\nbreak')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": " comment"
        }
      ]
    });
  });
  it('break--comment', function() {
    expect(parser.parse('break--comment')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment"
        }
      ]
    });
  });
  it('--[[comment]]--', function() {
    expect(parser.parse('--[[comment]]--')).to.deep.equal({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment"
        }
      ]
    });
  });
  it('--[[comment]]--break', function() {
    expect(parser.parse('--[[comment]]--break')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment"
        }
      ]
    });
  });
  it('--[=[comment]=]--break', function() {
    expect(parser.parse('--[=[comment]=]--break')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment"
        }
      ]
    });
  });
  it('--[===[comment\\n--[=[sub]=]--\\n]===]--break', function() {
    expect(parser.parse('--[===[comment\n--[=[sub]=]--\n]===]--break')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\n--[=[sub]=]--\n"
        }
      ]
    });
  });
  it('--[[comment\\nline two]]--', function() {
    expect(parser.parse('--[[comment\nline two]]--')).to.deep.equal({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\nline two"
        }
      ]
    });
  });
  it('--[[\\ncomment\\nline two\\n]]--', function() {
    expect(parser.parse('--[[\ncomment\nline two\n]]--')).to.deep.equal({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\nline two\n"
        }
      ]
    });
  });
  it('if true -- comment\\nthen end', function() {
    expect(parser.parse('if true -- comment\nthen end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": true
              },
              "body": []
            }
          ]
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": " comment"
        }
      ]
    });
  });
  it('if                                      -- FAIL', function() {
    expect(parser.parse('if', {wait:true}).end)
      .throws('[1:2] \'then\' expected near \'<eof>\'');
  });
  it('elseif                                  -- FAIL', function() {
    expect(parser.parse('elseif', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'elseif\' near \'<eof>\'');
  });
  it('else                                    -- FAIL', function() {
    expect(parser.parse('else', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'else\' near \'<eof>\'');
  });
  it('then                                    -- FAIL', function() {
    expect(parser.parse('then', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'then\' near \'then\'');
  });
  it('if then                                 -- FAIL', function() {
    expect(parser.parse('if then', {wait:true}).end)
      .throws('[1:7] \'end\' expected near \'<eof>\'');
  });
  it('if 1                                    -- FAIL', function() {
    expect(parser.parse('if 1', {wait:true}).end)
      .throws('[1:4] \'then\' expected near \'<eof>\'');
  });
  it('if 1 then                               -- FAIL', function() {
    expect(parser.parse('if 1 then', {wait:true}).end)
      .throws('[1:9] \'end\' expected near \'<eof>\'');
  });
  it('if 1 else                               -- FAIL', function() {
    expect(parser.parse('if 1 else', {wait:true}).end)
      .throws('[1:5] \'then\' expected near \'else\'');
  });
  it('if 1 then else                          -- FAIL', function() {
    expect(parser.parse('if 1 then else', {wait:true}).end)
      .throws('[1:14] \'end\' expected near \'<eof>\'');
  });
  it('if 1 then elseif                        -- FAIL', function() {
    expect(parser.parse('if 1 then elseif', {wait:true}).end)
      .throws('[1:16] \'then\' expected near \'<eof>\'');
  });
  it('if 1 then end', function() {
    expect(parser.parse('if 1 then end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": 1
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
    expect(parser.parse('if 1 then local a end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a local b end', function() {
    expect(parser.parse('if 1 then local a local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a; local b; end', function() {
    expect(parser.parse('if 1 then local a; local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then else end', function() {
    expect(parser.parse('if 1 then else end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": 1
              },
              "body": []
            },
            {
              "condition": null,
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then local a else local b end', function() {
    expect(parser.parse('if 1 then local a else local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
            },
            {
              "condition": null,
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
    expect(parser.parse('if 1 then local a; else local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
            },
            {
              "condition": null,
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
    expect(parser.parse('if 1 then elseif 2', {wait:true}).end)
      .throws('[1:18] \'then\' expected near \'<eof>\'');
  });
  it('if 1 then elseif 2 then                 -- FAIL', function() {
    expect(parser.parse('if 1 then elseif 2 then', {wait:true}).end)
      .throws('[1:23] \'end\' expected near \'<eof>\'');
  });
  it('if 1 then elseif 2 then end', function() {
    expect(parser.parse('if 1 then elseif 2 then end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": 1
              },
              "body": []
            },
            {
              "condition": {
                "type": "Literal",
                "value": 2
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
    expect(parser.parse('if 1 then local a elseif 2 then local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
            },
            {
              "condition": {
                "type": "Literal",
                "value": 2
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
    expect(parser.parse('if 1 then local a; elseif 2 then local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
            },
            {
              "condition": {
                "type": "Literal",
                "value": 2
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
    expect(parser.parse('if 1 then elseif 2 then else end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": 1
              },
              "body": []
            },
            {
              "condition": {
                "type": "Literal",
                "value": 2
              },
              "body": []
            },
            {
              "condition": null,
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then else if 2 then end end', function() {
    expect(parser.parse('if 1 then else if 2 then end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": 1
              },
              "body": []
            },
            {
              "condition": null,
              "body": [
                {
                  "type": "IfStatement",
                  "clauses": [
                    {
                      "condition": {
                        "type": "Literal",
                        "value": 2
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
    expect(parser.parse('if 1 then else if 2 then end', {wait:true}).end)
      .throws('[1:28] \'end\' expected near \'<eof>\'');
  });
  it('if 1 then return end', function() {
    expect(parser.parse('if 1 then return end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('if 1 then return return end             -- FAIL', function() {
    expect(parser.parse('if 1 then return return end', {wait:true}).end)
      .throws('[1:17] \'end\' expected near \'return\'');
  });
  it('if 1 then end; if 1 then end;', function() {
    expect(parser.parse('if 1 then end; if 1 then end;')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": 1
              },
              "body": []
            }
          ]
        },
        {
          "type": "IfStatement",
          "clauses": [
            {
              "condition": {
                "type": "Literal",
                "value": 1
              },
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('do                                      -- FAIL', function() {
    expect(parser.parse('do', {wait:true}).end)
      .throws('[1:2] \'end\' expected near \'<eof>\'');
  });
  it('end                                     -- FAIL', function() {
    expect(parser.parse('end', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'end\' near \'<eof>\'');
  });
  it('do end', function() {
    expect(parser.parse('do end')).to.deep.equal({
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
    expect(parser.parse('do 1 end', {wait:true}).end)
      .throws('[1:3] Unexpected symbol \'1\' near \'1\'');
  });
  it('do "foo" end                            -- FAIL', function() {
    expect(parser.parse('do "foo" end', {wait:true}).end)
      .throws('[1:3] Unexpected symbol \'foo\' near \'foo\'');
  });
  it('do local a, b end', function() {
    expect(parser.parse('do local a, b end')).to.deep.equal({
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
    expect(parser.parse('do local a local b end')).to.deep.equal({
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
    expect(parser.parse('do local a; local b; end')).to.deep.equal({
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
    expect(parser.parse('do local a = 1 end')).to.deep.equal({
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
    expect(parser.parse('do do end end')).to.deep.equal({
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
    expect(parser.parse('do do end; end')).to.deep.equal({
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
    expect(parser.parse('do do do end end end')).to.deep.equal({
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
    expect(parser.parse('do do do end; end; end')).to.deep.equal({
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
    expect(parser.parse('do do do return end end end')).to.deep.equal({
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
    expect(parser.parse('do end do', {wait:true}).end)
      .throws('[1:9] \'end\' expected near \'<eof>\'');
  });
  it('do end end                              -- FAIL', function() {
    expect(parser.parse('do end end', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'end\' near \'<eof>\'');
  });
  it('do return end', function() {
    expect(parser.parse('do return end')).to.deep.equal({
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
    expect(parser.parse('do return return end', {wait:true}).end)
      .throws('[1:10] \'end\' expected near \'return\'');
  });
  it('a =                                     -- FAIL', function() {
    expect(parser.parse('a =', {wait:true}).end)
      .throws('[1:3] <expression> expected near \'<eof>\'');
  });
  it('a = [[foo]]', function() {
    expect(parser.parse('a = [[foo]]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": "foo"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {}', function() {
    expect(parser.parse('a = {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a)', function() {
    expect(parser.parse('a = (a)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (nil)', function() {
    expect(parser.parse('a = (nil)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": null
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (true)', function() {
    expect(parser.parse('a = (true)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": true
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (1)', function() {
    expect(parser.parse('a = (1)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
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
      ],
      "comments": []
    });
  });
  it('a = ("foo")', function() {
    expect(parser.parse('a = ("foo")')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": "foo"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ([[foo]])', function() {
    expect(parser.parse('a = ([[foo]])')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": "foo"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ({})', function() {
    expect(parser.parse('a = ({})')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a.b', function() {
    expect(parser.parse('a = a.b')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a.b.                                -- FAIL', function() {
    expect(parser.parse('a = a.b.', {wait:true}).end)
      .throws('[1:8] <name> expected near \'<eof>\'');
  });
  it('a = a.b.c', function() {
    expect(parser.parse('a = a.b.c')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a:b                                 -- FAIL', function() {
    expect(parser.parse('a = a:b', {wait:true}).end)
      .throws('[1:7] <expression> expected near \'<eof>\'');
  });
  it('a = a[b]', function() {
    expect(parser.parse('a = a[b]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[1]', function() {
    expect(parser.parse('a = a[1]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Literal",
                "value": 1
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a["foo"]', function() {
    expect(parser.parse('a = a["foo"]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Literal",
                "value": "foo"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[b][c]', function() {
    expect(parser.parse('a = a[b][c]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a.b[c]', function() {
    expect(parser.parse('a = a.b[c]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[b].c', function() {
    expect(parser.parse('a = a[b].c')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a)[b]', function() {
    expect(parser.parse('a = (a)[b]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a).c', function() {
    expect(parser.parse('a = (a).c')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ()                                  -- FAIL', function() {
    expect(parser.parse('a = ()', {wait:true}).end)
      .throws('[1:6] <expression> expected near \'<eof>\'');
  });
  it('a = a()', function() {
    expect(parser.parse('a = a()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a.b()', function() {
    expect(parser.parse('a = a.b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[b]()', function() {
    expect(parser.parse('a = a[b]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a:b()', function() {
    expect(parser.parse('a = a:b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ":",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a)()', function() {
    expect(parser.parse('a = (a)()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a).b()', function() {
    expect(parser.parse('a = (a).b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a)[b]()', function() {
    expect(parser.parse('a = (a)[b]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a):b()', function() {
    expect(parser.parse('a = (a):b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ":",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a"foo"', function() {
    expect(parser.parse('a = a"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "StringCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": "foo"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a{}', function() {
    expect(parser.parse('a = a{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function                            -- FAIL', function() {
    expect(parser.parse('a = function', {wait:true}).end)
      .throws('[1:12] \'(\' expected near \'<eof>\'');
  });
  it('a = function 1                          -- FAIL', function() {
    expect(parser.parse('a = function 1', {wait:true}).end)
      .throws('[1:13] \'(\' expected near \'1\'');
  });
  it('a = function a                          -- FAIL', function() {
    expect(parser.parse('a = function a', {wait:true}).end)
      .throws('[1:13] \'(\' expected near \'a\'');
  });
  it('a = function end                        -- FAIL', function() {
    expect(parser.parse('a = function end', {wait:true}).end)
      .throws('[1:13] \'(\' expected near \'end\'');
  });
  it('a = function(                           -- FAIL', function() {
    expect(parser.parse('a = function(', {wait:true}).end)
      .throws('[1:13] <name> or \'...\' expected near \'<eof>\'');
  });
  it('a = function() end', function() {
    expect(parser.parse('a = function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "vararg": false,
              "local": false,
              "parameters": [],
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function(1                          -- FAIL', function() {
    expect(parser.parse('a = function(1', {wait:true}).end)
      .throws('[1:13] <name> or \'...\' expected near \'1\'');
  });
  it('a = function(p) end', function() {
    expect(parser.parse('a = function(p) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "vararg": false,
              "local": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p"
                }
              ],
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function(p,)                        -- FAIL', function() {
    expect(parser.parse('a = function(p,)', {wait:true}).end)
      .throws('[1:15] <name> expected near \')\'');
  });
  it('a = function(p q                        -- FAIL', function() {
    expect(parser.parse('a = function(p q', {wait:true}).end)
      .throws('[1:15] <name> or \'...\' expected near \'q\'');
  });
  it('a = function(p,q,r) end', function() {
    expect(parser.parse('a = function(p,q,r) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "vararg": false,
              "local": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p"
                },
                {
                  "type": "Identifier",
                  "name": "q"
                },
                {
                  "type": "Identifier",
                  "name": "r"
                }
              ],
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function(p,q,1                      -- FAIL', function() {
    expect(parser.parse('a = function(p,q,1', {wait:true}).end)
      .throws('[1:17] <name> expected near \'1\'');
  });
  it('a = function(...) end', function() {
    expect(parser.parse('a = function(...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "vararg": true,
              "local": false,
              "parameters": [],
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function(...,                       -- FAIL', function() {
    expect(parser.parse('a = function(...,', {wait:true}).end)
      .throws('[1:16] <name> or \'...\' expected near \',\'');
  });
  it('a = function(p,...) end', function() {
    expect(parser.parse('a = function(p,...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "vararg": true,
              "local": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p"
                }
              ],
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function(p,q,r,...) end', function() {
    expect(parser.parse('a = function(p,q,r,...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "vararg": true,
              "local": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p"
                },
                {
                  "type": "Identifier",
                  "name": "q"
                },
                {
                  "type": "Identifier",
                  "name": "r"
                }
              ],
              "body": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('for                                     -- FAIL', function() {
    expect(parser.parse('for', {wait:true}).end)
      .throws('[1:3] <name> expected near \'<eof>\'');
  });
  it('for do                                  -- FAIL', function() {
    expect(parser.parse('for do', {wait:true}).end)
      .throws('[1:4] <name> expected near \'do\'');
  });
  it('for end                                 -- FAIL', function() {
    expect(parser.parse('for end', {wait:true}).end)
      .throws('[1:4] <name> expected near \'end\'');
  });
  it('for 1                                   -- FAIL', function() {
    expect(parser.parse('for 1', {wait:true}).end)
      .throws('[1:4] <name> expected near \'1\'');
  });
  it('for a                                   -- FAIL', function() {
    expect(parser.parse('for a', {wait:true}).end)
      .throws('[1:5] \'in\' expected near \'<eof>\'');
  });
  it('for true                                -- FAIL', function() {
    expect(parser.parse('for true', {wait:true}).end)
      .throws('[1:4] <name> expected near \'true\'');
  });
  it('for a, in                               -- FAIL', function() {
    expect(parser.parse('for a, in', {wait:true}).end)
      .throws('[1:7] <name> expected near \'in\'');
  });
  it('for a in                                -- FAIL', function() {
    expect(parser.parse('for a in', {wait:true}).end)
      .throws('[1:8] <expression> expected near \'<eof>\'');
  });
  it('for a do                                -- FAIL', function() {
    expect(parser.parse('for a do', {wait:true}).end)
      .throws('[1:6] \'in\' expected near \'do\'');
  });
  it('for a in do                             -- FAIL', function() {
    expect(parser.parse('for a in do', {wait:true}).end)
      .throws('[1:9] <expression> expected near \'do\'');
  });
  it('for a in b do                           -- FAIL', function() {
    expect(parser.parse('for a in b do', {wait:true}).end)
      .throws('[1:13] \'end\' expected near \'<eof>\'');
  });
  it('for a in b end                          -- FAIL', function() {
    expect(parser.parse('for a in b end', {wait:true}).end)
      .throws('[1:11] \'do\' expected near \'end\'');
  });
  it('for a in b, do                          -- FAIL', function() {
    expect(parser.parse('for a in b, do', {wait:true}).end)
      .throws('[1:12] <expression> expected near \'do\'');
  });
  it('for a in b do end', function() {
    expect(parser.parse('for a in b do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in b do local a local b end', function() {
    expect(parser.parse('for a in b do local a local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
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
  it('for a in b do local a; local b; end', function() {
    expect(parser.parse('for a in b do local a; local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
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
  it('for a in b do 1 end                     -- FAIL', function() {
    expect(parser.parse('for a in b do 1 end', {wait:true}).end)
      .throws('[1:14] Unexpected symbol \'1\' near \'1\'');
  });
  it('for a in b do "foo" end                 -- FAIL', function() {
    expect(parser.parse('for a in b do "foo" end', {wait:true}).end)
      .throws('[1:14] Unexpected symbol \'foo\' near \'foo\'');
  });
  it('for a b in                              -- FAIL', function() {
    expect(parser.parse('for a b in', {wait:true}).end)
      .throws('[1:6] \'in\' expected near \'b\'');
  });
  it('for a, b, c in p do end', function() {
    expect(parser.parse('for a, b, c in p do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            },
            {
              "type": "Identifier",
              "name": "b"
            },
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a, b, c in p, q, r do end', function() {
    expect(parser.parse('for a, b, c in p, q, r do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            },
            {
              "type": "Identifier",
              "name": "b"
            },
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "p"
            },
            {
              "type": "Identifier",
              "name": "q"
            },
            {
              "type": "Identifier",
              "name": "r"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in 1 do end', function() {
    expect(parser.parse('for a in 1 do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Literal",
              "value": 1
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in true do end', function() {
    expect(parser.parse('for a in true do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Literal",
              "value": true
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in "foo" do end', function() {
    expect(parser.parse('for a in "foo" do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Literal",
              "value": "foo"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in b do break end', function() {
    expect(parser.parse('for a in b do break end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
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
  it('for a in b do return end', function() {
    expect(parser.parse('for a in b do return end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
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
  it('for a in b do return return end         -- FAIL', function() {
    expect(parser.parse('for a in b do return return end', {wait:true}).end)
      .throws('[1:21] \'end\' expected near \'return\'');
  });
  it('for a in b do do end end', function() {
    expect(parser.parse('for a in b do do end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
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
  it('for a in b do do break end end', function() {
    expect(parser.parse('for a in b do do break end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
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
  it('for a in b do do return end end', function() {
    expect(parser.parse('for a in b do do return end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "b"
            }
          ],
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
  it('for =                                   -- FAIL', function() {
    expect(parser.parse('for =', {wait:true}).end)
      .throws('[1:4] <name> expected near \'=\'');
  });
  it('for a =                                 -- FAIL', function() {
    expect(parser.parse('for a =', {wait:true}).end)
      .throws('[1:7] \',\' expected near \'<eof>\'');
  });
  it('for a, b =                              -- FAIL', function() {
    expect(parser.parse('for a, b =', {wait:true}).end)
      .throws('[1:9] \'in\' expected near \'=\'');
  });
  it('for a = do                              -- FAIL', function() {
    expect(parser.parse('for a = do', {wait:true}).end)
      .throws('[1:8] \',\' expected near \'do\'');
  });
  it('for a = 1, do                           -- FAIL', function() {
    expect(parser.parse('for a = 1, do', {wait:true}).end)
      .throws('[1:13] \'end\' expected near \'<eof>\'');
  });
  it('for a = p, q, do                        -- FAIL', function() {
    expect(parser.parse('for a = p, q, do', {wait:true}).end)
      .throws('[1:16] \'end\' expected near \'<eof>\'');
  });
  it('for a = p q do                          -- FAIL', function() {
    expect(parser.parse('for a = p q do', {wait:true}).end)
      .throws('[1:10] \',\' expected near \'q\'');
  });
  it('for a = b do end                        -- FAIL', function() {
    expect(parser.parse('for a = b do end', {wait:true}).end)
      .throws('[1:10] \',\' expected near \'do\'');
  });
  it('for a = 1, 2, 3, 4 do end               -- FAIL', function() {
    expect(parser.parse('for a = 1, 2, 3, 4 do end', {wait:true}).end)
      .throws('[1:15] \'do\' expected near \',\'');
  });
  it('for a = p, q do end', function() {
    expect(parser.parse('for a = p, q do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Identifier",
            "name": "p"
          },
          "end": {
            "type": "Identifier",
            "name": "q"
          },
          "step": null,
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a = 1, 2 do end', function() {
    expect(parser.parse('for a = 1, 2 do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Literal",
            "value": 1
          },
          "end": {
            "type": "Literal",
            "value": 2
          },
          "step": null,
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a = 1, 2 do local a local b end', function() {
    expect(parser.parse('for a = 1, 2 do local a local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Literal",
            "value": 1
          },
          "end": {
            "type": "Literal",
            "value": 2
          },
          "step": null,
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
  it('for a = 1, 2 do local a; local b; end', function() {
    expect(parser.parse('for a = 1, 2 do local a; local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Literal",
            "value": 1
          },
          "end": {
            "type": "Literal",
            "value": 2
          },
          "step": null,
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
  it('for a = 1, 2 do 3 end                   -- FAIL', function() {
    expect(parser.parse('for a = 1, 2 do 3 end', {wait:true}).end)
      .throws('[1:16] Unexpected symbol \'3\' near \'3\'');
  });
  it('for a = 1, 2 do "foo" end               -- FAIL', function() {
    expect(parser.parse('for a = 1, 2 do "foo" end', {wait:true}).end)
      .throws('[1:16] Unexpected symbol \'foo\' near \'foo\'');
  });
  it('for a = p, q, r do end', function() {
    expect(parser.parse('for a = p, q, r do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Identifier",
            "name": "p"
          },
          "end": {
            "type": "Identifier",
            "name": "q"
          },
          "step": {
            "type": "Identifier",
            "name": "r"
          },
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a = 1, 2, 3 do end', function() {
    expect(parser.parse('for a = 1, 2, 3 do end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Literal",
            "value": 1
          },
          "end": {
            "type": "Literal",
            "value": 2
          },
          "step": {
            "type": "Literal",
            "value": 3
          },
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a = p, q do break end', function() {
    expect(parser.parse('for a = p, q do break end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Identifier",
            "name": "p"
          },
          "end": {
            "type": "Identifier",
            "name": "q"
          },
          "step": null,
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
  it('for a = 1, 2 do return end', function() {
    expect(parser.parse('for a = 1, 2 do return end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Literal",
            "value": 1
          },
          "end": {
            "type": "Literal",
            "value": 2
          },
          "step": null,
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
  it('for a = 1, 2 do return return end       -- FAIL', function() {
    expect(parser.parse('for a = 1, 2 do return return end', {wait:true}).end)
      .throws('[1:23] \'end\' expected near \'return\'');
  });
  it('for a = p, q do do end end', function() {
    expect(parser.parse('for a = p, q do do end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Identifier",
            "name": "p"
          },
          "end": {
            "type": "Identifier",
            "name": "q"
          },
          "step": null,
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
  it('for a = p, q do do break end end', function() {
    expect(parser.parse('for a = p, q do do break end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Identifier",
            "name": "p"
          },
          "end": {
            "type": "Identifier",
            "name": "q"
          },
          "step": null,
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
  it('for a = p, q do do return end end', function() {
    expect(parser.parse('for a = p, q do do return end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ForNumericStatement",
          "variable": {
            "type": "Identifier",
            "name": "a"
          },
          "start": {
            "type": "Identifier",
            "name": "p"
          },
          "end": {
            "type": "Identifier",
            "name": "q"
          },
          "step": null,
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
  it('a(                                      -- FAIL', function() {
    expect(parser.parse('a(', {wait:true}).end)
      .throws('[1:2] \')\' expected near \'<eof>\'');
  });
  it('a()', function() {
    expect(parser.parse('a()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Identifier",
              "name": "a"
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a(1)', function() {
    expect(parser.parse('a(1)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Identifier",
              "name": "a"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1
              }
            ]
          }
        }
      ],
      "comments": []
    });
  });
  it('a(1,)                                   -- FAIL', function() {
    expect(parser.parse('a(1,)', {wait:true}).end)
      .throws('[1:4] <expression> expected near \')\'');
  });
  it('a(1,2,3)', function() {
    expect(parser.parse('a(1,2,3)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Identifier",
              "name": "a"
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1
              },
              null,
              null
            ]
          }
        }
      ],
      "comments": []
    });
  });
  it('1()                                     -- FAIL', function() {
    expect(parser.parse('1()', {wait:true}).end)
      .throws('[1:0] Unexpected symbol \'1\' near \'1\'');
  });
  it('a()()', function() {
    expect(parser.parse('a()()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "arguments": []
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a.b()', function() {
    expect(parser.parse('a.b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a[b]()', function() {
    expect(parser.parse('a[b]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a.1                                     -- FAIL', function() {
    expect(parser.parse('a.1', {wait:true}).end)
      .throws('[1:1] Unexpected symbol \'0.1\' near \'0.1\'');
  });
  it('a.b                                     -- FAIL', function() {
    expect(parser.parse('a.b', {wait:true}).end)
      .throws('[1:3] Unexpected symbol \'<eof>\' near \'<eof>\'');
  });
  it('a[b]                                    -- FAIL', function() {
    expect(parser.parse('a[b]', {wait:true}).end)
      .throws('[1:4] Unexpected symbol \'<eof>\' near \'<eof>\'');
  });
  it('a.b.(                                   -- FAIL', function() {
    expect(parser.parse('a.b.(', {wait:true}).end)
      .throws('[1:4] <name> expected near \'(\'');
  });
  it('a.b.c()', function() {
    expect(parser.parse('a.b.c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a[b][c]()', function() {
    expect(parser.parse('a[b][c]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a[b].c()', function() {
    expect(parser.parse('a[b].c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a.b[c]()', function() {
    expect(parser.parse('a.b[c]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a:b()', function() {
    expect(parser.parse('a:b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a:b                                     -- FAIL', function() {
    expect(parser.parse('a:b', {wait:true}).end)
      .throws('[1:3] <expression> expected near \'<eof>\'');
  });
  it('a:1                                     -- FAIL', function() {
    expect(parser.parse('a:1', {wait:true}).end)
      .throws('[1:2] <name> expected near \'1\'');
  });
  it('a.b:c()', function() {
    expect(parser.parse('a.b:c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a[b]:c()', function() {
    expect(parser.parse('a[b]:c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "index": {
                  "type": "Identifier",
                  "name": "b"
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a:b:                                    -- FAIL', function() {
    expect(parser.parse('a:b:', {wait:true}).end)
      .throws('[1:3] <expression> expected near \':\'');
  });
  it('a:b():c()', function() {
    expect(parser.parse('a:b():c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "CallExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ":",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                "arguments": []
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a:b().c[d]:e()', function() {
    expect(parser.parse('a:b().c[d]:e()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "c"
                  },
                  "base": {
                    "type": "CallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "arguments": []
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "d"
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a:b()[c].d:e()', function() {
    expect(parser.parse('a:b()[c].d:e()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d"
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "CallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "arguments": []
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "c"
                  }
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a)()', function() {
    expect(parser.parse('(a)()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Identifier",
              "name": "a"
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('()()                                    -- FAIL', function() {
    expect(parser.parse('()()', {wait:true}).end)
      .throws('[1:2] <expression> expected near \'(\'');
  });
  it('(1)()', function() {
    expect(parser.parse('(1)()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Literal",
              "value": 1
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('("foo")()', function() {
    expect(parser.parse('("foo")()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Literal",
              "value": "foo"
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(true)()', function() {
    expect(parser.parse('(true)()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Literal",
              "value": true
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a)()()', function() {
    expect(parser.parse('(a)()()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "arguments": []
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a.b)()', function() {
    expect(parser.parse('(a.b)()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a[b])()', function() {
    expect(parser.parse('(a[b])()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a).b()', function() {
    expect(parser.parse('(a).b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a)[b]()', function() {
    expect(parser.parse('(a)[b]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b()', function() {
    expect(parser.parse('(a):b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a).b[c]:d()', function() {
    expect(parser.parse('(a).b[c]:d()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "d"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "c"
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a)[b].c:d()', function() {
    expect(parser.parse('(a)[b].c:d()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "d"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "c"
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "b"
                  }
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b():c()', function() {
    expect(parser.parse('(a):b():c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "CallExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ":",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                "arguments": []
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b().c[d]:e()', function() {
    expect(parser.parse('(a):b().c[d]:e()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "c"
                  },
                  "base": {
                    "type": "CallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "arguments": []
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "d"
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b()[c].d:e()', function() {
    expect(parser.parse('(a):b()[c].d:e()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d"
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "CallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "arguments": []
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "c"
                  }
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a"foo"', function() {
    expect(parser.parse('a"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "Identifier",
              "name": "a"
            },
            "argument": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a[[foo]]', function() {
    expect(parser.parse('a[[foo]]')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "Identifier",
              "name": "a"
            },
            "argument": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a.b"foo"', function() {
    expect(parser.parse('a.b"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "argument": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a[b]"foo"', function() {
    expect(parser.parse('a[b]"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "argument": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a:b"foo"', function() {
    expect(parser.parse('a:b"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "argument": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a{}', function() {
    expect(parser.parse('a{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "Identifier",
              "name": "a"
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('a.b{}', function() {
    expect(parser.parse('a.b{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('a[b]{}', function() {
    expect(parser.parse('a[b]{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('a:b{}', function() {
    expect(parser.parse('a:b{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "Identifier",
                "name": "a"
              }
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('a()"foo"', function() {
    expect(parser.parse('a()"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "arguments": []
            },
            "argument": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a"foo"()', function() {
    expect(parser.parse('a"foo"()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "StringCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": "foo"
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a"foo".b()', function() {
    expect(parser.parse('a"foo".b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "StringCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "argument": "foo"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a"foo"[b]()', function() {
    expect(parser.parse('a"foo"[b]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "StringCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "argument": "foo"
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a"foo":c()', function() {
    expect(parser.parse('a"foo":c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "StringCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "argument": "foo"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a"foo""bar"', function() {
    expect(parser.parse('a"foo""bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "StringCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": "foo"
            },
            "argument": "bar"
          }
        }
      ],
      "comments": []
    });
  });
  it('a"foo"{}', function() {
    expect(parser.parse('a"foo"{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "StringCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": "foo"
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b"foo".c[d]:e"bar"', function() {
    expect(parser.parse('(a):b"foo".c[d]:e"bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "c"
                  },
                  "base": {
                    "type": "StringCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "argument": "foo"
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "d"
                }
              }
            },
            "argument": "bar"
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b"foo"[c].d:e"bar"', function() {
    expect(parser.parse('(a):b"foo"[c].d:e"bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d"
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "StringCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "argument": "foo"
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "c"
                  }
                }
              }
            },
            "argument": "bar"
          }
        }
      ],
      "comments": []
    });
  });
  it('a(){}', function() {
    expect(parser.parse('a(){}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "arguments": []
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('a{}()', function() {
    expect(parser.parse('a{}()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "TableCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a{}.b()', function() {
    expect(parser.parse('a{}.b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "b"
              },
              "base": {
                "type": "TableCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "argument": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a{}[b]()', function() {
    expect(parser.parse('a{}[b]()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "IndexExpression",
              "base": {
                "type": "TableCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "argument": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              },
              "index": {
                "type": "Identifier",
                "name": "b"
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a{}:c()', function() {
    expect(parser.parse('a{}:c()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "TableCallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "argument": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              }
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('a{}"foo"', function() {
    expect(parser.parse('a{}"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "StringCallExpression",
            "base": {
              "type": "TableCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            },
            "argument": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a{}{}', function() {
    expect(parser.parse('a{}{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "TableCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
              },
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b{}.c[d]:e{}', function() {
    expect(parser.parse('(a):b{}.c[d]:e{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ".",
                  "identifier": {
                    "type": "Identifier",
                    "name": "c"
                  },
                  "base": {
                    "type": "TableCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "argument": {
                      "type": "TableConstructorExpression",
                      "fields": []
                    }
                  }
                },
                "index": {
                  "type": "Identifier",
                  "name": "d"
                }
              }
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('(a):b{}[c].d:e{}', function() {
    expect(parser.parse('(a):b{}[c].d:e{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "CallStatement",
          "expression": {
            "type": "TableCallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "e"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d"
                },
                "base": {
                  "type": "IndexExpression",
                  "base": {
                    "type": "TableCallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "argument": {
                      "type": "TableConstructorExpression",
                      "fields": []
                    }
                  },
                  "index": {
                    "type": "Identifier",
                    "name": "c"
                  }
                }
              }
            },
            "argument": {
              "type": "TableConstructorExpression",
              "fields": []
            }
          }
        }
      ],
      "comments": []
    });
  });
  it('function                                -- FAIL', function() {
    expect(parser.parse('function', {wait:true}).end)
      .throws('[1:8] <name> expected near \'<eof>\'');
  });
  it('function 1                              -- FAIL', function() {
    expect(parser.parse('function 1', {wait:true}).end)
      .throws('[1:9] <name> expected near \'1\'');
  });
  it('function end                            -- FAIL', function() {
    expect(parser.parse('function end', {wait:true}).end)
      .throws('[1:9] <name> expected near \'end\'');
  });
  it('function a                              -- FAIL', function() {
    expect(parser.parse('function a', {wait:true}).end)
      .throws('[1:10] \'(\' expected near \'<eof>\'');
  });
  it('function a end                          -- FAIL', function() {
    expect(parser.parse('function a end', {wait:true}).end)
      .throws('[1:11] \'(\' expected near \'end\'');
  });
  it('function a( end                         -- FAIL', function() {
    expect(parser.parse('function a( end', {wait:true}).end)
      .throws('[1:12] <name> or \'...\' expected near \'end\'');
  });
  it('function a() end', function() {
    expect(parser.parse('function a() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a(1                            -- FAIL', function() {
    expect(parser.parse('function a(1', {wait:true}).end)
      .throws('[1:11] <name> or \'...\' expected near \'1\'');
  });
  it('function a("foo"                        -- FAIL', function() {
    expect(parser.parse('function a("foo"', {wait:true}).end)
      .throws('[1:11] <name> or \'...\' expected near \'foo\'');
  });
  it('function a(p                            -- FAIL', function() {
    expect(parser.parse('function a(p', {wait:true}).end)
      .throws('[1:12] <name> or \'...\' expected near \'<eof>\'');
  });
  it('function a(p,)                          -- FAIL', function() {
    expect(parser.parse('function a(p,)', {wait:true}).end)
      .throws('[1:13] <name> expected near \')\'');
  });
  it('function a(p q                          -- FAIL', function() {
    expect(parser.parse('function a(p q', {wait:true}).end)
      .throws('[1:13] <name> or \'...\' expected near \'q\'');
  });
  it('function a(p) end', function() {
    expect(parser.parse('function a(p) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a(p,q,) end                    -- FAIL', function() {
    expect(parser.parse('function a(p,q,) end', {wait:true}).end)
      .throws('[1:15] <name> expected near \')\'');
  });
  it('function a(p,q,r) end', function() {
    expect(parser.parse('function a(p,q,r) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            },
            {
              "type": "Identifier",
              "name": "q"
            },
            {
              "type": "Identifier",
              "name": "r"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a(p,q,1                        -- FAIL', function() {
    expect(parser.parse('function a(p,q,1', {wait:true}).end)
      .throws('[1:15] <name> expected near \'1\'');
  });
  it('function a(p) do                        -- FAIL', function() {
    expect(parser.parse('function a(p) do', {wait:true}).end)
      .throws('[1:16] \'end\' expected near \'<eof>\'');
  });
  it('function a(p) 1 end                     -- FAIL', function() {
    expect(parser.parse('function a(p) 1 end', {wait:true}).end)
      .throws('[1:14] Unexpected symbol \'1\' near \'1\'');
  });
  it('function a(p) return end', function() {
    expect(parser.parse('function a(p) return end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
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
  it('function a(p) return return end         -- FAIL', function() {
    expect(parser.parse('function a(p) return return end', {wait:true}).end)
      .throws('[1:21] \'end\' expected near \'return\'');
  });
  it('function a(p) do end end', function() {
    expect(parser.parse('function a(p) do end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
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
  it('function a.(                            -- FAIL', function() {
    expect(parser.parse('function a.(', {wait:true}).end)
      .throws('[1:11] <name> expected near \'(\'');
  });
  it('function a.1                            -- FAIL', function() {
    expect(parser.parse('function a.1', {wait:true}).end)
      .throws('[1:10] \'(\' expected near \'0.1\'');
  });
  it('function a.b() end', function() {
    expect(parser.parse('function a.b() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "MemberExpression",
            "indexer": ".",
            "identifier": {
              "type": "Identifier",
              "name": "b"
            },
            "base": {
              "type": "Identifier",
              "name": "a"
            }
          },
          "vararg": false,
          "local": false,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a.b,                           -- FAIL', function() {
    expect(parser.parse('function a.b,', {wait:true}).end)
      .throws('[1:12] \'(\' expected near \',\'');
  });
  it('function a.b.(                          -- FAIL', function() {
    expect(parser.parse('function a.b.(', {wait:true}).end)
      .throws('[1:13] <name> expected near \'(\'');
  });
  it('function a.b.c.d() end', function() {
    expect(parser.parse('function a.b.c.d() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "MemberExpression",
            "indexer": ".",
            "identifier": {
              "type": "Identifier",
              "name": "d"
            },
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              }
            }
          },
          "vararg": false,
          "local": false,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a:                             -- FAIL', function() {
    expect(parser.parse('function a:', {wait:true}).end)
      .throws('[1:11] <name> expected near \'<eof>\'');
  });
  it('function a:1                            -- FAIL', function() {
    expect(parser.parse('function a:1', {wait:true}).end)
      .throws('[1:11] <name> expected near \'1\'');
  });
  it('function a:b() end', function() {
    expect(parser.parse('function a:b() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "MemberExpression",
            "indexer": ":",
            "identifier": {
              "type": "Identifier",
              "name": "b"
            },
            "base": {
              "type": "Identifier",
              "name": "a"
            }
          },
          "vararg": false,
          "local": false,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a:b:                           -- FAIL', function() {
    expect(parser.parse('function a:b:', {wait:true}).end)
      .throws('[1:12] \'(\' expected near \':\'');
  });
  it('function a:b.                           -- FAIL', function() {
    expect(parser.parse('function a:b.', {wait:true}).end)
      .throws('[1:12] \'(\' expected near \'.\'');
  });
  it('function a.b.c:d() end', function() {
    expect(parser.parse('function a.b.c:d() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "MemberExpression",
            "indexer": ":",
            "identifier": {
              "type": "Identifier",
              "name": "d"
            },
            "base": {
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c"
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b"
                },
                "base": {
                  "type": "Identifier",
                  "name": "a"
                }
              }
            }
          },
          "vararg": false,
          "local": false,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a(...) end', function() {
    expect(parser.parse('function a(...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": true,
          "local": false,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a(...,                         -- FAIL', function() {
    expect(parser.parse('function a(...,', {wait:true}).end)
      .throws('[1:14] <name> or \'...\' expected near \',\'');
  });
  it('function a(p,...) end', function() {
    expect(parser.parse('function a(p,...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": true,
          "local": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a(p,q,r,...) end', function() {
    expect(parser.parse('function a(p,q,r,...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": true,
          "local": false,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            },
            {
              "type": "Identifier",
              "name": "q"
            },
            {
              "type": "Identifier",
              "name": "r"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('function a() local a local b end', function() {
    expect(parser.parse('function a() local a local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [],
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
  it('function a() local a; local b; end', function() {
    expect(parser.parse('function a() local a; local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [],
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
  it('function a() end; function a() end;', function() {
    expect(parser.parse('function a() end; function a() end;')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [],
          "body": []
        },
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": false,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('a                                         -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end)
      .throws('[1:1] Unexpected symbol \'<eof>\' near \'<eof>\'');
  });
  it('a = 1', function() {
    expect(parser.parse('a = 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
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
      ],
      "comments": []
    });
  });
  it('a = .1', function() {
    expect(parser.parse('a = .1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 0.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1.1', function() {
    expect(parser.parse('a = 1.1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 10.1', function() {
    expect(parser.parse('a = 10.1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 10.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e                                    -- FAIL', function() {
    expect(parser.parse('a = 1e', {wait:true}).end)
      .throws('[1:7] malformed number near \'1e\'');
  });
  it('a = 1e1', function() {
    expect(parser.parse('a = 1e1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 10
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1E1', function() {
    expect(parser.parse('a = 1E1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 10
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e+9', function() {
    expect(parser.parse('a = 1e+9')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1000000000
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e-1', function() {
    expect(parser.parse('a = 1e-1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 0.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0x                                    -- FAIL', function() {
    expect(parser.parse('a = 0x', {wait:true}).end)
      .throws('[1:7] malformed number near \'0x\'');
  });
  it('a = 0xf', function() {
    expect(parser.parse('a = 0xf')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 15
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xf.', function() {
    expect(parser.parse('a = 0xf.')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 15
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xf.3', function() {
    expect(parser.parse('a = 0xf.3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 15.1875
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp                                  -- FAIL', function() {
    expect(parser.parse('a = 0xfp', {wait:true}).end)
      .throws('[1:9] malformed number near \'0xfp\'');
  });
  it('a = 0xfp1', function() {
    expect(parser.parse('a = 0xfp1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 30
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp+1', function() {
    expect(parser.parse('a = 0xfp+1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 30
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp-1', function() {
    expect(parser.parse('a = 0xfp-1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 7.5
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xFP+9', function() {
    expect(parser.parse('a = 0xFP+9')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 7680
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 .. 3 .. -2', function() {
    expect(parser.parse('a = 1 .. 3 .. -2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "Literal",
                  "value": 3
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 2
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 .. "bar"', function() {
    expect(parser.parse('a = 1 .. "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar                                  -- FAIL', function() {
    expect(parser.parse('a = "bar', {wait:true}).end)
      .throws('[1:9] unfinished string near \'bar\'');
  });
  it('a = "bar"', function() {
    expect(parser.parse('a = "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": "bar"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = nil', function() {
    expect(parser.parse('a = nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": null
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true', function() {
    expect(parser.parse('a = true')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": true
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = false', function() {
    expect(parser.parse('a = false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": false
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ...', function() {
    expect(parser.parse('a = ...')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "VarargLiteral"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local                                   -- FAIL', function() {
    expect(parser.parse('local', {wait:true}).end)
      .throws('[1:5] <name> expected near \'<eof>\'');
  });
  it('local;                                  -- FAIL', function() {
    expect(parser.parse('local;', {wait:true}).end)
      .throws('[1:5] <name> expected near \';\'');
  });
  it('local =                                 -- FAIL', function() {
    expect(parser.parse('local =', {wait:true}).end)
      .throws('[1:6] <name> expected near \'=\'');
  });
  it('local end                               -- FAIL', function() {
    expect(parser.parse('local end', {wait:true}).end)
      .throws('[1:6] <name> expected near \'end\'');
  });
  it('local a', function() {
    expect(parser.parse('local a')).to.deep.equal({
      "type": "Chunk",
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
      ],
      "comments": []
    });
  });
  it('local a;', function() {
    expect(parser.parse('local a;')).to.deep.equal({
      "type": "Chunk",
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
      ],
      "comments": []
    });
  });
  it('local a, b, c', function() {
    expect(parser.parse('local a, b, c')).to.deep.equal({
      "type": "Chunk",
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
            },
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": []
        }
      ],
      "comments": []
    });
  });
  it('local a; local b local c;', function() {
    expect(parser.parse('local a; local b local c;')).to.deep.equal({
      "type": "Chunk",
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
        },
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": []
        }
      ],
      "comments": []
    });
  });
  it('local a = 1', function() {
    expect(parser.parse('local a = 1')).to.deep.equal({
      "type": "Chunk",
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
      ],
      "comments": []
    });
  });
  it('local a local b = a', function() {
    expect(parser.parse('local a local b = a')).to.deep.equal({
      "type": "Chunk",
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
          "init": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a, b = 1, 2', function() {
    expect(parser.parse('local a, b = 1, 2')).to.deep.equal({
      "type": "Chunk",
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
          "init": [
            {
              "type": "Literal",
              "value": 1
            },
            {
              "type": "Literal",
              "value": 2
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a, b, c = 1, 2, 3', function() {
    expect(parser.parse('local a, b, c = 1, 2, 3')).to.deep.equal({
      "type": "Chunk",
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
            },
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            },
            {
              "type": "Literal",
              "value": 2
            },
            {
              "type": "Literal",
              "value": 3
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a, b, c = 1', function() {
    expect(parser.parse('local a, b, c = 1')).to.deep.equal({
      "type": "Chunk",
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
            },
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a = 1, 2, 3', function() {
    expect(parser.parse('local a = 1, 2, 3')).to.deep.equal({
      "type": "Chunk",
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
            },
            {
              "type": "Literal",
              "value": 2
            },
            {
              "type": "Literal",
              "value": 3
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a, local                          -- FAIL', function() {
    expect(parser.parse('local a, local', {wait:true}).end)
      .throws('[1:9] <name> expected near \'local\'');
  });
  it('local 1                                 -- FAIL', function() {
    expect(parser.parse('local 1', {wait:true}).end)
      .throws('[1:6] <name> expected near \'1\'');
  });
  it('local "foo"                             -- FAIL', function() {
    expect(parser.parse('local "foo"', {wait:true}).end)
      .throws('[1:6] <name> expected near \'foo\'');
  });
  it('local a = local                         -- FAIL', function() {
    expect(parser.parse('local a = local', {wait:true}).end)
      .throws('[1:10] <expression> expected near \'local\'');
  });
  it('local a, b, =                           -- FAIL', function() {
    expect(parser.parse('local a, b, =', {wait:true}).end)
      .throws('[1:12] <name> expected near \'=\'');
  });
  it('local a, b = 1, local                   -- FAIL', function() {
    expect(parser.parse('local a, b = 1, local', {wait:true}).end)
      .throws('[1:16] <expression> expected near \'local\'');
  });
  it('local a, b = , local                    -- FAIL', function() {
    expect(parser.parse('local a, b = , local', {wait:true}).end)
      .throws('[1:13] <expression> expected near \',\'');
  });
  it('local function                          -- FAIL', function() {
    expect(parser.parse('local function', {wait:true}).end)
      .throws('[1:14] <name> expected near \'<eof>\'');
  });
  it('local function 1                        -- FAIL', function() {
    expect(parser.parse('local function 1', {wait:true}).end)
      .throws('[1:15] <name> expected near \'1\'');
  });
  it('local function end                      -- FAIL', function() {
    expect(parser.parse('local function end', {wait:true}).end)
      .throws('[1:15] <name> expected near \'end\'');
  });
  it('local function a                        -- FAIL', function() {
    expect(parser.parse('local function a', {wait:true}).end)
      .throws('[1:16] \'(\' expected near \'<eof>\'');
  });
  it('local function a end                    -- FAIL', function() {
    expect(parser.parse('local function a end', {wait:true}).end)
      .throws('[1:17] \'(\' expected near \'end\'');
  });
  it('local function a( end                   -- FAIL', function() {
    expect(parser.parse('local function a( end', {wait:true}).end)
      .throws('[1:18] <name> or \'...\' expected near \'end\'');
  });
  it('local function a() end', function() {
    expect(parser.parse('local function a() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('local function a(1                      -- FAIL', function() {
    expect(parser.parse('local function a(1', {wait:true}).end)
      .throws('[1:17] <name> or \'...\' expected near \'1\'');
  });
  it('local function a("foo"                  -- FAIL', function() {
    expect(parser.parse('local function a("foo"', {wait:true}).end)
      .throws('[1:17] <name> or \'...\' expected near \'foo\'');
  });
  it('local function a(p                      -- FAIL', function() {
    expect(parser.parse('local function a(p', {wait:true}).end)
      .throws('[1:18] <name> or \'...\' expected near \'<eof>\'');
  });
  it('local function a(p,)                    -- FAIL', function() {
    expect(parser.parse('local function a(p,)', {wait:true}).end)
      .throws('[1:19] <name> expected near \')\'');
  });
  it('local function a(p q                    -- FAIL', function() {
    expect(parser.parse('local function a(p q', {wait:true}).end)
      .throws('[1:19] <name> or \'...\' expected near \'q\'');
  });
  it('local function a(p) end', function() {
    expect(parser.parse('local function a(p) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('local function a(p,q,) end              -- FAIL', function() {
    expect(parser.parse('local function a(p,q,) end', {wait:true}).end)
      .throws('[1:21] <name> expected near \')\'');
  });
  it('local function a(p,q,r) end', function() {
    expect(parser.parse('local function a(p,q,r) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            },
            {
              "type": "Identifier",
              "name": "q"
            },
            {
              "type": "Identifier",
              "name": "r"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('local function a(p,q,1                  -- FAIL', function() {
    expect(parser.parse('local function a(p,q,1', {wait:true}).end)
      .throws('[1:21] <name> expected near \'1\'');
  });
  it('local function a(p) do                  -- FAIL', function() {
    expect(parser.parse('local function a(p) do', {wait:true}).end)
      .throws('[1:22] \'end\' expected near \'<eof>\'');
  });
  it('local function a(p) 1 end               -- FAIL', function() {
    expect(parser.parse('local function a(p) 1 end', {wait:true}).end)
      .throws('[1:20] Unexpected symbol \'1\' near \'1\'');
  });
  it('local function a(p) return end', function() {
    expect(parser.parse('local function a(p) return end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
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
  it('local function a(p) return return end   -- FAIL', function() {
    expect(parser.parse('local function a(p) return return end', {wait:true}).end)
      .throws('[1:27] \'end\' expected near \'return\'');
  });
  it('local function a(p) do end end', function() {
    expect(parser.parse('local function a(p) do end end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
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
  it('local function a.                       -- FAIL', function() {
    expect(parser.parse('local function a.', {wait:true}).end)
      .throws('[1:16] \'(\' expected near \'.\'');
  });
  it('local function a:                       -- FAIL', function() {
    expect(parser.parse('local function a:', {wait:true}).end)
      .throws('[1:16] \'(\' expected near \':\'');
  });
  it('local function a(...) end', function() {
    expect(parser.parse('local function a(...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": true,
          "local": true,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('local function a(...,                   -- FAIL', function() {
    expect(parser.parse('local function a(...,', {wait:true}).end)
      .throws('[1:20] <name> or \'...\' expected near \',\'');
  });
  it('local function a(p,...) end', function() {
    expect(parser.parse('local function a(p,...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": true,
          "local": true,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('local function a(p,q,r,...) end', function() {
    expect(parser.parse('local function a(p,q,r,...) end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": true,
          "local": true,
          "parameters": [
            {
              "type": "Identifier",
              "name": "p"
            },
            {
              "type": "Identifier",
              "name": "q"
            },
            {
              "type": "Identifier",
              "name": "r"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('local function a() local a local b end', function() {
    expect(parser.parse('local function a() local a local b end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [],
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
  it('local function a() local a; local b; end', function() {
    expect(parser.parse('local function a() local a; local b; end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [],
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
  it('local function a() end; local function a() end;', function() {
    expect(parser.parse('local function a() end; local function a() end;')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [],
          "body": []
        },
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "a"
          },
          "vararg": false,
          "local": true,
          "parameters": [],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('a = -10', function() {
    expect(parser.parse('a = -10')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 10
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -"foo"', function() {
    expect(parser.parse('a = -"foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": "foo"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -a', function() {
    expect(parser.parse('a = -a')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -nil', function() {
    expect(parser.parse('a = -nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -true', function() {
    expect(parser.parse('a = -true')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": true
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -{}', function() {
    expect(parser.parse('a = -{}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -function() end', function() {
    expect(parser.parse('a = -function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -a()', function() {
    expect(parser.parse('a = -a()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "arguments": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -(a)', function() {
    expect(parser.parse('a = -(a)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -                                   -- FAIL', function() {
    expect(parser.parse('a = -', {wait:true}).end)
      .throws('[1:5] <expression> expected near \'<eof>\'');
  });
  it('a = not 10', function() {
    expect(parser.parse('a = not 10')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": 10
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not "foo"', function() {
    expect(parser.parse('a = not "foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": "foo"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not a', function() {
    expect(parser.parse('a = not a')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not nil', function() {
    expect(parser.parse('a = not nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not true', function() {
    expect(parser.parse('a = not true')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Literal",
                "value": true
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not {}', function() {
    expect(parser.parse('a = not {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not function() end', function() {
    expect(parser.parse('a = not function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not a()', function() {
    expect(parser.parse('a = not a()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "arguments": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not (a)', function() {
    expect(parser.parse('a = not (a)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "Identifier",
                "name": "a"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not                                 -- FAIL', function() {
    expect(parser.parse('a = not', {wait:true}).end)
      .throws('[1:7] <expression> expected near \'<eof>\'');
  });
  it('a = 1 + 2; a = 1 - 2', function() {
    expect(parser.parse('a = 1 + 2; a = 1 - 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 * 2; a = 1 / 2', function() {
    expect(parser.parse('a = 1 * 2; a = 1 / 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 ^ 2; a = 1 .. 2', function() {
    expect(parser.parse('a = 1 ^ 2; a = 1 .. 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "^",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 +                                 -- FAIL', function() {
    expect(parser.parse('a = 1 +', {wait:true}).end)
      .throws('[1:7] <expression> expected near \'<eof>\'');
  });
  it('a = 1 ..                                -- FAIL', function() {
    expect(parser.parse('a = 1 ..', {wait:true}).end)
      .throws('[1:8] <expression> expected near \'<eof>\'');
  });
  it('a = 1 * /                               -- FAIL', function() {
    expect(parser.parse('a = 1 * /', {wait:true}).end)
      .throws('[1:8] <expression> expected near \'/\'');
  });
  it('a = 1 + -2; a = 1 - -2', function() {
    expect(parser.parse('a = 1 + -2; a = 1 - -2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 * -                               -- FAIL', function() {
    expect(parser.parse('a = 1 * -', {wait:true}).end)
      .throws('[1:9] <expression> expected near \'<eof>\'');
  });
  it('a = 1 * not 2; a = 1 / not 2', function() {
    expect(parser.parse('a = 1 * not 2; a = 1 / not 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "Literal",
                  "value": 2
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 / not                             -- FAIL', function() {
    expect(parser.parse('a = 1 / not', {wait:true}).end)
      .throws('[1:11] <expression> expected near \'<eof>\'');
  });
  it('a = 1 + 2 - 3 * 4 / 5 ^ 6', function() {
    expect(parser.parse('a = 1 + 2 - 3 * 4 / 5 ^ 6')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 3
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "Literal",
                    "value": 5
                  },
                  "right": {
                    "type": "Literal",
                    "value": 6
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ((1 + 2) - 3) * (4 / (5 ^ 6))', function() {
    expect(parser.parse('a = ((1 + 2) - 3) * (4 / (5 ^ 6))')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "value": 2
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 3
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "Literal",
                  "value": 4
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "Literal",
                    "value": 5
                  },
                  "right": {
                    "type": "Literal",
                    "value": 6
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (1 + (2 - (3 * (4 / (5 ^ ((6)))))))', function() {
    expect(parser.parse('a = (1 + (2 - (3 * (4 / (5 ^ ((6)))))))')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "Literal",
                  "value": 2
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Literal",
                    "value": 3
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 4
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "^",
                      "left": {
                        "type": "Literal",
                        "value": 5
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ((1                                 -- FAIL', function() {
    expect(parser.parse('a = ((1', {wait:true}).end)
      .throws('[1:7] \')\' expected near \'<eof>\'');
  });
  it('a = ((1 + 2)                            -- FAIL', function() {
    expect(parser.parse('a = ((1 + 2)', {wait:true}).end)
      .throws('[1:12] \')\' expected near \'<eof>\'');
  });
  it('a = 1)                                  -- FAIL', function() {
    expect(parser.parse('a = 1)', {wait:true}).end)
      .throws('[1:5] Unexpected symbol \')\' near \')\'');
  });
  it('a = a + b - c', function() {
    expect(parser.parse('a = a + b - c')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "a"
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo" + "bar"', function() {
    expect(parser.parse('a = "foo" + "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo".."bar".."baz"', function() {
    expect(parser.parse('a = "foo".."bar".."baz"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "Literal",
                  "value": "bar"
                },
                "right": {
                  "type": "Literal",
                  "value": "baz"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true + false - nil', function() {
    expect(parser.parse('a = true + false - nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "value": true
                },
                "right": {
                  "type": "Literal",
                  "value": false
                }
              },
              "right": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {} * {}', function() {
    expect(parser.parse('a = {} * {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "TableConstructorExpression",
                "fields": []
              },
              "right": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function() end / function() end', function() {
    expect(parser.parse('a = function() end / function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a() ^ b()', function() {
    expect(parser.parse('a = a() ^ b()')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "^",
              "left": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a"
                },
                "arguments": []
              },
              "right": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "b"
                },
                "arguments": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 == 2; a = 1 ~= 2', function() {
    expect(parser.parse('a = 1 == 2; a = 1 ~= 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "~=",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 < 2; a = 1 <= 2', function() {
    expect(parser.parse('a = 1 < 2; a = 1 <= 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "<=",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 > 2; a = 1 >= 2', function() {
    expect(parser.parse('a = 1 > 2; a = 1 >= 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 < 2 < 3', function() {
    expect(parser.parse('a = 1 < 2 < 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 >= 2 >= 3', function() {
    expect(parser.parse('a = 1 >= 2 >= 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "BinaryExpression",
                "operator": ">=",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 ==                                -- FAIL', function() {
    expect(parser.parse('a = 1 ==', {wait:true}).end)
      .throws('[1:8] <expression> expected near \'<eof>\'');
  });
  it('a = `                                   -- FAIL', function() {
    expect(parser.parse('a = `', {wait:true}).end)
      .throws('[1:5] Unexpected symbol \'`\' near \'=\'');
  });
  it('a = ~                                   -- FAIL', function() {
    expect(parser.parse('a = ~', {wait:true}).end)
      .throws('[1:5] \'=\' expected near \'~\'');
  });
  it('a = ~= 2                                -- FAIL', function() {
    expect(parser.parse('a = ~= 2', {wait:true}).end)
      .throws('[1:8] <expression> expected near \'<eof>\'');
  });
  it('a = "foo" == "bar"', function() {
    expect(parser.parse('a = "foo" == "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo" > "bar"', function() {
    expect(parser.parse('a = "foo" > "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a ~= b', function() {
    expect(parser.parse('a = a ~= b')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "~=",
              "left": {
                "type": "Identifier",
                "name": "a"
              },
              "right": {
                "type": "Identifier",
                "name": "b"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true == false', function() {
    expect(parser.parse('a = true == false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Literal",
                "value": true
              },
              "right": {
                "type": "Literal",
                "value": false
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and 2; a = 1 or 2', function() {
    expect(parser.parse('a = 1 and 2; a = 1 or 2')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": 2
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and                               -- FAIL', function() {
    expect(parser.parse('a = 1 and', {wait:true}).end)
      .throws('[1:9] <expression> expected near \'<eof>\'');
  });
  it('a = or 1                                -- FAIL', function() {
    expect(parser.parse('a = or 1', {wait:true}).end)
      .throws('[1:8] <expression> expected near \'<eof>\'');
  });
  it('a = 1 and 2 and 3', function() {
    expect(parser.parse('a = 1 and 2 and 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 or 2 or 3', function() {
    expect(parser.parse('a = 1 or 2 or 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and 2 or 3', function() {
    expect(parser.parse('a = 1 and 2 or 3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "Literal",
                "value": 3
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a and b or c', function() {
    expect(parser.parse('a = a and b or c')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Identifier",
                  "name": "a"
                },
                "right": {
                  "type": "Identifier",
                  "name": "b"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "c"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a() and (b)() or c.d', function() {
    expect(parser.parse('a = a() and (b)() or c.d')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "arguments": []
                },
                "right": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "arguments": []
                }
              },
              "right": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d"
                },
                "base": {
                  "type": "Identifier",
                  "name": "c"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo" and "bar"', function() {
    expect(parser.parse('a = "foo" and "bar"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "Literal",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true or false', function() {
    expect(parser.parse('a = true or false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "Literal",
                "value": true
              },
              "right": {
                "type": "Literal",
                "value": false
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {} and {} or {}', function() {
    expect(parser.parse('a = {} and {} or {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "TableConstructorExpression",
                  "fields": []
                },
                "right": {
                  "type": "TableConstructorExpression",
                  "fields": []
                }
              },
              "right": {
                "type": "TableConstructorExpression",
                "fields": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (1) and ("foo") or (nil)', function() {
    expect(parser.parse('a = (1) and ("foo") or (nil)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": 1
                },
                "right": {
                  "type": "Literal",
                  "value": "foo"
                }
              },
              "right": {
                "type": "Literal",
                "value": null
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function() end == function() end', function() {
    expect(parser.parse('a = function() end == function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function() end or function() end', function() {
    expect(parser.parse('a = function() end or function() end')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "vararg": false,
                "local": false,
                "parameters": [],
                "body": []
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (((1 or false) and true) or false) == true', function() {
    expect(parser.parse('a = (((1 or false) and true) or false) == true')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "and",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "Literal",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "value": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": true
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": false
                }
              },
              "right": {
                "type": "Literal",
                "value": true
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (((nil and true) or false) and true) == false', function() {
    expect(parser.parse('a = (((nil and true) or false) and true) == false')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "and",
                    "left": {
                      "type": "Literal",
                      "value": null
                    },
                    "right": {
                      "type": "Literal",
                      "value": true
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": true
                }
              },
              "right": {
                "type": "Literal",
                "value": false
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not ((true or false) and nil)', function() {
    expect(parser.parse('a = not ((true or false) and nil)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "Literal",
                    "value": true
                  },
                  "right": {
                    "type": "Literal",
                    "value": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": null
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true or false  and nil', function() {
    expect(parser.parse('a = true or false  and nil')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "Literal",
                "value": true
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Literal",
                  "value": false
                },
                "right": {
                  "type": "Literal",
                  "value": null
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 2^-2 == 1/4 and -2^- -2 == - - -4', function() {
    expect(parser.parse('a = 2^-2 == 1/4 and -2^- -2 == - - -4')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "Literal",
                    "value": 2
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 2
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 2
                        }
                      }
                    }
                  }
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 4
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -3-1-5 == 0+0-9', function() {
    expect(parser.parse('a = -3-1-5 == 0+0-9')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 3
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 5
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": 0
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 9
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -2^2 == -4 and (-2)^2 == 4 and 2*2-3-1 == 0', function() {
    expect(parser.parse('a = -2^2 == -4 and (-2)^2 == 4 and 2*2-3-1 == 0')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "^",
                      "left": {
                        "type": "Literal",
                        "value": 2
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2
                      }
                    }
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 4
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "^",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 2
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Literal",
                        "value": 2
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 2*1+3/3 == 3 and 1+2 .. 3*1 == "33"', function() {
    expect(parser.parse('a = 2*1+3/3 == 3 and 1+2 .. 3*1 == "33"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 3
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "..",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "33"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not nil and 2 and not(2>3 or 3<2)', function() {
    expect(parser.parse('a = not nil and 2 and not(2>3 or 3<2)')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "Literal",
                    "value": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 2
                }
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "Literal",
                      "value": 3
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2
                    }
                  }
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not(2+1 > 3*1) and "a".."b" > "a"', function() {
    expect(parser.parse('a = not(2+1 > 3*1) and "a".."b" > "a"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 2
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 3
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1
                    }
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "..",
                  "left": {
                    "type": "Literal",
                    "value": "a"
                  },
                  "right": {
                    "type": "Literal",
                    "value": "b"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "a"
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('repeat                                  -- FAIL', function() {
    expect(parser.parse('repeat', {wait:true}).end)
      .throws('[1:6] \'until\' expected near \'<eof>\'');
  });
  it('repeat until                            -- FAIL', function() {
    expect(parser.parse('repeat until', {wait:true}).end)
      .throws('[1:12] <expression> expected near \'<eof>\'');
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
    expect(parser.parse('repeat until local', {wait:true}).end)
      .throws('[1:13] <expression> expected near \'local\'');
  });
  it('repeat end                              -- FAIL', function() {
    expect(parser.parse('repeat end', {wait:true}).end)
      .throws('[1:7] \'until\' expected near \'end\'');
  });
  it('repeat 1                                -- FAIL', function() {
    expect(parser.parse('repeat 1', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'1\' near \'1\'');
  });
  it('repeat =                                -- FAIL', function() {
    expect(parser.parse('repeat =', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'=\' near \'=\'');
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
    expect(parser.parse('repeat 2 until 1', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'2\' near \'2\'');
  });
  it('repeat "foo" until 1                    -- FAIL', function() {
    expect(parser.parse('repeat "foo" until 1', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'foo\' near \'foo\'');
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
    expect(parser.parse('repeat return return until 0', {wait:true}).end)
      .throws('[1:14] \'until\' expected near \'return\'');
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
  it('return return                           -- FAIL', function() {
    expect(parser.parse('return return', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'return\' near \'<eof>\'');
  });
  it('return 1', function() {
    expect(parser.parse('return 1')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": 1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return local                            -- FAIL', function() {
    expect(parser.parse('return local', {wait:true}).end)
      .throws('[1:7] Unexpected symbol \'local\' near \'<eof>\'');
  });
  it('return "foo"', function() {
    expect(parser.parse('return "foo"')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": "foo"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return 1,                               -- FAIL', function() {
    expect(parser.parse('return 1,', {wait:true}).end)
      .throws('[1:9] <expression> expected near \'<eof>\'');
  });
  it('return 1,2,3', function() {
    expect(parser.parse('return 1,2,3')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": 1
            },
            {
              "type": "Literal",
              "value": 2
            },
            {
              "type": "Literal",
              "value": 3
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return a,b,c,d', function() {
    expect(parser.parse('return a,b,c,d')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Identifier",
              "name": "a"
            },
            {
              "type": "Identifier",
              "name": "b"
            },
            {
              "type": "Identifier",
              "name": "c"
            },
            {
              "type": "Identifier",
              "name": "d"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('return 1,2;', function() {
    expect(parser.parse('return 1,2;')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "ReturnStatement",
          "arguments": [
            {
              "type": "Literal",
              "value": 1
            },
            {
              "type": "Literal",
              "value": 2
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('break', function() {
    expect(parser.parse('break')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": []
    });
  });
  it('::foo                                   -- FAIL', function() {
    expect(parser.parse('::foo', {wait:true}).end)
      .throws('[1:5] \'::\' expected near \'<eof>\'');
  });
  it('::foo::', function() {
    expect(parser.parse('::foo::')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "LabelStatement",
          "label": {
            "type": "Identifier",
            "name": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('goto                                    -- FAIL', function() {
    expect(parser.parse('goto', {wait:true}).end)
      .throws('[1:4] <name> expected near \'<eof>\'');
  });
  it('goto foo', function() {
    expect(parser.parse('goto foo')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "GotoStatement",
          "label": {
            "type": "Identifier",
            "name": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('a = {                                   -- FAIL', function() {
    expect(parser.parse('a = {', {wait:true}).end)
      .throws('[1:5] \'}\' expected near \'<eof>\'');
  });
  it('a = {}', function() {
    expect(parser.parse('a = {}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {,}                                 -- FAIL', function() {
    expect(parser.parse('a = {,}', {wait:true}).end)
      .throws('[1:5] \'}\' expected near \',\'');
  });
  it('a = {;}                                 -- FAIL', function() {
    expect(parser.parse('a = {;}', {wait:true}).end)
      .throws('[1:5] \'}\' expected near \';\'');
  });
  it('a = {,,}                                -- FAIL', function() {
    expect(parser.parse('a = {,,}', {wait:true}).end)
      .throws('[1:5] \'}\' expected near \',\'');
  });
  it('a = {;;}                                -- FAIL', function() {
    expect(parser.parse('a = {;;}', {wait:true}).end)
      .throws('[1:5] \'}\' expected near \';\'');
  });
  it('a = {{                                  -- FAIL', function() {
    expect(parser.parse('a = {{', {wait:true}).end)
      .throws('[1:6] \'}\' expected near \'<eof>\'');
  });
  it('a = {{{}}}', function() {
    expect(parser.parse('a = {{{}}}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "TableConstructorExpression",
                          "fields": []
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {{},{},{{}},}', function() {
    expect(parser.parse('a = {{},{},{{}},}')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "TableConstructorExpression",
                    "fields": [
                      {
                        "type": "TableValue",
                        "value": {
                          "type": "TableConstructorExpression",
                          "fields": []
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { 1 }', function() {
    expect(parser.parse('a = { 1 }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { 1, }', function() {
    expect(parser.parse('a = { 1, }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { 1; }', function() {
    expect(parser.parse('a = { 1; }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { 1, 2 }', function() {
    expect(parser.parse('a = { 1, 2 }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": 2
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { a, b, c, }', function() {
    expect(parser.parse('a = { a, b, c, }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Identifier",
                    "name": "b"
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Identifier",
                    "name": "c"
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { true; false, nil; }', function() {
    expect(parser.parse('a = { true; false, nil; }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": true
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": false
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": null
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { a.b, a[b]; a:c(), }', function() {
    expect(parser.parse('a = { a.b, a[b]; a:c(), }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "b"
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "a"
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "IndexExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "b"
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "CallExpression",
                    "base": {
                      "type": "MemberExpression",
                      "indexer": ":",
                      "identifier": {
                        "type": "Identifier",
                        "name": "c"
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "a"
                      }
                    },
                    "arguments": []
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { 1 + 2, a > b, "a" or "b" }', function() {
    expect(parser.parse('a = { 1 + 2, a > b, "a" or "b" }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "value": 1
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "BinaryExpression",
                    "operator": ">",
                    "left": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "b"
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "LogicalExpression",
                    "operator": "or",
                    "left": {
                      "type": "Literal",
                      "value": "a"
                    },
                    "right": {
                      "type": "Literal",
                      "value": "b"
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { a=1, }', function() {
    expect(parser.parse('a = { a=1, }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { a=1, b="foo", c=nil }', function() {
    expect(parser.parse('a = { a=1, b="foo", c=nil }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo"
                  }
                },
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "c"
                  },
                  "value": {
                    "type": "Literal",
                    "value": null
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { a                                 -- FAIL', function() {
    expect(parser.parse('a = { a', {wait:true}).end)
      .throws('[1:7] \'}\' expected near \'<eof>\'');
  });
  it('a = { a=                                -- FAIL', function() {
    expect(parser.parse('a = { a=', {wait:true}).end)
      .throws('[1:8] \'}\' expected near \'<eof>\'');
  });
  it('a = { a=,                               -- FAIL', function() {
    expect(parser.parse('a = { a=,', {wait:true}).end)
      .throws('[1:9] \'}\' expected near \'<eof>\'');
  });
  it('a = { a=;                               -- FAIL', function() {
    expect(parser.parse('a = { a=;', {wait:true}).end)
      .throws('[1:9] \'}\' expected near \'<eof>\'');
  });
  it('a = { 1, a="foo"                        -- FAIL', function() {
    expect(parser.parse('a = { 1, a="foo"', {wait:true}).end)
      .throws('[1:16] \'}\' expected near \'<eof>\'');
  });
  it('a = { 1, a="foo"; b={}, d=true; }', function() {
    expect(parser.parse('a = { 1, a="foo"; b={}, d=true; }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo"
                  }
                },
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "value": {
                    "type": "TableConstructorExpression",
                    "fields": []
                  }
                },
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "value": {
                    "type": "Literal",
                    "value": true
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { [                                 -- FAIL', function() {
    expect(parser.parse('a = { [', {wait:true}).end)
      .throws('[1:7] \']\' expected near \'<eof>\'');
  });
  it('a = { [1                                -- FAIL', function() {
    expect(parser.parse('a = { [1', {wait:true}).end)
      .throws('[1:8] \']\' expected near \'<eof>\'');
  });
  it('a = { [1]                               -- FAIL', function() {
    expect(parser.parse('a = { [1]', {wait:true}).end)
      .throws('[1:9] \'=\' expected near \'<eof>\'');
  });
  it('a = { [a]=                              -- FAIL', function() {
    expect(parser.parse('a = { [a]=', {wait:true}).end)
      .throws('[1:10] \'}\' expected near \'<eof>\'');
  });
  it('a = { ["foo"]="bar" }', function() {
    expect(parser.parse('a = { ["foo"]="bar" }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableKey",
                  "key": {
                    "type": "Literal",
                    "value": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar"
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { [1]=a, [2]=b, }', function() {
    expect(parser.parse('a = { [1]=a, [2]=b, }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableKey",
                  "key": {
                    "type": "Literal",
                    "value": 1
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "a"
                  }
                },
                {
                  "type": "TableKey",
                  "key": {
                    "type": "Literal",
                    "value": 2
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "b"
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = { true, a=1; ["foo"]="bar", }', function() {
    expect(parser.parse('a = { true, a=1; ["foo"]="bar", }')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "Literal",
                    "value": true
                  }
                },
                {
                  "type": "TableKeyString",
                  "key": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1
                  }
                },
                {
                  "type": "TableKey",
                  "key": {
                    "type": "Literal",
                    "value": "foo"
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar"
                  }
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('while                                   -- FAIL', function() {
    expect(parser.parse('while', {wait:true}).end)
      .throws('[1:5] \'do\' expected near \'<eof>\'');
  });
  it('while do                                -- FAIL', function() {
    expect(parser.parse('while do', {wait:true}).end)
      .throws('[1:8] \'end\' expected near \'<eof>\'');
  });
  it('while =                                 -- FAIL', function() {
    expect(parser.parse('while =', {wait:true}).end)
      .throws('[1:6] \'do\' expected near \'=\'');
  });
  it('while 1 do                              -- FAIL', function() {
    expect(parser.parse('while 1 do', {wait:true}).end)
      .throws('[1:10] \'end\' expected near \'<eof>\'');
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
    expect(parser.parse('while 1 do 2 end', {wait:true}).end)
      .throws('[1:11] Unexpected symbol \'2\' near \'2\'');
  });
  it('while 1 do "foo" end                    -- FAIL', function() {
    expect(parser.parse('while 1 do "foo" end', {wait:true}).end)
      .throws('[1:11] Unexpected symbol \'foo\' near \'foo\'');
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
    expect(parser.parse('while 1 do while', {wait:true}).end)
      .throws('[1:16] \'do\' expected near \'<eof>\'');
  });
  it('while 1 end                             -- FAIL', function() {
    expect(parser.parse('while 1 end', {wait:true}).end)
      .throws('[1:8] \'do\' expected near \'end\'');
  });
  it('while 1 2 do                            -- FAIL', function() {
    expect(parser.parse('while 1 2 do', {wait:true}).end)
      .throws('[1:8] \'do\' expected near \'2\'');
  });
  it('while 1 = 2 do                          -- FAIL', function() {
    expect(parser.parse('while 1 = 2 do', {wait:true}).end)
      .throws('[1:8] \'do\' expected near \'=\'');
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
    expect(parser.parse('while 1 do return return end', {wait:true}).end)
      .throws('[1:18] \'end\' expected near \'return\'');
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

