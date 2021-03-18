import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { stubRouter } from '../../helpers/test-utils';

module('Integration | Component | pagination', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    stubRouter('contracts.index');
    this.totalCount = 100;
    this.offset = 0;
    this.limit = 30;
  });

  function renderComponent() {
    return render(hbs`
      <Pagination
        @totalCount={{this.totalCount}}
        @offset={{this.offset}}
        @limit={{this.limit}}
      />
    `);
  }

  test('it renders with various disablements and enablements', async function (assert) {
    await renderComponent();

    assert.matches(this.element.textContent.trim(), /Showing\s+1\s+to\s+30\s+of\s+100\s+results/);

    let prev = find('a[data-test-prev]');
    assert.ok(prev, 'previous rendered');
    assert.ok(prev.classList.contains('disabled'), 'prev is disabled');

    let next = find('a[data-test-next]');
    assert.ok(next, 'next rendered');
    assert.notOk(next.classList.contains('disabled'), 'next is not disabled');

    // TODO route name shows up in app, but not in tests ... why?
    // assert.matches(next.href, /boo/);

    // offset to indicate we are on last page of results
    this.offset = 90;

    await renderComponent();

    prev = find('a[data-test-prev]');
    assert.ok(prev, 'previous rendered when on last page of results');
    assert.notOk(prev.classList.contains('disabled'), 'prev is enabled when on last page of results');

    next = find('a[data-test-next]');
    assert.ok(next, 'next rendered when on last page of results');
    assert.ok(next.classList.contains('disabled'), 'next is disabled when on last page of results');

    // on first page of sub-limit results
    this.offset = 0;
    this.totalCount = 25;

    await renderComponent();

    prev = find('a[data-test-prev]');
    assert.notOk(prev, 'previous not rendered if there is only one page of results');

    next = find('a[data-test-next]');
    assert.notOk(next, 'next not rendered if there is only one page of results');
  });
});
