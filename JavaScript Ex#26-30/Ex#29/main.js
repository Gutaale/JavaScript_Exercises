async function readDataFromFile(){
    try{
        const data= await  fetch('data.json')
        const convertedData = await data.json()
        console.log('User Data: ', convertedData)

    }catch(err){
        console.log("Error: ", err)
    }
    
}

readDataFromFile()