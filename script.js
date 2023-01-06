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

const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const functions = document.querySelectorAll('.func');

functions.forEach(func => {
    switch (func.textContent) {
        case 'CE': func.addEventListener('click', CE);
        case 'C' : func.addEventListener('click', clear);
        case 'Delete': func.addEventListener('click', Delete);
    }
    
});

numbers.forEach(number => {
    number.addEventListener('click', () => {
        addToScreen(number.textContent);
    });
});

