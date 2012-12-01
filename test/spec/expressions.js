describe('Expressions', function() {
  describe('Types', function() {
    testTree("while true and true do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'LogicalExpression'
        , operator: 'and'
        , left: { type: 'Literal', value: true }
        , right: { type: 'Literal', value: true }
      }
      , body: []
    });
    testTree("while not true do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'UnaryExpression'
        , operator: 'not'
        , argument: { type: 'Literal' , value: true }
      }
      , body: []
    });
    testTree("while 1 > 2 do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'BinaryExpression'
        , operator: '>'
        , left: { type: 'Literal', value: '1' }
        , right: { type: 'Literal', value: '2' }
      }
      , body: []
    });
    testTree("while not not true do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'UnaryExpression'
        , operator: 'not'
        , argument: {
            type: 'UnaryExpression'
          , operator: 'not'
          , argument: { type: 'Literal', value: true }
        }
      }
      , body: []
    });
    testTree("while ( 1 + 1 ) > 2 do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'BinaryExpression'
        , operator: '>'
        , left: {
            type: 'BinaryExpression'
          , operator: '+'
          , left: { type: 'Literal', value: '1' }
          , right: { type: 'Literal', value: '1' }
        }
        , right: { type: 'Literal', value: '2' }
      }
      , body: []
    });
  });

  describe('Grouping', function() {
    testTree("while ( 1 + ( 1 * 2 ) / 2 ) > 2 do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'BinaryExpression'
        , operator: '>'
        , left: {
            type: 'BinaryExpression'
          , operator: '+'
          , left: { type: 'Literal', value: '1' }
          , right: {
              type: 'BinaryExpression'
            , operator: '/'
            , left: {
                type: 'BinaryExpression'
              , operator: '*'
              , left: { type: 'Literal', value: '1' }
              , right: { type: 'Literal', value: '2' }
            }
            , right: { type: 'Literal', value: '2' }
          }
        }
        , right: { type: 'Literal', value: '2' }
      }
      , body: []
    });

    testTree("while ( 1 + 1 * ( 2 / 2 ) ) > 2 do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'BinaryExpression'
        , operator: '>'
        , left: {
            type: 'BinaryExpression'
          , operator: '+'
          , left: { type: 'Literal', value: '1' }
          , right: {
              type: 'BinaryExpression'
            , operator: '*'
            , left: { type: 'Literal', value: '1' }
            , right: {
                type: 'BinaryExpression'
              , operator: '/'
              , left: { type: 'Literal', value: '2' }
              , right: { type: 'Literal', value: '2' }
            }
          }
        }
        , right: { type: 'Literal', value: '2' }
      }
      , body: []
    });
  });

  describe('Whitespace', function() {
    testPrecedence('1 + 1', '1 + 1');
    testPrecedence('(1 + 1)', '(1 + 1)');
    testPrecedence('(1+1)', '(1 + 1)');
    testPrecedence('(1+ 1)', '(1 + 1)');
    testPrecedence('(1 + 1)', '(1 + 1)');
    testPrecedence('( 1 + 1 )', '(1 + 1)');
    testPrecedence('  ( 1 + 1 )  ', '(1 + 1)');
  });

  describe('Precedence', function() {
    testPrecedence('1 + 1 * 2 > 3', '( 1 + ( 1 * 2 ) ) > 3');
    testPrecedence('1 < 2 and 2 < 1', '(1 < 2) and (2 < 1)');
    testPrecedence('1 / 2 + 4 * 2 > 8', '((1 / 2) + (4 * 2)) > 8');
    testPrecedence('2 < 1 == true', '(2 < 1) == true');
    testPrecedence('2 < 1 + 1 == true', '(2 < (1 + 1)) == true');
    testPrecedence('not 1 + 1', '(not 1) + 1');
    testPrecedence('not not 1 + 1', '(not (not (1)) + 1)');
    testPrecedence('1 + #1', '1 + (#1)');
  });

  describe('Left vs Right associative', function() {
    testPrecedence('2 ^ 2 ^ 3', '2 ^ (2 ^ 3)');
    testPrecedence('2 ^ 2 ^ 3 ^ 4', '2 ^ (2 ^ (3 ^ 4))');
    testPrecedence('2 ^ 2 ^ 3 ^ 4 + 1', '2 ^ (2 ^ (3 ^ 4)) + 1');
    testPrecedence('1 * 2 / 3', '(1 * 2) / 3');
  });
});

