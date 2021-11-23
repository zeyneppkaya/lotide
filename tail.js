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

const tail = function(argument) {
  let arr = [];
  if (argument.length > 1) {
    for (let i = 1; i < argument.length; i++) {
      arr.push(argument[i]);
    }
  }
  console.log(arr);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);