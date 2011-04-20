var fs = require('fs');
var stemmer = require('../porter').stemmer;

process.chdir(__dirname);

exports['test Porter stemmer'] = function(test){
  // check that the sample vocabulary given on 
  // http://tartarus.org/~martin/PorterStemmer/
  // yields the expected output when stemmed.

  var vocabulary = fs.readFileSync('./input.txt').toString().trim().split('\n');
  var expected = fs.readFileSync('./output.txt').toString().trim().split('\n');

  for (var i=0; i<vocabulary.length; i++) {
    test.equals(stemmer(vocabulary[i]), expected[i]);
  }

  test.done();
};

