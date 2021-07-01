import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import SettingsFixture from '../../fixtures/settings';
import TermsFixture from '../../fixtures/terms';
import { stubTinyData } from '../../helpers/stub-tiny-data';

let tinyDataServiceMock;

module('Integration | Component | calendar-settings', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(SettingsFixture);
    tinyDataServiceMock.addResult(TermsFixture);

    this.settings = tinyDataServiceMock.get('setting');
    this.terms = tinyDataServiceMock.get('term');
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <CalendarSettings
        @settings={{this.settings}}
        @terms={{this.terms}}
      />
    `);

    assert.ok(find('calendar-settings'), 'wrapper element rendered');
    assert.ok(find('button[type="submit"]'), 'submit button rendered');
  });
});
