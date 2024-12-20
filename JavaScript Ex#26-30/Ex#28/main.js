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


async function displayUserData (){
    try { 
        console.log("Start getting user data...");
        const user = await fetchUserData ();
        console.log("User data:",user);
    }
    catch(err){
      console.log("Error:",err);
    }
}


displayUserData();
