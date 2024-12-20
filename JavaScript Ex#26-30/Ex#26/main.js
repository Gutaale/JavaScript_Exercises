// Synchronous or Blocking code
function readUserInfo(){
    
        let name=prompt('Please enter your name: ')
        console.log(`Hello ${name}`)
   
}

console.log("Reading user info started")

readUserInfo()

console.log("Readig user info Finished ")



// Asynchronous or Non-Blocking code

function readUserData(callback){
    setTimeout(()=>{
        const user={name:'Mohamed', age:30};
        callback(user)
    }, 2000)
}


console.log("Reading user data started again")

readUserData(function(user){
console.log(user)
})

console.log("Readig user Data Finished ")

