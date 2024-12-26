const heading=document.querySelector('#heading')
const text=document.querySelector('.text')
const changeContent=document.querySelector('#changeContent')

changeContent.addEventListener('click', ()=>{
    
    heading.textContent='Welcom To JavaScript'
    text.innerHTML=`JavaScript is <em>Fun!!</em>.`
})


