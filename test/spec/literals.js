describe('literals', function() {
  it('a                                         -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected identifier 'a' near '<eof>'$/);
  });
  it('a = 1', function() {
    expect(parser.parse('a = 1')).to.eql({
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
              "value": 1,
              "raw": "1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = .1', function() {
    expect(parser.parse('a = .1')).to.eql({
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
              "value": 0.1,
              "raw": ".1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1.1', function() {
    expect(parser.parse('a = 1.1')).to.eql({
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
              "value": 1.1,
              "raw": "1.1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 10.1', function() {
    expect(parser.parse('a = 10.1')).to.eql({
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
              "value": 10.1,
              "raw": "10.1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e                                    -- FAIL', function() {
    expect(parser.parse('a = 1e', {wait:true}).end).to.throwError(/^\[1:7\] malformed number near '1e'$/);
  });
  it('a = 1e1', function() {
    expect(parser.parse('a = 1e1')).to.eql({
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
              "value": 10,
              "raw": "1e1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1E1', function() {
    expect(parser.parse('a = 1E1')).to.eql({
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
              "value": 10,
              "raw": "1E1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e+9', function() {
    expect(parser.parse('a = 1e+9')).to.eql({
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
              "value": 1000000000,
              "raw": "1e+9"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1e-1', function() {
    expect(parser.parse('a = 1e-1')).to.eql({
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
              "value": 0.1,
              "raw": "1e-1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0x                                    -- FAIL', function() {
    expect(parser.parse('a = 0x', {wait:true}).end).to.throwError(/^\[1:7\] malformed number near '0x'$/);
  });
  it('a = 0xf', function() {
    expect(parser.parse('a = 0xf')).to.eql({
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
              "value": 15,
              "raw": "0xf"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xf.', function() {
    expect(parser.parse('a = 0xf.')).to.eql({
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
              "value": 15,
              "raw": "0xf."
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xf.3', function() {
    expect(parser.parse('a = 0xf.3')).to.eql({
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
              "value": 15.1875,
              "raw": "0xf.3"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp                                  -- FAIL', function() {
    expect(parser.parse('a = 0xfp', {wait:true}).end).to.throwError(/^\[1:9\] malformed number near '0xfp'$/);
  });
  it('a = 0xfp1', function() {
    expect(parser.parse('a = 0xfp1')).to.eql({
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
              "value": 30,
              "raw": "0xfp1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp+1', function() {
    expect(parser.parse('a = 0xfp+1')).to.eql({
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
              "value": 30,
              "raw": "0xfp+1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xfp-1', function() {
    expect(parser.parse('a = 0xfp-1')).to.eql({
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
              "value": 7.5,
              "raw": "0xfp-1"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 0xFP+9', function() {
    expect(parser.parse('a = 0xFP+9')).to.eql({
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
              "value": 7680,
              "raw": "0xFP+9"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = 1 .. 3 .. -2', function() {
    expect(parser.parse('a = 1 .. 3 .. -2')).to.eql({
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
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3"
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
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
    expect(parser.parse('a = 1 .. "bar"')).to.eql({
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
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "Literal",
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
  it('a = "bar                                  -- FAIL', function() {
    expect(parser.parse('a = "bar', {wait:true}).end).to.throwError(/^\[1:9\] unfinished string near 'bar'$/);
  });
  it('a = \'bar\'', function() {
    expect(parser.parse('a = \'bar\'')).to.eql({
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
              "value": "bar",
              "raw": "'bar'"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar"', function() {
    expect(parser.parse('a = "bar"')).to.eql({
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
              "value": "bar",
              "raw": "\"bar\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = [=aa                                  -- FAIL', function() {
    expect(parser.parse('a = [=aa', {wait:true}).end).to.throwError(/^\[1:2\] '\[' expected near '='$/);
  });
  it('a = nil', function() {
    expect(parser.parse('a = nil')).to.eql({
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
              "value": null,
              "raw": "nil"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = true', function() {
    expect(parser.parse('a = true')).to.eql({
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
              "value": true,
              "raw": "true"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = false', function() {
    expect(parser.parse('a = false')).to.eql({
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
              "value": false,
              "raw": "false"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = ...', function() {
    expect(parser.parse('a = ...')).to.eql({
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
