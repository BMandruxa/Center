"use strict"
// Desktop
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", () => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Mobile
const iconMobile = document.querySelector('.mobile-body__icon');
const menuMobile = document.querySelector('.header__content-mobile');
// const header = document.querySelector('.header');
if (iconMobile) {
    iconMobile.addEventListener("click", () => {
        // document.body.classList.toggle('_lock');
        iconMobile.classList.toggle('_mobile');
        menuMobile.classList.toggle('_mobile');
        // header.classList.toggle('_scroll')
    });
}