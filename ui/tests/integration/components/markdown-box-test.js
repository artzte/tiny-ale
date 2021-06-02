import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | markdown-box', hooks => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.text = 'Celer animus damno teneo abstergo.';
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <MarkdownBox>
        {{this.text}}
      </MarkdownBox>
    `);

    assert.equal(this.element.textContent.trim(), this.text);

    const element = find('textarea');

    assert.ok(element, 'textarea rendered');
    assert.notOk(element.readOnly, 'textarea is readable/writeable by default');
    assert.matches(element.value, this.text, 'text matches argument passed');
  });

  test('it handles editing', async function (assert) {
    this.isDisabled = false;

    const events = [];
    this.onChange = function (value, name, event) {
      events.push({ name, value, event });
    };

    await render(hbs`
      <MarkdownBox
        @isDisabled={{this.isDisabled}}
        @onchange={{this.onChange}}
        name="shelby"
      >
        {{this.text}}
      </MarkdownBox>
    `);

    assert.equal(this.element.textContent.trim(), this.text);

    const element = find('textarea');

    assert.ok(element, 'textarea rendered');
    assert.notOk(element.readOnly, 'textarea is NOT set to readOnly because editing is enabled');
    assert.matches(element.value, this.text, 'text matches argument passed');

    await fillIn(element, 'Wow how the time flies');

    assert.equal(events.length, 1, 'one onChange call occurred');
    const [{ event, name, value }] = events;
    assert.equal(name, 'shelby', 'expected name was passed');
    assert.matches(value, 'Wow how the time flies', 'expected value was passed');
    assert.ok(event, 'event was passed to handler');
  });
});
