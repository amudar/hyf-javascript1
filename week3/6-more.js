'use strict';

function vehicleType(color, code, age) {

    let result = color;

    if (age <= 2) {
        age = 'new';
    } else { age = 'used'; }

    if (code === 1) {
        result = 'This is a ' + age + ' ' + result + ' car';
        console.log(result);

    } else if (code === 2) {
        result = 'This is a ' + age + ' ' + result + ' motorbike';
        console.log(result);

    } else {
        console.log('Sorry! This vehicle is unknown -_-');
    }

}

vehicleType('red', 1, 1);
vehicleType('blue', 2, 7);
vehicleType('orange', 5, 2);
