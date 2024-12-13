
// Spread Operator

const arr1=[1,2,3], arr2=[4,5];
const combinedArrays=[...arr1, arr2]

console.log('Spread Operator:')
console.log(`combined Arrays of [${arr1}] and [${arr2}] is:  \n\n[${combinedArrays}]`)

// Rest operator Execise
function multiplay(...numbers){
    return numbers.reduce((product, currentNum)=>product*currentNum,1)
}
console.log('-----------------')
console.log('Rest Operator:')
console.log(multiplay(5,6,2,3));