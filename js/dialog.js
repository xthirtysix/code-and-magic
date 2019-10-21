'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupUserName = setup.querySelector('.setup-user-name');

  // Обработчики открытия/закрытия окна настроек
  var onUserpicClick = function () {
    openPopup();
  };

  var onUserpicEnterPress = function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  };

  var onPopupEscPress = function (evt) {
    if (setupUserName !== document.activeElement) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  var onCloseButtonEnterPress = function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  };

  var onCloseButtonClick = function () {
    closePopup();
  };

  // Перетаскивание окна
  var dialogHandler = setup.querySelector('.upload');

  var onDialogHandlerMousedown = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  var setupOpen = document.querySelector('.setup-open');

  setupOpen.addEventListener('click', onUserpicClick);
  setupOpen.addEventListener('keydown', onUserpicEnterPress);

  var setupClose = setup.querySelector('.setup-close');

  var openPopup = function () {
    setup.classList.remove('hidden');
    setup.style.top = '';
    setup.style.left = '';

    dialogHandler.addEventListener('mousedown', onDialogHandlerMousedown);
    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onCloseButtonEnterPress);
    setupOpen.removeEventListener('click', onUserpicClick);
    setupOpen.removeEventListener('keydown', onUserpicEnterPress);
    window.setup.addHandlers();
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    dialogHandler.removeEventListener('mousedown', onDialogHandlerMousedown);
    document.removeEventListener('keydown', onPopupEscPress);
    setupClose.removeEventListener('click', onCloseButtonClick);
    setupClose.removeEventListener('keydown', onCloseButtonEnterPress);
    setupOpen.addEventListener('click', onUserpicClick);
    setupOpen.addEventListener('keydown', onUserpicEnterPress);
    window.setup.removeHandlers();
  };
})();
