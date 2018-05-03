'use strict';

function advertisement(vehicleNames) {
    const ad = 'Amazing Joe\'s Garage, we service ' + vehicles[0] + 's, ' + vehicles[1] + 's, '
        + vehicles[2] + 's, ' + vehicles[3] + 's, ' + 'and ' + vehicles[4] + 's.';
    return ad;
}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];
vehicles.push('boat');

const text = advertisement(vehicles);
console.log(text);
