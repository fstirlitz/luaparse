describe('functions', function() {
  it('function                                -- FAIL', function() {
    expect(parser.parse('function', {wait:true}).end).throws("[1:8] <name> expected near '<eof>'");
  });
  it('function 1                              -- FAIL', function() {
    expect(parser.parse('function 1', {wait:true}).end).throws("[1:9] <name> expected near '1'");
  });
  it('function end                            -- FAIL', function() {
    expect(parser.parse('function end', {wait:true}).end).throws("[1:9] <name> expected near 'end'");
  });
  it('function a                              -- FAIL', function() {
    expect(parser.parse('function a', {wait:true}).end).throws("[1:10] '(' expected near '<eof>'");
  });
  it('function a end                          -- FAIL', function() {
    expect(parser.parse('function a end', {wait:true}).end).throws("[1:11] '(' expected near 'end'");
  });
  it('function a( end                         -- FAIL', function() {
    expect(parser.parse('function a( end', {wait:true}).end).throws("[1:12] <name> or '...' expected near 'end'");
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
    expect(parser.parse('function a(1', {wait:true}).end).throws("[1:11] <name> or '...' expected near '1'");
  });
  it('function a("foo"                        -- FAIL', function() {
    expect(parser.parse('function a("foo"', {wait:true}).end).throws("[1:11] <name> or '...' expected near 'foo'");
  });
  it('function a(p                            -- FAIL', function() {
    expect(parser.parse('function a(p', {wait:true}).end).throws("[1:12] <name> or '...' expected near '<eof>'");
  });
  it('function a(p,)                          -- FAIL', function() {
    expect(parser.parse('function a(p,)', {wait:true}).end).throws("[1:13] <name> expected near ')'");
  });
  it('function a(p q                          -- FAIL', function() {
    expect(parser.parse('function a(p q', {wait:true}).end).throws("[1:13] <name> or '...' expected near 'q'");
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
    expect(parser.parse('function a(p,q,) end', {wait:true}).end).throws("[1:15] <name> expected near ')'");
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
    expect(parser.parse('function a(p,q,1', {wait:true}).end).throws("[1:15] <name> expected near '1'");
  });
  it('function a(p) do                        -- FAIL', function() {
    expect(parser.parse('function a(p) do', {wait:true}).end).throws("[1:16] 'end' expected near '<eof>'");
  });
  it('function a(p) 1 end                     -- FAIL', function() {
    expect(parser.parse('function a(p) 1 end', {wait:true}).end).throws("[1:14] Unexpected symbol '1' near '1'");
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
    expect(parser.parse('function a(p) return return end', {wait:true}).end).throws("[1:21] 'end' expected near 'return'");
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
    expect(parser.parse('function a.(', {wait:true}).end).throws("[1:11] <name> expected near '('");
  });
  it('function a.1                            -- FAIL', function() {
    expect(parser.parse('function a.1', {wait:true}).end).throws("[1:10] '(' expected near '0.1'");
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
    expect(parser.parse('function a.b,', {wait:true}).end).throws("[1:12] '(' expected near ','");
  });
  it('function a.b.(                          -- FAIL', function() {
    expect(parser.parse('function a.b.(', {wait:true}).end).throws("[1:13] <name> expected near '('");
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
    expect(parser.parse('function a:', {wait:true}).end).throws("[1:11] <name> expected near '<eof>'");
  });
  it('function a:1                            -- FAIL', function() {
    expect(parser.parse('function a:1', {wait:true}).end).throws("[1:11] <name> expected near '1'");
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
    expect(parser.parse('function a:b:', {wait:true}).end).throws("[1:12] '(' expected near ':'");
  });
  it('function a:b.                           -- FAIL', function() {
    expect(parser.parse('function a:b.', {wait:true}).end).throws("[1:12] '(' expected near '.'");
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
    expect(parser.parse('function a(...,', {wait:true}).end).throws("[1:14] <name> or '...' expected near ','");
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
});


