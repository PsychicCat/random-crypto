var crypto = require('crypto');

/* note: this assumes your range is less than 4294967296 (the maximum integer value of 4 bytes (e.g. 2^32)) */

var random = {
    gen: function (min, max) {
        if(!max){
            max = min;
            min = 0;
        }

        //generate a buffer of 2 random bytes
        var buf = crypto.randomBytes(4);

        //convert bytes to hex string and then parse to integer
        var num = parseInt(buf.toString('hex'), 16);

        //define range
        var range = max - min + 1;

        return (num % range) + min;
    }
};

module.exports = random;