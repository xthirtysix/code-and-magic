'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var form = document.querySelector('.setup-wizard-form');
  // Интерактивные элементы кастомизации волшебника
  var wizardCoat = form.querySelector('.wizard-coat');
  var fireball = form.querySelector('.setup-fireball-wrap');
  var wizardEyes = form.querySelector('.wizard-eyes');

  // Поля формы с данными о волшебнике
  var wizardCoatInput = form.querySelector('input[name=coat-color]');
  var wizardEyesInput = form.querySelector('input[name=eyes-color]');
  var fireballInput = form.querySelector('input[name=fireball-color]');

  // Обработчики кастомизации волшебника
  var onWizardCoatClick = function () {
    var coatColor = window.util.getRandomArrayElement(window.setup.coatColors);

    wizardCoat.style = 'fill: ' + coatColor;
    wizardCoatInput.value = coatColor;
  };

  var onWizardEyesClick = function () {
    var eyesColor = window.util.getRandomArrayElement(window.setup.eyeColors);

    wizardEyes.style = 'fill: ' + eyesColor;
    wizardEyesInput.value = eyesColor;
  };

  var onFireballClick = function () {
    var fireballColor = window.util.getRandomArrayElement(window.setup.fireballColors);

    fireball.style = 'background: ' + fireballColor;
    fireballInput.value = fireballColor;
  };

  var onSubmitClick = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.closePopup, window.onErrorMessage);
  };

  var addWizardSetupHandlers = function () {
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    fireball.addEventListener('click', onFireballClick);
    form.addEventListener('submit', onSubmitClick);
  };

  var removeWizardSetupHandlers = function () {
    wizardCoat.removeEventListener('click', onWizardCoatClick);
    wizardEyes.removeEventListener('click', onWizardEyesClick);
    fireball.removeEventListener('click', onFireballClick);
    form.removeEventListener('submit', onSubmitClick);
  };

  window.setup = {
    coatColors: COAT_COLORS,
    fireballColors: FIREBALL_COLORS,
    eyeColors: EYE_COLORS,
    addHandlers: addWizardSetupHandlers,
    removeHandlers: removeWizardSetupHandlers
  };
})();
