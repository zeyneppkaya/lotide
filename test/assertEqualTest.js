const assert = require('chai').assert;
const assertEqual  = require('../assertEqual');

describe("#assertEqual", () => {
  it("should return false if actual and expected are not the same", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("it should return true if 5 is equal to 5", () => {
    assert.strictEqual(assertEqual(5, 5)); 
  });

});

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(5, 5);