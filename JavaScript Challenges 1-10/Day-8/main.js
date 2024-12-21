var x=5;

function scope(){
    let x=7
    console.log(`inside x=${x}`)
}

scope()
console.log(`outside x=${x}`)

