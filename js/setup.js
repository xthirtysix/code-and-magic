'use strict';

(function () {
  var FIRST_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var SECOND_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
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

  var addWizardSetupHandlers = function () {
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    fireball.addEventListener('click', onFireballClick);
  };

  var removeWizardSetupHandlers = function () {
    wizardCoat.removeEventListener('click', onWizardCoatClick);
    wizardEyes.removeEventListener('click', onWizardEyesClick);
    fireball.removeEventListener('click', onFireballClick);
  };

  window.setup = {
    firstNames: FIRST_NAMES,
    secondNames: SECOND_NAMES,
    coatColors: COAT_COLORS,
    fireballColors: FIREBALL_COLORS,
    eyeColors: EYE_COLORS,
    addHandlers: addWizardSetupHandlers,
    removeHandlers: removeWizardSetupHandlers
  };
})();
