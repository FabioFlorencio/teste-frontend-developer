const elementos = document.querySelectorAll('[data-anima]');
const animacaoClass = 'animacao';
const acordeonArray = document.getElementsByClassName('btn-efeito');

/*
==============================================
Efeito acordeon
==============================================
*/
for(var i=0; i < acordeonArray.length; i++){
    acordeonArray[i].addEventListener("click",function(){
        this.classList.toggle("selecionado");
        const painel = this.nextElementSibling;

        if(painel.style.maxHeight){
            painel.style.maxHeight = null;
        }else{
            painel.style.maxHeight = painel.scrollHeight+"px";
        }
    });
}  

/*
==============================================
Efeito scrool
==============================================
*/
function animaScrool(){
    const topoPaginaNaJanela = window.pageYOffset+((window.innerHeight*3)/4); // 3/4 da janela onde vai começar a animação

    elementos.forEach(function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        }else{
            elemento.classList.remove(animacaoClass);
        }
    });    
};

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScrool();
    });
}

