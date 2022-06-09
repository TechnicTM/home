const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

window.addEventListener("scroll", function(){
    const navContainer = document.querySelector('.nav-container');
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const langb = document.querySelector('.languageb');
    navContainer.classList.toggle('sticky', window.scrollY > 50);
    navbar.classList.toggle('sticky', window.scrollY > 50);
    navMenu.classList.toggle('sticky', window.scrollY > 50);
    langb.classList.toggle('sticky', window.scrollY > 50);
})

function language(){
    const lang = document.querySelector('.lang-menu');
    //const langbtn = document.querySelector('.languagebtn');
    lang.classList.toggle('activate');
    //langbtn.classList.toggle('activate');
}

const textarea = document.querySelector('textarea');
textarea.addEventListener("keyup", e =>{
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});