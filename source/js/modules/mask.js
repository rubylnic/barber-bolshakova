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
