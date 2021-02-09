import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Table>
        <thead>
          <tr>
            <th>
              Column 1
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Column 1
            </td>
          </tr>
        </tbody>
      </Table>
    `);

    ['table', 'thead', 'tbody'].forEach(tableElement => {
      assert.ok(this.element.querySelector(tableElement), `did render a ${tableElement}`);
    });
  });
});
