var expectStatement = helpers.expectStatement;
var expectTree = helpers.expectTree;
var expectPrecedence = helpers.expectPrecedence;
var logger = helpers.logger;

var testPrecedence = function(nongrouped, grouped, debug) {
  var tree = parser.parse('while ' + grouped + ' do end');
  testExpression(nongrouped, tree.body[0].condition, debug);
};
var testExpression = function(expression, tree, debug) {
  var result = parser.parse('while ' + expression + ' do end');

  if (debug) {
    it.only(expression, function() {
      expectTree(result.body[0].condition, tree, true);
    });
  } else {
    it(expression, function() {
      expectTree(result.body[0].condition, tree, false);
    });
  }
};

describe('Statements', function() {
  it('EmptyStatement', function() {
    expectStatement(";", {
        type: 'EmptyStatement'
    });
  });
  it('BreakStatement', function() {
    expectStatement('break', {
        type: 'BreakStatement'
    });
  });
  it('GotoStatement', function() {
    expectStatement('goto test', {
        type: 'GotoStatement'
      , label: {
          type: 'Identifier'
        , name: 'test'
      }
    });
  });
  it('DoStatement', function() {
    expectStatement("do end", {
        type: 'DoStatement'
      , body: []
    });
  });
  it('WhileStatement', function() {
    expectStatement("while true do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'Literal'
        , value: true
      }
      , body: []
    });
  });
  // it('IfStatement', function() {
  //   expectStatement("if true then end", {
  //       type: 'IfStatement'
  //     , clauses: [{
  //         condition: {
  //           type: 'Literal'
  //         , value: true
  //       }
  //       , body: []
  //     }]
  //   });
  // });
});

// describe('IfStatement clauses', function() {
//   it('Else', function() {
//     expectStatement("if true then else end", {
//         type: 'IfStatement'
//       , clauses: [
//           {
//             condition: { type: 'Literal', value: true }
//           , body: []
//         }
//         , {
//             condition: null
//           , body: []
//         }
//       ]
//     });
//   });
//   it('Elseif', function() {
//     expectStatement("if true then elseif false then end", {
//         type: 'IfStatement'
//       , clauses: [
//           {
//             condition: { type: 'Literal', value: true }
//           , body: []
//         }
//         , {
//             condition: { type: 'Literal', value: false }
//           , body: []
//         }
//       ]
//     });
//   });
//   it('Elseif Else', function() {
//     expectStatement("if true then elseif false then else end", {
//         type: 'IfStatement'
//       , clauses: [
//           {
//             condition: { type: 'Literal', value: true }
//           , body: []
//         }
//         , {
//             condition: { type: 'Literal', value: false }
//           , body: []
//         }
//         , {
//             condition: null
//           , body: []
//         }
//       ]
//     });
//   });
// });
//
describe('Expressions', function() {
  it('LogicalExpression', function() {
    expectStatement("while true and true do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'LogicalExpression'
        , operator: 'and'
        , left: { type: 'Literal', value: true }
        , right: { type: 'Literal', value: true }
      }
      , body: []
    });
  });
  it('UnaryExpression', function() {
    expectStatement("while not true do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'UnaryExpression'
        , operator: 'not'
        , argument: { type: 'Literal' , value: true }
      }
      , body: []
    });
  });
  it('BinaryExpression', function() {
    expectStatement("while 1 > 2 do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'BinaryExpression'
        , operator: '>'
        , left: { type: 'Literal', value: '1' }
        , right: { type: 'Literal', value: '2' }
      }
      , body: []
    });
  });
  it('Nested UnaryExpression', function() {
    expectStatement("while not not true do end", {
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
  });
  it('Nested BinaryExpression', function() {
    expectStatement("while ( 1 + 1 ) > 2 do end", {
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

  it('Grouping', function() {
    expectTree(parser.parse("while ( 1 + ( 1 * 2 ) / 2 ) > 2 do end").body[0].condition, {
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
    });
  });

  it('Grouping #2', function() {
    expectTree(parser.parse("while ( 1 + 1 * ( 2 / 2 ) ) > 2 do end").body[0].condition, {
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
    });
  });
});

describe('Expression whitespace', function() {
  testPrecedence('1 + 1', '1 + 1');
  testPrecedence('(1 + 1)', '(1 + 1)');
  testPrecedence('(1+1)', '(1 + 1)');
  testPrecedence('(1+ 1)', '(1 + 1)');
  testPrecedence('(1 + 1)', '(1 + 1)');
  testPrecedence('( 1 + 1 )', '(1 + 1)');
  testPrecedence('  ( 1 + 1 )  ', '(1 + 1)');
});

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

describe('Precedence', function() {
  testPrecedence('(1 + 1 * 2) > 2', '( 1 + ( 1 * 2 ) ) > 2');
  testPrecedence('(1 / 2 + 4 * 2) > 2', '((1 / 2) + (4 * 2)) > 2');
  testPrecedence('(1 / 2 - 4 * 2 * 2) > 2', '((1 / 2) - ((4 * 2) * 2 )) > 2');
  testPrecedence('2 < 1 == true', '(2 < 1) == true');
  testPrecedence('2 < 1 + 1 == true', '(2 < 1 + 1) == true');
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
