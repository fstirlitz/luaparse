describe('API', function () {
  it('should have a parse function', function () {
    expect(luaparse).to.be.a('object');
    expect(luaparse.parse).to.be.a('function');
  });
});

