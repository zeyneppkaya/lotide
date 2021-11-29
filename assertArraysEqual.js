const assertArraysEqual = function (actual, expected) {
    if (!eqArrays(actual,expected)) {
        console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    } else if (eqArrays(actual,expected)) {
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


/*eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) */

/*assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);*/
