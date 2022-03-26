"use strict"
// Desktop
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');
const block = document.querySelector('.display-block');
const opacity = document.querySelector('.opacity-block');
if (iconMenu) {
    iconMenu.addEventListener("click", () => {
        // document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        block.classList.toggle('_display');
        opacity.classList.toggle('_opacity')
    });
}

// Mobile wrapper
const iconMobile = document.querySelector('.mobile-body__icon');
const menuMobile = document.querySelector('.header__content-mobile');
const wrapper = document.querySelector('.wrapper-background');
// const header = document.querySelector('.header');
if (iconMobile) {
    iconMobile.addEventListener("click", () => {
        document.body.classList.toggle('_lock');
        iconMobile.classList.toggle('_mobile');
        menuMobile.classList.toggle('_mobile');
        wrapper.classList.toggle('_background');
        // header.classList.toggle('_scroll')
    });
}