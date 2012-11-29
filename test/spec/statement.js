describe('Statements', function() {
  it('EmptyStatement', function() {
    expectTree(";", {
        type: 'EmptyStatement'
    });
  });
  it('BreakStatement', function() {
    expectTree('break', {
        type: 'BreakStatement'
    });
  });
  it('GotoStatement', function() {
    expectTree('goto test', {
        type: 'GotoStatement'
      , label: {
          type: 'Identifier'
        , name: 'test'
      }
    });
  });
  it('DoStatement', function() {
    expectTree("do end", {
        type: 'DoStatement'
      , body: []
    });
  });
  it('WhileStatement', function() {
    expectTree("while true do end", {
        type: 'WhileStatement'
      , condition: {
          type: 'Literal'
        , value: true
      }
      , body: []
    });
  });
  it('FunctionDeclaration', function() {
    expectTree("function Test () end", {
        type: 'FunctionDeclaration'
      , identifier: {
          type: 'Identifier'
        , name: 'Test'
      }
      , vararg: false
      , parameters: []
      , body: []
    });
  });
  // it('IfStatement', function() {
  //   expectTree("if true then end", {
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

describe('Function statements', function() {
  testTree("function Test (foo, bar) end", {
      type: 'FunctionDeclaration'
    , identifier: {
        type: 'Identifier'
      , name: 'Test'
    }
    , vararg: false
    , parameters: [
        { type: 'Identifier', name: 'foo' }
      , { type: 'Identifier', name: 'bar' }
    ]
    , body: []
  });

  testTree("function Test (foo, ...) end", {
      type: 'FunctionDeclaration'
    , identifier: {
        type: 'Identifier'
      , name: 'Test'
    }
    , vararg: true
    , parameters: [
        { type: 'Identifier', name: 'foo' }
    ]
    , body: []
  });

  testTree("function Test.test() end", {
      type: 'FunctionDeclaration'
    , identifier: {
        type: 'MemberExpression'
      , base: {
          type: 'Identifier'
        , name: 'Test'
      }
      , indexer: '.'
      , identifier: { type: 'Identifier', name: 'test' }
    }
    , vararg: false
    , parameters: []
    , body: []
  });

  testTree("function Test:hurr() end", {
      type: 'FunctionDeclaration'
    , identifier: {
        type: 'MemberExpression'
      , base: {
          type: 'Identifier'
        , name: 'Test'
      }
      , indexer: ':'
      , identifier: { type: 'Identifier', name: 'hurr' }
    }
    , vararg: false
    , parameters: []
    , body: []
  });

  testTree("function Test.test:hurr() end", {
      type: 'FunctionDeclaration'
    , identifier: {
        type: 'MemberExpression'
      , base: {
          type: 'MemberExpression'
        , base: { type: 'Identifier', name: 'Test' }
        , indexer: '.'
        , identifier: { type: 'Identifier', name: 'test' }
      }
      , indexer: ':'
      , identifier: { type: 'Identifier', name: 'hurr' }
    }
    , vararg: false
    , parameters: []
    , body: []
  });
});

// describe('IfStatement clauses', function() {
//   it('Else', function() {
//     expectTree("if true then else end", {
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
//     expectTree("if true then elseif false then end", {
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
//     expectTree("if true then elseif false then else end", {
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
