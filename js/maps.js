// standard object used to map key/value pairs
const CURRENCY_MAP = {
        'United States': 'USD',
        India: 'Rupee',
}

console.log(CURRENCY_MAP['India']);

// same data as a JS Map
const CURRENCIES = new Map([
    ['United States', 'USD'],
    ['India', 'Rupee']
]);

console.log(CURRENCIES.get('India'));

// unlike objects, keys can be any value, even an object
const clark = {
    name: 'Clark Kent',
    occupation: 'journalist'
}

const bruce = {
    name: 'Bruce Wayne',
    occupation: 'billionaire'
}

const peter = {
    name: 'Peter Parker',
    occupation: 'freelance photographer'
}

const superheroes = new Map([
    [clark,
        {
        name: 'Superman',
        powers: [
            'flying',
            'super-human strength',
            'x-ray vision'
        ],
        weakness: 'Kryptonite'
    }],
    [bruce,
        {
        name: 'Batman',
        powers: [
            'intelligence',
            'wealth',
            'technology',
            'martial arts'
        ],
        weakness: 'vow not to kill'
    }],
    [peter,
        {
        name: 'Spider-Man',
        powers: [
            'super-human strength',
            'spider-sense',
            'wallcrawling',
            'web slinging'
        ],
        weakness: 'Kryptonite'
    }]
]);

console.log(superheroes.get(peter));

// Unlike objects, maps can be looped through in insertion order,
// and they have a forEach method
const map = new Map([
    [1, 'A'],
    [2, 'B'],
    [3, 'C'],
    [4, 'D']
]);

map.forEach((value, key) => console.log(`${key}: ${value}`));

// size property
console.log(map.size);

// methods
// retrieve value
console.log(map.get(1)); // A
// adds key/value pair
map.set(5, 'E')
// check if map has key
console.log(map.has(3)); // true
console.log(map.has(7)); // false
// delete key/value pair
map.delete(1);
// empty the map
map.clear();

// Exercise:
// convert the following to use a map
// const items = [
//     {
//         id: 1,
//         name: 'Test',
//         description: 'Desc'
//     },
//     {
//         id: 2,
//         name: 'Test 2',
//         description: 'Desc 2'
//     },
//     {
//         id: 3,
//         name: 'Test 3',
//         description: 'Desc 3'
//     }
// ];

let id = 1;
const items = new Map([
    [id++, {name: 'Test', description: 'Desc'}],
    [id, {name: `Test ${id}`, description: `Desc ${id++}`}],
    [id, {name: `Test ${id}`, description: `Desc ${id}`}]
]);

// function getItem(id) {
//     return items.find(item => item.id === id);
// }

console.log(items.get(1));
console.log(items.get(2));
console.log(items.get(3));