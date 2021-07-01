import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | join', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and joins various values into a string', async function (assert) {
    this.set('seg1', 'boo[');
    this.set('seg2', 'scamp');
    this.set('seg3', ']');

    await render(hbs`{{join seg1 seg2 seg3}}`);

    assert.equal(this.element.textContent.trim(), 'boo[scamp]');
  });
});
