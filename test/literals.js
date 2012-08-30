if (typeof expect === 'undefined') {
  var expect = require('expect.js');
  return; // We only check this stuff in the browser
}

describe('Literals', function () {
  it('should detect 9 as decimal digit', function () {
    expect(isDecDigit(9)).to.be(true);
  });
  it('should not detect a as a decimal digit', function () {
    expect(isDecDigit('a')).to.be(false);
  });

  it('should instead detect a as hexadecimal', function () {
    expect(isHexDigit('a')).to.be(true);
  });
});
