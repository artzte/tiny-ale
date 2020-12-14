import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import contractDetails from '../../fixtures/contract-detail';
import { stubTinyData } from '../../helpers/stub-tiny-data';

let tinyDataServiceMock;

module('Integration | Component | contract-attributes', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();
    tinyDataServiceMock.addResult(contractDetails);
    this.contract = tinyDataServiceMock.get('contract', contractDetails.data.id);
    console.log('finished init');
  });

  test('it renders', async function (assert) {
    await render(hbs`<ContractAttributes contract={{contract}} />`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
