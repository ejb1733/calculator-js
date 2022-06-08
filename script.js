const DIGITS = Array.from(document.querySelectorAll('.digits button'));
const OPERATORS = Array.from(document.querySelectorAll('.operators button'));
const CLEAR = document.querySelector('#clear');
const EQUALS = document.querySelector('#equals');
const DISPLAY = document.querySelector('.display');
const BODY = document.querySelector('body');

let operatorSelected = false;
let keepGoing = false;

let number1 = '';
let number2 = '';
let operator = '';
let operation = [operator, number1, number2];

let displayValue = "";

    for (let i = 0; i < DIGITS.length - 1; i++) {
        DIGITS[i].addEventListener('click', () => {
            if (operatorSelected) {
                operatorSelected = false;
                displayValue = '';
                displayValues();
            }
                displayValue += (i + 1);
                displayValues();
        })
    }

DIGITS[9].addEventListener('click', () => {
    displayValue += 0;
    displayValues();
})

OPERATORS.forEach(element => {
    element.addEventListener('click', () => {
        if (!keepGoing) {
            operatorSelected = true;
            number1 = displayValue;
            operator = element.innerText;
        } else {
            operatorSelected = true;
            let number2 = displayValue;
            let result = operate(operator, number1, number2).toString();
            number1 = result;
            displayValue = result;
            displayValues();
            console.log(result);
        }
    })
});

CLEAR.addEventListener('click', () => {
    operatorSelected = false;
    displayValue = "";
    displayValues();
});

EQUALS.addEventListener('click', () => {
    doOperation();
});

function doOperation() {
    operatorSelected = false;
    let number2 = displayValue;
    console.log(number1, operator, number2);
    console.log(operate(operator, number1, number2));
    let result = operate(operator, number1, number2).toString();
    displayValue = result;
    number1 = result;
    displayValues();
}

const displayValues = function() {
    DISPLAY.innerText = displayValue;
}

const add = function(op1, op2) {
    return parseInt(op1) + parseInt(op2);
}

const subtract = function(op1, op2) {
    return op1 - op2;
}

const multiply = function(op1, op2) {
    return op1 * op2;
}

const divide = function(op1, op2) {
    return op1 / op2;
}

function operate(operator, num1, num2) {
    switch (true) {
        case (operator === '+'):
            return add(num1, num2);
        case (operator === '-'):
            return subtract(num1, num2);
        case (operator === '*'):
            return multiply(num1, num2);
        case (operator === '/'):
            return divide(num1, num2);
    }
}