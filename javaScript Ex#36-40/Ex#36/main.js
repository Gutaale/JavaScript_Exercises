const picketColor=document.querySelector('#color')
const colorPreview=document.querySelector('#color-preview')
const listItems=document.querySelector('#list-items')
const btnClear=document.querySelector('#clear')


picketColor.addEventListener('input', ()=>{
    const selectedColor=picketColor.value;
    colorPreview.style.backgroundColor=selectedColor;

    const li=document.createElement('li')
    li.style.color=selectedColor;
    li.style.listStyle='none';
    li.style.borderBottom=`2px solid ${selectedColor}`;
    li.style.padding='10px';
    li.textContent=selectedColor;
    listItems.appendChild(li);
    listItems.style.display='block';
})

btnClear.addEventListener('click', ()=>{
    listItems.innerHTML=''
})