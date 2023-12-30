let navbarEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let imgMobileMenu = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);
imgMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}