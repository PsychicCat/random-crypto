var random = require('../index');
var chai = require('chai');
var expect = chai.expect;

describe('random', function() {
    it('generates a random number from 0 to max', function() {
        expect(random.gen(10000)).to.be.within(0, 10000);
    });

    it('generates a random number in a positive range', function() {
        expect(random.gen(0, 100)).to.be.within(0, 100);
    });

    it('generates a random number in a range with one negative number', function(){
        expect(random.gen(-100, 100)).to.be.within(-100, 100);
    });

    it('generates a random number in a range with both negative numbers', function(){
        expect(random.gen(-10000, -500)).to.be.within(-10000, -500);
    });

    it('distributes numbers evenly', function() {
        var times = 100000,
            t = times,
            range = 100,
            ratio = range / times,
            occur = {};

        while(t--){
            num = random.gen(range);
            occur[num] = occur[num] || 0;
            occur[num]++;
        }

        for (num in occur) {
            expect(occur[num] / times).to.be.closeTo(ratio, 0.01);
        }
    });
});

