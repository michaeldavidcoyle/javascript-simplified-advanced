import Calculator from "./Calculator.js";

// actions
// click:
//   - number
//   - all clear
//   - delete
//   - operator
//   - decimal point
//   - equals

const primaryOperandDisplay = document.querySelector('[data-primary-operand]');
const secondaryOperandDisplay = document.querySelector('[data-secondary-operand]');
const operationDisplay = document.querySelector('[data-operation]');

const calculator = new Calculator(
    primaryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
);

document.addEventListener('click', event => {
    if (event.target.matches('[data-all-clear]')) {
        calculator.clear();
    }
    if (event.target.matches('[data-number]')) {
        calculator.pushDigit(event.target.textContent);
    }
    if (event.target.matches('[data-delete]')) {
        calculator.popDigit();
    }
    if (event.target.matches('[data-operation]')) {
        calculator.selectOperation(event.target.textContent);
    }
    if (event.target.matches('[data-equals]')) {
        calculator.evaluate();
    }
});