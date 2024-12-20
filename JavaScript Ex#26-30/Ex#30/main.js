function operate(a,b, callback){
    return callback(a,b)
}

function add(a, b){
    return a+b;
}


function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}


function divide(a, b){
    if(b > 0){
        return a / b;
    }
    else{
        return 'Error: "Can\'t divide to Zero"';
    }
}

let num1=8, num2=4

console.log(`Addition: ${num1} + ${num2} = ${operate(num1, num2, add)}`)
console.log(`Subtraction: ${num1} - ${num2} = ${operate(num1, num2, subtract)}`)
console.log(`Multiply: ${num1} * ${num2} = ${operate(num1, num2, multiply)}`)
console.log(`Divide: ${num1} / ${num2} = ${operate(num1, num2, divide)}`)