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
              "type": "Literal",
              "value": "bar\tbaz"
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
              "type": "Literal",
              "value": "bar\tbaz"
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
              "type": "Literal",
              "value": "bar\nbaz"
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
              "type": "Literal",
              "value": "bar\rbaz"
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
              "type": "Literal",
              "value": "bar\\80baz"
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
              "type": "Literal",
              "value": "bar\\800\\0baz"
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
              "type": "Literal",
              "value": "barbaz"
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
              "type": "Literal",
              "value": "bar\f\u000b\bbaz" // @TODO a bit unsure about this
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
              "type": "Literal",
              "value": "bar\f\u000b\bbaz"
            }
          ]
        }
      ],
      "comments": []
    });
  });

  it("c = '\\'", function() {
    expect(parser.parse("c = '\\''")).to.eql({
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
              "type": "Literal",
              "value": "'"
            }
          ]
        }
      ],
      "comments": []
    });
  });
});
