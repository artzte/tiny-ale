import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  fillIn,
  click,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { Interactor } from '@bigtest/interactor';
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

module('Acceptance | contracts new', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    localStorage = new MockLocalStorage();
    requests = [];

    server.addMonitor((verb, path, request) => requests.push({ verb, path, request }));

    provisionTinySisBootstrapRoutes(server);
    server.addRequest('get', '/api/terms', termsFixture);
    server.addRequest('get', '/api/categories', categoriesFixture);
    server.addRequest('get', '/api/staff', staffFixture);
    server.addRequest('get', '/api/contracts', contractsFixture);
    server.addRequest('get', '/api/learning-requirements', learningRequirementsFixture);
    server.addRequest('post', '/api/contracts', contractDetailFixture);

    // for the redirect
    server.addRequest('get', `/api/contracts/${contractDetailFixture.data.id}`, contractDetailFixture);

    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(500);
  });

  hooks.afterEach(() => {
    server.shutdown();
    localStorage.unmock();
  });

  test('visiting /tiny/contracts/new', async (assert) => {
    const newPath = '/tiny/contracts/new';
    await visit(newPath);

    assert.equal(currentURL(), newPath, 'page navigated to successfully');
    assert.ok(find('form button[type="submit"][data-button="save"]'), 'form rendered with save button');
    assert.ok(find('form button[data-button="cancel"]'), 'form rendered with cancel button');
  });

  test('submit a new contract', async (assert) => {
    const newPath = '/tiny/contracts/new';
    await visit(newPath);

    assert.equal(currentURL(), newPath, 'page navigated to successfully');

    fillIn('input[name="name"]', 'new contract falderol');

    await new Interactor(find('select[name="term"]')).select(termsFixture.data[0].attributes.name);
    await new Interactor(find('select[name="category"]')).select(categoriesFixture.data[0].attributes.name);
    await fillIn('textarea[name="learningObjectives"]', 'objective!');
    await fillIn('input[name="location"]', 'location!');
    await click('form button[type="submit"]');

    const postRequest = requests.find(request => request.verb === 'POST');

    assert.ok(postRequest, 'A POST went through');
    assert.equal(postRequest.path, '/api/contracts', 'POSTed to contracts new endpoint');

    const postRequestBody = JSON.parse(postRequest.request.requestBody);

    assert.dig(postRequestBody, 'data.relationships.term.data.id', 'A term was referenced');
    assert.dig(postRequestBody, 'data.relationships.category.data.id', 'A category was referenced');
    assert.dig(postRequestBody, 'data.relationships.facilitator.data.id', 'A facilitator was referenced');

    assert.matches(currentURL(), /tiny.contracts.\d+/, 'navigated to detail page for new contract');
  });
});
