/* Home/About enhancements. Content and links remain available without JS. */
(function () {
  'use strict';

  document.querySelectorAll('[data-profile-skills]').forEach(function (root) {
    var controls = root.querySelector('[data-skill-controls]');
    var buttons = Array.from(root.querySelectorAll('[data-skill]'));
    var panels = Array.from(root.querySelectorAll('[data-skill-panel]'));
    if (!controls || !buttons.length || buttons.some(function (button) {
      return !panels.some(function (panel) { return panel.dataset.skillPanel === button.dataset.skill; });
    })) { return; }

    function selectSkill(button) {
      buttons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
      panels.forEach(function (panel) { panel.hidden = panel.dataset.skillPanel !== button.dataset.skill; });
    }
    buttons.forEach(function (button) {
      button.addEventListener('click', function () { selectSkill(button); });
    });
    selectSkill(buttons[0]);
    controls.hidden = false;
    root.querySelector('[data-skill-help]').hidden = false;
  });

  document.querySelectorAll('[data-profile-work]').forEach(function (root) {
    var controls = root.querySelector('[data-work-controls]');
    var buttons = Array.from(root.querySelectorAll('[data-work-filter]'));
    var cards = Array.from(root.querySelectorAll('[data-work-category]'));
    var status = root.querySelector('[data-work-status]');
    if (!controls || !buttons.length || !cards.length) { return; }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var category = button.dataset.workFilter;
        buttons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
        cards.forEach(function (card) { card.hidden = category !== 'all' && card.dataset.workCategory !== category; });
        if (status) { status.textContent = cards.filter(function (card) { return !card.hidden; }).length + ' selected projects shown'; }
      });
    });
    controls.hidden = false;
  });
}());
