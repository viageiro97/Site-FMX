const botoes = document.querySelectorAll('.tab-btn');
botoes.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let id = e.currentTarget.dataset.id;
        const artigos = document.querySelectorAll('.bloco-texto');
        botoes.forEach((btn)=>{
            btn.classList.remove('actual-btn');
        })
        artigos.forEach((artigo)=>{
            artigo.classList.add('hide');
        });
        const artigoalvo= document.getElementById(id);
        artigoalvo.classList.remove('hide');
        e.currentTarget.classList.add('actual-btn');
    })
});