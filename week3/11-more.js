'use strict';

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log(x == y); // giving false ??

console.log(x === y); // giving false ????

console.log(z === y); // giving true ??

console.log(z === x); // giving false ??
