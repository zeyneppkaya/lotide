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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);