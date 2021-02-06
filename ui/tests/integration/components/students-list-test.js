import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubTinyData } from '../../helpers/stub-tiny-data';
import staffFixture from '../../fixtures/staff';
import studentsFixture from '../../fixtures/students';

let tinyDataServiceMock;

module('Integration | Component | students-list', hooks => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(staffFixture);
    tinyDataServiceMock.addResult(studentsFixture);

    this.set('students', studentsFixture.data.map(student => tinyDataServiceMock.get('user', student.id)));
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{students-list
        students=students
      }}
    `);

    assert.ok(find('table[data-test-students-list]'), 'Table rendered');
    assert.equal(this.students.length, findAll('[data-test-students-list-row]').length, 'expected count of student rows rendered');
  });
});
