const menuToggle = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-nav');
const overlayMenu = document.querySelector('.overlay');

console.log(overlayMenu);

menuToggle.addEventListener('click',mudarMenu);

overlayMenu.addEventListener('click',mudarMenu);


function mudarMenu(){
    menu.classList.toggle('hide-nav');
    overlayMenu.classList.toggle('show');
}