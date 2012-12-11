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

  describe('TableConstructorExpression', function() {
    testTree("foo = { bar = 'baz' }", {
        type: 'AssignmentStatement'
      , variables: [{
          type: 'Identifier'
        , name : 'foo'
      }]
      , init: [{
          type: 'TableConstructorExpression'
        , fields: [{
            type: 'TableKeyString'
          , key: { type: 'Literal', value: 'bar' }
          , value: { type: 'Literal', value: 'baz' }
        }]
      }]
    });
    testTree("foo = { ['bar'] = 'baz' }", {
        type: 'AssignmentStatement'
      , variables: [{
          type: 'Identifier'
        , name : 'foo'
      }]
      , init: [{
          type: 'TableConstructorExpression'
        , fields: [{
            type: 'TableKey'
          , key: { type: 'Literal', value: 'bar' }
          , value: { type: 'Literal', value: 'baz' }
        }]
      }]
    });
    testTree("foo = { 'baz' }", {
        type: 'AssignmentStatement'
      , variables: [{
          type: 'Identifier'
        , name : 'foo'
      }]
      , init: [{
          type: 'TableConstructorExpression'
        , fields: [{
            type: 'TableValue'
          , value: { type: 'Literal', value: 'baz' }
        }]
      }]
    });
  });
});

