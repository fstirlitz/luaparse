describe('statements', function() {
  it('break', function() {
    expect(parser.parse('break', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('::foo                                   -- FAIL', function() {
    expect(parser.parse('::foo', {wait:true}).end).to.throwError(/^\[1:5\] '::' expected near '<eof>'$/);
  });
  it('::foo::', function() {
    expect(parser.parse('::foo::', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "LabelStatement",
          "label": {
            "type": "Identifier",
            "name": "foo",
            "isLocal": true
          }
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('goto                                    -- FAIL', function() {
    expect(parser.parse('goto', {wait:true}).end).to.throwError(/^\[1:4\] <name> expected near '<eof>'$/);
  });
  it('goto foo', function() {
    expect(parser.parse('goto foo', { scope: true })).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "GotoStatement",
          "label": {
            "type": "Identifier",
            "name": "foo",
            "isLabel": false
          }
        }
      ],
      "comments": [],
      "globals": []
    });
  });
  it('nil                                     -- FAIL', function() {
    expect(parser.parse('nil', {wait:true}).end).to.throwError(/^\[1:0\] Unexpected symbol 'nil' near '<eof>'$/);
  });
});
