if (typeof expect === 'undefined') {
  var expect = require('expect.js');
  return;
}

describe('Keywords', function () {
  it('should know function as a keyword', function () {
    expect(isKeyword('function')).to.be(true);
  });

  it('should not know class as a keyword', function () {
    expect(isKeyword('class')).to.be(false);
  });
});
