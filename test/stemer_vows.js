const
vows = require('vows'),
assert = require('assert'),
fs = require('fs'),
stemmer = require('../porter').stemmer;

process.chdir(__dirname);

vows.describe('The Porter stemmer')

.addBatch({
  "passes Dr Porter's test": function() {
    var vocabulary = fs.readFileSync('./input.txt').toString().trim().split('\n');
    var expected = fs.readFileSync('./output.txt').toString().trim().split('\n');

    for (var i=0; i<vocabulary.length; i++) {
      assert(stemmer(vocabulary[i]) === expected[i]);
    }
  }
})

.export(module);

