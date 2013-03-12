describe('comments', function() {
  it('-- comment', function() {
    expect(parser.parse('-- comment')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": " comment",
          "raw": "-- comment"
        }
      ]
    });
  });
  it('-- comment\\n-- comment', function() {
    expect(parser.parse('-- comment\n-- comment')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": " comment",
          "raw": "-- comment"
        },
        {
          "type": "Comment",
          "value": " comment",
          "raw": "-- comment"
        }
      ]
    });
  });
  it('--coment', function() {
    expect(parser.parse('--coment')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "coment",
          "raw": "--coment"
        }
      ]
    });
  });
  it('-- comment\\nbreak', function() {
    expect(parser.parse('-- comment\nbreak')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": " comment",
          "raw": "-- comment"
        }
      ]
    });
  });
  it('break--comment', function() {
    expect(parser.parse('break--comment')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--comment"
        }
      ]
    });
  });
  it('--[[comment]]--', function() {
    expect(parser.parse('--[[comment]]--')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--[[comment]]--"
        }
      ]
    });
  });
  it('--[[comment]]--break', function() {
    expect(parser.parse('--[[comment]]--break')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--[[comment]]--"
        }
      ]
    });
  });
  it('--[=[comment]=]--break', function() {
    expect(parser.parse('--[=[comment]=]--break')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--[=[comment]=]--"
        }
      ]
    });
  });
  it('--[===[comment\\n--[=[sub]=]--\\n]===]--break', function() {
    expect(parser.parse('--[===[comment\n--[=[sub]=]--\n]===]--break')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\n--[=[sub]=]--\n",
          "raw": "--[===[comment\n--[=[sub]=]--\n]===]--"
        }
      ]
    });
  });
  it('--[[comment\\nline two]]--', function() {
    expect(parser.parse('--[[comment\nline two]]--')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\nline two",
          "raw": "--[[comment\nline two]]--"
        }
      ]
    });
  });
  it('--[[\\ncomment\\nline two\\n]]--', function() {
    expect(parser.parse('--[[\ncomment\nline two\n]]--')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\nline two\n",
          "raw": "--[[\ncomment\nline two\n]]--"
        }
      ]
    });
  });
  it('--[==\\nbreak --]]--', function() {
    expect(parser.parse('--[==\nbreak --]]--')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": "[==",
          "raw": "--[=="
        },
        {
          "type": "Comment",
          "value": "]]--",
          "raw": "--]]--"
        }
      ]
    });
  });
  it('if true -- comment\\nthen end', function() {
    expect(parser.parse('if true -- comment\nthen end')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "Literal",
                "value": true,
                "raw": "true"
              },
              "body": []
            }
          ]
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": " comment",
          "raw": "-- comment"
        }
      ]
    });
  });
});
