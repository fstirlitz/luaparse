describe('Literals', function () {
  describe('Numeric', function() {
    testExpression("1 + 10", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1 }
      , right: { type: 'Literal', value: 10 }
    });

    testExpression(".1 + 10", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 0.1 }
      , right: { type: 'Literal', value: 10 }
    });

    testExpression("1.1 + 10", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1.1 }
      , right: { type: 'Literal', value: 10 }
    });

    testExpression("1 + 10.1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1 }
      , right: { type: 'Literal', value: 10.1 }
    });

    testExpression("1 + 1e1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1 }
      , right: { type: 'Literal', value: 10 }
    });

    testExpression("1 + 1E1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1 }
      , right: { type: 'Literal', value: 10 }
    });

    testExpression("1 + 0xf", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1 }
      , right: { type: 'Literal', value: 15 }
    });

    testExpression("1 + 0xfp+1", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1 }
      , right: { type: 'Literal', value: 30 }
    });

    testExpression("1 + 0xFP-2", {
        type: 'BinaryExpression'
      , operator: '+'
      , left: { type: 'Literal', value: 1 }
      , right: { type: 'Literal', value: 3.75 }
    });

  });
});
