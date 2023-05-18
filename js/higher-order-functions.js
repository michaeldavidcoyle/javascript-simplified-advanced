// exercise
/*
    create a higher order function called groupBy that takes in the
    array of objects below and returns an object with properties for
    each length of the friends arrays corresponding to an array of the
    names for each person that has that number of friends
*/
const people = [
    {
        name: 'Kyle',
        friends: ['John', 'Sally']
    },
    {
        name: 'Joey',
        friends: ['Kyle']
    },
    {
        name: 'Sally',
        friends: ['John', 'Kyle']
    },
    {
        name: 'Bob',
        friends: ['John', 'Sally', 'Michael']
    },
    {
        name: 'Michael',
        friends: ['Bob', 'Joey', 'Sarah']
    },
    {
        name: 'Sarah',
        friends: ['Kyle']
    }
];

function groupBy(array, callback) {
    return array.reduce((group, element) => {
        const key = callback(element);
        if (group[key] == null) group[key] = [];
        group[key].push(element);
        return group;
    }, {});
}

const group = groupBy(people, person => person.friends.length);
console.log(group);