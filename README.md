porter.js
=========

[Martin Porter's stemmer](http://tartarus.org/~martin/PorterStemmer/) wrapped
in CommonJS for use in node.js. 

Includes a `nodeunit` test case to verify that the sample input vocabulary
Porter provides is stemmed to the expected output.

This is merely a wrapping of the javascript port done by "Andargor" with
subsequent revisions by Christopher McKenzie.  More information is available on
Porter's site via the link given above.

Installation
------------

`npm install porter-stemmer` 

or git clone this repo.

Example
-------

    > var stemmer = require('./porter').stemmer
    > stemmer('Smurftastic')
    'Smurftast'

