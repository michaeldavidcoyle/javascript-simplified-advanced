// constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.printName = function() {
//         console.log(this.name);
//     }
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static goodName = 'John';
    static printHi() {
        console.log('hi');
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person('Bob', 42);
console.log(person);
person.printName();

console.log(Person.goodName);
Person.printHi();

// recreate the following function as both a prototype-based function
// and as a class
function createUser(email, password, language) {
    return {
        email,
        password,
        language,
        printPassword() {
            console.log(password);
        }
    }
}

console.log(createUser('test@test.com', 'password', 'English'));

function User(email, password, language) {
    this.email = email;
    this.password = password;
    this.language = language;
}

User.prototype.printPassword = function() {
    console.log(this.password);
}

const user = new User('test.user@test.com', 'password123', 'English');
console.log(user);

class _User {
    constructor(email, password, language) {
        this.email = email;
        this.password = password;
        this.language = language;
    }

    get name() {
        return this.email.split('@')[0];
    }

    set name(value) {
        const [, suffix] = this.email.split('@');
        this.email = `${value}@${suffix}`;
    }

    printPassword() {
        console.log(this.password);
    }
}

const _user = new _User('test_user@test.com', 'password_1', 'English');
console.log(_user);
console.log(_user.name);
_user.name = 'bob';
console.log(_user.email);