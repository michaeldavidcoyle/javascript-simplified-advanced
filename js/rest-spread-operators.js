// rest operator, allows for variable number of function parameters
function add(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(
    `3 + 7 = ${add(3, 7)}`
); // 10
console.log(
    `2 + 5 + 11 = ${add(2, 5, 11)}`
); // 18
console.log(
    `4 + 3 + 13 + 8 + 9 + 5 = ${add(4, 3, 13, 8, 9, 5)}`
); // 42


// spread operator converts elements of an array or object into
// individual values so they can be passed to a function or
// added to another array or object
const numbers = [31, 2, 47, 63, 14, 98, 51, 9, 13, 22];
console.log(Math.min(...numbers)); // 2
console.log(Math.max(...numbers)); // 98

const moreNumbers = [...numbers, 70, 17, 59, 4, 85];
console.log(numbers);
console.log(moreNumbers.sort((a, b) => a - b));

// create arrays from DOM elements like NodeLists
const myDivs = [...document.querySelectorAll('.mydiv')];
console.log(myDivs.filter(div => div.innerText == '4')[0]);

// used with object destructuring
const person = {
    name: 'Michael',
    age: 48,
    favoriteFood: 'cheeseburger',
    address: {
        street: '119 Jethro Lane',
        city: 'Chicago',
        zipcode: 60603
    }
}

const { name, age, ...rest } = person;
console.log(name);
console.log(age);
console.log(rest);

// clone an object w/o maintaining reference to the original
const person2 = { ...person }
person.name = 'Bob';
console.log(person);
console.log(person2);

// clone an object while adding new properties
const person3 = { ...person2, friend: person}
console.log(person3);

// may combine properties of multiple objects
const dog = {
    name: 'Rusty',
    hasFur: true,
    power: 'smell',
    wagsTail: true
}

const superman = {
    name: 'Clark',
    powers: ['strength', 'x-ray vision', 'flying'],
    weakness: 'Kryptonite'
}

const superdog = { ...dog, ...superman }
console.log(superdog);