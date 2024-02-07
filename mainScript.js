"use strict"; // this word helps me write logical code 
const password = document.querySelector('#password');
const conformPassword = document.querySelector("#conform-password");
const button = document.querySelector('button');

button.addEventListener('click', () =>{
    // password.value = conformPassword.value ? alert('passwords match') : alert('passwords do not match') 
    if (password.value===conformPassword.value){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled','true');
        alert("Password is not conformed , please conform password by matching values");
    }


});