var fs = require('fs');
var memoizingStemmer = require('../porter').memoizingStemmer;

process.chdir(__dirname);

exports['test Memoizing stemmer'] = function(test){
  // Check that the same input yields the same output
  // before and after memoization

  var first = memoizingStemmer('smurftastic');
  var second = memoizingStemmer('smurftastic');
  test.ok(first === second);
  test.done();
};

