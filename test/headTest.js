const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
        assert.strictEqual(head([1, 2, 3]), 1);
    });
    
    it("returns '5' for ['5']", () => {
        assert.strictEqual(head(['5']), '5'); 
    });
    
    it("returns 8 for [8, 6, 7]", () => {
        assert.strictEqual(head([8, 6, 7]), 8); 
    });
    
    it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
    });

    it("returns undefined if nothing is passed on", () => {
        assert.strictEqual(head([]), undefined); 
    });
    
});

/*assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");*/