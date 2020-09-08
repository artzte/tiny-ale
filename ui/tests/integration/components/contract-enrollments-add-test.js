import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, getContext, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { stubUserService } from 'tinysis-ui/services/user';
import UserFixtures from '../../fixtures/admin-users';

let requests;

module('Integration | Component | contract-enrollments-add', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];
    this.contract = { id: 123 };
    this.onClose = () => {};
    this.addEnrollments = ids => requests.push(ids);

    const { owner } = getContext();
    owner.register('service:user-service-mock', stubUserService(UserFixtures));
    owner.inject('component', 'user', 'service:user-service-mock');
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <ContractEnrollmentsAdd
        @addEnrollments={{addEnrollments}}
        @contract={{contract}}
        @onClose={{onClose}}
      />
    `);

    assert.matches(this.element.textContent, /Add/, 'TODO');

    await fillIn('input', 'x');
  });
});
