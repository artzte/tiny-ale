import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import { getSettings } from '../../../helpers/test-utils';
import adminLearningPlanGoals from '../../../fixtures/admin-learning-plan-goals';

let tinyData;

module('Integration | Component | settings-learning-plan-goals/list', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();

    tinyData.addResult(adminLearningPlanGoals);
    this.goals = tinyData.get('learningPlanGoal');
    this.year = getSettings().school_year;
  });

  function renderComponent() {
    return render(hbs`
      <SettingsLearningPlanGoals::List 
        @goals={{this.goals}}
        @year={{this.year}}
      />
    `);
  }

  test('it renders with filtered learning plan goals', async function (assert) {
    await renderComponent();

    const goalsForYear = adminLearningPlanGoals.data.filter(goal => goal.attributes.year === this.year);
    assert.equal(goalsForYear.length, findAll('.learning-plan-goal').length, 'count of rows matches fixture');
  });
});
