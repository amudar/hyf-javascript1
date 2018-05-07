'use strict';

function advertisement(vehicleNames) {

    let ourService = '';

    //const index = 0;

    for (let i = 0; i < vehicleNames.length; i++) {

        const vehicleName = vehicleNames[i];
        const pluralForm = vehicleName + 's';

        if (i === vehicleNames.length - 1) {
            ourService += 'and ' + pluralForm;
        }
        else {
            ourService += pluralForm + ', ';
        }
    }

    console.log('Welcome to Amazing Joe\'s Garage, we service ' + ourService);
}

const vehicles = ['car', 'motorbike', 'caravan', 'bike', 'boat'];

advertisement(vehicles);

