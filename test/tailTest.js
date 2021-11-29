const words = ["Yo Yo", "Lighthouse", "Labs"];

const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
    it("returns ['Lighthouse, Labs'] from ['Yo Yo', 'Lighthouse', 'Labs'].", () => {
        assert.strictEqual(assertArraysEqual(tail(words), ['Lighthouse', 'Labs']));
    });
    
    it("returns an empty array [] if an empty array is passed on.", () => {
        assert.strictEqual(assertArraysEqual([],[])); 
    });
      
});

/*assertArraysEqual(tail(words), ['Lighthouse', 'Labs']);
assertArraysEqual([],[]);*/