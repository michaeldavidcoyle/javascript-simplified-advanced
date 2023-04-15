const form = document.querySelector('#equation-form');
const input = document.querySelector('#equation');
const results = document.querySelector('#results');
const steps = document.querySelector('#steps');

const PARENTHESES_REGEX = /\((?<expression>[^()]*)\)/;
const EXPONENT_REGEX = /(?<operand0>\S+)\s*(?<operator>\^)(?!.*\^.*)\s*(?<operand1>\S+)/;
const MULTIPLY_DIVIDE_REGEX = /(?<operand0>\S+)\s*(?<operator>[*\/])\s*(?<operand1>\S+)/;
const ADD_SUBTRACT_REGEX = /(?<operand0>\S+)\s*(?<!e)(?<operator>[+-])\s*(?<operand1>\S+)/;

form.addEventListener('submit', event => {
    event.preventDefault();
    steps.innerText = '';
    let expression = input.value;
    results.innerText = `= ${parse(expression)}`;
});

function parse(expression) {
    if (expression.match(PARENTHESES_REGEX)) {
        const subExpression = expression.match(PARENTHESES_REGEX).groups.expression;
        const result = parse(subExpression);
        const newExpression = expression.replace(PARENTHESES_REGEX, result);
        return parse(newExpression);
    } else if (expression.match(EXPONENT_REGEX)) {
        const result = evaluate(expression.match(EXPONENT_REGEX).groups);
        const newExpression = expression.replace(EXPONENT_REGEX, result);
        return parse(newExpression);
    } else if (expression.match(MULTIPLY_DIVIDE_REGEX)) {
        const result = evaluate(expression.match(MULTIPLY_DIVIDE_REGEX).groups);
        const newExpression = expression.replace(MULTIPLY_DIVIDE_REGEX, result);
        return parse(newExpression);
    } else if (expression.match(ADD_SUBTRACT_REGEX)) {
        const result = evaluate(expression.match(ADD_SUBTRACT_REGEX).groups);
        const newExpression = expression.replace(ADD_SUBTRACT_REGEX, result);
        return parse(newExpression);
    } else {
        return parseFloat(expression);
    }
}

function evaluate({operator, operand0, operand1}) {
    const n0 = parseFloat(operand0);
    const n1 = parseFloat(operand1);

    switch (operator) {
        case '^':
            return n0 ** n1;
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

// function outputSteps(expression, result) {
//     const div = document.createElement('div');
//     div.innerText = expression;
//     steps.appendChild(div);
// }