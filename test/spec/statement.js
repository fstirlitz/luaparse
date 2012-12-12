describe('Statements', function() {
  it('BreakStatement', function() {
    expectTree('break', {
        type: 'BreakStatement'
    });
  });
  it('LabelStatement', function() {
    expectTree('::test::', {
        type: 'LabelStatement'
      , label: {
          type: 'Identifier'
        , name: 'test'
      }
    });
  });
  it('ReturnStatement', function() {
    expectTree('return true;', {
        type: 'ReturnStatement'
      , 'arguments': [{
          type: 'Literal'
        , value: true
      }]
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
  it('RepeatStatement', function() {
    expectTree("repeat until false", {
        type: 'RepeatStatement'
      , condition: {
          type: 'Literal'
        , value: false
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
      , local: false
      , parameters: []
      , body: []
    });
  });
  it('IfStatement', function() {
    expectTree("if true then end", {
        type: 'IfStatement'
      , clauses: [{
          condition: {
            type: 'Literal'
          , value: true
        }
        , body: []
      }]
    });
  });
  it('ForNumericStatement', function() {
    expectTree("for i = 0, 3, 0.5 do end", {
        type: 'ForNumericStatement'
      , variable: { type: 'Identifier', name: 'i' }
      , start: { type: 'Literal', value: 0 }
      , end: { type: 'Literal', value: 3 }
      , step: { type: 'Literal', value: 0.5 }
      , body: []
    });
  });

  it('ForGenericStatement', function() {
    expectTree("for i in pairs(days) do end", {
        type: 'ForGenericStatement'
      , variables: [{ type: 'Identifier', name: 'i' }]
      , iterators: [{
          type: 'CallExpression'
        , base: { type: 'Identifier', name: 'pairs' }
        , 'arguments': [{ type: 'Identifier', name: 'days' }]
      }]
      , body: []
    });
  });

  it('LocalStatement', function() {
    expectTree("local var = 12", {
        type: 'LocalStatement'
      , variables: [{ type: 'Identifier', name: 'var' }]
      , init: [{ type: 'Literal', value: 12 }]
    });
  });

  it('CallStatement', function() {
    expectTree("foo(bar)", {
        type: 'CallStatement'
      , expression: {
          type: 'CallExpression'
        , base: {
            type: 'Identifier'
          , name: 'foo'
        }
        , 'arguments': [{ type: 'Identifier', name: 'bar' }]
      }
    });
  });

  it('AssignmentStatement', function() {
    expectTree("foo = bar", {
        type: 'AssignmentStatement'
      , variables: [{ type: 'Identifier', name: 'foo' }]
      , init: [{ type: 'Identifier', name: 'bar' }]
    });
  });

  describe('LocalStatement', function() {

    testTree("local foo, bar = 12, 13", {
        type: 'LocalStatement'
      , variables: [
          { type: 'Identifier', name: 'foo' }
        , { type: 'Identifier', name: 'bar' }
      ]
      , init: [
          { type: 'Literal', value: 12 }
        , { type: 'Literal', value: 13 }
      ]
    });

    testTree("local foo, bar = 12", {
        type: 'LocalStatement'
      , variables: [
          { type: 'Identifier', name: 'foo' }
        , { type: 'Identifier', name: 'bar' }
      ]
      , init: [
          { type: 'Literal', value: 12 }
      ]
    });
  });

  describe('FunctionDeclaration', function() {
    testTree("function Test (foo, bar) end", {
        type: 'FunctionDeclaration'
      , identifier: {
          type: 'Identifier'
        , name: 'Test'
      }
      , vararg: false
      , local: false
      , parameters: [
          { type: 'Identifier', name: 'foo' }
        , { type: 'Identifier', name: 'bar' }
      ]
      , body: []
    });

    testTree("local function Test (foo, bar) end", {
        type: 'FunctionDeclaration'
      , identifier: {
          type: 'Identifier'
        , name: 'Test'
      }
      , vararg: false
      , local: true
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
      , local: false
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
      , local: false
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
      , local: false
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
      , local: false
      , parameters: []
      , body: []
    });

    testTree("function Test.test.foo:hurr() end", {
        type: 'FunctionDeclaration'
      , identifier: {
          type: 'MemberExpression'
        , indexer: ':'
        , identifier: { type: 'Identifier', name: 'hurr' }
        , base: {
            type: 'MemberExpression'
          , identifier: { type: 'Identifier', name: 'foo' }
          , indexer: '.'
          , base: {
              type: 'MemberExpression'
            , indexer: '.'
            , identifier: { type: 'Identifier', name: 'test' }
            , base: { type: 'Identifier', name: 'Test' }
          }
        }
      }
      , vararg: false
      , local: false
      , parameters: []
      , body: []
    });
  });

  describe('IfStatement', function() {
    testTree("if true then else end", {
        type: 'IfStatement'
      , clauses: [
          { condition: { type: 'Literal', value: true }, body: [] }
        , { condition: null, body: [] }
      ]
    });
    testTree("if true then elseif false then end", {
        type: 'IfStatement'
      , clauses: [
          { condition: { type: 'Literal', value: true }, body: [] }
        , { condition: { type: 'Literal', value: false }, body: [] }
      ]
    });
    testTree("if true then elseif false then else end", {
        type: 'IfStatement'
      , clauses: [
          { condition: { type: 'Literal', value: true }, body: [] }
        , { condition: { type: 'Literal', value: false }, body: [] }
        , { condition: null, body: [] }
      ]
    });
    testTree("if true then elseif false then elseif false then end", {
        type: 'IfStatement'
      , clauses: [
          { condition: { type: 'Literal', value: true }, body: [] }
        , { condition: { type: 'Literal', value: false }, body: [] }
        , { condition: { type: 'Literal', value: false }, body: [] }
      ]
    });
  });

  describe('ReturnStatement', function() {
    testTree('return', {
        type: 'ReturnStatement'
      , 'arguments': []
    });

    testTree('return;', {
        type: 'ReturnStatement'
      , 'arguments': []
    });

    testTree('return true;', {
        type: 'ReturnStatement'
      , 'arguments': [{
          type: 'Literal'
        , value: true
      }]
    });

    testTree('return true, false', {
        type: 'ReturnStatement'
      , 'arguments': [
          { type: 'Literal', value: true }
        , { type: 'Literal', value: false }
      ]
    });

  });

  describe('ForStatement', function() {

    testTree("for i = 0, 3 do end", {
        type: 'ForNumericStatement'
      , variable: { type: 'Identifier', name: 'i' }
      , start: { type: 'Literal', value: 0 }
      , end: { type: 'Literal', value: 3 }
      , step: null
      , body: []
    });

    testTree("for i, j in ipairs(days) do end", {
        type: 'ForGenericStatement'
      , variables: [
          { type: 'Identifier', name: 'i' }
        , { type: 'Identifier', name: 'j' }
      ]
      , iterators: [{
          type: 'CallExpression'
        , base: { type: 'Identifier', name: 'ipairs' }
        , 'arguments': [{ type: 'Identifier', name: 'days' }]
      }]
      , body: []
    });
  });
});
