window.name = 'Global Name';

const person = {
    name: 'Joe'
}

function printName() {
    // here this === window
    console.log(this.name);
}

printName(); // Global Name

// .bind allows us to create a new function where the 'this' keyword
// refers to the object argument passed to it
const printPersonName = printName.bind(person);
printPersonName(); // Joe

// further arguments passed to bind can fix parameters of a function
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // 5

const plusTwo = sum.bind(null, 2);
// equivalent to creating the following:
// function plusTwo(b) {
//     return 2 + b;
// }
console.log(plusTwo(3)); // 5

function multiply(a, b) {
    return a * b;
}

const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(number => multiply(2, number));
const doubledNumbers = numbers.map(multiply.bind(null, 2));
console.log(doubledNumbers);