//menu nav
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const menuBlack = document.querySelector('.blacknav');
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    menuBlack.classList.toggle('active');
})

//discord tab
function discorddisplay(){
    const dis = document.querySelector('.discordtab');
    dis.classList.toggle('activate');
}

//video toggle
function toggleVideo(){
    const video = document.querySelector('.video');
    const vid = document.querySelector('.videobox');
    video.classList.toggle('activity')
    vid.currentTime = 0;
    vid.pause();
}

//Game Snackbar
function Game() {
  let gs = document.getElementById("snackbar-cs");
  gs.className = "show";
  setTimeout(function(){ gs.className = gs.className.replace("show", ""); }, 3000);
}