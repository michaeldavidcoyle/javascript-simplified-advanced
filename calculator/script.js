import Calculator from "./Calculator";

// actions
// click:
//   - number
//   - all clear
//   - delete
//   - operator
//   - decimal point
//   - equals

const calculator = new Calculator();

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
        calculator.operation(event.target.textContent);
    }
    if (event.target.matches('[data-equals]')) {
        calculator.evaluate();
    }
});