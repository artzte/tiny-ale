import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | titleize', hooks => {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{titleize this.inputValue}}`);

    assert.equal(this.element.textContent, '1234', '1234');

    this.set('inputValue', 'hellaNiceCelery');

    assert.equal(this.element.textContent, 'Hella nice celery', 'hellaNiceCelery');

    this.set('inputValue', 'Active');

    assert.equal(this.element.textContent, 'Active', 'Active');
  });
});
