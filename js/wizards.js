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

  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.closePopup, onErrorGetPost);
  });


  var onErrorGetPost = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; padding: 10px 0; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '24px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onSuccessGet = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    listOfWizards.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(onSuccessGet, onErrorGetPost);
})();
