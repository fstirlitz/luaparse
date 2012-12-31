describe('local', function() {
  it('local                                   -- FAIL', function() {
    expect(parser.parse('local', {wait:true}).end).to.throwError(/^\[1:5\] <name> expected near '<eof>'$/);
  });
  it('local;                                  -- FAIL', function() {
    expect(parser.parse('local;', {wait:true}).end).to.throwError(/^\[1:5\] <name> expected near ';'$/);
  });
  it('local =                                 -- FAIL', function() {
    expect(parser.parse('local =', {wait:true}).end).to.throwError(/^\[1:6\] <name> expected near '='$/);
  });
  it('local end                               -- FAIL', function() {
    expect(parser.parse('local end', {wait:true}).end).to.throwError(/^\[1:6\] <name> expected near 'end'$/);
  });
  it('local a', function() {
    expect(parser.parse('local a')).to.eql({
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
    expect(parser.parse('local a;')).to.eql({
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
    expect(parser.parse('local a, b, c')).to.eql({
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
    expect(parser.parse('local a; local b local c;')).to.eql({
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
    expect(parser.parse('local a = 1')).to.eql({
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
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a local b = a', function() {
    expect(parser.parse('local a local b = a')).to.eql({
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
    expect(parser.parse('local a, b = 1, 2')).to.eql({
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
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a, b, c = 1, 2, 3', function() {
    expect(parser.parse('local a, b, c = 1, 2, 3')).to.eql({
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
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a, b, c = 1', function() {
    expect(parser.parse('local a, b, c = 1')).to.eql({
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
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a = 1, 2, 3', function() {
    expect(parser.parse('local a = 1, 2, 3')).to.eql({
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
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "value": 3,
              "raw": "3"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local a, local                          -- FAIL', function() {
    expect(parser.parse('local a, local', {wait:true}).end).to.throwError(/^\[1:9\] <name> expected near 'local'$/);
  });
  it('local 1                                 -- FAIL', function() {
    expect(parser.parse('local 1', {wait:true}).end).to.throwError(/^\[1:6\] <name> expected near '1'$/);
  });
  it('local "foo"                             -- FAIL', function() {
    expect(parser.parse('local "foo"', {wait:true}).end).to.throwError(/^\[1:6\] <name> expected near 'foo'$/);
  });
  it('local a = local                         -- FAIL', function() {
    expect(parser.parse('local a = local', {wait:true}).end).to.throwError(/^\[1:10\] <expression> expected near 'local'$/);
  });
  it('local a, b, =                           -- FAIL', function() {
    expect(parser.parse('local a, b, =', {wait:true}).end).to.throwError(/^\[1:12\] <name> expected near '='$/);
  });
  it('local a, b = 1, local                   -- FAIL', function() {
    expect(parser.parse('local a, b = 1, local', {wait:true}).end).to.throwError(/^\[1:16\] <expression> expected near 'local'$/);
  });
  it('local a, b = , local                    -- FAIL', function() {
    expect(parser.parse('local a, b = , local', {wait:true}).end).to.throwError(/^\[1:13\] <expression> expected near ','$/);
  });
  it('local function                          -- FAIL', function() {
    expect(parser.parse('local function', {wait:true}).end).to.throwError(/^\[1:14\] <name> expected near '<eof>'$/);
  });
  it('local function 1                        -- FAIL', function() {
    expect(parser.parse('local function 1', {wait:true}).end).to.throwError(/^\[1:15\] <name> expected near '1'$/);
  });
  it('local function end                      -- FAIL', function() {
    expect(parser.parse('local function end', {wait:true}).end).to.throwError(/^\[1:15\] <name> expected near 'end'$/);
  });
  it('local function a                        -- FAIL', function() {
    expect(parser.parse('local function a', {wait:true}).end).to.throwError(/^\[1:16\] '\(' expected near '<eof>'$/);
  });
  it('local function a end                    -- FAIL', function() {
    expect(parser.parse('local function a end', {wait:true}).end).to.throwError(/^\[1:17\] '\(' expected near 'end'$/);
  });
  it('local function a( end                   -- FAIL', function() {
    expect(parser.parse('local function a( end', {wait:true}).end).to.throwError(/^\[1:18\] <name> or '\.\.\.' expected near 'end'$/);
  });
  it('local function a() end', function() {
    expect(parser.parse('local function a() end')).to.eql({
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
    expect(parser.parse('local function a(1', {wait:true}).end).to.throwError(/^\[1:17\] <name> or '\.\.\.' expected near '1'$/);
  });
  it('local function a("foo"                  -- FAIL', function() {
    expect(parser.parse('local function a("foo"', {wait:true}).end).to.throwError(/^\[1:17\] <name> or '\.\.\.' expected near 'foo'$/);
  });
  it('local function a(p                      -- FAIL', function() {
    expect(parser.parse('local function a(p', {wait:true}).end).to.throwError(/^\[1:18\] <name> or '\.\.\.' expected near '<eof>'$/);
  });
  it('local function a(p,)                    -- FAIL', function() {
    expect(parser.parse('local function a(p,)', {wait:true}).end).to.throwError(/^\[1:19\] <name> expected near '\)'$/);
  });
  it('local function a(p q                    -- FAIL', function() {
    expect(parser.parse('local function a(p q', {wait:true}).end).to.throwError(/^\[1:19\] <name> or '\.\.\.' expected near 'q'$/);
  });
  it('local function a(p) end', function() {
    expect(parser.parse('local function a(p) end')).to.eql({
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
    expect(parser.parse('local function a(p,q,) end', {wait:true}).end).to.throwError(/^\[1:21\] <name> expected near '\)'$/);
  });
  it('local function a(p,q,r) end', function() {
    expect(parser.parse('local function a(p,q,r) end')).to.eql({
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
    expect(parser.parse('local function a(p,q,1', {wait:true}).end).to.throwError(/^\[1:21\] <name> expected near '1'$/);
  });
  it('local function a(p) do                  -- FAIL', function() {
    expect(parser.parse('local function a(p) do', {wait:true}).end).to.throwError(/^\[1:22\] 'end' expected near '<eof>'$/);
  });
  it('local function a(p) 1 end               -- FAIL', function() {
    expect(parser.parse('local function a(p) 1 end', {wait:true}).end).to.throwError(/^\[1:20\] Unexpected number '1' near 'end'$/);
  });
  it('local function a(p) return end', function() {
    expect(parser.parse('local function a(p) return end')).to.eql({
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
    expect(parser.parse('local function a(p) return return end', {wait:true}).end).to.throwError(/^\[1:27\] 'end' expected near 'return'$/);
  });
  it('local function a(p) do end end', function() {
    expect(parser.parse('local function a(p) do end end')).to.eql({
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
    expect(parser.parse('local function a.', {wait:true}).end).to.throwError(/^\[1:16\] '\(' expected near '\.'$/);
  });
  it('local function a:                       -- FAIL', function() {
    expect(parser.parse('local function a:', {wait:true}).end).to.throwError(/^\[1:16\] '\(' expected near ':'$/);
  });
  it('local function a(...) end', function() {
    expect(parser.parse('local function a(...) end')).to.eql({
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
    expect(parser.parse('local function a(...,', {wait:true}).end).to.throwError(/^\[1:20\] '\)' expected near ','$/);
  });
  it('local function a(p,...) end', function() {
    expect(parser.parse('local function a(p,...) end')).to.eql({
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
    expect(parser.parse('local function a(p,q,r,...) end')).to.eql({
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
    expect(parser.parse('local function a() local a local b end')).to.eql({
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
    expect(parser.parse('local function a() local a; local b; end')).to.eql({
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
    expect(parser.parse('local function a() end; local function a() end;')).to.eql({
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
});
