const digits = [];

for (let n = 0; n < 10; n++) {
    digits.push(n);
}

console.log(...digits);

const person = {
    name: 'Bob',
    age: 42,
    address: {
        street: '444 4th St',
        city: 'Pleasantville',
        state: 'TX'
    }
}

console.log(person?.address?.street);

const {name, age, address} = person;