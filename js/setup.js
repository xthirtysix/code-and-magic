'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var listOfWizards = document.querySelector('.setup-similar-list');

var army = createAnArmy(WIZARD_COUNT);

var WIZARD_COUNT = 4;

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

var EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomArrayElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createRandomMage = function (firstNames, secondNames, coatColors, eyeColors) {
  return {
    name: getRandomArrayElement(firstNames) + ' ' + getRandomArrayElement(secondNames),
    coatColor: getRandomArrayElement(coatColors),
    eyesColor: getRandomArrayElement(eyeColors)
  };
};

var createAnArmy = function (strength) {
  var army = [];

  for (var i = 0; i < strength; i++) {
    army.push(createRandomMage(FIRST_NAMES, SECOND_NAMES, COAT_COLORS, EYE_COLORS));
  }

  return army;
};

var renderWizards = function (arr, num) {
  for (var i = 0; i < num; i++) {
    var randomWizard = wizardTemplate.cloneNode(true);

    randomWizard.querySelector('.setup-similar-label').textContent = arr[i].name;
    randomWizard.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    randomWizard.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;

    listOfWizards.appendChild(randomWizard);
  }
};

renderWizards(army, WIZARD_COUNT);
