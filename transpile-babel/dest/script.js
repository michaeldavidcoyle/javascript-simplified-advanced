"use strict";

var _console, _person$address;
var digits = [];
for (var n = 0; n < 10; n++) {
  digits.push(n);
}
(_console = console).log.apply(_console, digits);
var person = {
  name: 'Bob',
  age: 42,
  address: {
    street: '444 4th St',
    city: 'Pleasantville',
    state: 'TX'
  }
};
console.log(person === null || person === void 0 ? void 0 : (_person$address = person.address) === null || _person$address === void 0 ? void 0 : _person$address.street);
var name = person.name,
  age = person.age,
  address = person.address;