describe('comments', function() {
  it('-- comment', function() {
    expect(parser.parse('-- comment')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": " comment"
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
          "value": " comment"
        },
        {
          "type": "Comment",
          "value": " comment"
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
          "value": "coment"
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
          "value": " comment"
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
          "value": "comment"
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
          "value": "comment"
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
          "value": "comment"
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
          "value": "comment"
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
          "value": "comment\n--[=[sub]=]--\n"
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
          "value": "comment\nline two"
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
          "value": "comment\nline two\n"
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
          "value": "[=="
        },
        {
          "type": "Comment",
          "value": "]]--"
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
              "condition": {
                "type": "Literal",
                "value": true
              },
              "body": []
            }
          ]
        }
      ],
      "comments": [
        {
          "type": "Comment",
          "value": " comment"
        }
      ]
    });
  });
});
