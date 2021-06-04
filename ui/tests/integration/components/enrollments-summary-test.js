import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Promise } from 'rsvp';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import enrollmentsFixture from '../../fixtures/student-enrollments';

let requests;

module('Integration | Component | enrollments-summary', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.student = { id: 1 };
    this.year = 2010;

    requests = [];

    stubTinyData({
      fetch: (url, options) => {
        requests.push({ type: 'fetch', url, options });
        return Promise.resolve(enrollmentsFixture);
      },
    });
  });

  test('it renders and downloads data', async function (assert) {
    await render(hbs`
      <EnrollmentsSummary
        @student={{this.student}}
        @year={{this.year}}
      />
    `);

    await waitFor('[data-test-enrollments-summary-table]');

    assert.matches(this.element.textContent, /2010/);
    assert.equal(requests.length, 1, 'an ajax request was made');
  });
});
