'use strict';

const bar = 42;
const result = typeof typeof bar;

console.log(result);

// The value of "result" is a string, double typeof of anything in JS is a string.
