import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import adminLearningPlanGoals from '../../../fixtures/learning-requirements'

let tinyData;

module('Integration | Component | settings-learning-plan-goals/list', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(() => {
    tinyData = stubTinyData();

    tinyData.addResult(adminLearningPlanGoals);
    this.goals = tinyData.get('learningPlanGoal');
  });

  function renderComponent() {
    return render(hbs`
      <SettingsLearningPlanGoals::List 
        @goals={{this.goals}}
      />
    `);
  }

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await renderComponent();

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <SettingsLearningPlanGoals::List>
        template block text
      </SettingsLearningPlanGoals::List>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
