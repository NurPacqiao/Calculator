function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        console.log("You can not divide by 0");
        return;
    }
    else{
        return a / b;
    }
}

console.log(add(1, 2));
console.log(subtract(2, 3));
console.log(multiply(3, 4));
console.log(divide(6, 3));

const screen = document.querySelector(".calculatorScreen");


let operand1, operand2, operator;

function operate(operand1, operand2, operator){
    switch (operator){
        case '+':
            screen.textContent = add(operand1. operand2);
        case '-':
            screen.textContent = subtract(operand1, operand2);
        case 'x':
            screen.textContent = multiply(operand1, operand2);
        case '/':
            screen.textContent = divide(operand1, operand2);
    }
}

function buttons(){
    const btns = document.querySelector(".buttons");
    for(let i = 0; i < 10; i++){
        const btn = document.createElement("button");
        btn.classList.add("numbers");
        btn.textContent = i;
        btns.appendChild(btn);
    }
}


buttons();
operate(1, 2, '-');