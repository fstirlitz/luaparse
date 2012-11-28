describe('Literals', function () {
  describe('Numeric', function() {
    testExpression("1 + 1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: '1' }
      , right: { type: 'Literal', value: '1' }
    });

    testExpression("1 + 1e1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: '1' }
      , right: { type: 'Literal', value: '1e1' }
    });

    testExpression("1 + 1E1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: '1' }
      , right: { type: 'Literal', value: '1E1' }
    });

    testExpression("1 + 0xf", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: '1' }
      , right: { type: 'Literal', value: '0xf' }
    });

    testExpression("1 + 0xfp+1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: '1' }
      , right: { type: 'Literal', value: '0xfp+1' }
    });

    testExpression("1 + 0xfP-1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: '1' }
      , right: { type: 'Literal', value: '0xfP-1' }
    });

    testExpression("1 + 0xFp+10", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: '1' }
      , right: { type: 'Literal', value: '0xFp+10' }
    });
  });
});
