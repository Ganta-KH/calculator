function clear() {
    screen.textContent = "";
}

function Delete() {
    let str = screen.textContent;
    if (str.length !== 0 || str.length !== 1) {
        screen.textContent = str.split("").slice(0, str.length-1).join('');
    } else clear();
}

function CE() {
    screen.textContent = "";
}

function addToScreen(num) {
    screen.textContent += num;
}

function operate(numbers, operator) {
    if (numbers.length === 1) screen.textContent = numbers[0];
    else if (numbers.length === 0) screen.textContent = "";
    else {
        switch (operator) {
            case '+': screen.textContent = numbers[0] + numbers[1];
            case '-': screen.textContent = numbers[0] - numbers[1];
            case 'x': screen.textContent = numbers[0] * numbers[1];
            case '/':
                if (numbers[1] === 0) screen.textContent = 'Math Error';
                else screen.textContent = numbers[0] / numbers[1];
        }
    }
}

const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.func');
let funcClick = false;
let x = 0;
let y = null;

functions.forEach(func => {
    if (func.textContent === 'CE') func.addEventListener('click', CE);
    else if (func.textContent === 'C') func.addEventListener('click', clear);
    else if (func.textContent === 'Delete') func.addEventListener('click', Delete);
    else {
        func.addEventListener('click', () => funcClick = true);
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

