const
vows = require('vows'),
assert = require('assert'),
fs = require('fs'),
memoizingStemmer = require('../porter').memoizingStemmer;

vows.describe('The memoizing stemmer')

.addBatch({
  "yields same results": {
    topic: function() {
      return memoizingStemmer('smurftastic');
    },

    "before memoization": function(err, firstResult) {
      assert(firstResult === 'smurftast');
    }, 

    "as it does": {
      topic: function(firstResult) {
        return [firstResult, memoizingStemmer('smurftastic')];
      },

      "after memoization": function(err, results) {
        assert(results[0] === results[1]);
      }
    }
  },
  "passes Dr Porter's test": function() {
    var vocabulary = fs.readFileSync('./input.txt').toString().trim().split('\n');
    var expected = fs.readFileSync('./output.txt').toString().trim().split('\n');

    for (var i=0; i<vocabulary.length; i++) {
      assert(memoizingStemmer(vocabulary[i]) === expected[i]);
    }
  }
})

.export(module);


