let sliderElement = document.querySelector('#slider');
let buttonElement = document.queryCommandIndeterm('#button');
let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value; //setar o valor do slider ao elemento

//atualiza o elemento com o valor que está selecionado no slider
slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword () {
    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha).then(() => {
      alert("Senha Copiada com Sucesso!");
    })
    .catch(() => {
      alert("Ops! Algo deu Errado.");
    });  
}