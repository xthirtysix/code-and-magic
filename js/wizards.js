'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('div');

  var listOfWizards = document.querySelector('.setup-similar-list');

  var createRandomMage = function (firstNames, secondNames, coatColors, eyeColors) {
    return {
      name:
        window.util.getRandomArrayElement(firstNames) +
        ' ' +
        window.util.getRandomArrayElement(secondNames),
      coatColor: window.util.getRandomArrayElement(coatColors),
      eyesColor: window.util.getRandomArrayElement(eyeColors)
    };
  };

  var createArmy = function (strength) {
    var army = [];

    for (var i = 0; i < strength; i++) {
      army.push(createRandomMage(window.setup.firstNames, window.setup.secondNames, window.setup.coatColors, window.setup.eyeColors));
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
})();
