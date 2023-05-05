// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printName = function() {
        console.log(this.name);
    }
}

// add to Person prototype
Person.prototype.intro = function() {
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old.`);
}

// static properties and methods can also be added
Person.sayHi = function() {
    console.log('Hi');
}
Person.goodName = 'John';
Person.sayHi();
console.log(Person.goodName);

// create an instance of Person
const person = new Person('John', 20);
console.log(person); // Person {name: 'John', age: 20, printName: ƒ}
person.printName(); // John

person.intro(); // Hello, my name is John. I'm 20 years old.

// get prototype of person
console.log(Object.getPrototypeOf(person)); // constructor: ƒ Person(name, age)
// next level prototype:
console.log(Object.getPrototypeOf(Object.getPrototypeOf(person))); // constructor: ƒ Object()
// try another level:
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(person)))); // null

// create an object with an assigned prototype
const person2 = Object.create(person);
console.log(person2);
console.log(Object.getPrototypeOf(person2) === person); // true
// passing null creates an object w/ no prototype
const noPrototype = Object.create(null);
console.log(noPrototype);

// person2 doesn't have a name property, so JS looks for one up the prototype chain
console.log(person2.name); // John

person2.name = 'Dusty';
console.log(person2.name); // Dusty
