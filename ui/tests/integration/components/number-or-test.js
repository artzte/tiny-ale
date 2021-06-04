import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | NumberOr', hooks => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('number', 225);

    await render(hbs`<NumberOr @number={{this.number}} />`);

    assert.dom(this.element).hasText(/225/, 'a number less than 1000 is rendered as-is');

    this.set('number', 1457225);

    await render(hbs`<NumberOr @number={{this.number}} />`);

    assert.dom(this.element).hasText(/1,457,225/, 'a number greater than 1000 is rendered with commas');

    this.set('number', 1457225.778);

    await render(hbs`<NumberOr @number={{this.number}} />`);

    assert.dom(this.element).hasText(/1,457,225\.78/, 'a number greater than 1000 with three decimal places is rounded to two decimal places');

    this.set('number', 1457225.50);

    await render(hbs`<NumberOr @number={{this.number}} />`);

    assert.dom(this.element).hasText(/1,457,225\.5/, 'a number greater than 1000 with two decimal places is rendered with trailing zeros stripped');

    this.set('number', 5.7);

    await render(hbs`<NumberOr @number={{this.number}} />`);

    assert.dom(this.element).hasText(/5\.7/, 'a number with one decimal places is rendered as is');

    this.set('number', 0);

    await render(hbs`<NumberOr @number={{this.number}} />`);

    assert.dom(this.element).hasText('-', 'a zero number is rendered with the default replacement');

    await render(hbs`<NumberOr @number={{this.number}} @or='nothing gained' />`);

    assert.dom(this.element).hasText('nothing gained', 'a zero number is rendered with a supplied replacement');

    this.set('number', undefined);

    await render(hbs`<NumberOr @number={{this.number}} />`);

    assert.dom(this.element).hasText('-', 'an undefined number is rendered with the default replacement');
  });
});
