const menuToggle = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-nav');
menuToggle.addEventListener('click',()=>{
    menu.classList.toggle('hide-nav');
})