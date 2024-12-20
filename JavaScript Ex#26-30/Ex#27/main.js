
function fetchUserData() {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success =true;
            if(success){
                resolve({id:101, name:"Mohamed"})
            }
            else{
                reject("Failed to get User data")
            }
        }, 2000)
    })
    
}

fetchUserData()
.then((user)=>console.log(`user id: ${user.id}\nuser name: ${user.name} `))
.catch((err)=>console.log(err))