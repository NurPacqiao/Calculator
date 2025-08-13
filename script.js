function factorial(num) {
    if (num < 0) return "Error";
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function square(a){
    return a * a;
}


function formatNumber(num) {
    if (num === 'Error') return num;
    if (Math.abs(num) >= 1e7 || (Math.abs(num) > 0 && Math.abs(num) < 1e-4)) {
        return num.toExponential(3); // scientific notation with 3 decimals
    }
    return parseFloat(num.toFixed(2)); // normal with 2 decimals
}

function operate(a, b, op) {
    let result;
    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case '÷':
            result = b !== 0 ? a / b : 'Error';
            break;
    }
    return formatNumber(result);
}

const screen = document.querySelector(".calculatorScreen");

let operand1 = ''; 
let operand2 = '';
let operator = '';
let resetNextInput = false;

const btns = document.querySelectorAll(".button");
btns.forEach(btn => {
    btn.addEventListener("click", () => {

            if(btn.textContent ==='AC'){
                screen.textContent = '';
                operand1 = '';
                operand2 = '';
                operator = '';
                resetNextInput = false;
                return;
            }

            if(btn.textContent === 'C'){
                if (operator === '') {
                    operand1 = operand1.slice(0, -1);
                    screen.textContent = operand1;
                } else {
                    operand2 = operand2.slice(0, -1);
                    screen.textContent = operand2;
                }
                return;
            }

            if (btn.textContent === 'n!'){
                const result = factorial(parseFloat(screen.textContent));
                screen.textContent = result.toString();
                operand1 = screen.textContent;
                operand2 = '';
                operator = '';
                resetNextInput = true;
                return;
            }

            if(btn.textContent === 'n2'){
                const result = square(parseFloat(screen.textContent));
                screen.textContent = result.toString();
                operand1 = screen.textContent;
                operand2 = '';
                operator = '';
                resetNextInput = true;
                return;
            }

            if(['+', '-', 'x', '÷'].includes(btn.textContent)){
                if(operand1 === '' && screen.textContent !== ''){
                    const result = operate(parseFloat(operand1), parseFloat(operand2), operator);
                    screen.textContent = result;
                    operand1 = result.toString();
                    operand2 = '';
                }
                operator = btn.textContent;
                resetNextInput = true;
                return;
            }

            if(btn.textContent === '='){
                if(operand1 !== '' && operand2 !== '' && operator !== ''){
                    const result = operate(parseFloat(operand1), parseFloat(operand2), operator);
                    screen.textContent = result;
                    operand1 = screen.textContent;
                    operand2 = '';
                    operator = '';
                    resetNextInput = true;
                }
                return;
            }

            if(operator === ''){
                if(resetNextInput){
                    operand1 = '';
                    resetNextInput = false;
                }
                if(btn.textContent === '.' && operand1.includes('.')) return;
                operand1 += btn.textContent;
                screen.textContent = operand1;
            }
            else {
                if(resetNextInput){
                    operand2 = '';
                    resetNextInput = false;
                }
                if(btn.textContent === '.' && operand2.includes('.')) return;
                operand2 += btn.textContent;
                screen.textContent = operand2;
            }

    });
});