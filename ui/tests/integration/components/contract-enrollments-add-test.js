import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, getContext, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { stubUserService } from 'tinysis-ui/services/user';
import StudentsFixture from '../../fixtures/students';

let requests;
let s1;
let s2;

module('Integration | Component | contract-enrollments-add', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];
    this.contract = { id: 123 };
    this.onClose = () => {};
    this.addEnrollments = ids => requests.push(ids);

    [s1, s2] = StudentsFixture.data;

    const { owner } = getContext();
    owner.register('service:user', stubUserService({ searchStudents: StudentsFixture }));
  });

  test('it renders and requires an entry', async function (assert) {
    await render(hbs`
      <ContractEnrollmentsAdd
        @addEnrollments={{addEnrollments}}
        @contract={{contract}}
        @onClose={{onClose}}
      />
    `);

    assert.matches(this.element.textContent, /Add/, 'seem to have achieved a render');

    await click('button[type="submit"]');

    assert.deepEqual(requests, [], 'expected no outbound request');
  });

  test('it renders and submits', async function (assert) {
    await render(hbs`
      <ContractEnrollmentsAdd
        @addEnrollments={{addEnrollments}}
        @contract={{contract}}
        @onClose={{onClose}}
      />
    `);

    assert.matches(this.element.textContent, /Add/, 'seem to have achieved a render');

    await fillIn('input', 'x');
    await click(`[data-test-value="${s1.id}"]`);
    await fillIn('input', 'x');
    await click(`[data-test-value="${s2.id}"]`);

    await click('button[type="submit"]');

    assert.deepEqual(requests, [[s1.id, s2.id]], 'expected outbound request');
  });
});
