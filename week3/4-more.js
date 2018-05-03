'use strict';

function vehicleType(color, code) {
    let result = color;
    if (code === 1) {
        result = 'This is a ' + result + ' car';
        console.log(result);
    } else if (code === 2) {
        result = 'This is a ' + result + ' motorbike';
        console.log(result);
    } else {
        console.log('Sorry! This code is unavailable -_-');
    }

}

vehicleType('red', 1);
vehicleType('blue', 2);
vehicleType('orange', 3);
