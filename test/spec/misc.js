describe('API', function () {
  it('should have a parse function', function () {
    expect(parser).to.be.a('object');
    expect(parser.parse).to.be.a('function');
  });
});

