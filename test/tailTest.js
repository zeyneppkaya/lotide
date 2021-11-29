const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ['Lighthouse', 'Labs']);
assertArraysEqual([],[]);