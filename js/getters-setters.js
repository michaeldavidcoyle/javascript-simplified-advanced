// creating a function to access the full name on this person object
const person = {
    firstName: 'Michael',
    lastName: 'Coyle',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.fullName()); // Michael Coyle

// getter syntax allows access to the full name as if it were a property
const person2 = {
    firstName: 'William',
    lastName: 'Forrester',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setters work in a similar way but take in an argument
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

console.log(person2.fullName); // William Forrester
person2.fullName = 'Sally Smith';
console.log(person2); // {firstName: 'Sally', lastName: 'Smith'}

// Exercise: creat a getter that returns the birth year of this person
const person3 = {
    age: 48,
    get birthYear() {
        let today = new Date();
        return today.getFullYear() - this.age;
    }
}

console.log(person3.birthYear);