describe('scope', function() {
  it('local foo = 1 do foo = 2 end', function() {
    expect(parser.parse('local foo = 1 do foo = 2 end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "foo",
              "isLocal": true
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            }
          ]
        },
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "AssignmentStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "foo",
                  "isLocal": true
                }
              ],
              "init": [
                {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('do local foo = 1 end foo = 2', function() {
    expect(parser.parse('do local foo = 1 end foo = 2')).to.eql({
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
                  "name": "foo",
                  "isLocal": true
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
          ]
        },
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "foo",
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 2,
              "raw": "2"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('do local foo = 1 end do foo = 2 end', function() {
    expect(parser.parse('do local foo = 1 end do foo = 2 end')).to.eql({
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
                  "name": "foo",
                  "isLocal": true
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
          ]
        },
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "AssignmentStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "foo",
                  "isLocal": false
                }
              ],
              "init": [
                {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('local foo do foo = 1 do foo = 2 end end', function() {
    expect(parser.parse('local foo do foo = 1 do foo = 2 end end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "foo",
              "isLocal": true
            }
          ],
          "init": []
        },
        {
          "type": "DoStatement",
          "body": [
            {
              "type": "AssignmentStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "foo",
                  "isLocal": true
                }
              ],
              "init": [
                {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                }
              ]
            },
            {
              "type": "DoStatement",
              "body": [
                {
                  "type": "AssignmentStatement",
                  "variables": [
                    {
                      "type": "Identifier",
                      "name": "foo",
                      "isLocal": true
                    }
                  ],
                  "init": [
                    {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
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
  it('local function foo() end foo()', function() {
    expect(parser.parse('local function foo() end foo()')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "FunctionDeclaration",
          "identifier": {
            "type": "Identifier",
            "name": "foo",
            "isLocal": true
          },
          "local": true,
          "parameters": [],
          "body": []
        },
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Identifier",
              "name": "foo",
              "isLocal": true
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('local a = { a }', function() {
    expect(parser.parse('local a = { a }')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
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
                    "name": "a",
                    "isLocal": false
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
  it('local b = { b, b.a, b[a], b:a() }', function() {
    expect(parser.parse('local b = { b, b.a, b[a], b:a() }')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
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
                    "name": "b",
                    "isLocal": false
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "IndexExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
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
                        "name": "a",
                        "isLocal": false
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": false
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
  it('local b = {} local a = { b, b.a, b[a], b:a() }', function() {
    expect(parser.parse('local b = {} local a = { b, b.a, b[a], b:a() }')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": []
            }
          ]
        },
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
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
                    "name": "b",
                    "isLocal": true
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "MemberExpression",
                    "indexer": ".",
                    "identifier": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": true
                    },
                    "base": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": true
                    }
                  }
                },
                {
                  "type": "TableValue",
                  "value": {
                    "type": "IndexExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": true
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "a",
                      "isLocal": false
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
                        "name": "a",
                        "isLocal": true
                      },
                      "base": {
                        "type": "Identifier",
                        "name": "b",
                        "isLocal": true
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
  it('local c local a = { b[c] }', function() {
    expect(parser.parse('local c local a = { b[c] }')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "c",
              "isLocal": true
            }
          ],
          "init": []
        },
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            }
          ],
          "init": [
            {
              "type": "TableConstructorExpression",
              "fields": [
                {
                  "type": "TableValue",
                  "value": {
                    "type": "IndexExpression",
                    "base": {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    },
                    "index": {
                      "type": "Identifier",
                      "name": "c",
                      "isLocal": true
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
  it('local a = function() end a()', function() {
    expect(parser.parse('local a = function() end a()')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            }
          ],
          "init": [
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "local": false,
              "parameters": [],
              "body": []
            }
          ]
        },
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            "arguments": []
          }
        }
      ],
      "comments": []
    });
  });
  it('local a, b = 1, a', function() {
    expect(parser.parse('local a, b = 1, a')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
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
  it('local a, b = 1, function() b = 2 end', function() {
    expect(parser.parse('local a, b = 1, function() b = 2 end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
            }
          ],
          "init": [
            {
              "type": "NumericLiteral",
              "value": 1,
              "raw": "1"
            },
            {
              "type": "FunctionDeclaration",
              "identifier": null,
              "local": false,
              "parameters": [],
              "body": [
                {
                  "type": "AssignmentStatement",
                  "variables": [
                    {
                      "type": "Identifier",
                      "name": "b",
                      "isLocal": false
                    }
                  ],
                  "init": [
                    {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
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
  it('local a (a):b():c()', function() {
    expect(parser.parse('local a (a):b():c()')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            }
          ],
          "init": []
        },
        {
          "type": "CallStatement",
          "expression": {
            "type": "CallExpression",
            "base": {
              "type": "MemberExpression",
              "indexer": ":",
              "identifier": {
                "type": "Identifier",
                "name": "c",
                "isLocal": true
              },
              "base": {
                "type": "CallExpression",
                "base": {
                  "type": "MemberExpression",
                  "indexer": ":",
                  "identifier": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": true
                  },
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": true
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
  it('local a, b for i, a, b in c do end', function() {
    expect(parser.parse('local a, b for i, a, b in c do end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
            }
          ],
          "init": []
        },
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "i",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "c",
              "isLocal": false
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
  it('local a, b, c for i, a, b in c do end', function() {
    expect(parser.parse('local a, b, c for i, a, b in c do end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LocalStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "c",
              "isLocal": true
            }
          ],
          "init": []
        },
        {
          "type": "ForGenericStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "i",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "a",
              "isLocal": true
            },
            {
              "type": "Identifier",
              "name": "b",
              "isLocal": true
            }
          ],
          "iterators": [
            {
              "type": "Identifier",
              "name": "c",
              "isLocal": true
            }
          ],
          "body": []
        }
      ],
      "comments": []
    });
  });
});
