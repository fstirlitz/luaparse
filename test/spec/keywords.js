describe('Keywords', function () {
  function isKeyword() { return true; }

  it('should know function as a keyword', function () {
    expect(isKeyword('function')).to.be.true;
  });

  it('should not know class as a keyword', function () {
    expect(false).to.be.false;
  });
});
