const form = document.querySelector('#equation-form');
const input = document.querySelector('#equation');
const results = document.querySelector('#results');

const MULTIPLY_DIVIDE_REGEX = /(?<operand0>\S+)\s*(?<operator>[*\/])\s*(?<operand1>\S+)/;
const ADD_SUBTRACT_REGEX = /(?<operand0>\S+)\s*(?<!e)(?<operator>[+-])\s*(?<operand1>\S+)/;

form.addEventListener('submit', event => {
    event.preventDefault();
    let expression = input.value;
    results.innerText = parse(expression);
});

function parse(expression) {
    if (expression.match(MULTIPLY_DIVIDE_REGEX)) {
        const result = evaluate(expression.match(MULTIPLY_DIVIDE_REGEX).groups);
        return parse(expression.replace(MULTIPLY_DIVIDE_REGEX, result));
    } else if (expression.match(ADD_SUBTRACT_REGEX)) {
        const result = evaluate(expression.match(ADD_SUBTRACT_REGEX).groups);
        return parse(expression.replace(ADD_SUBTRACT_REGEX, result));
    } else {
        return parseFloat(expression);
    }
}

function evaluate({operator, operand0, operand1}) {
    const n0 = parseFloat(operand0);
    const n1 = parseFloat(operand1);

    switch (operator) {
        case '*':
            return n0 * n1;
        case '/':
            return n0 / n1;
        case '+':
            return n0 + n1;
        case '-':
            return n0 - n1;
    }
}