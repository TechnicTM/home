//----------------------\\
  // > general things < \\
//----------------------\\

//menu nav
/*const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const menuBlack = document.querySelector('.blacknav');
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    menuBlack.classList.toggle('active');
})*/

setTimeout(function() {
  document.querySelector("body").classList.add("show");
}, 250);

function homeLink() {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function(){
    window.location.replace("index.html");
  }, 250);
}

function blogLink() {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function(){
    window.location.replace("blog.html");
  }, 250);
}

function villagerBruteBlogLink() {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function(){
    window.location.replace("villagerBruteBlog.html");
  }, 250);
}

function websiteBlogLink() {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function(){
    window.location.replace("websiteBlog.html");
  }, 250);
}


//-----------------\\
  // > home page < \\
//-----------------\\

//video toggle
/*function toggleVideo(){
    const video = document.querySelector('.video');
    const vid = document.querySelector('.videobox');
    video.classList.toggle('activity')
    vid.currentTime = 0;
    vid.pause();
}*/

//Game Snackbar
function Game() {
  const gs = document.getElementById("snackbar-cs");
  gs.className = "show";
  setTimeout(function(){ gs.className = gs.className.replace("show", ""); }, 3000);
  const gb = document.getElementById("gb");
  gb.classList.add('show');
  setTimeout(function(){ gb.classList.remove('show')}, 3000);
  const mb = document.querySelector(".modbtn");
  mb.classList.add('show');
  setTimeout(function(){ mb.classList.remove('show')}, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const sliderContainer = document.querySelector(".slider-container");
  const textSwitch = Array.from(slider.querySelectorAll(".textSwitch"));
  const img1 = Array.from(slider.querySelectorAll(".img1"));
  const dots = Array.from(document.querySelectorAll(".dot"));
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let currentSlide = 0;
  let timer;
  let timerCount = 0;

  function showSlide(index) {
    img1.forEach((img1, i) => {
      if (i === index) {
        img1.classList.add("active");
        dots[i].classList.add("active");
      } else {
        img1.classList.remove("active");
        dots[i].classList.remove("active");
      }
    });
    textSwitch.forEach((txt, i) => {
      if (i === index) {
        txt.classList.add("active");
      } else {
        txt.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % img1.length;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1);
    if (currentSlide <= -1) {
      currentSlide = img1.length-1;
    }
    showSlide(currentSlide);
  }

  function startTimer() {
    timer = setInterval(addonet, 625); // Change slide duration here (in milliseconds)
  }

  function stopTimer() {
    clearInterval(timer);
  }
  
  function addonet() {
    timerCount+=0.625;
    // console.log(timerCount);
    if (timerCount == 5) {
      timerCount = 0;
      nextSlide();
    }
  }

  function handleDotClick(index) {
    showSlide(index);
    currentSlide = index;
    stopTimer();
  }

  function handleMouseEnter() {
    stopTimer();
  }

  function handleMouseLeave() {
    startTimer();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => handleDotClick(index));
  });

  sliderContainer.addEventListener("mouseenter", handleMouseEnter);
  sliderContainer.addEventListener("mouseleave", handleMouseLeave);
  
  prev.addEventListener("click", () => prevSlide())
  next.addEventListener("click", () => nextSlide())

  startTimer();
});


//------------------\\
  // > blog page < \\
//------------------\\

// -- pages of the blogs -- \\
// page one
    function pageOne() {
      const pageOne = document.querySelector('.page1btn');
      const pageTwo = document.querySelector('.page2btn');
      pageOne.classList.add('activess');
      pageTwo.classList.remove('activess');
      //------------------------------------------------\\
      const cardPageOne = document.querySelector('.page1');
      const cardPageTwo = document.querySelector('.page2');
      cardPageTwo.classList.add('hide');
      cardPageOne.classList.remove('hide');
    }
// page two
    function pageTwo() {
      const pageOne = document.querySelector('.page1btn');
      const pageTwo = document.querySelector('.page2btn');
      pageTwo.classList.add('activess');
      pageOne.classList.remove('activess');
      //------------------------------------------------\\
      const cardPageOne = document.querySelector('.page1');
      const cardPageTwo = document.querySelector('.page2');
      cardPageOne.classList.add('hide');
      cardPageTwo.classList.remove('hide');
    }
// --------- עד כאן --------- \\


//-------------------\\
  // > mods page < \\
//-------------------\\