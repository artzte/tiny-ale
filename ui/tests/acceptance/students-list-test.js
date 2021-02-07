import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  findAll,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';
import { MockLocalStorage } from '../helpers/test-utils';
import studentsFixture from '../fixtures/students';
import staffFixture from '../fixtures/staff';

let server;
let localStorage;

module('Acceptance | students list', hooks => {
  setupApplicationTest(hooks);

  hooks.beforeEach(assert => {
    server = new MockServer();
    localStorage = new MockLocalStorage();

    provisionTinySisBootstrapRoutes(server);

    server.addRequest('get', '/api/staff', staffFixture);
    server.addRequest('get', '/api/students', studentsFixture);

    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(1000);
  });

  hooks.afterEach(() => {
    server.shutdown();
    localStorage.unmock();
  });

  test('visiting /tiny/students?schoolYear=2018 with matching students', async assert => {
    await visit('/tiny/students?schoolYear=2018');

    assert.equal(currentURL(), '/tiny/students?schoolYear=2018', 'page navigated to successfully');
    assert.ok(find('[data-test-students-list]'), 'students list component rendered');
    assert.equal(findAll('[data-test-students-list-row]').length, studentsFixture.data.length, 'expected count of student rows rendered');
  });

  test('visiting /tiny/students?schoolYear=2018 with no matching students', async assert => {
    const students = server.getFixture('/api/students');
    students.data = [];
    students.meta.count = 0;

    await visit('/tiny/students?schoolYear=2018');

    assert.equal(currentURL(), '/tiny/students?schoolYear=2018', 'page navigated to successfully');
    assert.notOk(find('[data-test-students-list]'), 'student list component not rendered');
    assert.ok(find('p.no-results'), 'no-results component was rendered in place of table');
  });
});
