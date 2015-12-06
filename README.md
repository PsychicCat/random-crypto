# crypto-random
A cryptographically secure PRNG for Node.js using crypto.randomBytes

[![Build Status](https://travis-ci.org/PsychicCat/random-crypto.svg?branch=master)](https://travis-ci.org/PsychicCat/random-crypto)

## install via NPM
    npm install crypto-random
    var random = require('crypto-random')

## Methods

### gen(max)
Generate a random number between 0 and max.

    random.gen(100) // => 88
    
### gen(min, max)
Generate a random number between min and max.

    random.gen(-40, 100) // => -20