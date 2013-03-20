describe('operators', function() {
  it('a = -10', function() {
    expect(parser.parse('a = -10')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "NumericLiteral",
                "value": 10,
                "raw": "10"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -"foo"', function() {
    expect(parser.parse('a = -"foo"')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
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
  it('a = -a', function() {
    expect(parser.parse('a = -a')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
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
  it('a = -nil', function() {
    expect(parser.parse('a = -nil')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "NilLiteral",
                "value": null,
                "raw": "nil"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -true', function() {
    expect(parser.parse('a = -true')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = -{}', function() {
    expect(parser.parse('a = -{}')).to.eql({
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
    expect(parser.parse('a = -function() end')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "FunctionDeclaration",
                "identifier": null,
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
    expect(parser.parse('a = -a()')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
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
    expect(parser.parse('a = -(a)')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
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
  it('a = -                                   -- FAIL', function() {
    expect(parser.parse('a = -', {wait:true}).end).to.throwError(/^\[1:5\] <expression> expected near '<eof>'$/);
  });
  it('a = not 10', function() {
    expect(parser.parse('a = not 10')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "NumericLiteral",
                "value": 10,
                "raw": "10"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not "foo"', function() {
    expect(parser.parse('a = not "foo"')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
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
  it('a = not a', function() {
    expect(parser.parse('a = not a')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
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
  it('a = not nil', function() {
    expect(parser.parse('a = not nil')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "NilLiteral",
                "value": null,
                "raw": "nil"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not true', function() {
    expect(parser.parse('a = not true')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not {}', function() {
    expect(parser.parse('a = not {}')).to.eql({
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
    expect(parser.parse('a = not function() end')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "FunctionDeclaration",
                "identifier": null,
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
    expect(parser.parse('a = not a()')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
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
    expect(parser.parse('a = not (a)')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
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
  it('a = not                                 -- FAIL', function() {
    expect(parser.parse('a = not', {wait:true}).end).to.throwError(/^\[1:7\] <expression> expected near '<eof>'$/);
  });
  it('a = 1 + 2; a = 1 - 2', function() {
    expect(parser.parse('a = 1 + 2; a = 1 - 2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
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
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 * 2; a = 1 / 2', function() {
    expect(parser.parse('a = 1 * 2; a = 1 / 2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
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
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 ^ 2; a = 1 .. 2', function() {
    expect(parser.parse('a = 1 ^ 2; a = 1 .. 2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "^",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
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
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 +                                 -- FAIL', function() {
    expect(parser.parse('a = 1 +', {wait:true}).end).to.throwError(/^\[1:7\] <expression> expected near '<eof>'$/);
  });
  it('a = 1 ..                                -- FAIL', function() {
    expect(parser.parse('a = 1 ..', {wait:true}).end).to.throwError(/^\[1:8\] <expression> expected near '<eof>'$/);
  });
  it('a = 1 * /                               -- FAIL', function() {
    expect(parser.parse('a = 1 * /', {wait:true}).end).to.throwError(/^\[1:8\] <expression> expected near '\/'$/);
  });
  it('a = 1 + -2; a = 1 - -2', function() {
    expect(parser.parse('a = 1 + -2; a = 1 - -2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
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
              "name": "a",
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
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
    expect(parser.parse('a = 1 * -', {wait:true}).end).to.throwError(/^\[1:9\] <expression> expected near '<eof>'$/);
  });
  it('a = 1 * not 2; a = 1 / not 2', function() {
    expect(parser.parse('a = 1 * not 2; a = 1 / not 2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
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
              "name": "a",
              "isLocal": false
            }
          ],
          "init": [
            {
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "not",
                "argument": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
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
    expect(parser.parse('a = 1 / not', {wait:true}).end).to.throwError(/^\[1:11\] <expression> expected near '<eof>'$/);
  });
  it('a = 1 + 2 - 3 * 4 / 5 ^ 6', function() {
    expect(parser.parse('a = 1 + 2 - 3 * 4 / 5 ^ 6')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 3,
                    "raw": "3"
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 4,
                    "raw": "4"
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 5,
                    "raw": "5"
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 6,
                    "raw": "6"
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
    expect(parser.parse('a = ((1 + 2) - 3) * (4 / (5 ^ 6))')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "*",
              "left": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  }
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "NumericLiteral",
                  "value": 4,
                  "raw": "4"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 5,
                    "raw": "5"
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 6,
                    "raw": "6"
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
    expect(parser.parse('a = (1 + (2 - (3 * (4 / (5 ^ ((6)))))))')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 3,
                    "raw": "3"
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 4,
                      "raw": "4"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "^",
                      "left": {
                        "type": "NumericLiteral",
                        "value": 5,
                        "raw": "5"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 6,
                        "raw": "6"
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
    expect(parser.parse('a = ((1', {wait:true}).end).to.throwError(/^\[1:7\] '\)' expected near '<eof>'$/);
  });
  it('a = ((1 + 2)                            -- FAIL', function() {
    expect(parser.parse('a = ((1 + 2)', {wait:true}).end).to.throwError(/^\[1:12\] '\)' expected near '<eof>'$/);
  });
  it('a = 1)                                  -- FAIL', function() {
    expect(parser.parse('a = 1)', {wait:true}).end).to.throwError(/^\[1:5\] Unexpected symbol '\)' near '<eof>'$/);
  });
  it('a = a + b - c', function() {
    expect(parser.parse('a = a + b - c')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                },
                "right": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "right": {
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
  it('a = "foo" + "bar"', function() {
    expect(parser.parse('a = "foo" + "bar"')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              },
              "right": {
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo".."bar".."baz"', function() {
    expect(parser.parse('a = "foo".."bar".."baz"')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "StringLiteral",
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "baz",
                  "raw": "\"baz\""
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
    expect(parser.parse('a = true + false - nil')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                },
                "right": {
                  "type": "BooleanLiteral",
                  "value": false,
                  "raw": "false"
                }
              },
              "right": {
                "type": "NilLiteral",
                "value": null,
                "raw": "nil"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {} * {}', function() {
    expect(parser.parse('a = {} * {}')).to.eql({
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
    expect(parser.parse('a = function() end / function() end')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "/",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
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
    expect(parser.parse('a = a() ^ b()')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "^",
              "left": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                },
                "arguments": []
              },
              "right": {
                "type": "CallExpression",
                "base": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
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
    expect(parser.parse('a = 1 == 2; a = 1 ~= 2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
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
              "type": "BinaryExpression",
              "operator": "~=",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 < 2; a = 1 <= 2', function() {
    expect(parser.parse('a = 1 < 2; a = 1 <= 2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
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
              "type": "BinaryExpression",
              "operator": "<=",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 > 2; a = 1 >= 2', function() {
    expect(parser.parse('a = 1 > 2; a = 1 >= 2')).to.eql({
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
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
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
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 < 2 < 3', function() {
    expect(parser.parse('a = 1 < 2 < 3')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              },
              "right": {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 >= 2 >= 3', function() {
    expect(parser.parse('a = 1 >= 2 >= 3')).to.eql({
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
              "type": "BinaryExpression",
              "operator": ">=",
              "left": {
                "type": "BinaryExpression",
                "operator": ">=",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              },
              "right": {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 ==                                -- FAIL', function() {
    expect(parser.parse('a = 1 ==', {wait:true}).end).to.throwError(/^\[1:8\] <expression> expected near '<eof>'$/);
  });
  it('a = `                                   -- FAIL', function() {
    expect(parser.parse('a = `', {wait:true}).end).to.throwError(/^\[1:5\] Unexpected symbol '`' near '='$/);
  });
  it('a = ~                                   -- FAIL', function() {
    expect(parser.parse('a = ~', {wait:true}).end).to.throwError(/^\[1:5\] '=' expected near '~'$/);
  });
  it('a = ~= 2                                -- FAIL', function() {
    expect(parser.parse('a = ~= 2', {wait:true}).end).to.throwError(/^\[1:4\] <expression> expected near '~='$/);
  });
  it('a = "foo" == "bar"', function() {
    expect(parser.parse('a = "foo" == "bar"')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              },
              "right": {
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "foo" > "bar"', function() {
    expect(parser.parse('a = "foo" > "bar"')).to.eql({
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
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              },
              "right": {
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a ~= b', function() {
    expect(parser.parse('a = a ~= b')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "~=",
              "left": {
                "type": "Identifier",
                "name": "a",
                "isLocal": false
              },
              "right": {
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
  it('a = true == false', function() {
    expect(parser.parse('a = true == false')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              },
              "right": {
                "type": "BooleanLiteral",
                "value": false,
                "raw": "false"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and 2; a = 1 or 2', function() {
    expect(parser.parse('a = 1 and 2; a = 1 or 2')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        },
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "NumericLiteral",
                "value": 2,
                "raw": "2"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and                               -- FAIL', function() {
    expect(parser.parse('a = 1 and', {wait:true}).end).to.throwError(/^\[1:9\] <expression> expected near '<eof>'$/);
  });
  it('a = or 1                                -- FAIL', function() {
    expect(parser.parse('a = or 1', {wait:true}).end).to.throwError(/^\[1:4\] <expression> expected near 'or'$/);
  });
  it('a = 1 and 2 and 3', function() {
    expect(parser.parse('a = 1 and 2 and 3')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              },
              "right": {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 or 2 or 3', function() {
    expect(parser.parse('a = 1 or 2 or 3')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "or",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              },
              "right": {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 and 2 or 3', function() {
    expect(parser.parse('a = 1 and 2 or 3')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
                }
              },
              "right": {
                "type": "NumericLiteral",
                "value": 3,
                "raw": "3"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = a and b or c', function() {
    expect(parser.parse('a = a and b or c')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "Identifier",
                  "name": "a",
                  "isLocal": false
                },
                "right": {
                  "type": "Identifier",
                  "name": "b",
                  "isLocal": false
                }
              },
              "right": {
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
  it('a = a() and (b)() or c.d', function() {
    expect(parser.parse('a = a() and (b)() or c.d')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "a",
                    "isLocal": false
                  },
                  "arguments": []
                },
                "right": {
                  "type": "CallExpression",
                  "base": {
                    "type": "Identifier",
                    "name": "b",
                    "isLocal": false
                  },
                  "arguments": []
                }
              },
              "right": {
                "type": "MemberExpression",
                "indexer": ".",
                "identifier": {
                  "type": "Identifier",
                  "name": "d",
                  "isLocal": false
                },
                "base": {
                  "type": "Identifier",
                  "name": "c",
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
  it('a = "foo" and "bar"', function() {
    expect(parser.parse('a = "foo" and "bar"')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "StringLiteral",
                "value": "foo",
                "raw": "\"foo\""
              },
              "right": {
                "type": "StringLiteral",
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true or false', function() {
    expect(parser.parse('a = true or false')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              },
              "right": {
                "type": "BooleanLiteral",
                "value": false,
                "raw": "false"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = {} and {} or {}', function() {
    expect(parser.parse('a = {} and {} or {}')).to.eql({
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
    expect(parser.parse('a = (1) and ("foo") or (nil)')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "NumericLiteral",
                  "value": 1,
                  "raw": "1"
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "foo",
                  "raw": "\"foo\""
                }
              },
              "right": {
                "type": "NilLiteral",
                "value": null,
                "raw": "nil"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = function() end == function() end', function() {
    expect(parser.parse('a = function() end == function() end')).to.eql({
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
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
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
    expect(parser.parse('a = function() end or function() end')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "FunctionDeclaration",
                "identifier": null,
                "local": false,
                "parameters": [],
                "body": []
              },
              "right": {
                "type": "FunctionDeclaration",
                "identifier": null,
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
    expect(parser.parse('a = (((1 or false) and true) or false) == true')).to.eql({
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
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "BooleanLiteral",
                      "value": false,
                      "raw": "false"
                    }
                  },
                  "right": {
                    "type": "BooleanLiteral",
                    "value": true,
                    "raw": "true"
                  }
                },
                "right": {
                  "type": "BooleanLiteral",
                  "value": false,
                  "raw": "false"
                }
              },
              "right": {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = (((nil and true) or false) and true) == false', function() {
    expect(parser.parse('a = (((nil and true) or false) and true) == false')).to.eql({
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
                      "type": "NilLiteral",
                      "value": null,
                      "raw": "nil"
                    },
                    "right": {
                      "type": "BooleanLiteral",
                      "value": true,
                      "raw": "true"
                    }
                  },
                  "right": {
                    "type": "BooleanLiteral",
                    "value": false,
                    "raw": "false"
                  }
                },
                "right": {
                  "type": "BooleanLiteral",
                  "value": true,
                  "raw": "true"
                }
              },
              "right": {
                "type": "BooleanLiteral",
                "value": false,
                "raw": "false"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = not ((true or false) and nil)', function() {
    expect(parser.parse('a = not ((true or false) and nil)')).to.eql({
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
              "type": "UnaryExpression",
              "operator": "not",
              "argument": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "or",
                  "left": {
                    "type": "BooleanLiteral",
                    "value": true,
                    "raw": "true"
                  },
                  "right": {
                    "type": "BooleanLiteral",
                    "value": false,
                    "raw": "false"
                  }
                },
                "right": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil"
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
    expect(parser.parse('a = true or false  and nil')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "or",
              "left": {
                "type": "BooleanLiteral",
                "value": true,
                "raw": "true"
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "BooleanLiteral",
                  "value": false,
                  "raw": "false"
                },
                "right": {
                  "type": "NilLiteral",
                  "value": null,
                  "raw": "nil"
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
    expect(parser.parse('a = 2^-2 == 1/4 and -2^- -2 == - - -4')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "^",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 2,
                    "raw": "2"
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 4,
                    "raw": "4"
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
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    },
                    "right": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "NumericLiteral",
                          "value": 2,
                          "raw": "2"
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
                        "type": "NumericLiteral",
                        "value": 4,
                        "raw": "4"
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
    expect(parser.parse('a = -3-1-5 == 0+0-9')).to.eql({
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
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 1,
                    "raw": "1"
                  }
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 5,
                  "raw": "5"
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 9,
                  "raw": "9"
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
    expect(parser.parse('a = -2^2 == -4 and (-2)^2 == 4 and 2*2-3-1 == 0')).to.eql({
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
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  },
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "NumericLiteral",
                      "value": 4,
                      "raw": "4"
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
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 4,
                    "raw": "4"
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
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "right": {
                    "type": "NumericLiteral",
                    "value": 1,
                    "raw": "1"
                  }
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 0,
                  "raw": "0"
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
    expect(parser.parse('a = 2*1+3/3 == 3 and 1+2 .. 3*1 == "33"')).to.eql({
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
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    }
                  }
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
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
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "33",
                  "raw": "\"33\""
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
    expect(parser.parse('a = not nil and 2 and not(2>3 or 3<2)')).to.eql({
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
              "type": "LogicalExpression",
              "operator": "and",
              "left": {
                "type": "LogicalExpression",
                "operator": "and",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "not",
                  "argument": {
                    "type": "NilLiteral",
                    "value": null,
                    "raw": "nil"
                  }
                },
                "right": {
                  "type": "NumericLiteral",
                  "value": 2,
                  "raw": "2"
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
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
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
    expect(parser.parse('a = not(2+1 > 3*1) and "a".."b" > "a"')).to.eql({
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
                      "type": "NumericLiteral",
                      "value": 2,
                      "raw": "2"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "NumericLiteral",
                      "value": 3,
                      "raw": "3"
                    },
                    "right": {
                      "type": "NumericLiteral",
                      "value": 1,
                      "raw": "1"
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
                    "type": "StringLiteral",
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "right": {
                    "type": "StringLiteral",
                    "value": "b",
                    "raw": "\"b\""
                  }
                },
                "right": {
                  "type": "StringLiteral",
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
});
