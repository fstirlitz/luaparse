describe('Comments', function() {
  it('-- comment', function() {
    expectObj(parser.parse('-- comment'), {
        type: 'Chunk'
      , body: []
      , comments: [
          { type: 'Comment', value: ' comment' }
      ]
    });
  });
  it('--comment', function() {
    expectObj(parser.parse('--comment'), {
        type: 'Chunk'
      , body: []
      , comments: [
          { type: 'Comment', value: 'comment' }
      ]
    });
  });
  it('-- comment\\nbreak', function() {
    expectObj(parser.parse('-- comment\nbreak'), {
        type: 'Chunk'
      , body: [{ type: 'BreakStatement' }]
      , comments: [
          { type: 'Comment', value: ' comment' }
      ]
    });
  });
  it('break--comment', function() {
    expectObj(parser.parse('break--comment'), {
        type: 'Chunk'
      , body: [{ type: 'BreakStatement' }]
      , comments: [
          { type: 'Comment', value: 'comment' }
      ]
    });
  });
  it('--[[comment]]--', function() {
    expectObj(parser.parse('--[[comment]]--'), {
        type: 'Chunk'
      , body: []
      , comments: [
          { type: 'Comment', value: 'comment' }
      ]
    });
  });
  it('--[[comment]]--break', function() {
    expectObj(parser.parse('--[[comment]]--break'), {
        type: 'Chunk'
      , body: [{ type: 'BreakStatement' }]
      , comments: [
          { type: 'Comment', value: 'comment' }
      ]
    });
  });
  it('--[=[comment]=]--break', function() {
    expectObj(parser.parse('--[=[comment]=]--break'), {
        type: 'Chunk'
      , body: [{ type: 'BreakStatement' }]
      , comments: [
          { type: 'Comment', value: 'comment' }
      ]
    });
  });

  it('--[===[comment\\n--[=[sub]=]--]===]--break', function() {
    expectObj(parser.parse('--[===[comment\n--[=[sub]=]--]===]--break'), {
        type: 'Chunk'
      , body: [{ type: 'BreakStatement' }]
      , comments: [
          { type: 'Comment', value: 'comment\n--[=[sub]=]--' }
      ]
    });
  });

  it('--[[comment\\nline two]]--', function() {
    expectObj(parser.parse('--[[comment\nline two]]--'), {
        type: 'Chunk'
      , body: []
      , comments: [
          { type: 'Comment', value: 'comment\nline two' }
      ]
    });
  });
  it('--[[\\ncomment\\nline two]]--', function() {
    expectObj(parser.parse('--[[\ncomment\nline two]]--'), {
        type: 'Chunk'
      , body: []
      , comments: [
          { type: 'Comment', value: 'comment\nline two' }
      ]
    });
  });
});
