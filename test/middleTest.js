const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns and empty array[] when the parameter's length is less than 2 for ([1]).", () => {
        assert.strictEqual(assertArraysEqual(middle([1]), []));
    });

    it("returns and empty array[] when the parameter's length is equal to 2 for ([1, 2]).", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2]), []));
    });

    it("returns the middle element when parameter's length is an odd number for ([1, 2, 3]).", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
    });

    it("returns the 2 middle elements when parameter's length is an even number for [1, 2, 3, 4].", () => {
        assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
    });

});

/*assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);*/

