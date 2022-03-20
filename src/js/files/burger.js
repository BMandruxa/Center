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
if (iconMobile) {
    iconMobile.addEventListener("click", () => {
        iconMobile.classList.toggle('_mobile');
        menuMobile.classList.toggle('_mobile');
    });
}