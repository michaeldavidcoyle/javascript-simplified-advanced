const form = document.querySelector('#equation-form');
const input = document.querySelector('#equation');
const results = document.querySelector('#results');

const operatorPatterns = ['\\*|\\/', '\\+|-'];
const numberPattern = '-?\\d*(?:\\.\\d+)?';
let expression;

form.addEventListener('submit', event => {
    event.preventDefault();
    expression = input.value;
    results.innerText = calculate(expression);
});

function calculate(expression) {
    operatorPatterns.forEach(operator => {
        let operatorRegEx = RegExp(`(?<=.+)(?:${operator})`);
        console.log(operatorRegEx)
        let subRegEx = RegExp(`${numberPattern} *(?:${operator}) *${numberPattern}`);
        console.log(`subRegEx: ${subRegEx}`)

        while (subRegEx.test(expression)) {
            let subexpression = expression.match(subRegEx)?.[0];
            if (subexpression) {
                console.log(`subexpression: ${subexpression}`)
                let operand0 = subexpression.match(RegExp(`^${numberPattern}`))[0];
                // subexpression = subexpression.replace(operand0, '');
                let _operator = subexpression.match(operatorRegEx)?.[0];
                if (_operator == null) {
                    expression = subexpression;
                    break;
                }
                let operand1 = subexpression.match(RegExp(`${numberPattern}$`))[0];
                let result = evaluate(_operator, +operand0.trim(), +operand1.trim());
                expression = expression.replace(subexpression, result);
            } else {
                break;
            }
        }
    });

    return !isNaN(+expression) ? expression : NaN;
}

function evaluate(operator, operand0, operand1) {
    let result;
    switch (operator) {
        case '*':
            result = operand0 * operand1;
            break;
        case '/':
            result = operand0 / operand1;
            break;
        case '+':
            result = operand0 + operand1;
            break;
        case '-':
            result = operand0 - operand1;
            break;
    }

    return result.toString();
}