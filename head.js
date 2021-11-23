const assertEqual = function(actual, expected) {
  if (actual === undefined && expected === undefined) {
    console.log(undefined);
  } else if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(argumentOne, argumentTwo) {
  if (argumentOne.length > 1) {
    return argumentOne[0];
  } else if (argumentOne.length === 0) {
    return undefined;
  } else {
    return argumentOne;
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
