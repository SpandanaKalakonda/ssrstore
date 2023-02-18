let searchFrom = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick =() =>{
    searchFrom.classList.toggle('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let shopingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick =() =>{
    shopingCart.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick =() =>{
    loginForm.classList.toggle('active');
    searchFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    navBar.classList.remove('active');
}

let navBar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick =() =>{
    navBar.classList.toggle('active');
    searchFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchFrom.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}