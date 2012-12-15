describe('tableconstructors', function() {
  it('a = {                                   -- FAIL', function() {
    expect(parser.parse('a = {', {wait:true}).end).throws("[1:5] '}' expected near '<eof>'");
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
    expect(parser.parse('a = {,}', {wait:true}).end).throws("[1:5] '}' expected near ','");
  });
  it('a = {;}                                 -- FAIL', function() {
    expect(parser.parse('a = {;}', {wait:true}).end).throws("[1:5] '}' expected near ';'");
  });
  it('a = {,,}                                -- FAIL', function() {
    expect(parser.parse('a = {,,}', {wait:true}).end).throws("[1:5] '}' expected near ','");
  });
  it('a = {;;}                                -- FAIL', function() {
    expect(parser.parse('a = {;;}', {wait:true}).end).throws("[1:5] '}' expected near ';'");
  });
  it('a = {{                                  -- FAIL', function() {
    expect(parser.parse('a = {{', {wait:true}).end).throws("[1:6] '}' expected near '<eof>'");
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
    expect(parser.parse('a = { a', {wait:true}).end).throws("[1:7] '}' expected near '<eof>'");
  });
  it('a = { a=                                -- FAIL', function() {
    expect(parser.parse('a = { a=', {wait:true}).end).throws("[1:8] '}' expected near '<eof>'");
  });
  it('a = { a=,                               -- FAIL', function() {
    expect(parser.parse('a = { a=,', {wait:true}).end).throws("[1:9] '}' expected near '<eof>'");
  });
  it('a = { a=;                               -- FAIL', function() {
    expect(parser.parse('a = { a=;', {wait:true}).end).throws("[1:9] '}' expected near '<eof>'");
  });
  it('a = { 1, a="foo"                        -- FAIL', function() {
    expect(parser.parse('a = { 1, a="foo"', {wait:true}).end).throws("[1:16] '}' expected near '<eof>'");
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
    expect(parser.parse('a = { [', {wait:true}).end).throws("[1:7] ']' expected near '<eof>'");
  });
  it('a = { [1                                -- FAIL', function() {
    expect(parser.parse('a = { [1', {wait:true}).end).throws("[1:8] ']' expected near '<eof>'");
  });
  it('a = { [1]                               -- FAIL', function() {
    expect(parser.parse('a = { [1]', {wait:true}).end).throws("[1:9] '=' expected near '<eof>'");
  });
  it('a = { [a]=                              -- FAIL', function() {
    expect(parser.parse('a = { [a]=', {wait:true}).end).throws("[1:10] '}' expected near '<eof>'");
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
});


