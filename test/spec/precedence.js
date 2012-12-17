describe('Precedence', function() {

  function itEquals(test, expected) {
    it(test + ' should equal ' + expected, function() {
      var test = parser.parse('a = ' + test);
      var expected = parser.parse('a = ' + expected);
      expect(test).to.eql(expected);
    });
  }

  itEquals('2^3^2', '2^(3^2)');
  itEquals('2^3*4', '(2^3)*4');
  itEquals('2^2^3', '2^(2^3)');
  itEquals('2^2^3^4', '2^(2^(3^4))');
  itEquals('2^2^3^4+1', '2^(2^(3^4))+1');
  itEquals('1*2/3', '(1*2)/3');
  itEquals('1 + 1 * 2 > 3', '( 1 + ( 1 * 2 ) ) > 3');
  itEquals('1 < 2 and 2 < 1', '(1 < 2) and (2 < 1)');
  itEquals('1 / 2 + 4 * 2 > 8', '((1 / 2) + (4 * 2)) > 8');
  itEquals('2 < 1 == true', '(2 < 1) == true');
  itEquals('2 < 1 + 1 == true', '(2 < (1 + 1)) == true');
  itEquals('not 1 + 1', '(not 1) + 1');
  itEquals('not not 1 + 1', '(not (not (1)) + 1)');
  itEquals('1 + #1', '1 + (#1)');
  itEquals('-x^2', '-(x^2)');
});
