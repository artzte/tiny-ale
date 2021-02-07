import { modifier } from 'ember-modifier';

export default modifier((element, [setup, teardown], /* hash */) => {
  if (setup) setup(element);

  return () => {
    if (teardown) teardown(element);
  };
});
