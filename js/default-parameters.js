function greet(firstName, lastName, salutation = 'Hi') {
    // old way to default value:
    // salutation = salutation || 'Hi';

    console.log(`${salutation}, ${firstName} ${lastName}`);
}

// greet('Bob', 'Smith', 'Hi');
// function now works w/ only 2 arguments
greet('Bob', 'Smith');
// but we can also pass in any salutation we want
greet('Rupert', 'McGillicutty', 'Mellow greetings');

// passing undefined will use default:
greet('Michael', 'Coyle', undefined);

// passing null will use null
greet('Harry', 'Ceramist', null);

// works w/ destructuring:
function greeting(firstName, lastName, { salutation = 'Hi', suffix = 'Mr'} = {}) {
    console.log(`${salutation}, ${suffix} ${firstName} ${lastName}.`);
}

greeting('George', 'Davis', {salutation: 'Greetings', suffix: 'Professor'});
greeting('Daniel', 'Davis');