(function(root) {

  function specAdapter(socket) {
    var testResults = [], id = 0;
    root.luaparse.testSuite.on('all', function(event) {
      var test;
      switch (event.type) {
        case 'assertion':
        case 'failure':
          var isSuccess = (event.type === 'assertion');
          test = {
              passed: isSuccess ? 1 : 0
            , failed: isSuccess ? 0 : 1
            , total: 1
            , id: id++
            , name: event.message
            , items: []
          };
          if (!isSuccess) {
            test.items.push({
                passed: false
              , message: 'Expected ' + root.Newton.stringify(event.expected) + ' to match ' + root.Newton.stringify(event.actual)
            });
          }
          testResults.push(test);
          root.Testem.emit('test-result', test);
          break;
        case 'complete':
          root.Testem.emit('all-test-results', {
              failed: this.failures
            , total: this.assertions
            , tests: []
          });
          break;
        case 'start':
          root.Testem.emit('tests-start');
          break;
        case 'teardown':
          break;
        case 'setup':
          break;
      }
    });
  }

  root.specAdapter = specAdapter;
}(this));
