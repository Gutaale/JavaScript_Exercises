async function readFromJson(){
    try{
        const response= await fetch('./data.json')
        const jsonString=await response.json()
        console.log(response)
        console.log(jsonString)
    }catch(err){
        console.log(`Error: ${err}`)
    }
}


readFromJson()