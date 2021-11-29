const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length && arr1.length >= 1) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } else if (i === arr1.length - 1 && arr1[arr1.length - 1] === arr2[arr2.length - 1]) {
        return true;
      }
    }
  } else {
    return true; 
  }
};

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);

module.exports = eqArrays;