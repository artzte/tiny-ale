import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Validator from 'tinysis-ui/utils/validator';
import {
  render,
  find,
  click,
  fillIn,
  select,
} from '@ember/test-helpers';
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';

let requests;

module('Integration | Component | t-form', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      model: {
        attributes: {
          name: 'Sam',
          age: null,
          booOrFalse: true,
        },
      },
      validator: new Validator({
        name: { type: 'required' },
        age: { type: 'format', regex: /\d+/ },
      }),
      validateRelationships: new Validator({
        club: { type: 'required' },
      }),
      save(outbound) {
        requests.push({ type: 'submit', outbound });
        return resolve({ data: outbound });
      },
      reportError(errors) {
        requests.push({ type: 'error', errors });
      },
    });
    requests = [];
  });


  test('it renders and submits expected calls', async function (assert) {
    await render(hbs`
      {{#t-form
        validator=validator
        model=model
        save=save
        reportError=reportError
        as |form|
      }}
        <input
          name="name"
          value={{pojo.name}}
          onchange={{action "onChange" target=form}}
        >
        <input
          name="age"
          value={{pojo.age}}
          onchange={{action "onChange" target=form}}
        >
        <input
          name="booOrFalse"
          type="checkbox"
          checked={{pojo.booOrFalse}}
          onchange={{action "toggleValue" "booOrFalse" target=form}}
        >
        <button type="submit">Save</button>
      {{/t-form}}
    `);

    assert.ok(find('form'), 'form element found');
    assert.ok(find('form button[type="submit"]'), 'submit button rendered');

    await click('button');

    assert.equal(requests.length, 1, 'an outbound call resulted from submit attempt');
    let [request] = requests;
    assert.equal(request.type, 'error', 'request was reporting a validation error');
    assert.ok(request.errors.age, 'age error reported');
    assert.notOk(request.errors.name, 'name was present and valid');

    requests = [];
    await fillIn("input[name='age']", 'old');
    await click('button');

    assert.equal(requests.length, 1, 'another call present after button click');
    [request] = requests;
    assert.equal(request.type, 'error', 'still an age error with invalid number');
    assert.ok(request.errors.age, 'age error reported');
    assert.notOk(request.errors.name, 'name was present and valid');

    requests = [];
    await fillIn("input[name='age']", '55');
    await click("input[name='booOrFalse']");
    await click('button');

    assert.equal(requests.length, 1, 'another outbound call occurred');

    [request] = requests;
    assert.equal(request.type, 'submit', 'this time a submit occurred');
    assert.equal(request.outbound.attributes.name, this.model.attributes.name, 'name is present outbound');
    assert.equal(request.outbound.attributes.age, '55', 'updated age is present outbound');
    assert.equal(request.outbound.attributes.booOrFalse, false, 'updated checkbox value to false');

    requests = [];
    await click("input[name='booOrFalse']");
    await click('button');

    [request] = requests;
    assert.equal(request.outbound.attributes.booOrFalse, true, 'updated checkbox value to true');
  });

  test('it handles attribute and relationship validations', async function (assert) {
    this.model = { ...this.model, relationships: { club: { data: null } } };
    await render(hbs`
      {{#t-form
        validator=validator
        validateRelationships=validateRelationships
        model=model
        save=save
        reportError=reportError
        as |form|
      }}
        <input
          name="name"
          value={{pojo.name}}
          onchange={{action "onChange" target=form}}
        >
        <input
          name="age"
          value={{pojo.age}}
          onchange={{action "onChange" target=form}}
        >
        <select
          name="club"
          onchange={{action "onChangeRelationship" target=form}}
        >
          <option value="" selected>Pick a club</option>
          <option value="1">Art Club</option>
          <option value="2">Ski Club</option>
        </select>
        <button type="submit">Save</button>
      {{/t-form}}
    `);

    assert.ok(find('form'), 'form element found');
    assert.ok(find('form button[type="submit"]'), 'submit button rendered');

    await click('button');

    assert.equal(requests.length, 1, 'an outbound call resulted from submit attempt');
    let [request] = requests;
    assert.equal(request.type, 'error', 'request was reporting a validation error');
    assert.ok(request.errors.age, 'age error reported');
    assert.notOk(request.errors.name, 'name was present and valid');
    assert.ok(request.errors.club, 'club was reported as invalid');

    requests = [];
    await fillIn("input[name='age']", 'old');
    await click('button');

    assert.equal(requests.length, 1, 'another call present after button click');
    [request] = requests;
    assert.equal(request.type, 'error', 'still an age error with invalid number');
    assert.ok(request.errors.age, 'age error reported');
    assert.notOk(request.errors.name, 'name was present and valid');

    requests = [];
    await fillIn("input[name='age']", '55');
    await select('select[name="club"]', '1');

    await click('button');

    assert.equal(requests.length, 1, 'another outbound call occurred');

    [request] = requests;
    assert.equal(request.type, 'submit', 'this time a submit occurred');
    assert.equal(request.outbound.attributes.name, this.model.attributes.name, 'name is present outbound');
    assert.equal(request.outbound.attributes.age, '55', 'updated age is present outbound');
    assert.equal(request.outbound.relationships.club.data.id, '1', 'club relationship was updated as expected');
  });
});
