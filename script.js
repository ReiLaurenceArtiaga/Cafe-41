const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");



document.addEventListener('DOMContentLoaded', function () {
    const orderIcon = document.getElementById('order-icon');
    const orderFormPopup = document.getElementById('orderFormPopup');
    const orderFormClose = document.getElementById('orderFormClose');
    const blurBgOverlay = document.querySelector('.blur-bg-overlay');

    orderIcon.addEventListener('click', function () {
        orderFormPopup.style.display = 'block';
        blurBgOverlay.style.display = 'block';
    });

    orderFormClose.addEventListener('click', function () {
        orderFormPopup.style.display = 'none';
        blurBgOverlay.style.display = 'none';
    });

    blurBgOverlay.addEventListener('click', function () {
        orderFormPopup.style.display = 'none';
        blurBgOverlay.style.display = 'none';
    });
});

document.getElementById('checkout-btn').addEventListener('click', function() {
    localStorage.setItem('checkoutClicked', 'true');
    window.location.href = 'index.html';
});

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
