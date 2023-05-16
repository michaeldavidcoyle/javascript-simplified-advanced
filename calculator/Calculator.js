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
        this.primaryOperand = '';
        this.secondaryOperand = '';
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
        if (this.operationDisplay.textContent.length) {
            this.evaluate();
        }
        this.operationDisplay.textContent = operator;
        this.secondaryOperand = this.primaryOperand;
        this.secondaryOperandDisplay.textContent = this.secondaryOperand;
        this.primaryOperand = 0;
        this.primaryOperandDisplay.textContent = this.primaryOperand;
    }

    evaluate() {
        let result;
        let operand1 = parseFloat(this.secondaryOperand);
        let operand2 = parseFloat(this.primaryOperand);
        switch (this.operationDisplay.textContent) {
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
        this.primaryOperand = result.toString();
        this.primaryOperandDisplay.textContent = result.toLocaleString();
    }
}