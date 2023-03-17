const array = ['a', 'b', 'c', 'd'];

// array destructuring
// const first = array[0];
// const second = array[1];
// the line below takes that place of the previous two lines
const [first, second] = array;

console.log(first);
console.log(second);

// a more practical example
function addAndMultiply(a, b) {
    return [a + b, a * b];
}

// const [sum, product] = addAndMultiply(2, 3);
// console.log(sum);
// console.log(product);

// object destructuring
const person = {
    name: 'Michael',
    age: 48,
    favoriteFood: 'cheeseburger',
    address: {
        street: '1935 Jethro Lane',
        city: 'Chicago'
    }
}

// standard way:
// const name = person.name;
// const age = person.age;

// destructuring
const { name, age } = person;
console.log(name);
console.log(age);

// to give variable a name different from the object key...
const { name: firstName } = person;
console.log(firstName);

// destructuring nested value & setting default value
const { address: { street, city, zipCode=60603 } } = person;
console.log(street);
console.log(city);
console.log(zipCode);

// a practical user case:
function sumAndMultiply(a, b) {
    return { sum: a + b, product: a * b }
}

const { sum, product } = sumAndMultiply(5, 7);
console.log(sum);
console.log(product);

// exercise: create two functions, one that takes in a full name
// parameter and returns and array with first and last names as elements
// of an array and another function that returns the names as object properties
// and use destructuring to print out the names

function nameToFirstAndLast(fullName) {
    return fullName.split(' ');
}

const [first_, last] = nameToFirstAndLast('Bob Smith');

console.log(first_);
console.log(last);

function nameToFirstAndLastObject(fullName) {
    const [first, last] = fullName.split(' ');
    return { _first: first, _last: last }
}

const { _first, _last } = nameToFirstAndLastObject('Andy Dufresne');
console.log(_first);
console.log(_last);

// destructuring function parameters
function addAndMult({ a, b }) {
    return { sum: a + b, product: a * b}
}