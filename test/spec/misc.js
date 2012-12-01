describe('API', function () {
  it('should have a parse function', function () {
    expect(parser).to.be.a('object');
    expect(parser.parse).to.be.a('function');
  });
  it('should not crash on only whitespace body', function() {
    expectObj(parser.parse(' '), {
        type: 'Chunk'
      , body: []
      , comments: []
    });
  });
});

