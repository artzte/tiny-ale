import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';
import { stubTinyData } from '../../helpers/stub-tiny-data';

import student from '../../fixtures/student';
import coorTerms from '../../fixtures/coor-terms';
import studentStatuses from '../../fixtures/student-statuses';
import notesStudentStatuses from '../../fixtures/notes-student-statuses';

let tinyDataServiceMock;

module('Integration | Component | status-by-student', hooks => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    this.getNotes = () => resolve(notesStudentStatuses);
    [this.term] = coorTerms.data;
    this.statuses = studentStatuses.data;
    this.student = student.data;
  });

  test('it renders with two current status months', async assert => {
    tinyDataServiceMock.setToday(new Date(2019, 9, 15));
    tinyDataServiceMock.addResult(notesStudentStatuses);

    await render(hbs`
      {{status-by-student
        student=student
        statuses=statuses
        term=term
        getNotes=getNotes
      }}
    `);

    const rows = findAll('[data-test-status-row]');
    assert.equal(rows.length, studentStatuses.data.length, 'expected number of months rendered');

    assert.equal(findAll('.notes-list').length, 2, 'expected count of populated notes rows rendered');
  });

  test('it renders with two current status months and two pending status months', async assert => {
    tinyDataServiceMock.setToday(new Date(2019, 11, 15));
    tinyDataServiceMock.addResult(notesStudentStatuses);

    await render(hbs`
      {{status-by-student
        student=student
        statuses=statuses
        term=term
        getNotes=getNotes
      }}
    `);

    const rows = findAll('[data-test-status-row]');
    assert.equal(rows.length, studentStatuses.data.length + 2, 'expected number of months rendered');

    const unreportedRows = findAll('[data-test-month-has-no-status]');
    assert.equal(unreportedRows.length, 2, 'expected number of prompts to enter status were rendered');
  });
});
