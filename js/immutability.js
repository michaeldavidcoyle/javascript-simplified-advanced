// const with primitive values creates immutable data
const FAVORITE_NUMBER = 42;
// FAVORITE_NUMBER = 7; // Uncaught TypeError: Assignment to constant variable.


// const w/ arrays and objects creates data structures that can be mutated
const FAVORITE_NUMBERS = [1, 2, 3, 4];
FAVORITE_NUMBERS.push(5);
console.log(FAVORITE_NUMBERS); // [1, 2, 3, 4, 5]

// object example:
const person = {
    name: 'Mary',
    address: {
        street: '123 Main St',
        city: 'Big City',
        state: 'CA'
    }
}

person.name = 'Sally';

console.log(person); // name is now 'Sally'

// Object.freeze method prevents changes to object properties
const person2 = Object.freeze({
    name: 'Brian'
});

person2.name = 'Kyle'; // Attempt to assign to const or readonly variable

console.log(person2);

// Object.freeze works on only the first level, nested object are not affected
// To deep freeze an object, including any nested arrays or objects:
function deepFreeze(object) {
    Object.values(object).forEach(value => {
        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    });

    return Object.freeze(object);
}

const newPerson = deepFreeze({ ...person, address: {...person.address, street: '142 Palm Blvd'} });
console.log(newPerson); // immutable object w/ new address