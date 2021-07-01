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

module('Integration | Component | t-form', hooks => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      model: {
        attributes: {
          name: 'Sam',
          age: null,
          booOrFalse: true,
          array: [{
            start: 1,
            end: 2,
          }, {
            start: 3,
            end: 4,
          }, {
            start: 5,
            end: 6,
          }],
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
      <TForm
        @validator={{this.validator}}
        @model={{this.model}}
        @save={{fn this.save}}
        @reportError={{this.reportError}}
        as |form|
      >
        <input
          name="name"
          value={{this.pojo.name}}
          onchange={{action "onChange" target=form}}
        >
        <input
          name="age"
          value={{this.pojo.age}}
          onchange={{action "onChange" target=form}}
        >
        <input
          name="booOrFalse"
          type="checkbox"
          checked={{this.pojo.booOrFalse}}
          onchange={{action "toggleValue" "booOrFalse" target=form}}
        >
        <button type="submit">Save</button>
      </TForm>
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

  test('it handles array attributes', async function (assert) {
    this.setProperties({
      model: {
        attributes: {
          array: [{
            start: 1,
            end: 2,
          }, {
            start: 3,
            end: 4,
          }, {
            start: 5,
            end: 6,
          }],
        },
      },
      save(outbound) {
        requests.push({ type: 'submit', outbound });
        return resolve({ data: outbound });
      },
    });

    await render(hbs`
      <TForm
        @model={{this.model}}
        @save={{fn this.save}}
        @reportError={{this.reportError}}
        as |form|
      >
        <ul data-test-starts>
          {{#each form.pojo.array as |item i|}}
            <li>
              <input
                type="text"
                name={{join "array[" i "].start"}}
                value={{item.start}}
                onchange={{fn form.onChange}}
              />
            </li>
          {{/each}}
        </ul>
        <button type="submit">Save</button>
      </TForm>
    `);

    await fillIn('[data-test-starts] li:nth-child(2) input', 999);

    await click('button');

    assert.equal(requests[0].outbound.attributes.array[1].start, '999', 'expected value was updated in array');
  });
});
