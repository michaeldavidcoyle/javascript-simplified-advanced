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

    static format(number) {
        const digitString = number?.toString() || '';
        if (digitString === '') return '';
        const [integer, decimal] = digitString.split('.');
        const formattedInt = parseInt(integer).toLocaleString();
        if (decimal == null) return formattedInt;
        return `${formattedInt}.${decimal}`;
    }

    clear() {
        this.primaryOperandDisplay.textContent = 0;
        this.secondaryOperandDisplay.textContent = '';
        this.operationDisplay.textContent = '';
        this.primaryOperand = '';
        this.secondaryOperand = '';
    }

    pushDigit(digit) {
        if (digit === '.' && this.primaryOperand.includes('.')) return;

        if (digit === '.' && this.primaryOperand.length === 0) {
            this.primaryOperand = '0';
        }
        this.primaryOperand += digit;
        this.primaryOperandDisplay.textContent = Calculator.format(this.primaryOperand);
    }

    popDigit() {
        if (this.primaryOperand.length <= 1) {
            this.primaryOperand = '';
            this.primaryOperandDisplay.textContent = 0;
        } else {
            this.primaryOperand = this.primaryOperand.slice(0, -1);
            this.primaryOperandDisplay.textContent = Calculator.format(this.primaryOperand);
        }
    }

    operation(operator) {
        if (this.operationDisplay.textContent.length) {
            this.evaluate();
        }
        this.operationDisplay.textContent = operator;
        this.secondaryOperand = this.primaryOperand;
        this.secondaryOperandDisplay.textContent = this.secondaryOperand;
        this.primaryOperand = '0';
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