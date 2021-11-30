const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe("#eqArrays", () => {
    it("returns true if [1, 2, 3] and [1, 2, 3] arrays are the same.", () => {
        assert.strictEqual((assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)));
    });
    
    it("returns false if [1, 2, 3] and [3, 2, 1] arrays are not the same.", () => {
        assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true)); 
    });
    
    it("returns true if ['1', '2', '3'] and ['1', '2', '3'] arrays are the same.", () => {
        assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); 
    });
    
    it("returns false if ['1', '2', '3'] and ['1', '2', 3] arrays are not the same.", () => {
        assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true)); 
    });
    
});

/*assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);*/
