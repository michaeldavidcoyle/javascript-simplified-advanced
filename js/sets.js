// create a function that removes duplicates from an array
function removeDuplicates(array) {
    return [...new Set(array)];
}

const integers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

console.log(removeDuplicates(integers));