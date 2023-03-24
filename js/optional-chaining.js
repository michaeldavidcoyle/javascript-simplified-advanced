const bob = {
    name: 'Bob',
    age: 33,
    address: {
        street: '100 Maple St',
        city: 'Anytown'
    }
}

function printStreet(person) {
    console.log(person.address.street);
}

printStreet(bob);

// Everything above works as expected, but what if the person passed to
// printStreet doesn't have an address property or address is undefined?
const dave = {
    name: 'Dave',
    age: 29
}

const mary = {
    name: 'Mary',
    age: 28,
    address: undefined
}

// printStreet(dave);
// printStreet(mary);
// Each of these throws an error:

// This could be handled with short circuit evaluation, by adding a
// condition inside printStreet like so:
// console.log(person && person.address && person.address.street);
// but the optional chaining operator (?.) makes this much cleaner
function logStreet(person) {
    console.log(person?.address?.street);
}

logStreet(dave); // undefined (no error is thrown)
logStreet(mary); // undefined (no error is thrown)
logStreet(bob); // 100 Maple St

// also works for functions/methods
const sue = {
    name: 'Sue',
    age: 37,
    sayHi(person) {
        console.log(`Hello, ${person}`);
    }
}

const dan = {
    name: 'Dan',
    age: 35
}

function greet(personA, personB) {
    personA?.sayHi?.(personB?.name);
    personB?.sayHi?.(personA?.name);
}

greet(sue, dan);

// works for arrays
const pat = {
    name: 'Pat',
    age: 27,
    hobbies: ['chess', 'swimming']
}

function printFirstHobby(person) {
    // console.log(person.hobbies[0]); // throws error
    console.log(person?.hobbies?.[0]);
}

printFirstHobby(pat); // chess