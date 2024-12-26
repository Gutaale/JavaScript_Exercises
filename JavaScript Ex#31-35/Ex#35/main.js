const img=document.querySelector('#image')
const btnChange=document.querySelector('#btnChange')

btnChange.addEventListener('click', (event)=>{
event.preventDefault()
// Reading style properties from user input
const url=prompt('Please enter image url: ')
const width=prompt('Please enter width:')
const height=prompt('Please enter height:')
const border=prompt('Please enter border')
const padding=prompt('Please enter  padding')
const background=prompt('Please enter background color')
const borderRedius=prompt('Please enter border radius')

// appling Style properties to the image
img.setAttribute('src',url)
img.setAttribute('width',width)
img.setAttribute('height',height)
img.style.border=border
img.style.borderRadius=borderRedius
img.style.backgroundColor=background
img.style.padding=padding
})