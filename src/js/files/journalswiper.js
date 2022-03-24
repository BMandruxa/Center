"use strict"
new Swiper('.journal-slider', {
   grabCursor: true,
   freeMode: true,
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   breakpoints: {
      // when window width is >= 400px
      320: {
         slidesPerView: 1.3,
         spaceBetween: 33,
         // slidesPerGroup: 1,
      },
      450: {
         slidesPerView: 1.3,
         spaceBetween: 32,
         // slidesPerGroup: 1,
      },
      // 500: {
      // 	slidesPerView: 1.4,
      // 	spaceBetween: 32,
      // 	// slidesPerGroup: 1,
      // },
      550: {
         slidesPerView: 1.5,
         spaceBetween: 32,
         // slidesPerGroup: 1,
      },
      650: {
         slidesPerView: 1.6,
         spaceBetween: 32,
         // slidesPerGroup: 2,
      },
      700: {
         slidesPerView: 1.8,
         spaceBetween: 32,
         slidesPerGroup: 1.1,
      },
      800: {
         slidesPerView: 2,
         spaceBetween: 32,
         slidesPerGroup: 1,
      },
      900: {
         slidesPerView: 2.3,
         spaceBetween: 32,
         slidesPerGroup: 1.7,
      },
      1100: {
         slidesPerView: 2.7,
         spaceBetween: 32,
         slidesPerGroup: 1.3,
         freeMode: false,
      },
      // when window width is >= 1235px
      1235: {
         slidesPerView: 3,
         spaceBetween: 32,
         slidesPerGroup: 1,
         freeMode: false,
      }
   }
});