const menuToggle = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-nav');
const overlayMenu = document.querySelector('.overlay');
const header = document.getElementById('header');

window.addEventListener('scroll',function(){
    console.log(pageYOffset);
    if(pageYOffset>header.clientHeight){
        header.classList.add('navScrolled');
    }else{
        header.classList.remove('navScrolled');
    }
})
menuToggle.addEventListener('click',mudarMenu);
overlayMenu.addEventListener('click',mudarMenu);


function mudarMenu(){
    menu.classList.toggle('hide-nav');
    overlayMenu.classList.toggle('show');
}