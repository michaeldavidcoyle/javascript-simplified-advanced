const form = document.querySelector('#equation-form');
const input = document.querySelector('#equation');
const result = document.querySelector('#results');
let expression;

form.addEventListener('submit', event => {
    event.preventDefault();
    expression = input.value;
    result.innerText = expression;
});