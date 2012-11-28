var logger = exports.logger = function () {
  if (!util) return console.log(arguments);
  Array.prototype.slice.call(arguments).forEach(function(el) {
    console.log(util.inspect(el, false, null, true));
  });
};

exports.expectStatement = function(statement, obj, log) {
  var result = parser.parse(statement);
  var tree = {
      type: 'Chunk'
    , body: [obj]
  };
  expectTree(result, tree, log);
};

var expectTree = exports.expectTree = function(result, tree, log) {
  if (log) {
    console.log('\n\033[31m-------------------------------------------------------------\033[0m');
    console.log('\033[31mResult:\033[0m');
    logger(result);
    console.log('\n\033[31mExpected:\033[0m');
    logger(tree);
    console.log();
  }

  expect(result).to.deep.equal(tree);
};

var expectPrecedence = exports.expectPrecedence = function(nongrouped, grouped, log) {
  log = true;
  var result = parser.parse('while ' + nongrouped + 'do end');
  var tree = parser.parse('while ' + grouped + 'do end');
  if (log) {
    console.log('\n\033[31m-------------------------------------------------------------\033[0m');
    console.log('\033[31mResult:\033[0m');
    logger(result);
    console.log('\n\033[31mExpected:\033[0m');
    logger(tree);
    console.log();
  }

  expect(result).to.deep.equal(tree);
};
