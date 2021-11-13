'use strict';
(function() {

  let initializeGallery = function() {
    let galleries = document.querySelectorAll('.lightgallery');
    for (let i = 0; i < galleries.length; i++) {
      lightGallery(galleries[i], {
        thumbnail: true,
        share: false,
        download: false,
      })
    }
  }

  setTimeout(initializeGallery, 0);

})();
'use strict';
(function() {
  var header = document.querySelector('.header');
  var main = document.querySelector('main');
  if (header) {
    var sticky = header.offsetHeight;
    window.addEventListener('scroll', function() {

      if (window.pageYOffset > sticky) {
        header.classList.add("header--scroll");
        main.style.paddingTop = sticky + 'px';
      } else {
        header.classList.remove("header--scroll");
        main.style.paddingTop = '0';
      }
    });
  }
})();
'use strict';
(function() {
  let tel = document.querySelector('.tel');
  if (tel) {
    var phoneMask = IMask(
      document.querySelector('.tel'), {
        mask: '+{7}(000)000-00-00'
      });
  }
})();

'use strict';
(function() {
  //кнопка открытия - <div><a href="#" class="(классы для стилей) open-modal" data-modal="1" и т.д. (data-modal="2" ...)></div>

  //сами модалки <section class="modal modal--closed" data-modal-content="1"> и т.д. (data-modal-сontent="2" (соответствует кнопке открытия))>
  var modal = document.querySelector('.modal');
  var modals = document.querySelectorAll('.modal');
  var header = document.querySelector('.header');
  if (modal) {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
    var btnOpen = document.querySelectorAll('.open-modal');
    var modals = document.querySelectorAll('.modal');
    var closeModals = document.querySelectorAll('.close-modal');
    closeModals.forEach(closeModal => closeModal.addEventListener('click', function(evt) {
      evt.target.closest('.modal').classList.add('modal--closed');

    }));

    var closeModal = function(modal) {
      modal.classList.add('modal--closed');
      modal.classList.remove('modal--active');
      if (header.classList.contains('header--zindex')) {
        header.classList.remove('header--zindex');
      }
    };
    var openModal = function(modal) {
      modals.forEach(modal => modal.classList.add('modal--closed'));
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--active');

      modal.querySelector('.modal__close').addEventListener('click', function() {
        closeModal(modal)
      });

      //обработчик клика по оверлею

      modal.querySelector('.modal__overlay').addEventListener('click', function() {
        closeModal(modal);
      });

      modal.querySelector('.modal__container').addEventListener('click', function(evt) {
        evt.stopPropagation();
      });

      //обработчик клика по ESC

      document.addEventListener('keydown', function(evt) {
        if (evt.key === ESC_KEYCODE) {
          closeModal(modal);
        };
      });
    };

    for (var i = 0; i < btnOpen.length; i++) {
      //клики по кнопкам открытия
      btnOpen[i].addEventListener("click", function(e) {
        e.preventDefault();
        var activeModalAttr = this.getAttribute('data-modal');
        var modal = document.querySelector(`[data-modal-content = ${activeModalAttr}]`);
        openModal(modal);
        if (activeModalAttr === "choose-city") {
          header.classList.add('header--zindex');
        }
      }, false);

      // открытие по Enter

      btnOpen[i].addEventListener("keydown", function(e) {
        if (e.key === ENTER_KEYCODE) {
          e.preventDefault();
          var activeModalAttr = this.getAttribute('data-modal');
          var modal = document.querySelector(`[data-modal-content = ${activeModalAttr}]`);
          openModal(modal);
          if (activeModalAttr === "choose-city") {
            header.classList.add('header--zindex');
          }
        };
      });
    };

  };
})();

'use strict';
(function() {
  const openBtn = document.querySelector('.open-nav');
  const closeBtn = document.querySelector('.close-nav');
  const nav = document.querySelector('.nav');
  if (openBtn) {
    openBtn.addEventListener('click', function() {
      nav.classList.remove('hidden');
      this.classList.add('hidden');
      closeBtn.classList.remove('hidden');
    })
    closeBtn.addEventListener('click', function() {
      nav.classList.add('hidden');
      this.classList.add('hidden');
      openBtn.classList.remove('hidden');
    })
  }
})();
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