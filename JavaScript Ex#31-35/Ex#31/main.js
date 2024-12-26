async function readUserData() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const converteResponse= await response.json()
        console.log(converteResponse)
    }catch(err){
        console.log('Error:',err)
    }
    
}

readUserData()