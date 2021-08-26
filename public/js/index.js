
let divFrase = document.querySelector('.card-body')// Solicitando a tag 

let button = document.querySelector('.btn') // solicitando o botão

button.addEventListener('click', fraseAleatorio) // evento do botão


function fraseAleatorio(){
    let i = Math.round(Math.random() *11) // criando numero randomico
     // adc a frase na div
    divFrase.textContent = frases[i]
     
}