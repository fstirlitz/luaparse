describe('comments', function() {
  it('-- comment', function() {
    expect(parser.parse('-- comment')).to.deep.equal({
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
  it('--coment', function() {
    expect(parser.parse('--coment')).to.deep.equal({
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
    expect(parser.parse('-- comment\nbreak')).to.deep.equal({
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
    expect(parser.parse('break--comment')).to.deep.equal({
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
    expect(parser.parse('--[[comment]]--')).to.deep.equal({
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
    expect(parser.parse('--[[comment]]--break')).to.deep.equal({
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
    expect(parser.parse('--[=[comment]=]--break')).to.deep.equal({
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
    expect(parser.parse('--[===[comment\n--[=[sub]=]--\n]===]--break')).to.deep.equal({
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
    expect(parser.parse('--[[comment\nline two]]--')).to.deep.equal({
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
    expect(parser.parse('--[[\ncomment\nline two\n]]--')).to.deep.equal({
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
  it('if true -- comment\\nthen end', function() {
    expect(parser.parse('if true -- comment\nthen end')).to.deep.equal({
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


