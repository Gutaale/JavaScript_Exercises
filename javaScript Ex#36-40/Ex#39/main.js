// import cors from 'cors'
const fromInput=document.querySelector('#from-input')
const toInput=document.querySelector('#to-input')
const form =document.querySelector('#form')
const textToTranslate =document.querySelector('#text-to-translate')
const displayResult =document.querySelector('#display-translated-text')

document.addEventListener('DOMContentLoaded', ReadLanguages);


async function ReadLanguages(){

    const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '733037d81bmshf6ce57869f0865ep1eb5cajsn40c84fe8d5b3',
		'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const {translation} = await response.json();

    // console.log(translation)
    // const code=[]
    const languages=[]
    languages.push(translation)

    fillDataToTheFromDropdown(languages)
    fillDataToDropdown(languages)
} catch (error) {
	console.error(error);
}

}

function fillDataToTheFromDropdown(languages){
    // console.log(languages)
    languages.forEach(language => {
        // console.log(language.af.name)
        for(key in language){
            const option=document.createElement('option')
            option.value=key;
            option.textContent=language[key].name
            fromInput.appendChild(option)
        }
        });
}
function fillDataToDropdown(languages){
    languages.forEach(language => {
        for(key in language){
            const option=document.createElement('option')
            option.value=key;
            option.textContent=language[key].name
            toInput.appendChild(option)
        }
        });
}


form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const firstLanguage=fromInput.value;
    const secondLanguage=toInput.value
    const text=textToTranslate.value.trim()
    if(firstLanguage!=='select a language' && firstLanguage!=='' ){
       
        if(secondLanguage!=='select a language' && secondLanguage!== ''){
            // console.log('Welcome')
            readTextAndTranslate(firstLanguage, secondLanguage,text)
        }else{
            alert('Please select languages')   
        }
    }else{
        alert('Please select languages')
    }
})


async function readTextAndTranslate(firstLanguage, secondLanguage,plainText) {
    const url = `https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=${secondLanguage}&from=${firstLanguage}&textType=plain`;
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '733037d81bmshf6ce57869f0865ep1eb5cajsn40c84fe8d5b3',
		'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify([
		{
			text: plainText
		}
	])
};

try {
	const response = await fetch(url, options);
	const result= await response.json();
    let text=''
    result.forEach(rs=>{
        text=rs.translations[0].text
    })
    displayResult.textContent=text
    // console.log(text)
} catch (error) {
	console.error(error);
}
    
}