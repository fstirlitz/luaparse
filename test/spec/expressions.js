describe('expressions', function() {
  it('a =                                     -- FAIL', function() {
    expect(parser.parse('a =', {wait:true}).end).to.throwError(/^\[1:3\] <expression> expected near '<eof>'$/);
  });
  it('a = [[foo]]', function() {
    expect(parser.parse('a = [[foo]]')).to.eql({
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
              "type": "StringLiteral",
              "value": "foo",
              "raw": "[[foo]]"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {}', function() {
    expect(parser.parse('a = {}')).to.eql({
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
    expect(parser.parse('a = (a)')).to.eql({
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
              "type": "Identifier",
              "name": "a",
              "isLocal": false
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (nil)', function() {
    expect(parser.parse('a = (nil)')).to.eql({
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
              "type": "NilLiteral",
              "value": null,
              "raw": "nil"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (true)', function() {
    expect(parser.parse('a = (true)')).to.eql({
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
              "type": "BooleanLiteral",
              "value": true,
              "raw": "true"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (1)', function() {
    expect(parser.parse('a = (1)')).to.eql({
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
      "comments": []
    });
  });
  it('a = ("foo")', function() {
    expect(parser.parse('a = ("foo")')).to.eql({
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
              "type": "StringLiteral",
              "value": "foo",
              "raw": "\"foo\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ([[foo]])', function() {
    expect(parser.parse('a = ([[foo]])')).to.eql({
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
              "type": "StringLiteral",
              "value": "foo",
              "raw": "[[foo]]"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ({})', function() {
    expect(parser.parse('a = ({})')).to.eql({
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
    expect(parser.parse('a = a.b')).to.eql({
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a.b.                                -- FAIL', function() {
    expect(parser.parse('a = a.b.', {wait:true}).end).to.throwError(/^\[1:8\] <name> expected near '<eof>'$/);
  });
  it('a = a.b.c', function() {
    expect(parser.parse('a = a.b.c')).to.eql({
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a:b                                 -- FAIL', function() {
    expect(parser.parse('a = a:b', {wait:true}).end).to.throwError(/^\[1:7\] function arguments expected near '<eof>'$/);
  });
  it('a = a[b]', function() {
    expect(parser.parse('a = a[b]')).to.eql({
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[1]', function() {
    expect(parser.parse('a = a[1]')).to.eql({
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
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "index": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a["foo"]', function() {
    expect(parser.parse('a = a["foo"]')).to.eql({
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
              "type": "IndexExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "index": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[b][c]', function() {
    expect(parser.parse('a = a[b][c]')).to.eql({
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a.b[c]', function() {
    expect(parser.parse('a = a.b[c]')).to.eql({
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[b].c', function() {
    expect(parser.parse('a = a[b].c')).to.eql({
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a)[b]', function() {
    expect(parser.parse('a = (a)[b]')).to.eql({
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
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a).c', function() {
    expect(parser.parse('a = (a).c')).to.eql({
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
              "type": "MemberExpression",
              "indexer": ".",
              "identifier": {
                "type": "Identifier",
                "name": "c",
                "isLocal": false
              },
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ()                                  -- FAIL', function() {
    expect(parser.parse('a = ()', {wait:true}).end).to.throwError(/^\[1:5\] <expression> expected near '\)'$/);
  });
  it('a = a()', function() {
    expect(parser.parse('a = a()')).to.eql({
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
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
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
    expect(parser.parse('a = a.b()')).to.eql({
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
              "type": "CallExpression",
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
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a[b]()', function() {
    expect(parser.parse('a = a[b]()')).to.eql({
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
              "type": "CallExpression",
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
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a:b()', function() {
    expect(parser.parse('a = a:b()')).to.eql({
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
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ":",
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
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a)()', function() {
    expect(parser.parse('a = (a)()')).to.eql({
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
              "type": "CallExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
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
    expect(parser.parse('a = (a).b()')).to.eql({
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
              "type": "CallExpression",
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
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a)[b]()', function() {
    expect(parser.parse('a = (a)[b]()')).to.eql({
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
              "type": "CallExpression",
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
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (a):b()', function() {
    expect(parser.parse('a = (a):b()')).to.eql({
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
              "type": "CallExpression",
              "base": {
                "type": "MemberExpression",
                "indexer": ":",
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
              "arguments": []
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a"foo"', function() {
    expect(parser.parse('a = a"foo"')).to.eql({
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
              "type": "StringCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "argument": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a{}', function() {
    expect(parser.parse('a = a{}')).to.eql({
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
              "type": "TableCallExpression",
              "base": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "arguments": {
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
    expect(parser.parse('a = function', {wait:true}).end).to.throwError(/^\[1:12\] '\(' expected near '<eof>'$/);
  });
  it('a = function 1                          -- FAIL', function() {
    expect(parser.parse('a = function 1', {wait:true}).end).to.throwError(/^\[1:13\] '\(' expected near '1'$/);
  });
  it('a = function a                          -- FAIL', function() {
    expect(parser.parse('a = function a', {wait:true}).end).to.throwError(/^\[1:13\] '\(' expected near 'a'$/);
  });
  it('a = function end                        -- FAIL', function() {
    expect(parser.parse('a = function end', {wait:true}).end).to.throwError(/^\[1:13\] '\(' expected near 'end'$/);
  });
  it('a = function(                           -- FAIL', function() {
    expect(parser.parse('a = function(', {wait:true}).end).to.throwError(/^\[1:13\] <name> or '\.\.\.' expected near '<eof>'$/);
  });
  it('a = function() end', function() {
    expect(parser.parse('a = function() end')).to.eql({
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
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
    expect(parser.parse('a = function(1', {wait:true}).end).to.throwError(/^\[1:13\] <name> or '\.\.\.' expected near '1'$/);
  });
  it('a = function(p) end', function() {
    expect(parser.parse('a = function(p) end')).to.eql({
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "isLocal": true
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
    expect(parser.parse('a = function(p,)', {wait:true}).end).to.throwError(/^\[1:15\] <name> or '\.\.\.' expected near '\)'$/);
  });
  it('a = function(p q                        -- FAIL', function() {
    expect(parser.parse('a = function(p q', {wait:true}).end).to.throwError(/^\[1:16\] <name> or '\.\.\.' expected near '<eof>'$/);
  });
  it('a = function(p,q,r) end', function() {
    expect(parser.parse('a = function(p,q,r) end')).to.eql({
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "q",
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "r",
                  "isLocal": true
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
    expect(parser.parse('a = function(p,q,1', {wait:true}).end).to.throwError(/^\[1:17\] <name> or '\.\.\.' expected near '1'$/);
  });
  it('a = function(...) end', function() {
    expect(parser.parse('a = function(...) end')).to.eql({
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "VarargLiteral",
                  "value": "...",
                  "raw": "..."
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
  it('a = function(...,                       -- FAIL', function() {
    expect(parser.parse('a = function(...,', {wait:true}).end).to.throwError(/^\[1:16\] '\)' expected near ','$/);
  });
  it('a = function(p,...) end', function() {
    expect(parser.parse('a = function(p,...) end')).to.eql({
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "isLocal": true
                },
                {
                  "type": "VarargLiteral",
                  "value": "...",
                  "raw": "..."
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
    expect(parser.parse('a = function(p,q,r,...) end')).to.eql({
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
              "type": "FunctionDeclaration",
              "identifier": null,
              "isLocal": false,
              "parameters": [
                {
                  "type": "Identifier",
                  "name": "p",
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "q",
                  "isLocal": true
                },
                {
                  "type": "Identifier",
                  "name": "r",
                  "isLocal": true
                },
                {
                  "type": "VarargLiteral",
                  "value": "...",
                  "raw": "..."
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
  it('a = {\'-\'}', function() {
    expect(parser.parse('a = {\'-\'}')).to.eql({
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
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "StringLiteral",
                    "value": "-",
                    "raw": "'-'"
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
  it('a = {\'not\'}', function() {
    expect(parser.parse('a = {\'not\'}')).to.eql({
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
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "StringLiteral",
                    "value": "not",
                    "raw": "'not'"
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
  it('a = {not true}', function() {
    expect(parser.parse('a = {not true}')).to.eql({
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
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "not",
                    "argument": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true"
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
});
