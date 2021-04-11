import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | date-time', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.date = '2019-02-24';

    await render(hbs`<DateTime @date={{this.date}} @format="M/YYYY" />`);

    const timeElement = find('time');
    assert.ok(timeElement, 'time element rendered');
    assert.matches(timeElement.title, '2019-02-24');
    assert.matches(this.element.textContent.trim(), '2/2019');

    await render(hbs`<DateTime @date={{this.date}} @format="M/D/YYYY" />`);

    assert.matches(this.element.textContent.trim(), '2/24/2019');

    await render(hbs`<DateTime @date={{this.date}} @format="MMM YYYY" />`);

    assert.matches(this.element.textContent.trim(), 'Feb 2019');

    await render(hbs`<DateTime @date={{this.missingDate}} @format="MMM YYYY" @substitute="frank" />`);

    assert.matches(this.element.textContent.trim(), 'frank');
  });
});
