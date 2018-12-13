const axios = require('axios')
const baseURL = 'http://localhost:3000'

function init(){
 document.addEventListener('keyup', isFilled)
}

function isFilled(){
    const inputs = document.querySelectorAll('form input')
    const button = document.querySelector('#submit')
    for (let input of inputs){
        if (input.value === '') return button.setAttribute('disabled', 'disabled')
    }
    button.removeAttribute('disabled')
    document.querySelector('form').onsubmit = function (e) { submit(e) }
}

function submit(e){
    e.preventDefault()
    const body = getBody()
    axios.post(`${baseURL}/auth/token`, body)
    .then(token => {
        localStorage.setItem('token', token.data.token)
        document.location.href = 'protected-page.html'
    })
    .catch(err => {
        if(err.response.data) surfaceError(err.response.data.message)
    })
}

function getBody(){
    const inputs = document.querySelectorAll('form input')
    const body = {}
    for(let input of inputs){
        body[input.id] = input.value    
    }
    return body
}

function surfaceError(err){
    const warning = document.querySelector('.warning')
    console.error(err)
    if (err.response) warning.innerHTML = `${err.response.data.message}`
    else warning.innerHTML = `${err}`
    
    warning.classList.remove('hidden')
}
module.exports = {init, getBody, surfaceError}