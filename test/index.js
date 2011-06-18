var fs = require('fs');

fs.readdir(__dirname, function(err, files) {
  var suite = [];
  var reporter = require('nodeunit').reporters.default;

  files.forEach(function(file) {
    if (/^test.*\.js$/.exec(file)) {
      suite.push('test/'+file);
    }
  });

  reporter.run(suite);
});
