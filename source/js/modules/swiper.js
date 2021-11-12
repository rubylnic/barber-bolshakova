'use strict';
(function() {

  const faqSwiper = new Swiper('.faq__container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 24,

    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },

      1024: {

        slidesPerView: 4,
      }
    },
  });
})();