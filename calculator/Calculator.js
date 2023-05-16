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
        if (this.operationDisplay.textContent === '') {
            this.primaryOperand += digit;
            this.primaryOperandDisplay.textContent = parseFloat(this.primaryOperand).toLocaleString();
        } else {
            this.secondaryOperand += digit;
            this.secondaryOperandDisplay.textContent = parseFloat(this.secondaryOperand).toLocaleString();
        }
    }
}