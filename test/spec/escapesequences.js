describe('escape sequences', function() {
  it('a = "bar\\tbaz"', function() {
    expect(parser.parse('a = "bar\tbaz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\tbaz",
              "raw": "\"bar\tbaz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar\\\\tbaz"', function() {
    expect(parser.parse('a = "bar\\tbaz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\tbaz",
              "raw": "\"bar\\tbaz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar\\nbaz"                                    -- FAIL', function() {
    expect(parser.parse('a = "bar\nbaz"', {wait:true}).end).to.throwError("[1:10] unfinished string near 'bar\n'");
  });
  it('a = "bar\\\\nbaz"', function() {
    expect(parser.parse('a = "bar\\nbaz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\nbaz",
              "raw": "\"bar\\nbaz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar\\rbaz"                                    -- FAIL', function() {
    expect(parser.parse('a = "bar\rbaz"', {wait:true}).end).to.throwError("[1:10] unfinished string near 'bar\r'");
  });
  it('a = "bar\\\\rbaz"', function() {
    expect(parser.parse('a = "bar\\rbaz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\rbaz",
              "raw": "\"bar\\rbaz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar\\80baz"', function() {
    expect(parser.parse('a = "bar\\80baz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\\80baz",
              "raw": "\"bar\\80baz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar\\800\\0baz"', function() {
    expect(parser.parse('a = "bar\\800\\0baz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\\800\\0baz",
              "raw": "\"bar\\800\\0baz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar\\\\z   baz"', function() {
    expect(parser.parse('a = "bar\\z   baz"')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "a"
            } ],
          "init": [
            {
              "type": "StringLiteral",
              "value": "barbaz",
              "raw": "\"bar\\z   baz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = "bar\\\\f\\\\v\\bbaz"', function() {
    expect(parser.parse('a = "bar\\f\\v\\bbaz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\f\u000b\bbaz", // @TODO a bit unsure about this
              "raw": "\"bar\\f\\v\\bbaz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });

  it('a = "bar\\f\\v\\bbaz"', function() {
    expect(parser.parse('a = "bar\f\v\bbaz"')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\f\u000b\bbaz",
              "raw": "\"bar\f\v\bbaz\""
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it('a = [[bar\\f\\v\\bbaz]]', function() {
    expect(parser.parse('a = [[bar\\f\\v\\bbaz]]')).to.eql({
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
              "type": "StringLiteral",
              "value": "bar\f\u000b\bbaz",
              "raw": "[[bar\\f\\v\\bbaz]]"
            }
          ]
        }
      ],
      "comments": []
    });
  });

  it("c = '\\\\'", function() {
    expect(parser.parse("c = '\\\\'")).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "StringLiteral",
              "value": "\\",
              "raw": "'\\\\'"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it("c = '\\\''", function() {
    expect(parser.parse("c = '\\\''")).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "StringLiteral",
              "value": "'",
              "raw": "'\\''"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it("c = '\\123'", function() {
    expect(parser.parse("c = '\\123'")).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "StringLiteral",
              "value": "\\123",
              "raw": "'\\123'"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it("c = '\\x23'", function() {
    expect(parser.parse("c = '\\x23'")).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "StringLiteral",
              "value": "\\x23",
              "raw": "'\\x23'"
            }
          ]
        }
      ],
      "comments": []
    });
  });
  it("c = '\\xx'", function() {
    expect(parser.parse("c = '\\xx'")).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "AssignmentStatement",
          "variables": [
            {
              "type": "Identifier",
              "name": "c"
            }
          ],
          "init": [
            {
              "type": "StringLiteral",
              "value": "\\xx",
              "raw": "'\\xx'"
            }
          ]
        }
      ],
      "comments": []
    });
  });
});
