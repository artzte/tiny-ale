import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, select } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let requests;

module('Integration | Component | status/status-page-navigator', hooks => {
  setupRenderingTest(hooks);

  function renderComponent() {
    return render(hbs`
      <Status::StatusPageNavigator
        @current={{this.current}}
        @navigationList={{this.studentNavigationMap}}
        @onSelect={{fn this.navigate}}
      />
    `);
  }

  hooks.beforeEach(function () {
    requests = [];
    this.studentNavigationMap = [{
      name: 'A',
      value: 1,
    }, {
      name: 'B',
      value: 2,
    }, {
      name: 'C',
      value: 3,
    }, {
      name: 'D',
      value: 4,
    }];
    this.current = { id: '3' };
    this.navigate = student => requests.push(student);
  });

  test('it renders', async function (assert) {
    await renderComponent();

    assert.ok(this.element.querySelector('button[data-test-navigator-prev]'), 'previous button renders');
    assert.ok(this.element.querySelector('button[data-test-navigator-next]'), 'Next button renders');
    assert.ok(this.element.querySelector('select[data-test-navigator-select]'), 'select renders');
    assert.equal(this.element.querySelectorAll('select[data-test-navigator-select] option').length, this.studentNavigationMap.length, 'expected number of options rendered');
  });

  test('it selects the current selection', async function (assert) {
    // make current the second one
    this.current = { id: '2' };

    await renderComponent();

    const nav = this.element.querySelector('select');

    assert.matches(nav.value, '2');

    await select(nav, '3');

    assert.matches(nav.value, '3');
  });
});
