export default class Calculator {
    constructor(
        primaryOperandDisplay,
        secondaryOperandDisplay,
        operationDisplay
    ) {
        this.#primaryOperandDisplay = primaryOperandDisplay;
        this.#secondaryOperandDisplay = secondaryOperandDisplay;
        this.#operationDisplay = operationDisplay;

        this.#primaryOperandValue = '';
        this.#secondaryOperandValue = '';

        this.clear();
    }

    #primaryOperandDisplay
    #secondaryOperandDisplay
    #operationDisplay
    #primaryOperandValue;
    #secondaryOperandValue;

    get primaryOperand() {
        return parseFloat(this.#primaryOperandValue);
    }

    set primaryOperand(value) {
        this.#primaryOperandValue = value.toString() ?? '';
        this.#primaryOperandDisplay.textContent = Calculator.format(value);
    }

    get secondaryOperand() {
        return parseFloat(this.#secondaryOperandValue);
    }

    set secondaryOperand(value) {
        this.#secondaryOperandValue = value ?? '';
        this.#secondaryOperandDisplay.textContent = Calculator.format(value);
    }

    get operation() {
        return this.#operationDisplay.textContent;
    }

    set operation(operator) {
        this.#operationDisplay.textContent = operator ?? '';
    }

    static format(number) {
        const digitString = number?.toString() || '';
        if (digitString === '') return '';
        const [integer, decimal] = digitString.split('.');
        const formattedInt = parseInt(integer).toLocaleString();
        if (decimal == null) return formattedInt;
        return `${formattedInt}.${decimal}`;
    }

    clear() {
        this.primaryOperand = 0;
        this.secondaryOperand = null;
        this.operation = null;
    }

    pushDigit(digit) {
        if (digit === '.' && this.#primaryOperandValue.includes('.')) return;

        if (digit === '.' && this.#primaryOperandValue.length === 0) {
            this.primaryOperand = 0;
        }
        this.#primaryOperandValue += digit;
        this.primaryOperand = this.#primaryOperandValue;
    }

    popDigit() {
        if (this.#primaryOperandValue.length <= 1) {
            this.primaryOperand = 0;
        } else {
            this.primaryOperand = this.#primaryOperandValue.slice(0, -1);
        }
    }

    selectOperation(operator) {
        if (this.#operationDisplay.textContent.length) {
            this.evaluate();
        }
        this.operation = operator;
        this.secondaryOperand = this.primaryOperand;
        this.primaryOperand = 0;
    }

    evaluate() {
        let result;
        let operand1 = this.secondaryOperand;
        let operand2 = this.primaryOperand;
        switch (this.operation) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '÷':
                result = operand1 / operand2;
                break;
            default:
                return;
        }

        this.clear();
        this.primaryOperand = result;
    }
}