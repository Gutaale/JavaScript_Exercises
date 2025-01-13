const form=document.querySelector('#post-form')
const btnEdit=document.querySelector('#btn-edit')
const btnDelete=document.querySelector('#btn-delete')
const post=document.querySelector('#post')
const image=document.querySelector('#image-url')

const postTitle=document.querySelector('#post-title')
const imageUrlInput=document.querySelector('#image-url-input')
const postBodyInput=document.querySelector('#post-body')

document.addEventListener('DOMContentLoaded', loadPosts)


function loadPosts(){
    const posts=readOldPost()
    posts.forEach(post => {
        addThePostToTheDOM(post)
    });


}

form.addEventListener('submit', addPost)

function addPost(e){
e.preventDefault()
// const postTitle=document.querySelector('#post-title').value.trim()
// const imageUrlInput=document.querySelector('#image-url-input').value.trim()
// const postBodyInput=document.querySelector('#post-body').value.trim()
if(postTitle.value.trim()!=='' && postBodyInput.value.trim()!==''){
    const newPost={
        id:Date.now(),
        title:postTitle.value.trim(),
        image:imageUrlInput.value.trim(),
        text:postBodyInput.value.trim()
    }
    // postTitle.value=''
    // imageUrlInput.value=''
    // postBodyInput.value=''
    // postTitle.focus()
    clearPostForm(postTitle, imageUrlInput,postBodyInput)
    savePostsToTheLocalStorage(newPost)
    addThePostToTheDOM(newPost)
}


}

function clearPostForm(postTitle, imageUrlInput,postBodyInput){
    postTitle.value=''
    imageUrlInput.value=''
    postBodyInput.value=''
    postTitle.focus()

}


function addThePostToTheDOM(newPost){
    const posts=document.querySelector(".posts")
    const li =document.createElement('li')
    li.className='post'
    li.dataset.id=newPost.id
    li.innerHTML=`
        <h2 class="title">${newPost.title}</h2>
            <img class="image" src="${newPost.image}" title="${newPost.title}">
            <p id="post">${newPost.text}</p>
            <div class="actions">
                <input type="button" value="Edit" id="btn-edit">
                <input type="button" value="Delete" id="btn-delete">
            </div>           
    `
    posts.appendChild(li)

    attachEventListners(li, newPost)

}

function attachEventListners(li, newPost){
    const btnEdit=li.querySelector('#btn-edit')
    const btnDelete=li.querySelector('#btn-delete')

    btnDelete.addEventListener('click', function(){
        handleDelete(newPost.id, li)
    })
    btnEdit.addEventListener('click', function(){
        handleEdit(newPost.id, li)
    })

}



function handleDelete(postid, li){
    let posts=readOldPost()
    posts=posts.filter(post=>post.id!==postid)
    localStorage.setItem('post', JSON.stringify(posts))
    li.remove()
}

function handleEdit(postid, li){
    const title=li.querySelector('.title')
    const image=li.querySelector('img')
    const text=li.querySelector('#post')

    const titleText=prompt('Edit your task', title.textContent)
    const imageUrl=prompt('Edit your task', image.getAttribute('src'))
    const bodyText=prompt('Edit your task', text.textContent)
   
    // console.log(titleText)
    // console.log(imageUrl)
    // console.log(bodyText)
    if(titleText!==null && titleText !=='' ){
        if(bodyText!==null && bodyText!==''){
            title.textContent=titleText
            image.setAttribute('src',imageUrl)
            text.textContent=bodyText

            const newPost={
                title:titleText,
                image:imageUrl,
                text:bodyText
            }
        updatePostToTheLocalStorage(postid, newPost)
        }
        else{
            console.log('please enter values')
        }
        
    }
    else{
        console.log('please enter values')
    }
    
}

function updatePostToTheLocalStorage(postid, newPost){
    const posts=readOldPost()
    const post=posts.find(post=>post.id==postid)
    // console.log(post)
    if(post){
        post.title=newPost.title
        post.image=newPost.image
        post.text=newPost.text
        localStorage.setItem('post', JSON.stringify(posts))
    }
}



function savePostsToTheLocalStorage(newPost){
    const oldPost =readOldPost();
    oldPost.push(newPost)
    localStorage.setItem('post', JSON.stringify(oldPost))
}


function readOldPost(){
    const oldPost =JSON.parse(localStorage.getItem('post')) || [];
    return oldPost
}