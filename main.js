/* Email y desktop menu */
let navbarEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');

/* Icono hamburguesa y mobile menu */
let imgMobileMenu = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');

/* Icono carrito y detalles de producto */
let navbarShoppingCar = document.querySelector('.navbar-shopping-cart');
let productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
imgMobileMenu.addEventListener('click', toggleMobileMenu);
navbarShoppingCar.addEventListener('click', toggleProductDetail);



function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if(!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

