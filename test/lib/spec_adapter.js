(function(root) {

  function specAdapter(socket) {
    var testResults = [], id = 0;
    root.luaparse.testSuite.on('all', function(event) {
      var test;
    });
  }

  root.specAdapter = specAdapter;
}(this));
