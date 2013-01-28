[![build status](https://secure.travis-ci.org/jedp/porter-stemmer.png)](http://travis-ci.org/jedp/porter-stemmer)
porter.js
=========

[Martin Porter's stemmer](http://tartarus.org/~martin/PorterStemmer/) wrapped
in CommonJS for use in node.js. 

Dr Porter explains the stemmer thus:

> The Porter stemming algorithm (or ‘Porter stemmer’) is a process for removing
> the commoner morphological and inflexional endings from words in English. Its
> main use is as part of a term normalisation process that is usually done when
> setting up Information Retrieval systems.

This is merely a wrapping of work done by others.   The initial javascript port
was done by "Andargor" with substantial revisions by Christopher McKenzie.  More
information is available on Porter's site via the link given above.

Installation
------------

For node.js, using [npm](http://npmjs.org/):

    npm install porter-stemmer

or git clone this repo.

Example
-------

    > var stemmer = require('porter-stemmer').stemmer
    > stemmer('Smurftastic')
    'Smurftast'

Test Suite
----------

I have included Dr Porter's sample input and output text in a test suite.

To verify:

    npm test
    



