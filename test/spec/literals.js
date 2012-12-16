describe('literals', function() {
  it('a                                         -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end).throws("[1:0] Unexpected symbol 'a' near '<eof>'");
  });
  it('a = 1', function() {
    expect(parser.parse('a = 1')).to.deep.equal({
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
  it('a = .1', function() {
    expect(parser.parse('a = .1')).to.deep.equal({
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
              "value": 0.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1.1', function() {
    expect(parser.parse('a = 1.1')).to.deep.equal({
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
              "value": 1.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 10.1', function() {
    expect(parser.parse('a = 10.1')).to.deep.equal({
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
              "value": 10.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e                                    -- FAIL', function() {
    expect(parser.parse('a = 1e', {wait:true}).end).throws("[1:7] malformed number near '1e'");
  });
  it('a = 1e1', function() {
    expect(parser.parse('a = 1e1')).to.deep.equal({
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
              "value": 10
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1E1', function() {
    expect(parser.parse('a = 1E1')).to.deep.equal({
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
              "value": 10
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e+9', function() {
    expect(parser.parse('a = 1e+9')).to.deep.equal({
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
              "value": 1000000000
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e-1', function() {
    expect(parser.parse('a = 1e-1')).to.deep.equal({
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
              "value": 0.1
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0x                                    -- FAIL', function() {
    expect(parser.parse('a = 0x', {wait:true}).end).throws("[1:7] malformed number near '0x'");
  });
  it('a = 0xf', function() {
    expect(parser.parse('a = 0xf')).to.deep.equal({
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
              "value": 15
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xf.', function() {
    expect(parser.parse('a = 0xf.')).to.deep.equal({
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
              "value": 15
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xf.3', function() {
    expect(parser.parse('a = 0xf.3')).to.deep.equal({
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
              "value": 15.1875
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp                                  -- FAIL', function() {
    expect(parser.parse('a = 0xfp', {wait:true}).end).throws("[1:9] malformed number near '0xfp'");
  });
  it('a = 0xfp1', function() {
    expect(parser.parse('a = 0xfp1')).to.deep.equal({
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
              "value": 30
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp+1', function() {
    expect(parser.parse('a = 0xfp+1')).to.deep.equal({
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
              "value": 30
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp-1', function() {
    expect(parser.parse('a = 0xfp-1')).to.deep.equal({
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
              "value": 7.5
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xFP+9', function() {
    expect(parser.parse('a = 0xFP+9')).to.deep.equal({
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
              "value": 7680
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 .. 3 .. -2', function() {
    expect(parser.parse('a = 1 .. 3 .. -2')).to.deep.equal({
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
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "Literal",
                  "value": 3
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 2
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
  it('a = 1 .. "bar"', function() {
    expect(parser.parse('a = 1 .. "bar"')).to.deep.equal({
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
              "type": "BinaryExpression",
              "operator": "..",
              "left": {
                "type": "Literal",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "value": "bar"
              }
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar                                  -- FAIL', function() {
    expect(parser.parse('a = "bar', {wait:true}).end).throws("[1:9] unfinished string near 'bar'");
  });
  it('a = \'bar\'', function() {
    expect(parser.parse('a = \'bar\'')).to.deep.equal({
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
              "value": "bar"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar"', function() {
    expect(parser.parse('a = "bar"')).to.deep.equal({
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
              "value": "bar"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = [=aa           -- FAIL', function() {
    expect(parser.parse('a = [=aa', {wait:true}).end).throws("[1:2] '[' expected near '='");
  });
  it('a = nil', function() {
    expect(parser.parse('a = nil')).to.deep.equal({
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
              "value": null
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true', function() {
    expect(parser.parse('a = true')).to.deep.equal({
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
              "value": true
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = false', function() {
    expect(parser.parse('a = false')).to.deep.equal({
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
              "value": false
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ...', function() {
    expect(parser.parse('a = ...')).to.deep.equal({
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
              "type": "VarargLiteral"
            }
          ]
        }
      ],
      "comments": []
    });
  });
});
