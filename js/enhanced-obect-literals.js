const firstName = 'Michael';
const age = 48;
const sayHi = function() {
    console.log('Hi');
}

// object properties that share a variable name may be written
// as just that variable name
const person = {
    // firstName: firstName, // replaced by:
    firstName,
    // age: age, // replaced by:
    age,
    // sayHi: sayHi // replaced by:
    sayHi
}

// the function keyword may be omitted when declaring object methods
const person2 = {
    firstName,
    age,
    // sayHi: function() {
    //         console.log(`Hello from ${this.firstName}`);
    //     }
    sayHi() {
        console.log(`Hello from ${this.firstName}`);
    }
}

// dynamic property names
const propertyName = 'name';

// old way:
person2[propertyName] = firstName;

// new way:
let index = 1;
const person3 = {
    [propertyName]: firstName,
    // create property names w/ string interpolation
    [`age${index}`]: age,
    sayHi() {
        console.log(`Hello from ${this.firstName}`);
    }
}

console.log(person);
console.log(person2);
console.log(person3);