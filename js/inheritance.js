class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`I am ${this.name}`);
    }
}

const animal = new Animal('Bob');
animal.speak();

class Dog extends Animal {
    constructor(name, owner) {
        super(name);
        this.owner = owner;
    }

    speak() {
        console.log('Woof')
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log('Meow');
    }
}

const dog = new Dog('Jethro', 'Michael');
console.log(dog);
dog.speak();

const cat = new Cat('Godiva');
console.log(cat);
cat.speak();

// exercise
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Janitor extends Person {
    constructor(name, mopCount) {
        super(name);
        this.mopCount = mopCount;
    }

    clean() {
        let mops = this.mopCount > 1 ? 'mops' : 'mop';
        console.log(`${this.name} cleaned with ${this.mopCount} ${mops}.`)
    }
}

const janitor = new Janitor('Blake', 1);
janitor.clean();
const custodian = new Janitor('Jose', 2);
custodian.clean();