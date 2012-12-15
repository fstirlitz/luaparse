describe('statements', function() {
  it('break', function() {
    expect(parser.parse('break')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": []
    });
  });
  it('::foo                                   -- FAIL', function() {
    expect(parser.parse('::foo', {wait:true}).end).throws("[1:5] '::' expected near '<eof>'");
  });
  it('::foo::', function() {
    expect(parser.parse('::foo::')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "LabelStatement",
          "label": {
            "type": "Identifier",
            "name": "foo"
          }
        }
      ],
      "comments": []
    });
  });
  it('goto                                    -- FAIL', function() {
    expect(parser.parse('goto', {wait:true}).end).throws("[1:4] <name> expected near '<eof>'");
  });
  it('goto foo', function() {
    expect(parser.parse('goto foo')).to.deep.equal({
      "type": "Chunk",
      "body": [
        {
          "type": "GotoStatement",
          "label": {
            "type": "Identifier",
            "name": "foo"
          }
        }
      ],
      "comments": []
    });
  });
});


