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
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var form = document.querySelector('.setup-wizard-form');
  var wizardElement = form.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');

  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {}
  };

  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.getRandomArrayElement(COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.getRandomArrayElement(EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  var fireball = form.querySelector('.setup-fireball-wrap');
  var fireballInput = form.querySelector('input[name=fireball-color]');

  var onFireballClick = function () {
    var fireballColor = window.util.getRandomArrayElement(FIREBALL_COLORS);

    fireball.style = 'background: ' + fireballColor;
    fireballInput.value = fireballColor;
  };

  var onSubmitClick = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), window.closePopup, window.onErrorMessage);
  };

  var addWizardSetupHandlers = function () {
    fireball.addEventListener('click', onFireballClick);
    form.addEventListener('submit', onSubmitClick);
  };

  var removeWizardSetupHandlers = function () {
    fireball.removeEventListener('click', onFireballClick);
    form.removeEventListener('submit', onSubmitClick);
  };

  window.setup = {
    addHandlers: addWizardSetupHandlers,
    removeHandlers: removeWizardSetupHandlers,
    wizard: wizard
  };
})();
