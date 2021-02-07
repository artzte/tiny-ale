import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import contractDetail from '../../fixtures/contract-detail';
import learningRequirements from '../../fixtures/learning-requirements';

let tinyData;
let contract;
let requests;

module('Integration | Component | ContractLearningRequirements', hooks => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];

    tinyData = stubTinyData();
    tinyData.addResult(contractDetail);
    tinyData.addResult(learningRequirements);

    contract = tinyData.get('contract', contractDetail.data.id);

    this.setProperties({
      contract,
      learningRequirements: tinyData.get('learningRequirement'),
      loading: false,
      updateContract: request => requests.push(request),
    });
  });

  function renderTemplate() {
    return render(hbs`<ContractLearningRequirements
      @learningRequirements={{this.learningRequirements}}
      @contract={{this.contract}}
      @updateContract={{fn this.updateContract}}
      @loading={{this.loading}}
    />`);
  }

  test('it renders, enters edit mode, and submits an update', async function (assert) {
    await renderTemplate();
    assert.equal(findAll('table.learning-requirements').length, 2, 'two learning requirement groups rendered');
    assert.equal(findAll('table.learning-requirements tr').length, this.contract.relationships.learningRequirements.data.length, 'expected learning requirements rendered');

    await click('button[data-button="edit"]');

    await click(`input#sel-${this.learningRequirements[0].id}`);

    await click('button[data-button="save"]');

    assert.equal(requests.length, 1, 'a save request was issued');
    const [oneRemoved] = requests;

    assert.equal(oneRemoved.data.relationships.learningRequirements.data.length, 3);
  });
});
