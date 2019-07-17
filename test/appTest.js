const assert = require('chai').assert;
const findMissingLetter = require('../app').findMissingLetter;

describe('App',function() {
    // it('Simple Functionality', function() {
    //     assert.deepEqual(splitInteger(10,1), [10]);
    //     assert.deepEqual(splitInteger(2,2), [1,1]);
    //     assert.deepEqual(splitInteger(20,5), [4,4,4,4,4]);
    // });

    //
    it('Should Handle Single Swap', function() {
        assert.equal(minimumSwaps([3,1,2]), 1);
    });
    it('Should Handle Multiple Swaps', function() {
        assert.equal(minimumSwaps([3,1,2,4]), 2);
    });
})