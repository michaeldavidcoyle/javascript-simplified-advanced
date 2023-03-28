// Symbols are unique
const symbol = Symbol('name');
const symbol2 = Symbol('name');

console.log(symbol); // Symbol(name)
console.log(symbol2); // Symbol(name)
console.log(symbol == symbol2); // false

const propertyName = Symbol('name');
const person = {
    age: 25,
    [propertyName]: 'Kyle'
}

// Symbol properties are hidden unless you have direct access to the object
console.log(person); // {age: 25, Symbol(name): 'Kyle'}

Object.entries(person).forEach(([key, value]) => {
    console.log(key, value); // age 25
});

console.log(JSON.stringify(person)); // {"age":25}

// method to get Symbol property
console.log(Object.getOwnPropertySymbols(person));

