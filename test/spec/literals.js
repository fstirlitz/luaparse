describe('literals', function() {
  it('a                                         -- FAIL', function() {
    expect(parser.parse('a', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected identifier 'a' near '<eof>'$/);
  });
  it('a = 1', function() {
    expect(parser.parse('a = 1', { scope: true })).to.eql({
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
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = .1', function() {
    expect(parser.parse('a = .1', { scope: true })).to.eql({
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
              "value": 0.1,
              "raw": ".1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1.1', function() {
    expect(parser.parse('a = 1.1', { scope: true })).to.eql({
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
              "value": 1.1,
              "raw": "1.1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 10.1', function() {
    expect(parser.parse('a = 10.1', { scope: true })).to.eql({
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
              "value": 10.1,
              "raw": "10.1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1e                                    -- FAIL', function() {
    expect(parser.parse('a = 1e', {wait:true}).end).to.throwError(/^\[1:7\] malformed number near '1e'$/);
  });
  it('a = 1e1', function() {
    expect(parser.parse('a = 1e1', { scope: true })).to.eql({
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
              "value": 10,
              "raw": "1e1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1E1', function() {
    expect(parser.parse('a = 1E1', { scope: true })).to.eql({
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
              "value": 10,
              "raw": "1E1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1e+9', function() {
    expect(parser.parse('a = 1e+9', { scope: true })).to.eql({
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
              "value": 1000000000,
              "raw": "1e+9"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1e-1', function() {
    expect(parser.parse('a = 1e-1', { scope: true })).to.eql({
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
              "value": 0.1,
              "raw": "1e-1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 0x                                    -- FAIL', function() {
    expect(parser.parse('a = 0x', {wait:true}).end).to.throwError(/^\[1:7\] malformed number near '0x'$/);
  });
  it('a = 0xf', function() {
    expect(parser.parse('a = 0xf', { scope: true })).to.eql({
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
              "value": 15,
              "raw": "0xf"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 0xf.', function() {
    expect(parser.parse('a = 0xf.', { scope: true })).to.eql({
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
              "value": 15,
              "raw": "0xf."
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 0xf.3', function() {
    expect(parser.parse('a = 0xf.3', { scope: true })).to.eql({
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
              "value": 15.1875,
              "raw": "0xf.3"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 0xfp                                  -- FAIL', function() {
    expect(parser.parse('a = 0xfp', {wait:true}).end).to.throwError(/^\[1:9\] malformed number near '0xfp'$/);
  });
  it('a = 0xfp1', function() {
    expect(parser.parse('a = 0xfp1', { scope: true })).to.eql({
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
              "value": 30,
              "raw": "0xfp1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 0xfp+1', function() {
    expect(parser.parse('a = 0xfp+1', { scope: true })).to.eql({
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
              "value": 30,
              "raw": "0xfp+1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 0xfp-1', function() {
    expect(parser.parse('a = 0xfp-1', { scope: true })).to.eql({
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
              "value": 7.5,
              "raw": "0xfp-1"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 0xFP+9', function() {
    expect(parser.parse('a = 0xFP+9', { scope: true })).to.eql({
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
              "value": 7680,
              "raw": "0xFP+9"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1 .. 3 .. -2', function() {
    expect(parser.parse('a = 1 .. 3 .. -2', { scope: true })).to.eql({
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
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "..",
                "left": {
                  "type": "NumericLiteral",
                  "value": 3,
                  "raw": "3"
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
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = 1 .. "bar"', function() {
    expect(parser.parse('a = 1 .. "bar"', { scope: true })).to.eql({
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
                "type": "NumericLiteral",
                "value": 1,
                "raw": "1"
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
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = "bar                                  -- FAIL', function() {
    expect(parser.parse('a = "bar', {wait:true}).end).to.throwError(/^\[1:9\] unfinished string near 'bar'$/);
  });
  it('a = \'bar\'', function() {
    expect(parser.parse('a = \'bar\'', { scope: true })).to.eql({
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
              "value": "bar",
              "raw": "'bar'"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = "bar"', function() {
    expect(parser.parse('a = "bar"', { scope: true })).to.eql({
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
              "value": "bar",
              "raw": "\"bar\""
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = [=aa                                  -- FAIL', function() {
    expect(parser.parse('a = [=aa', {wait:true}).end).to.throwError(/^\[1:2\] '\[' expected near '='$/);
  });
  it('a = nil', function() {
    expect(parser.parse('a = nil', { scope: true })).to.eql({
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
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = true', function() {
    expect(parser.parse('a = true', { scope: true })).to.eql({
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
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = false', function() {
    expect(parser.parse('a = false', { scope: true })).to.eql({
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
              "value": false,
              "raw": "false"
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
  it('a = ...', function() {
    expect(parser.parse('a = ...', { scope: true })).to.eql({
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
              "type": "VarargLiteral",
              "value": "...",
              "raw": "..."
            }
          ]
        }
      ],
      "comments": [],
      "globals": [
        {
          "type": "Identifier",
          "name": "a",
          "isLocal": false
        }
      ]
    });
  });
});
