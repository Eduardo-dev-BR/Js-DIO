// function clicou(){
//     alert('Obrigado por clicar')
// } 

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b> por clicar"
}

function redirecionar(){
  window.open("http://google.com") //abre em outra page
  window.location.href = "http://google.com" //abre na mesma page
}

// function trocar(){
//     p = document.getElementById('mousemove')
//     p.innerHTML = "Voce passou o mouse!"
// }

// function voltar(){
//     p = document.getElementById('mousemove')
//     p.innerHTML = "Passe o mouse aqui"
// }

function trocar(elemento){
    elemento.innerHTML = "Voce passou o mouse!"
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!"
}

//coletar valores
function funcaoChange(elemento){
    console.log(elemento.value)
}