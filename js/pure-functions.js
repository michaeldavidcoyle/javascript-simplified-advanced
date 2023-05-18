const array = [1, 2, 3, 4];

// NOT a pure function
function addElement(element) {
    array.push(element);
}

addElement(5);
console.log(array); // array is modified: [1, 2, 3, 4, 5]

// still NOT a pure function
function appendElement(arr, element) {
    arr.push(element);
}

appendElement(array, 6);
console.log(array); // array is modified: [1, 2, 3, 4, 5, 6]

// pure function
function arrayPlus(arr, element) {
    return [...arr, element];
}

const newArray = arrayPlus(array, 7);
console.log(newArray);  // new array
console.log(array); // original array is unchanged

// exercise:
// convert the following to a pure function
const person = {
    name: 'Fred',
    friends: ['Joe', 'Annie']
}

function addFriend(friend) {
    person.friends.push(friend);
}

addFriend('Dave');

console.log(person);

const person2 = {
    name: 'Bob',
    friends: ['John', 'Michael']
}

function appendFriend(p, friendName) {
    return { ...p, friends: [...p.friends, friendName] };
}

console.log(appendFriend(person2, 'Sally'));

console.log(person2); // unchanged