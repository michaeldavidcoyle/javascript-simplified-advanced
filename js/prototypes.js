// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printName = function() {
        console.log(this.name);
    }
}

// create an instance of Person
const person = new Person('John', 20);
console.log(person); // Person {name: 'John', age: 20, printName: ƒ}
person.printName(); // John