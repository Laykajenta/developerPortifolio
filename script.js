// navigation
/* const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

function hideMenu() {
    nav.classList.remove('active');
    menuIcon.classList.remove('active');
} */

// slideshow
let currentImageIndex = 0;
const images = document.querySelectorAll('.slide');

function switchImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}
setInterval(switchImage, 5000);
//Banner --------------
const bannerContent = document.querySelector('.bannerContent');
let messageHTML = 'span class = "contact-message">Contact us at m@laykajenta.no for more information</span>';
let repetedMessage = messageHTML.repeat(10);

//set repeated message as content
bannerContent.innerHTML = repetedMessage + repetedMessage;

function


