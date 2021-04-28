import { modifier } from 'ember-modifier';

export default modifier(function autofocusForm(element) {
  const autofocus = element.querySelector('[autofocus]');

  if (autofocus) {
    autofocus.focus();
    autofocus.select();
  }
});
