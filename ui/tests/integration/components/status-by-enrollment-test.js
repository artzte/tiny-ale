import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import dayjs from 'dayjs';
import Promise from 'rsvp';

import { stubTinyData } from '../../helpers/stub-tiny-data';
import { clone } from '../../helpers/test-utils';
import contractDetailFixture from '../../fixtures/contract-detail';
import contractEnrollmentDetail from '../../fixtures/contract-enrollment-detail';
import contractStatuses from '../../fixtures/contract-statuses';
import notesContractStatuses from '../../fixtures/notes-contract-statuses';

let tinyDataServiceMock;
let enrollment;
let contract;
let statuses;
let notesResult;

module('Integration | Component | status-by-enrollment', hooks => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(contractDetailFixture);
    tinyDataServiceMock.addResult(contractEnrollmentDetail);
    tinyDataServiceMock.addResult(contractStatuses);
    tinyDataServiceMock.addResult(notesContractStatuses);

    contract = tinyDataServiceMock.get('contract', contractDetailFixture.data.id);
    enrollment = tinyDataServiceMock.get('enrollment', contractEnrollmentDetail.data.id);
    statuses = tinyDataServiceMock.get('status').filter(status => status.relationships.statusable.data.id === enrollment.id);
    notesResult = clone(notesContractStatuses);

    this.setProperties({
      contract,
      enrollment,
      statuses,
      getNotes: () => Promise.resolve(notesResult),
    });

    const lastStatusMonth = statuses.reduce((last, status) => (last > status.attributes.month ? last : status.attributes.month), '0000-00-00');

    // set today to the middle of the next month.
    const today = dayjs(lastStatusMonth).add(45, 'days').toDate();
    tinyDataServiceMock.setToday(today);
  });

  test('it renders with three status-reported month and one unreported month', async assert => {
    await render(hbs`
      <StatusByEnrollment
        @contract={{this.contract}}
        @enrollment={{this.enrollment}}
        @statuses={{this.statuses}}
        @getNotes={{fn this.getNotes}}
      />
    `);

    assert.equal(findAll('[data-test-month]').length, statuses.length + 1, 'rows rendered for each statusable month');
    assert.equal(findAll('.notes-list-item').length, statuses.length, 'notes rendered for each status');
    assert.equal(findAll('[data-test-no-status]').length, 1, 'the no-status row was rendered');
  });

  test('it renders correctly formed status rows for satisfactory', async assert => {
    await render(hbs`
      <StatusByEnrollment
        @contract={{this.contract}}
        @enrollment={{this.enrollment}}
        @statuses={{this.statuses}}
        @getNotes={{fn this.getNotes}}
      />
    `);

    const [status] = statuses;
    const row = find(`[data-test-month="${status.attributes.month}"]`);
    assert.ok(row, 'row for status rendered');

    assert.matches(row.querySelector('[data-test-academic]').textContent, 'Satisfactory', 'academic status correctly reported as satisfactory');
    assert.matches(row.querySelector('[data-test-attendance]').textContent, 'Satisfactory', 'attendance status correctly reported as satisfactory');
    assert.matches(row.querySelector('[data-test-fte]').textContent, 'Yes', 'SLP marked as met');
  });

  test('it renders correctly formed row for unsatisfactory', async assert => {
    const [status] = statuses;
    status.attributes = {
      ...status.attributes,
      academicStatus: 'unsatisfactory',
      attendanceStatus: 'unsatisfactory',
      metFteRequirements: false,
    };

    await render(hbs`
      <StatusByEnrollment
        @contract={{this.contract}}
        @enrollment={{this.enrollment}}
        @statuses={{this.statuses}}
        @getNotes={{fn this.getNotes}}
      />
    `);

    const tr = find(`[data-test-month="${status.attributes.month}"]`);
    assert.ok(tr, 'row for status rendered');

    assert.matches(tr.querySelector('[data-test-academic]').textContent, 'Unsatisfactory', 'academic status correctly reported as satisfactory');
    assert.matches(tr.querySelector('[data-test-attendance]').textContent, 'Unsatisfactory', 'attendance status correctly reported as satisfactory');
    assert.matches(tr.querySelector('[data-test-fte]').textContent, 'No', 'SLP marked as unmet');
  });
});
