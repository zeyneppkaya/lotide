const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
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

const without = function (source, itemsToRemove) {
  let betterArray = source.concat(itemsToRemove);
  for (let i = 0; i < betterArray.length; i++) {
    if (itemsToRemove.includes(betterArray[i])) {
      betterArray.splice(i, 1);
      i--;
    }
  }
  return betterArray;
};

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);