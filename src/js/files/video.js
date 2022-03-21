"use strict"
// ====================VIDEO
document.querySelector('.click-for-video')?.addEventListener('click', function () {
   this.style.display = 'none';
   document.querySelector('div.youtube').style.display = 'block';
   document.querySelector('iframe.youtube')
      .src = 'https://player.vimeo.com/video/651897356?h=f3b32933cf&title=0&byline=0&portrait=0&autoplay=1';
})