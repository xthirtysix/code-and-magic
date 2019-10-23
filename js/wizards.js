'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('div');

  var listOfWizards = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var randomWizard = wizardTemplate.cloneNode(true);

    randomWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    randomWizard.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    randomWizard.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return randomWizard;
  };

  var onSuccessGet = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    listOfWizards.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onSuccessGet, window.onErrorMessage);
})();
