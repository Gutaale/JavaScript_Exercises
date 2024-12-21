let numbers=[2,4,5,3,6]
console.log(`Original array: [${numbers}]`)
numbers.push(10);
console.log(`added 10 to the end [${numbers}]`)
numbers.pop()
console.log(`After removed the last element: [${numbers}]`)

if(numbers.includes(11)){
    console.log(`11 is in the list `)
}else{
    console.log(`11 is not in the list `)

}
