import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  findAll,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';
import { MockLocalStorage } from '../helpers/test-utils';

import contractDetailFixture from '../fixtures/contract-detail';
import contractAttendanceMeetingFixture from '../fixtures/contract-attendance';
import contractAttendanceEnrollmentsFixture from '../fixtures/contract-attendance-enrollments';
import contractAttendanceNotesFixture from '../fixtures/contract-attendance-notes';
import learningRequirements from '../fixtures/learning-requirements';
import staff from '../fixtures/staff';
import terms from '../fixtures/terms';
import categories from '../fixtures/categories';

let server;
let localStorage;
let meetings;
let enrollments;

module('Acceptance | contract attendance index', hooks => {
  setupApplicationTest(hooks);

  hooks.beforeEach(assert => {
    server = new MockServer();
    localStorage = new MockLocalStorage();

    provisionTinySisBootstrapRoutes(server);
    server.addRequest('get', '/api/contracts/:id', contractDetailFixture);
    server.addRequest('get', '/api/meetings', contractAttendanceMeetingFixture);
    server.addRequest('get', '/api/enrollments', contractAttendanceEnrollmentsFixture);
    server.addRequest('get', '/api/notes', contractAttendanceNotesFixture);
    server.addRequest('get', '/api/learning-requirements', learningRequirements);
    server.addRequest('get', '/api/staff', staff);
    server.addRequest('get', '/api/terms', terms);
    server.addRequest('get', '/api/categories', categories);

    enrollments = server.getFixture('/api/enrollments');
    meetings = server.getFixture('/api/meetings');

    assert.timeout(500);
  });

  hooks.afterEach(() => {
    server.shutdown();
    localStorage.unmock();
  });

  const attendanceListRoute = '/tiny/contracts/123/attendance';
  test(`visiting ${attendanceListRoute}`, async assert => {
    await visit(attendanceListRoute);

    assert.equal(currentURL(), attendanceListRoute, 'page navigated to successfully');
    assert.equal(findAll('th[data-test-meeting]').length, meetings.data.length, 'expected count of meetings seen');
    assert.equal(findAll('tbody').length, enrollments.data.length, 'expected number of enrollment rows appeared');
  });
});
