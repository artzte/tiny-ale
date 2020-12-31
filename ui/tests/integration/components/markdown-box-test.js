import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | markdown-box', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.text = 'Celer animus damno teneo abstergo.';
  });

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <MarkdownBox>
        {{this.text}}
      </MarkdownBox>
    `);

    assert.equal(this.element.textContent.trim(), this.text);
    assert.ok(find('textarea'));
  });
});
