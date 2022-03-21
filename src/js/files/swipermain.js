"use strict"
//navigation swiper
window.onload = function () {
   var a = document.querySelector('#mouse1');
   a?.addEventListener('mouseover', () => {
      document.getElementById('blockone').style.border = '2px solid #33E6FF';
   })
   a?.addEventListener('mouseout', () => {
      document.getElementById('blockone').style.border = 'none';

   })

   var b = document.querySelector('#mouse2');
   b?.addEventListener('mouseover', () => {
      document.getElementById('blocktwo').style.border = '2px solid #33E6FF';

   })
   b?.addEventListener('mouseout', () => {
      document.getElementById('blocktwo').style.border = 'none';
   })
}

// SWIPER
let myImageSlider = new Swiper('.image-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   loop: true,
   speed: 1000,
   // autoplay: {
   // 	delay: 4000,
   // 	stopOnLastSlide: false,
   // 	disableOnInteraction: true,
   // },
});
let myFigureSlider = new Swiper('.figure-slider', {
   loop: true,
   speed: 1500,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   // autoplay: {
   // 	delay: 4000,
   // 	stopOnLastSlide: false,
   // 	disableOnInteraction: true,
   // },
});
let myZadnikSlider = new Swiper('.zadnik-slider', {
   loop: true,
   speed: 1500,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   // autoplay: {
   // 	delay: 4000,
   // 	stopOnLastSlide: false,
   // 	disableOnInteraction: true,
   // },
});
myImageSlider.controller.control = myFigureSlider;
myFigureSlider.controller.control = myImageSlider;
myImageSlider.controller.control = myZadnikSlider;
myZadnikSlider.controller.control = myImageSlider;
myZadnikSlider.controller.control = myFigureSlider;
myFigureSlider.controller.control = myZadnikSlider;