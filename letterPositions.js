const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  } else if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = (array1, array2) => {
  if (array1.length === array2.length && array1.length >= 1) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else if (i === array1.length - 1 && array1[array1.length - 1] === array2[array2.length - 1]) {
        return true;
      }
    }
  } else {
    return true;
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
