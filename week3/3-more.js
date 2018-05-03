'use strict';

function printObject(obj) {
    console.log('firstName = ' + obj.firstName + '\n'
        + 'lastName = ' + obj.lastName + '\n'
        + 'city = ' + obj.city);
}

const person = {
    firstName: 'Maartje',
    lastName: 'Kruijt',
    city: 'Amsterdam'
};

printObject(person);
