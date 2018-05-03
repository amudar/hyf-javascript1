'use strict';

const myVehicles = ['car', 'motorbike', 'caravan', 'bike', 'boat'];

function vehicleType(color, code, age) {

    if (age <= 2) {
        age = 'new';
    } else { age = 'used'; }

    const n = myVehicles.length;
    const result = 'a ' + color + ' ' + age + ' ' + myVehicles[code];

    if (code <= n) {
        return result;
    } else {
        return console.log('Sorry! The vehicle is not available');
    }

}


console.log(vehicleType('green', 4, 5));

vehicleType('green', 9, 5);


