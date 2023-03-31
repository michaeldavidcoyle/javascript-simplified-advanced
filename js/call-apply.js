window.name = 'Global Name';

const person = {
    name: 'Joe'
}

function printName() {
    // here this === window
    console.log(this.name);
}

printName(); // Global Name

// .apply is similar to .bind, but rather than create a
// new function, it calls the function with the new 'this'
printName.apply(person);

// .call works similarly
printName.call(person);

// The difference between .apply and .call is in passing
// further arguments: .call takes comma separated arguemnts
// and .apply take an array

function multiply(a, b) {
    return a * b;
}

console.log(multiply.apply(null, [3, 4])); // 12
console.log(multiply.call(null, 3, 4)); // 12