const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ['Lighthouse', 'Labs']);