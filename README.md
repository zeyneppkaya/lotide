# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zeyneppkaya/lotide`

**Require it:**

`const _ = require('@zeyneppkaya/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(...)`: The tail function prints out every element except the head (first element) of the array.
* `middle(...)`: Function will take in an array and return the middle-most element(s) of the given array.
* `findkey(...)`: Function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
* `head(...)`: Gets the first element of an array.
* `takeUntil(...)`: Function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `assertArraysEqual(...)`: Function will take in two arrays and console.log an appropriate message to the console.
* `assertEqual(...)`: Assertion function prints out a colourful and therefore easy to read message in both success and failure scenarios for our codes.
* `assertObjectsEqual(...)`: Function will take in two objects and console.log an appropriate message to the console.
* `countLetters(...)`: The function will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(...)`: This function will take in a collection of items and return counts for a specific subset of those items.
* `eqArrays`: Function that can compare two arrays for a perfect match.
* `eqObjects(...)`: Function will take in two objects and returns true or false, based on a perfect match.
* `findKeyByValue(...)`: Function takes in an object and a value. It scans the object and return the first key which contains the given value. 
* `letterPositions(...)`: Function will return all the indices (zero-based positions) in the string where each character is found.
* `map(...)`: Function will take in two arguments: An array to map  and a callback function. The map function will return a new array based on the results of the callback function.
* `without(...)`: Function will return a subset of a given array, removing unwanted elements.


