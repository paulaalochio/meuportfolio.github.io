/*EFEITO DE DIGITAÇÃO NA LOGO */

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 80 * i)

  });
}
const titulo = document.querySelector('.logo-name');
typeWrite(titulo);

document.querySelector(".botaozinho")

/*ATIVANDO ANIMATION NO SOBRE-text e IMG*/


/*ATIVANDO ANIMAÇÃO DAS HABILIDADES*/
   

/*BOTÃO BACK TO TOP */

var btn = document.querySelector("#topButton");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});