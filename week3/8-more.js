'use strict';

function advertisement(vehicleNames) {
    const result = 'Amazing Joe\'s Garage, we service ' + vehicles[0] + 's, ' + vehicles[1] + 's, '
        + vehicles[2] + 's and ' + vehicles[3] + 's.';
    return result;
}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];

const text = advertisement(vehicles);
console.log(text);
