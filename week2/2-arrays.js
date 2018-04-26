'use strict';

const favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat');
console.log("The new value of the array will be: 'blowfish', 'meerkat', 'capricorn', 'giraffe', and 'turtle'");
console.log(favoriteAnimals);

console.log("The new array has a length of:", favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

let i = favoriteAnimals.indexOf('meerkat');
console.log('The item I am looking for is at index:', i);
if(i>=0) {
    favoriteAnimals.splice(i, 1);
}
console.log(favoriteAnimals);
