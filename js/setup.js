'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupUserName = setup.querySelector('.setup-user-name');

  // Обработчики открытия/закрытия окна настроек
  var onUserpicClick = function () {
    openPopup();
  };

  var onUserpicEnterPress = function (evt) {
    window.isEnterEvent(evt, openPopup);
  };

  var onPopupEscPress = function (evt) {
    if (setupUserName !== document.activeElement) {
      window.isEscEvent(evt, closePopup);
    }
  };

  var onCloseButtonEnterPress = function (evt) {
    window.isEnterEvent(evt, closePopup);
  };

  var onCloseButtonClick = function () {
    closePopup();
  };

  // Интерактивные элементы кастомизации волшебника
  var wizardCoat = document.querySelector('.wizard-coat');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var wizardEyes = document.querySelector('.wizard-eyes');

  // Поля формы с данными о волшебнике
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var fireballInput = document.querySelector('input[name=fireball-color]');

  // Обработчики кастомизации волшебника
  var onWizardCoatClick = function () {
    var coatColor = window.getRandomArrayElement(window.appearance.COAT_COLORS);

    wizardCoat.style = 'fill: ' + coatColor;
    wizardCoatInput.value = coatColor;
  };

  var onWizardEyesClick = function () {
    var eyesColor = window.getRandomArrayElement(window.appearance.EYE_COLORS);

    wizardEyes.style = 'fill: ' + eyesColor;
    wizardEyesInput.value = eyesColor;
  };

  var onFireballClick = function () {
    var fireballColor = window.getRandomArrayElement(window.appearance.FIREBALL_COLORS);

    fireball.style = 'background: ' + fireballColor;
    fireballInput.value = fireballColor;
  };

  // Добавление/удаление обработчиков
  var setupOpen = document.querySelector('.setup-open');

  setupOpen.addEventListener('click', onUserpicClick);
  setupOpen.addEventListener('keydown', onUserpicEnterPress);

  var setupClose = setup.querySelector('.setup-close');

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onCloseButtonEnterPress);
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    fireball.addEventListener('click', onFireballClick);

    setupOpen.removeEventListener('click', onUserpicClick);
    setupOpen.removeEventListener('keydown', onUserpicEnterPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    setupClose.removeEventListener('click', onCloseButtonClick);
    setupClose.removeEventListener('keydown', onCloseButtonEnterPress);
    wizardCoat.removeEventListener('click', onWizardCoatClick);
    wizardEyes.removeEventListener('click', onWizardEyesClick);
    fireball.removeEventListener('click', onFireballClick);

    setupOpen.addEventListener('click', onUserpicClick);
    setupOpen.addEventListener('keydown', onUserpicEnterPress);
  };
})();
