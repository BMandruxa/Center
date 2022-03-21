"use strict"
new Swiper('.reviews-slider', {
   grabCursor: true,
   freeMode: true,
   spaceBetween: 33,
   navigation: {
      nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
   },
   slidesPerGroup: 1,
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 48,
         slidesPerGroup: 1,
      },
      400: {
         slidesPerView: 1.1,
         spaceBetween: 48,
         slidesPerGroup: 1,
      },
      450: {
         slidesPerView: 1.4,
         spaceBetween: 33,
         slidesPerGroup: 1,
      },
      500: {
         slidesPerView: 1.8,
         spaceBetween: 33,
         slidesPerGroup: 1,
      },
      600: {
         slidesPerView: 1.9,
         spaceBetween: 33,
         slidesPerGroup: 1,
      },
      650: {
         slidesPerView: 2.1,
         spaceBetween: 33,
         slidesPerGroup: 1,
      },
      700: {
         slidesPerView: 2.2,
         spaceBetween: 33,
         slidesPerGroup: 1,
      },
      800: {
         slidesPerView: 2.5,
         spaceBetween: 33,
         slidesPerGroup: 1,
      },
      900: {
         slidesPerView: 2.8,
         spaceBetween: 33,
         slidesPerGroup: 1,
      },
      1100: {
         slidesPerView: 3.5,
         spaceBetween: 33,
         slidesPerGroup: 1,
         freeMode: false,
      },
      1235: {
         slidesPerView: 4,
         spaceBetween: 33,
         slidesPerGroup: 1,
         freeMode: false,
      }
   }
});