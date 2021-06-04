import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { getSettings } from '../../helpers/test-utils';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import studentLearningPlan from '../../fixtures/student-learning-plan';

let requests;

module('Integration | Component | learning-plan', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];
    const tinyData = stubTinyData();
    const currentYear = getSettings().school_year;
    tinyData.setYears([currentYear, currentYear - 1]);
    tinyData.addResult(studentLearningPlan);

    this.learningPlan = studentLearningPlan.data;
    this.year = getSettings().school_year;
    this.student = studentLearningPlan.included.find(record => record.type === 'User');
    this.onChangeYear = year => requests.push(year);
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <LearningPlan
        @student={{this.student}}
        @learningPlan={{this.learningPlan}}
        @year={{this.year}}
        @onChangeYear={{fn this.onChangeYear}}
      />
    `);
    assert.equal(this.element.querySelectorAll('[data-test-learning-plan-goal]').length, studentLearningPlan.data.relationships.learningPlanGoals.data.length, 'expected number of learning plan goals rendered');
    assert.matches(this.element.innerText, studentLearningPlan.data.attributes.userGoals, 'personal goals from fixture are present');
  });
});
