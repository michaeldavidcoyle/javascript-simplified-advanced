/*
 * According to MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing):
 * The nullish coalescing (??) operator is a logical operator that returns its
 * right-hand side operand when its left-hand side operand is null or undefined,
 * and otherwise returns its left-hand side operand.
 */

function greet(firstName = 'Sally', lastName) {
    // lastName = lastName || 'Smith';
    lastName = lastName ?? 'Smith';
    console.log(`${firstName} ${lastName}`);
}

// using short circuit evaluation does not allow for passing
//  falsey values such as an empty string or 0
greet('Bill', '');
greet('Dave', 0);
greet('Jim');

// brackets must be used in combination with other logical operators
// console.log(undefined ?? false && true || false); // throws error
console.log(undefined ?? (false && true || false)); // false