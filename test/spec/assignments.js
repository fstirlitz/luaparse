describe('assignments', function() {
  it('a                                       -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected identifier 'a' near '<eof>'$/);
  });
  it('a,                                      -- FAIL', function() {
    expect(parser.parse('a,', {wait:true}).end).to.throwError(/^\[1:2\] <expression> expected near '<eof>'$/);
  });
  it('a,b,c                                   -- FAIL', function() {
    expect(parser.parse('a,b,c', {wait:true}).end).to.throwError(/^\[1:5\] '=' expected near '<eof>'$/);
  });
  it('a,b =                                   -- FAIL', function() {
    expect(parser.parse('a,b =', {wait:true}).end).to.throwError(/^\[1:5\] <expression> expected near '<eof>'$/);
  });
  it('a = 1', function() {
    expect(parser.parse('a = 1', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1,2,3', function() {
    expect(parser.parse('a = 1,2,3', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            },
            {
              "type": "NumericLiteral",
              "value": 3,
              "raw": "3"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a,b,c = 1', function() {
    expect(parser.parse('a,b,c = 1', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "c",
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "isLocal": false
        }
      ]
    });
  });
  it('a,b,c = 1,2,3', function() {
    expect(parser.parse('a,b,c = 1,2,3', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": false
            },
            {
              "type": "Identifier",
              "name": "c",
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            },
            {
              "type": "NumericLiteral",
              "value": 3,
              "raw": "3"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "isLocal": false
        }
      ]
    });
  });
  it('a.b = 1', function() {
    expect(parser.parse('a.b = 1', { scope: true })).to.eql({
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
                "name": "b",
                "isLocal": false
              },
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        }
      ]
    });
  });
  it('a.b.c = 1', function() {
    expect(parser.parse('a.b.c = 1', { scope: true })).to.eql({
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
                "name": "c",
                "isLocal": false
              },
              "base": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "isLocal": false
        }
      ]
    });
  });
  it('a[b] = 1', function() {
    expect(parser.parse('a[b] = 1', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        }
      ]
    });
  });
  it('a[b][c] = 1', function() {
    expect(parser.parse('a[b][c] = 1', { scope: true })).to.eql({
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
                  "name": "a",
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c",
                "isLocal": false
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "isLocal": false
        }
      ]
    });
  });
  it('a.b[c] = 1', function() {
    expect(parser.parse('a.b[c] = 1', { scope: true })).to.eql({
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
                  "name": "b",
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                }
              },
              "index": {
                "type": "Identifier",
                "name": "c",
                "isLocal": false
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "isLocal": false
        }
      ]
    });
  });
  it('a[b].c = 1', function() {
    expect(parser.parse('a[b].c = 1', { scope: true })).to.eql({
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
                "name": "c",
                "isLocal": false
              },
              "base": {
                "type": "IndexExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                },
                "index": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "isLocal": false
        }
      ]
    });
  });
  it('a[b], a[c] = 1', function() {
    expect(parser.parse('a[b], a[c] = 1', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "index": {
                "type": "Identifier",
                "name": "b",
                "isLocal": false
              }
            },
            {
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "index": {
                "type": "Identifier",
                "name": "c",
                "isLocal": false
              }
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "b",
          "isLocal": false
        },
        {
          "type": "Identifier",
          "name": "c",
          "isLocal": false
        }
      ]
    });
  });
  it('0 =                                     -- FAIL', function() {
    expect(parser.parse('0 =', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected number '0' near '='$/);
  });
  it('"foo" =                                 -- FAIL', function() {
    expect(parser.parse('"foo" =', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected string 'foo' near '='$/);
  });
  it('true =                                  -- FAIL', function() {
    expect(parser.parse('true =', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected boolean 'true' near '='$/);
  });
  it('(a) =                                   -- FAIL', function() {
    expect(parser.parse('(a) =', {wait:true}).end).to.throwError(/^\[1:5\] <expression> expected near '<eof>'$/);
  });
  it('{} =                                    -- FAIL', function() {
    expect(parser.parse('{} =', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected symbol '\{' near '\}'$/);
  });
  it('a:b() =                                 -- FAIL', function() {
    expect(parser.parse('a:b() =', {wait:true}).end).to.throwError(/^\[1:7\] <expression> expected near '<eof>'$/);
  });
  it('a() =                                   -- FAIL', function() {
    expect(parser.parse('a() =', {wait:true}).end).to.throwError(/^\[1:5\] <expression> expected near '<eof>'$/);
  });
  it('a.b:c() =                               -- FAIL', function() {
    expect(parser.parse('a.b:c() =', {wait:true}).end).to.throwError(/^\[1:9\] <expression> expected near '<eof>'$/);
  });
  it('a[b]() =                                -- FAIL', function() {
    expect(parser.parse('a[b]() =', {wait:true}).end).to.throwError(/^\[1:8\] <expression> expected near '<eof>'$/);
  });
  it('a = a b                                 -- FAIL', function() {
    expect(parser.parse('a = a b', {wait:true}).end).to.throwError(/^\[1:6\] Unexpected identifier 'b' near '<eof>'$/);
  });
  it('a = 1 2                                 -- FAIL', function() {
    expect(parser.parse('a = 1 2', {wait:true}).end).to.throwError(/^\[1:6\] Unexpected number '2' near '<eof>'$/);
  });
  it('a = a = 1                               -- FAIL', function() {
    expect(parser.parse('a = a = 1', {wait:true}).end).to.throwError(/^\[1:6\] Unexpected symbol '=' near '1'$/);
  });
});
