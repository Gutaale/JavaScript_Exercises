let a=10,b=4;
function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    if(num2>0){
        return num1 + num2
    }else{
        console.log("Can't divide to zero!!")
    }
}

function basicOperations(){
    console.log(`${a} + ${b}: ${add(a,b)}`)
    console.log(`${a} - ${b}: ${subtract(a,b)}`)
    console.log(`${a} * ${b}: ${multiply(a,b)}`)
    console.log(`${a} / ${b}: ${divide(a,b)}`)
}

basicOperations()


