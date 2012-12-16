describe('assignments', function() {
  it('a                                       -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end).throws("[1:0] Unexpected symbol 'a' near '<eof>'");
  });
  // @TODO column is off
  it('a,                                      -- FAIL', function() {
    expect(parser.parse('a,', {wait:true}).end).throws("[1:2] '=' expected near '<eof>'");
  });
  it('a,b,c                                   -- FAIL', function() {
    expect(parser.parse('a,b,c', {wait:true}).end).throws("[1:5] '=' expected near '<eof>'");
  });
  it('a,b =                                   -- FAIL', function() {
    expect(parser.parse('a,b =', {wait:true}).end).throws("[1:5] <expression> expected near '<eof>'");
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
  // @TODO type near
  it('0 =                                     -- FAIL', function() {
    expect(parser.parse('0 =', {wait:true}).end).throws("[1:0] Unexpected symbol '0' near '0'");
  });
  // @TODO type near
  it('"foo" =                                 -- FAIL', function() {
    expect(parser.parse('"foo" =', {wait:true}).end).throws("[1:0] Unexpected symbol 'foo' near 'foo'");
  });
  // @TODO type near
  it('true =                                  -- FAIL', function() {
    expect(parser.parse('true =', {wait:true}).end).throws("[1:0] Unexpected symbol 'true' near 'true'");
  });
  it('(a) =                                   -- FAIL', function() {
    expect(parser.parse('(a) =', {wait:true}).end).throws("[1:5] <expression> expected near '<eof>'");
  });
  // @TODO near
  it('{} =                                    -- FAIL', function() {
    expect(parser.parse('{} =', {wait:true}).end).throws("[1:0] Unexpected symbol '{' near '{'");
  });

  it('a:b() =                                 -- FAIL', function() {
    expect(parser.parse('a:b() =', {wait:true}).end).throws("[1:7] <expression> expected near '<eof>'");
  });
  it('a() =                                   -- FAIL', function() {
    expect(parser.parse('a() =', {wait:true}).end).throws("[1:5] <expression> expected near '<eof>'");
  });
  it('a.b:c() =                               -- FAIL', function() {
    expect(parser.parse('a.b:c() =', {wait:true}).end).throws("[1:9] <expression> expected near '<eof>'");
  });
  it('a[b]() =                                -- FAIL', function() {
    expect(parser.parse('a[b]() =', {wait:true}).end).throws("[1:8] <expression> expected near '<eof>'");
  });
  // @TODO type
  it('a = a b                                 -- FAIL', function() {
    expect(parser.parse('a = a b', {wait:true}).end).throws("[1:6] Unexpected symbol 'b' near '<eof>'");
  });
  // @TODO type, near
  it('a = 1 2                                 -- FAIL', function() {
    expect(parser.parse('a = 1 2', {wait:true}).end).throws("[1:6] Unexpected symbol '2' near '2'");
  });
  // @TODO near
  it('a = a = 1                               -- FAIL', function() {
    expect(parser.parse('a = a = 1', {wait:true}).end).throws("[1:6] Unexpected symbol '=' near '='");
  });
});


