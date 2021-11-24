const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentences) {
  const totalCount = {};
  for (const word of sentences.replace(/\s/g, "")) {
    if (totalCount[word]) {
      totalCount[word] += 1;
    } else {
      totalCount[word] = 1;
    }
  }
  return totalCount;
};

console.log(countLetters("lighthouse in the house"));