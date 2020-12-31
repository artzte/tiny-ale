import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

let requests;
module('Integration | Component | edit-save-cancel', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];
    this.disabled = false;
    this.loading = false;
    this.editing = false;
    this.setEdit = isEditMode => requests.push(isEditMode);
  });

  test('it renders in non-form mode', async function (assert) {
    await render(hbs`
      <EditSaveCancel
        @onEdit={{fn this.setEdit true}}
        @disabled{{this.disabled}}
        @editing={{this.editing}}
      />  
    `);

    assert.equal(this.element.textContent.trim(), 'Edit');
    assert.equal(requests.length, 0, 'no action called at this point');

    await click('button[data-button="edit"]');

    assert.equal(requests.length, 1, 'one action called at this point');

    assert.ok(requests[0] === true, 'edit mode was called');
  });


  test('it renders in form mode', async function (assert) {
    this.editing = true;

    await render(hbs`
      <EditSaveCancel
        @onEdit={{fn this.setEdit true}}
        @onCancel={{fn this.setEdit false}}
        @disabled={{this.disabled}}
        @editing={{this.editing}}
      />  
    `);

    assert.matches(this.element.textContent, /Edit\s+Save\s+Cancel/);
    assert.equal(requests.length, 0, 'no action called at this point');

    await click('button[data-button="cancel"]');

    assert.equal(requests.length, 1, 'one action called at this point');

    assert.ok(requests[0] === false, 'cancel was called');
  });
});
