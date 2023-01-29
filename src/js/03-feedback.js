import { throttle } from 'lodash';

const correo = document.querySelector(".email");
const textarea = document.querySelector(".textarea");
const load = document.querySelector(".feedback-form");
const btn = document.querySelector(".btn");

correo.addEventListener("input" , throttle( event => {
    localStorage.setItem("email",event.currentTarget.value);
}, 500));


textarea.addEventListener("input" , throttle( event => {
    localStorage.setItem("message",event.currentTarget.value);
}, 500));

function recuperar(){
    correo.value=localStorage.getItem("email");
    textarea.value=localStorage.getItem("message");
    let usuario = {
        correo: correo.value,
        textarea: textarea.value,
    
    };
    console.log(usuario);
}


document.addEventListener("DOMContentLoaded", recuperar);




load.addEventListener("submit" , ()=>{
    correo.textContent = "";
    textarea.textContent = "";
//    localStorage.removeItem("email");
//    localStorage.removeItem("message");
});
//const ink = localStorage.getItem("email");
