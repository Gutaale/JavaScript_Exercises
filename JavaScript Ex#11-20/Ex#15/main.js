const people=[
    {
        name:'Alice', 
        age:25, 
        city:'Wonderland'
    },
    {
        name:'Bob', 
        age:30, 
        city:'Builderland'
    },
    {name:'Charlie', 
        age:35, 
        city:'Chocolate Factory'
    }
]


for( person of people){
    // console.log(person)
    for(key in person){
        console.log(person[key])
        // console.log(person[key])
        // console.log(person[key])
    }
    console.log('--------------')
}

// const users={
//     name:'Alice', 
//     age:25, 
//     city:'Wonderland'
// }

// for(user in users){
// console.log(users[user])
// }