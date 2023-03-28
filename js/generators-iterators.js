function* simpleGenerator() {
    console.log('before 1');
    yield 1;
    console.log('after 1');
    console.log('before 2');
    yield 2;
    console.log('after 2');
    console.log('before 3');
    yield 3;
    console.log('after 3');
}

const generator = simpleGenerator();
console.log(generator.next()); // before 1
// {value: 1, done: false}

console.log(generator.next()); // after 1
// before 2
// {value: 2, done: false}

console.log(generator.next()); // after 2
// before 3
// {value: 3, done: false}

console.log(generator.next()); // after 3
// {value: undefined, done: true}

function* fibonacciGenerator() {
    let a = 0;
    let b = 1;

    yield 0;
    yield 1;

    while (true) {
        let sum = a + b;
        yield sum;
        a = b;
        b = sum;
    }
}

const fibonacciSequence = fibonacciGenerator();
for (let i = 0; i < 16; i++) {
    console.log(fibonacciSequence.next());
}
// {value: 0, done: false}
// {value: 1, done: false}
// {value: 1, done: false}
// {value: 2, done: false}
// {value: 3, done: false}
// {value: 5, done: false}
// {value: 8, done: false}
// {value: 13, done: false}
// {value: 21, done: false}
// {value: 34, done: false}
// {value: 55, done: false}
// {value: 89, done: false}
// {value: 144, done: false}
// {value: 233, done: false}
// {value: 377, done: false}
// {value: 610, done: false}

// Exercise: create generator function that yields auto-incrementing id
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const idSequence = idGenerator();

for (let i = 0; i < 25; i++) {
    console.log(idSequence.next().value);
}

// passing arguments to .next
function* countGenerator() {
    let count = 1;

    while (true) {
        const incrementor = yield count;
        if (incrementor != null) {
            count += incrementor;
        } else {
            count++;
        }
    }
}

const counter = countGenerator();
console.log(counter.next()); // {value: 1, done: false}
console.log(counter.next(2)); // {value: 3, done: false}
console.log(counter.next()); // {value: 4, done: false}

// exit generator
console.log(counter.return()); // {value: undefined, done: true}
// can also be passed a value
console.log(idSequence.return(100)); // {value: 10, done: true}