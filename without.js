const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
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

  const without = function(source, itemsToRemove) {
    let betterArray = source.concat(itemsToRemove);
      for(let i=0; i< betterArray.length; i++) {
          if (itemsToRemove.includes(betterArray[i])) {
              betterArray.splice(i,1);
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