describe('comments', function() {
  it('-- comment', function() {
    expect(parser.parse('-- comment', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": " comment",
          "raw": "-- comment"
        }
      ],
      "globals": []
    });
  });
  it('-- comment\\n-- comment', function() {
    expect(parser.parse('-- comment\n-- comment', { scope: true })).to.eql({
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
      ],
      "globals": []
    });
  });
  it('--coment', function() {
    expect(parser.parse('--coment', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "coment",
          "raw": "--coment"
        }
      ],
      "globals": []
    });
  });
  it('-- comment\\nbreak', function() {
    expect(parser.parse('-- comment\nbreak', { scope: true })).to.eql({
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
      ],
      "globals": []
    });
  });
  it('break--comment', function() {
    expect(parser.parse('break--comment', { scope: true })).to.eql({
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
      ],
      "globals": []
    });
  });
  it('--[[comment]]', function() {
    expect(parser.parse('--[[comment]]', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment",
          "raw": "--[[comment]]"
        }
      ],
      "globals": []
    });
  });
  it('if true--[[comment]]then end', function() {
    expect(parser.parse('if true--[[comment]]then end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "BooleanLiteral",
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
          "value": "comment",
          "raw": "--[[comment]]"
        }
      ],
      "globals": []
    });
  });
  it('--[=[comment]=]break', function() {
    expect(parser.parse('--[=[comment]=]break', { scope: true })).to.eql({
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
          "raw": "--[=[comment]=]"
        }
      ],
      "globals": []
    });
  });
  it('--[===[comment\\n--[=[sub]=]--\\n]===]break', function() {
    expect(parser.parse('--[===[comment\n--[=[sub]=]--\n]===]break', { scope: true })).to.eql({
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
          "raw": "--[===[comment\n--[=[sub]=]--\n]===]"
        }
      ],
      "globals": []
    });
  });
  it('--[[comment\\nline two]]', function() {
    expect(parser.parse('--[[comment\nline two]]', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\nline two",
          "raw": "--[[comment\nline two]]"
        }
      ],
      "globals": []
    });
  });
  it('--[[\\ncomment\\nline two\\n]]', function() {
    expect(parser.parse('--[[\ncomment\nline two\n]]', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": [
        {
          "type": "Comment",
          "value": "comment\nline two\n",
          "raw": "--[[\ncomment\nline two\n]]"
        }
      ],
      "globals": []
    });
  });
  it('--[==\\nbreak --]]', function() {
    expect(parser.parse('--[==\nbreak --]]', { scope: true })).to.eql({
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
          "value": "]]",
          "raw": "--]]"
        }
      ],
      "globals": []
    });
  });
  it('if true -- comment\\nthen end', function() {
    expect(parser.parse('if true -- comment\nthen end', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "IfStatement",
          "clauses": [
            {
              "type": "IfClause",
              "condition": {
                "type": "BooleanLiteral",
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
      ],
      "globals": []
    });
  });
});
