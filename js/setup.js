'use strict';

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

var WIZARD_COUNT = 4;

var ESC_KEYCODE = 27;

var ENTER_KEYCODE = 13;

var wizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('div');

var listOfWizards = document.querySelector('.setup-similar-list');

var getRandomArrayElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createRandomMage = function (firstNames, secondNames, coatColors, eyeColors) {
  return {
    name:
      getRandomArrayElement(firstNames) +
      ' ' +
      getRandomArrayElement(secondNames),
    coatColor: getRandomArrayElement(coatColors),
    eyesColor: getRandomArrayElement(eyeColors)
  };
};

var createArmy = function (strength) {
  var army = [];

  for (var i = 0; i < strength; i++) {
    army.push(createRandomMage(FIRST_NAMES, SECOND_NAMES, COAT_COLORS, EYE_COLORS));
  }

  return army;
};

var army = createArmy(WIZARD_COUNT);

var renderWizard = function (wizard) {
  var randomWizard = wizardTemplate.cloneNode(true);

  randomWizard.querySelector('.setup-similar-label').textContent = wizard.name;
  randomWizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  randomWizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return randomWizard;
};

var renderArmy = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < army.length; i++) {
    fragment.appendChild(renderWizard(army[i]));
  }

  return listOfWizards.appendChild(fragment);
};

renderArmy();

document.querySelector('.setup-similar').classList.remove('hidden');

// Показ/Скрытие окна настройки волшебника

var setup = document.querySelector('.setup');
var setupUserName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && setupUserName !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var setupOpen = document.querySelector('.setup-open');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var setupClose = setup.querySelector('.setup-close');

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Кастомизация внешнего вида

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style = 'fill: ' + getRandomArrayElement(COAT_COLORS);
});

var wizardEyes = setupWizard.querySelector('.wizard-eyes');

wizardEyes.addEventListener('click', function () {
  wizardEyes.style = 'fill: ' + getRandomArrayElement(EYE_COLORS);
});

var fireball = document.querySelector('.setup-fireball-wrap');

fireball.addEventListener('click', function () {
  fireball.style = 'background: ' + getRandomArrayElement(FIREBALL_COLORS);
});
