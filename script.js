const DIGITS = Array.from(document.querySelectorAll('.digits button'));
const DISPLAY = document.querySelector('.display');
const CLEAR = document.querySelector('#clear');

let displayValue = "";

for (let i = 0; i < DIGITS.length; i++) {
    DIGITS[i].addEventListener('click', () => {
        displayValue += (i + 1);
        console.log(displayValue);
        displayValues();
    })
}

CLEAR.addEventListener('click', () => {
    displayValue = "";
    displayValues();
});

const displayValues = function() {
    DISPLAY.innerText = displayValue;
}

const add = function(op1, op2) {
    return op1 + op2;
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

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))