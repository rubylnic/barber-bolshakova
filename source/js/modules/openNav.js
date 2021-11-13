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