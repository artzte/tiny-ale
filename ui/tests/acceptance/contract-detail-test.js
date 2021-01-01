import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  fillIn,
  click,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';
import { MockLocalStorage } from '../helpers/test-utils';

import termsFixture from '../fixtures/terms';
import categoriesFixture from '../fixtures/categories';
import staffFixture from '../fixtures/staff';
import contractsFixture from '../fixtures/contracts-list';
import learningRequirementsFixture from '../fixtures/learning-requirements';
import contractDetailFixture from '../fixtures/contract-detail';

let server;
let localStorage;
let requests;
let detailApiPath;
let detailPath;

module('Acceptance | contract detail', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    localStorage = new MockLocalStorage();
    requests = [];
    detailApiPath = `/api/contracts/${contractDetailFixture.data.id}`;
    detailPath = `/tiny/contracts/${contractDetailFixture.data.id}`;

    server.addMonitor((verb, path, request) => requests.push({ verb, path, request }));

    provisionTinySisBootstrapRoutes(server);
    server.addRequest('get', '/api/terms', termsFixture);
    server.addRequest('get', '/api/categories', categoriesFixture);
    server.addRequest('get', '/api/staff', staffFixture);
    server.addRequest('get', '/api/contracts', contractsFixture);
    server.addRequest('get', '/api/learning-requirements', learningRequirementsFixture);
    server.addRequest('get', detailApiPath, contractDetailFixture);
    server.addRequest('put', detailApiPath, contractDetailFixture);

    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(500);
  });

  hooks.afterEach(() => {
    server.shutdown();
    localStorage.unmock();
  });

  test('visiting /tiny/contracts/:id', async (assert) => {
    await visit(detailPath);

    assert.equal(currentURL(), detailPath, 'page navigated to successfully');

    assert.ok(find('[data-test-form="contract-attributes"]'), 'contract attributes form rendered');
  });

  test('submit updates to an existing contract', async (assert) => {
    await visit(detailPath);

    assert.equal(currentURL(), detailPath, 'page navigated to successfully');

    await click('[data-test-form="contract-attributes"] button[data-button="edit"]');

    await fillIn('[data-test-form="contract-attributes"] input[name="name"]', 'contract falderol');

    await click('[data-test-form="contract-attributes"] button[type="submit"]');

    const postRequest = requests.find(request => request.verb === 'PUT');

    assert.ok(postRequest, 'A PUT went through');
    assert.equal(postRequest.path, detailApiPath, 'POSTed to contracts update endpoint');

    const postRequestBody = JSON.parse(postRequest.request.requestBody);

    assert.notOk(postRequestBody.data.relationships.term, 'No term updates were sent');
    assert.notOk(postRequestBody.data.relationships.facilitator, 'No facilitator updates were sent');
    assert.notOk(postRequestBody.data.relationships.category, 'No category updates were sent');

    assert.equal(postRequestBody.data.attributes.name, 'contract falderol', 'the updated name was sent');
  });
});
