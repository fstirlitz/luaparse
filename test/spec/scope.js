describe('scope', function() {
  it('local foo = 1 do foo = 2 end', function() {
    expect(parser.parse('local foo = 1 do foo = 2 end', { scope: true } )).to.eql({
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

  it('local foo = 1 do foo = 2 bar = 3 end', function() {
    expect(parser.parse('local foo = 1 do foo = 2 bar = 3 end', { scope: true })).to.eql({
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
            },
            {
              "type": "AssignmentStatement",
              "variables": [
                {
                  "type": "Identifier",
                  "name": "bar",
                  "isLocal": false
                }
              ],
              "init": [
                {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          ]
        }
      ],
      "comments": []
    });
  });

  it('do local foo = 1 end do foo = 2 end', function() {
    expect(parser.parse('do local foo = 1 end do foo = 2 end', { scope: true })).to.eql({
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
    expect(parser.parse('local foo do foo = 1 do foo = 2 end end', { scope: true })).to.eql({
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
    expect(parser.parse('local function foo() end foo()', { scope: true })).to.eql({
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
});
