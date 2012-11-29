function logger() {
  if (!util) return console.log(arguments);
  Array.prototype.slice.call(arguments).forEach(function(el) {
    console.log(util.inspect(el, false, null, true));
  });
}

// Make it possible to only test one scenario.
function testIt(name, fn, debug) {
  if (debug) it.only(name, fn);
  else it(name, fn);
}

// Expect unparsed statement to equal tree (without chunk part).
function expectTree(statement, obj, debug) {
  var tree = {
      type: 'Chunk'
    , body: [obj]
  };
  var result = parser.parse(statement);
  if (debug) {
    logger('Result: ', result);
    logger('Expected: ', tree);
    if (require) {
      var diff = require('difflet')({ index: 2});
      logger('Diff: ');
      console.log(diff.compare(result, tree));
    }
  }

  expect(result).to.deep.equal(tree);
}

// Test if a tree (without chunk part) equals the unparsed statement.
function testTree(statement, obj, debug) {
  testIt(statement, function() {
    expectTree(statement, obj, debug);
  }, debug);
}


// Test if two statements render the same tree.
function testPrecedence(nongrouped, grouped, debug) {
  testIt(nongrouped, function() {
    var result = parser.parse('while ' + nongrouped + ' do end').body[0];
    var tree = parser.parse('while ' + grouped + ' do end').body[0];
    expect(result).to.deep.equal(tree);
  });
}

// Test an expression statement against its tree.
function testExpression(expression, tree, debug) {
  var result = parser.parse('while ' + expression + ' do end');

  testIt(expression, function() {
    expect(result.body[0].condition).to.deep.equal(tree);
  }, debug);
}

// Expose functions
exports.testTree = testTree;
exports.logger = logger;
exports.expectTree = expectTree;
exports.testPrecedence = testPrecedence;
exports.testExpression = testExpression;
