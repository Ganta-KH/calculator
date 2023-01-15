// clear all the old the calculation and reset all
function clear() {
    screen.textContent = "";
    x = null;
    y = null;
    // no operator selected
    operator = "";
}

// function delete the last digit put on screen
function Delete() {
    let str = screen.textContent;
    if (str.length !== 0 || str.length !== 1) {
        screen.textContent = str.split("").slice(0, str.length-1).join('');
    } else clear();
}

// function that clear calculator screen but keep the last calculation in the background
function CE() {
    screen.textContent = "";
}

// add to screen the digit clicked
function addToScreen(num) {
    screen.textContent += num;
}

// function that do all the operation (+, -, x, /)
function operate(x, y, operator) {
    switch (operator) {
        case '+': return x + y;
        case '-': return x - y;
        case 'x': return x * y;
        case '/':
            if (y === 0) return 'Math Error';
            else return x / y;
    }
}

// check if the number in screen is a integer or a float and return it
function intOrFloat(num) {
    return num.includes('.') ? parseFloat(num) : parseInt(num);
}

// function that do the calculation when clicking in "=" button
function calculate() {
    if (x !== null && y === null) {
        screen.textContent = operate(x, intOrFloat(screen.textContent), operator);
        // after the calculation reset all the old ones
        x = null;
        y = null;
        operator = "";
    }
    else if (x !== null && y !== null) {
        screen.textContent = operate(x, y, operator)
    }
}

// check if calculation in a Math Error. if it is clear the calculation 
function mathError() {
    if (screen.textContent === 'Math Error') clear();
}




const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.func');
const buttons = document.querySelectorAll('button');
let funcClick = false;
let x = null;
let y = null;
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', mathError);
});

functions.forEach(func => {
    if (func.textContent === 'CE') func.addEventListener('click', CE);
    else if (func.textContent === 'C') func.addEventListener('click', clear);
    else if (func.textContent === 'Delete') func.addEventListener('click', Delete);
    else if (func.textContent === '=') func.addEventListener('click', calculate);
    else {
        func.addEventListener('click', () => {
            console.log(x, y, operator);
            funcClick = true;
            if (x === null) x = intOrFloat(screen.textContent) //parseInt(screen.textContent);
            else if (x !== null && y === null) {
                y = intOrFloat(screen.textContent) // parseInt(screen.textContent);
                x = operate(x, y, operator);
                y = null;
                screen.textContent = x;
            }
            operator = func.textContent;
            console.log(x, y, operator);
        });
    };
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (number.textContent === '+/-') {
            if (screen.textContent !== "") {
                screen.textContent = - screen.textContent;
            }
        } else if (number.textContent === '.') {
            if (!(screen.textContent.includes('.'))) {
                screen.textContent += '.';
            }
        } else {
            if (funcClick) {
                CE()
                funcClick = false;
            }
            addToScreen(number.textContent);
        }
        
    });
});

