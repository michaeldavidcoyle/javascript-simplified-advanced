export default class Calculator {
    constructor(
        primaryOperandDisplay,
        secondaryOperandDisplay,
        operationDisplay
    ) {
        this.primaryOperandDisplay = primaryOperandDisplay;
        this.secondaryOperandDisplay = secondaryOperandDisplay;
        this.operationDisplay = operationDisplay;

        this.primaryOperand = '';
        this.secondaryOperand = '';

        this.clear();
    }

    clear() {
        this.primaryOperandDisplay.textContent = 0;
        this.secondaryOperandDisplay.textContent = '';
        this.operationDisplay.textContent = '';
    }

    pushDigit(digit) {
        this.primaryOperand += digit;
        this.primaryOperandDisplay.textContent = parseFloat(this.primaryOperand).toLocaleString();
    }

    popDigit() {
        this.primaryOperand = this.primaryOperand.slice(0, -1);
        this.primaryOperandDisplay.textContent = parseFloat(this.primaryOperand).toLocaleString();
    }

    operation(operator) {
        this.operationDisplay.textContent = operator;
        this.secondaryOperand = this.primaryOperand;
        this.secondaryOperandDisplay.textContent = this.secondaryOperand;
        this.primaryOperand = 0;
        this.primaryOperandDisplay.textContent = this.primaryOperand;
    }
}