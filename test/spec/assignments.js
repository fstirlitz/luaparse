describe('assignments', function() {
  it('a                                       -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end).to.throwError("[1:0] Unexpected identifier 'a' near '<eof>'");
  });
  it('a,                                      -- FAIL', function() {
    expect(parser.parse('a,', {wait:true}).end).to.throwError("[1:2] <expression> expected near '<eof>'");
  });
  it('a,b,c                                   -- FAIL', function() {
    expect(parser.parse('a,b,c', {wait:true}).end).to.throwError("[1:5] '=' expected near '<eof>'");
  });
  it('a,b =                                   -- FAIL', function() {
    expect(parser.parse('a,b =', {wait:true}).end).to.throwError("[1:5] <expression> expected near '<eof>'");
  });
  it('a = 1', function() {
    expect(parser.parse('a = 1')).to.eql({
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
    expect(parser.parse('a = 1,2,3')).to.eql({
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
    expect(parser.parse('a,b,c = 1')).to.eql({
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
    expect(parser.parse('a,b,c = 1,2,3')).to.eql({
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
    expect(parser.parse('a.b = 1')).to.eql({
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
    expect(parser.parse('a.b.c = 1')).to.eql({
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
    expect(parser.parse('a[b] = 1')).to.eql({
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
    expect(parser.parse('a[b][c] = 1')).to.eql({
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
    expect(parser.parse('a.b[c] = 1')).to.eql({
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
    expect(parser.parse('a[b].c = 1')).to.eql({
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
  it('a[b], a[c] = 1', function() {
    expect(parser.parse('a[b], a[c] = 1')).to.eql({
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
            },
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a"
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
  it('0 =                                     -- FAIL', function() {
    expect(parser.parse('0 =', {wait:true}).end).to.throwError("[1:0] Unexpected number '0' near '='");
  });
  it('"foo" =                                 -- FAIL', function() {
    expect(parser.parse('"foo" =', {wait:true}).end).to.throwError("[1:0] Unexpected string 'foo' near '='");
  });
  it('true =                                  -- FAIL', function() {
    expect(parser.parse('true =', {wait:true}).end).to.throwError("[1:0] Unexpected boolean 'true' near '='");
  });
  it('(a) =                                   -- FAIL', function() {
    expect(parser.parse('(a) =', {wait:true}).end).to.throwError("[1:5] <expression> expected near '<eof>'");
  });
  it('{} =                                    -- FAIL', function() {
    expect(parser.parse('{} =', {wait:true}).end).to.throwError("[1:0] Unexpected symbol '{' near '}'");
  });
  it('a:b() =                                 -- FAIL', function() {
    expect(parser.parse('a:b() =', {wait:true}).end).to.throwError("[1:7] <expression> expected near '<eof>'");
  });
  it('a() =                                   -- FAIL', function() {
    expect(parser.parse('a() =', {wait:true}).end).to.throwError("[1:5] <expression> expected near '<eof>'");
  });
  it('a.b:c() =                               -- FAIL', function() {
    expect(parser.parse('a.b:c() =', {wait:true}).end).to.throwError("[1:9] <expression> expected near '<eof>'");
  });
  it('a[b]() =                                -- FAIL', function() {
    expect(parser.parse('a[b]() =', {wait:true}).end).to.throwError("[1:8] <expression> expected near '<eof>'");
  });
  it('a = a b                                 -- FAIL', function() {
    expect(parser.parse('a = a b', {wait:true}).end).to.throwError("[1:6] Unexpected identifier 'b' near '<eof>'");
  });
  it('a = 1 2                                 -- FAIL', function() {
    expect(parser.parse('a = 1 2', {wait:true}).end).to.throwError("[1:6] Unexpected number '2' near '<eof>'");
  });
  it('a = a = 1                               -- FAIL', function() {
    expect(parser.parse('a = a = 1', {wait:true}).end).to.throwError("[1:6] Unexpected symbol '=' near '1'");
  });
});
