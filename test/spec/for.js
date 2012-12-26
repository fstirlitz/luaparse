describe('for', function() {
  it('for                                     -- FAIL', function() {
    expect(parser.parse('for', {wait:true}).end).to.throwError("[1:3] <name> expected near '<eof>'");
  });
  it('for do                                  -- FAIL', function() {
    expect(parser.parse('for do', {wait:true}).end).to.throwError("[1:4] <name> expected near 'do'");
  });
  it('for end                                 -- FAIL', function() {
    expect(parser.parse('for end', {wait:true}).end).to.throwError("[1:4] <name> expected near 'end'");
  });
  it('for 1                                   -- FAIL', function() {
    expect(parser.parse('for 1', {wait:true}).end).to.throwError("[1:4] <name> expected near '1'");
  });
  it('for a                                   -- FAIL', function() {
    expect(parser.parse('for a', {wait:true}).end).to.throwError("[1:5] 'in' expected near '<eof>'");
  });
  it('for true                                -- FAIL', function() {
    expect(parser.parse('for true', {wait:true}).end).to.throwError("[1:4] <name> expected near 'true'");
  });
  it('for a, in                               -- FAIL', function() {
    expect(parser.parse('for a, in', {wait:true}).end).to.throwError("[1:7] <name> expected near 'in'");
  });
  it('for a in                                -- FAIL', function() {
    expect(parser.parse('for a in', {wait:true}).end).to.throwError("[1:8] <expression> expected near '<eof>'");
  });
  it('for a do                                -- FAIL', function() {
    expect(parser.parse('for a do', {wait:true}).end).to.throwError("[1:6] 'in' expected near 'do'");
  });
  it('for a in do                             -- FAIL', function() {
    expect(parser.parse('for a in do', {wait:true}).end).to.throwError("[1:9] <expression> expected near 'do'");
  });
  it('for a in b do                           -- FAIL', function() {
    expect(parser.parse('for a in b do', {wait:true}).end).to.throwError("[1:13] 'end' expected near '<eof>'");
  });
  it('for a in b end                          -- FAIL', function() {
    expect(parser.parse('for a in b end', {wait:true}).end).to.throwError("[1:11] 'do' expected near 'end'");
  });
  it('for a in b, do                          -- FAIL', function() {
    expect(parser.parse('for a in b, do', {wait:true}).end).to.throwError("[1:12] <expression> expected near 'do'");
  });
  it('for a in b do end', function() {
    expect(parser.parse('for a in b do end')).to.eql({
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
    expect(parser.parse('for a in b do local a local b end')).to.eql({
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
    expect(parser.parse('for a in b do local a; local b; end')).to.eql({
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
    expect(parser.parse('for a in b do 1 end', {wait:true}).end).to.throwError("[1:14] Unexpected number '1' near 'end'");
  });
  it('for a in b do "foo" end                 -- FAIL', function() {
    expect(parser.parse('for a in b do "foo" end', {wait:true}).end).to.throwError("[1:14] Unexpected string 'foo' near 'end'");
  });
  it('for a b in                              -- FAIL', function() {
    expect(parser.parse('for a b in', {wait:true}).end).to.throwError("[1:6] 'in' expected near 'b'");
  });
  it('for a, b, c in p do end', function() {
    expect(parser.parse('for a, b, c in p do end')).to.eql({
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
    expect(parser.parse('for a, b, c in p, q, r do end')).to.eql({
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
    expect(parser.parse('for a in 1 do end')).to.eql({
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
              "value": 1,
              "raw": "1"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in true do end', function() {
    expect(parser.parse('for a in true do end')).to.eql({
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
              "value": true,
              "raw": "true"
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in "foo" do end', function() {
    expect(parser.parse('for a in "foo" do end')).to.eql({
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
              "value": "foo",
              "raw": "\"foo\""
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a in b do break end', function() {
    expect(parser.parse('for a in b do break end')).to.eql({
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
    expect(parser.parse('for a in b do return end')).to.eql({
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
    expect(parser.parse('for a in b do return return end', {wait:true}).end).to.throwError("[1:21] 'end' expected near 'return'");
  });
  it('for a in b do do end end', function() {
    expect(parser.parse('for a in b do do end end')).to.eql({
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
    expect(parser.parse('for a in b do do break end end')).to.eql({
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
    expect(parser.parse('for a in b do do return end end')).to.eql({
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
    expect(parser.parse('for =', {wait:true}).end).to.throwError("[1:4] <name> expected near '='");
  });
  it('for a =                                 -- FAIL', function() {
    expect(parser.parse('for a =', {wait:true}).end).to.throwError("[1:7] <expression> expected near '<eof>'");
  });
  it('for a, b =                              -- FAIL', function() {
    expect(parser.parse('for a, b =', {wait:true}).end).to.throwError("[1:9] 'in' expected near '='");
  });
  it('for a = do                              -- FAIL', function() {
    expect(parser.parse('for a = do', {wait:true}).end).to.throwError("[1:8] <expression> expected near 'do'");
  });
  it('for a = 1, do                           -- FAIL', function() {
    expect(parser.parse('for a = 1, do', {wait:true}).end).to.throwError("[1:11] <expression> expected near 'do'");
  });
  it('for a = p, q, do                        -- FAIL', function() {
    expect(parser.parse('for a = p, q, do', {wait:true}).end).to.throwError("[1:14] <expression> expected near 'do'");
  });
  it('for a = p q do                          -- FAIL', function() {
    expect(parser.parse('for a = p q do', {wait:true}).end).to.throwError("[1:10] ',' expected near 'q'");
  });
  it('for a = b do end                        -- FAIL', function() {
    expect(parser.parse('for a = b do end', {wait:true}).end).to.throwError("[1:10] ',' expected near 'do'");
  });
  it('for a = 1, 2, 3, 4 do end               -- FAIL', function() {
    expect(parser.parse('for a = 1, 2, 3, 4 do end', {wait:true}).end).to.throwError("[1:15] 'do' expected near ','");
  });
  it('for a = p, q do end', function() {
    expect(parser.parse('for a = p, q do end')).to.eql({
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
    expect(parser.parse('for a = 1, 2 do end')).to.eql({
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
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "Literal",
            "value": 2,
            "raw": "2"
          },
          "step": null,
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a = 1, 2 do local a local b end', function() {
    expect(parser.parse('for a = 1, 2 do local a local b end')).to.eql({
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
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "Literal",
            "value": 2,
            "raw": "2"
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
    expect(parser.parse('for a = 1, 2 do local a; local b; end')).to.eql({
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
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "Literal",
            "value": 2,
            "raw": "2"
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
    expect(parser.parse('for a = 1, 2 do 3 end', {wait:true}).end).to.throwError("[1:16] Unexpected number '3' near 'end'");
  });
  it('for a = 1, 2 do "foo" end               -- FAIL', function() {
    expect(parser.parse('for a = 1, 2 do "foo" end', {wait:true}).end).to.throwError("[1:16] Unexpected string 'foo' near 'end'");
  });
  it('for a = p, q, r do end', function() {
    expect(parser.parse('for a = p, q, r do end')).to.eql({
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
    expect(parser.parse('for a = 1, 2, 3 do end')).to.eql({
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
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "Literal",
            "value": 2,
            "raw": "2"
          },
          "step": {
            "type": "Literal",
            "value": 3,
            "raw": "3"
          },
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('for a = p, q do break end', function() {
    expect(parser.parse('for a = p, q do break end')).to.eql({
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
    expect(parser.parse('for a = 1, 2 do return end')).to.eql({
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
            "value": 1,
            "raw": "1"
          },
          "end": {
            "type": "Literal",
            "value": 2,
            "raw": "2"
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
    expect(parser.parse('for a = 1, 2 do return return end', {wait:true}).end).to.throwError("[1:23] 'end' expected near 'return'");
  });
  it('for a = p, q do do end end', function() {
    expect(parser.parse('for a = p, q do do end end')).to.eql({
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
    expect(parser.parse('for a = p, q do do break end end')).to.eql({
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
    expect(parser.parse('for a = p, q do do return end end')).to.eql({
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
});
