const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else if (i === arr1.length - 1 && arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
        return true;
      }
    }
  }
};

const letterPositions = function(sentence) {
  const positions = {};
  for (let i = 0; i < sentence.length; i++) {
    if (positions[sentence[i]] !== " ") {
      if (positions[sentence[i]]) {
        positions[sentence[i]].push(i);
      } else {
        positions[sentence[i]] = [i];
      }
    }
  }
  return positions;
};

console.log(letterPositions("lighthouse in the house"));


assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);
