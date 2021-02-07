import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | setup-teardown', hooks => {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async assert => {
    await render(hbs`<div {{setup-teardown}}></div>`);

    assert.ok(true);
  });
});
