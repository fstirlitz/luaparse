describe('API', function () {
  it('should have parse functions', function () {
    expect(parser).to.be.a('object');
    expect(parser.parse).to.be.a('function');
    expect(parser.write).to.be.a('function');
    expect(parser.end).to.be.a('function');
  });
  it('should ignore comments if told to', function() {
    expect(parser.parse('--comment', { comments: false })).to.eql({
      "type": "Chunk",
      "body": []
    });
  });
  it('should produce empty tree on empty input', function() {
    expect(parser.parse('')).to.eql({
      "type": "Chunk",
      "body": [],
      "comments": []
    });
  });
  it('should support waiting on input', function () {
    var parse = parser.parse({ wait: true });
    expect(parse.end('break')).to.eql({
      "type": "Chunk",
      "body": [
        {
          "type": "BreakStatement"
        }
      ],
      "comments": []
    });
  });
});
