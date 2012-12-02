describe('API', function () {
  it('should have parse functions', function () {
    expect(parser).to.be.a('object');
    expect(parser.parse).to.be.a('function');
    expect(parser.write).to.be.a('function');
    expect(parser.end).to.be.a('function');
  });
  it('should produce empty tree on empty input', function() {
    expectObj(parser.parse(''), {
        type: 'Chunk'
      , body: []
      , comments: []
    });
  });
  it('should support waiting on input', function () {
    var parse = parser.parse({ wait: true });
    expectObj(parse.end('break'), {
        type: 'Chunk'
      , body: [{ type: 'BreakStatement' }]
      , comments: []
    });
  });
});

