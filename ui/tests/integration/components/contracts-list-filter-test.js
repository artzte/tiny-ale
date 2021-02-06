import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, select } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import termsFixture from '../../fixtures/terms';
import categoriesFixture from '../../fixtures/categories';
import staffFixture from '../../fixtures/staff';

let events;
let queryParams;
let schoolYears;

module('Integration | Component | contracts-list-filter', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    events = [];

    this.onChange = (params) => {
      events.push(params);
    };

    queryParams = {
      schoolYear: '',
      term: '',
      facilitator: '',
      category: '',
      status: '',
    };

    schoolYears = termsFixture.data
      .map(term => term.attributes.schoolYear)
      .reduce((memo, schoolYear) => {
        if (!memo.includes(schoolYear)) memo.push(schoolYear);
        return memo;
      }, [])
      .sort((a, b) => b - a);

    this.setProperties({
      terms: termsFixture.data,
      categories: categoriesFixture.data,
      facilitators: staffFixture.data,
      schoolYears,
      queryParams,
      onChange: this.onChange,
    });
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{contracts-list-filter
        queryParams=queryParams
        terms=terms
        schoolYears=schoolYears
        facilitators=facilitators
        categories=categories
        onchange=onChange
      }}
    `);

    const selects = {};
    ['schoolYear', 'term', 'facilitator', 'category', 'status'].forEach((name) => {
      const el = find(`select[name="${name}"]`);
      assert.ok(el, `rendered select for ${name}`);
      selects[name] = el;
    });

    assert.matches(selects.schoolYear.value, schoolYears[0].toString());

    await select('select[name="schoolYear"]', '2018');

    assert.equal(events.length, 1, 'an onChange event was triggered');

    const event = events.pop();

    assert.matches(event.schoolYear, '2018', 'expected school year present');
    assert.matches(event.category, '', 'category remained unset');
    assert.matches(event.facilitator, '', 'facilitator remained unset');
    assert.matches(event.status, '', 'status remained unset');
  });
});
