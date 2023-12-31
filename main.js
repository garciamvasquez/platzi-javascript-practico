/* Email y desktop menu */
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/* Icono hamburguesa y mobile menu */
const imgMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/* Icono carrito y detalles de producto */
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartDetail = document.querySelector('#shopping-cart');

/* Product cards container */
const cardsContainer = document.querySelector('.cards-container');

/* Aside product-detail */
const productDetail = document.querySelector('#product-detail');

/* Icon product-detail-close */
const iconCloseProductDetail = document.querySelector('.product-detail-close');


navbarEmail.addEventListener('click', toggleDesktopMenu);
imgMobileMenu.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCartDetail);
iconCloseProductDetail.addEventListener('click', closeProductDetail);


/* ########### */
/* # TOGGLES # */
/* ########### */
function toggleDesktopMenu() {
    /* const isShoppingCartDetailClosed = shoppingCartDetail.classList.contains('inactive');

    if (!isShoppingCartDetailClosed) {
        shoppingCartDetail.classList.add('inactive');
    } */

    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    shoppingCartDetail.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function toggleMobileMenu() {
    /* const isShoppingCartDetailClosed = shoppingCartDetail.classList.contains('inactive');

    if (!isShoppingCartDetailClosed) {
        productDetail.classList.add('inactive');
    } */

    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    shoppingCartDetail.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function toggleShoppingCartDetail() {
    /* const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } */

    shoppingCartDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}


/* ################ */
/* # OPEN - CLOSE # */
/* ################ */
function openProductDetail() {
    /* const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (isProductDetailClosed) {
        productDetail.classList.remove('inactive');
    } */

    productDetail.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartDetail.classList.add('inactive');
}

function closeProductDetail() {
    /* const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    } */

    productDetail.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartDetail.classList.add('inactive');
}


const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 


function renderProducts(arr) {
    for (product of arr) {
        /* div cards-container */
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /* img */
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        /* div product-info */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        /* div div-info */
        const productInfoDiv= document.createElement('div');
    
        /* div product price */
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        /* p product name */
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        /* figure */
        const productInfoFigure = document.createElement('figure');
    
        /* img icon-add-to-cart.svg */
        const imgAddCart = document.createElement('img');
        imgAddCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(imgAddCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

