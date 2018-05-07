'use strict';

function printObject(obj) {
    for (const prop in obj) {
        if (typeof obj[prop] === "object") {
            printObject(obj[prop]);
        }
        else {
            console.log(prop + ': ' + obj[prop]);
        }
    }
}

const person = {
    firstName: 'Maartje',
    lastName: 'Kruijt',
    city: 'Amsterdam'
};

printObject(person);
