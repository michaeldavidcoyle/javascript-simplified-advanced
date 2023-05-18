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