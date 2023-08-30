'use strict';

// slideshow
const images = ['./assets/images/hero-banner-1.png', './assets/images/hero-banner-2.png', './assets/images/hero-banner-3.png'];
const heroSection = document.getElementById('heroSection');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function changeBackgroundImage(index) {
  heroSection.style.backgroundImage = `url('${images[index]}')`;
}

function goToPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeBackgroundImage(currentIndex);
}

function goToNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  changeBackgroundImage(currentIndex);
}

prevBtn.addEventListener('click', goToPreviousImage);
nextBtn.addEventListener('click', goToNextImage);

// Initial call to set the initial background image
changeBackgroundImage(currentIndex);

// Change background image every 3 seconds (adjust as needed)
setInterval(goToNextImage, 3000);


//  navbar toggle

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}


// header & go top btn active on page scroll

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});