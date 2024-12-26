const listItems=document.querySelector('#listItems')
const btnAdd=document.querySelector('#addItem')
const btnRemove=document.querySelector('#removeItem')

let count=0;
btnAdd.addEventListener('click', ()=>{
    count+=1;
    const li = document.createElement('li')
    li.textContent=`Item ${count}`
    listItems.appendChild(li)
})

btnRemove.addEventListener('click', ()=>{
    if(listItems.lastChild){
        listItems.removeChild(listItems.lastChild)
        count=0;
    }else{
        alert('All Items removed ')
    }
})
