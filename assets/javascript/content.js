const botoes = document.querySelectorAll('.tab-btn');
const textcontent = document.querySelector('.manifesto');
botoes.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let id = e.currentTarget.dataset.id;
        const artigos = document.querySelectorAll('.bloco-texto');
        botoes.forEach((btn)=>{
            btn.classList.remove('actual-btn');
        })
        artigos.forEach((artigo)=>{
            artigo.classList.remove('showtext');
        });
        const artigoalvo= document.getElementById(id);
        artigoalvo.classList.add('showtext');

        botoes.forEach((b)=>{
            if(b.dataset.id == id){
                b.classList.add('actual-btn');
            }
        })
        texto(textcontent);
        //e.currentTarget.classList.add('actual-btn');
    })
});

function texto(element) {
    element.scrollIntoView();
}