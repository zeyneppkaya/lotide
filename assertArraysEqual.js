const assertArraysEqual = function (actual, expected) {
    if (!eqArrays(actual,expected)) {
        console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    } else if (eqArrays(actual,expected)) {
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


/*eqArrays([1, 2, 3], [1, 2, 3]) 
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) 

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);*/

module.exports = assertArraysEqual;
