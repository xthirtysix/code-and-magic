'use strict';

(function () {
  var WIZARD_COUNT = 4;

  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('div');


  var renderWizard = function (wizard) {
    var randomWizard = wizardTemplate.cloneNode(true);

    randomWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    randomWizard.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    randomWizard.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return randomWizard;
  };

  var similar = document.querySelector('.setup-similar');
  var listOfWizards = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var takeNumber = data.length > WIZARD_COUNT ? WIZARD_COUNT : data.length;
    listOfWizards.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      listOfWizards.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };
})();
