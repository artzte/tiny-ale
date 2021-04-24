import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render, find, click, findAll,
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import studentCreditAssignmentsFixture from '../../fixtures/student-credit-assignments-with-combined';
import studentsFixture from '../../fixtures/students';
import { stubTinyData } from '../../helpers/stub-tiny-data';

let tinyData;
let creditAssignments;
let student;
let requests;

module('Integration | Component | credits-worksheet', hooks => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData({
      fetch: (url, options) => {
        requests.push({ type: 'fetch', url, options });
        return { data: {} };
      },
    });

    tinyData.addResult(studentsFixture);
    tinyData.addResult(studentCreditAssignmentsFixture);

    creditAssignments = tinyData.get('creditAssignment');
    student = tinyData.get('user', creditAssignments[0].relationships.user.data.id);

    requests = [];

    this.setProperties({
      creditAssignments,
      student,
      updateCreditAssignments: () => requests.push({ type: 'updateCreditAssignments' }),
    });
  });

  function renderComponent() {
    return render(hbs`
      <CreditsWorksheet
        @student={{this.student}}
        @creditAssignments={{this.creditAssignments}}
        @updateCreditAssignments={{fn this.updateCreditAssignments}}
      />
    `);
  }

  test('it renders credit assignments', async assert => {
    await renderComponent();

    assert.ok(find('[data-test-credits-worksheet]'), 'worksheet table rendered');

    const unbatched = creditAssignments.filter(ca => !(ca.relationships.creditTransmittalBatch.data || ca.relationships.parentCreditAssignment.data));
    const pagination = find(`[data-test-total-count="${unbatched.length}"]`);
    assert.ok(pagination, 'the expected count was rendered');

    assert.equal(findAll('[data-test-credit-item]').length, unbatched.length, 'expected count of rows rendered');
  });

  test('it renders an unapproved credit assignment with children', async assert => {
    await renderComponent();

    const unbatched = creditAssignments.filter(ca => !(ca.relationships.creditTransmittalBatch.data || ca.relationships.parentCreditAssignment.data));
    const creditWithChildren = unbatched.find(ca => ca.relationships.childCreditAssignments.data.length);

    // testing a credit with children, unapproved
    const item = find(`[data-test-credit-id="${creditWithChildren.id}"]`);
    assert.ok(item, 'row was found for credit combined with children');
    const checkbox = item.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, true, 'the checkbox is disabled');
    assert.ok(item.querySelector('[data-test-split-link]'), 'a split link was rendered');
    assert.ok(item.querySelector('[data-test-approve-link]'), 'a district link was rendered');
    assert.ok(item.querySelector('[data-test-district-approve]'), 'the link is shown as unapproved');

    // split operation
    await click(item.querySelector('[data-test-split-link]'));
    let request = requests.shift();
    assert.ok(request, 'a request was sent upon clicking split');
    assert.matches(request.url, /credit-assignments\/\d+/);
    assert.matches(request.options.method, /delete/i);

    // approve operation
    requests = [];
    await click(item.querySelector('[data-test-approve-link]'));
    request = requests.shift();
    assert.ok(request, 'a request was sent upon clicking approve');
    assert.matches(request.type, 'fetch', 'for a district approve request a fetch is sent');
    assert.matches(request.url, /credit-assignments\/\d+\/approve/, 'approve request was sent to correct url');

    // sent updated credit assignments list
    request = requests.shift();
    assert.ok(request, 'a second request was sent after clicking approve');
    assert.matches(request.type, 'updateCreditAssignments', 'updated list sent to parent component');
  });

  test('it renders an unapproved credit assignment without children', async assert => {
    await renderComponent();

    assert.ok(find('[data-test-credits-worksheet]'), 'worksheet table rendered');

    const unbatched = creditAssignments.filter(ca => !(ca.relationships.creditTransmittalBatch.data || ca.relationships.parentCreditAssignment.data));
    const unapprovedCredit = unbatched.find(ca => !(ca.attributes.districtFinalizeApprovedOn || ca.relationships.childCreditAssignments.data.length));

    // testing an unapproved credit
    const item = find(`[data-test-credit-id="${unapprovedCredit.id}"]`);
    assert.ok(item, 'row was found for unapproved credit');
    const checkbox = item.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, false, 'the checkbox is enabled');
    assert.notOk(item.querySelector('[data-test-split-link]'), 'a split link was not rendered');
    assert.ok(item.querySelector('[data-test-approve-link]'), 'an approve link was rendered');
    assert.ok(item.querySelector('[data-test-district-approve]'), 'the link is shown as unapproved');

    // checking approve action
    await click(item.querySelector('[data-test-approve-link]'));

    let request = requests.shift();
    assert.ok(request, 'a request was sent upon clicking approve');
    assert.equal(request.type, 'fetch', 'fetch sent');
    assert.matches(request.url, `/api/students/${student.id}/credit-assignments/${unapprovedCredit.id}/approve`, 'correct endpoint targeted for district approve');
    assert.equal(request.options.method, 'PUT', 'PUT request for district approve');

    // sent updated credit assignments list
    request = requests.shift();
    assert.ok(request, 'a second request was sent after clicking approve');
    assert.matches(request.type, 'updateCreditAssignments', 'updated list sent to parent component');
  });

  test.skip('it renders a credit assignment', async assert => {
    await render(hbs`
      <CreditsWorksheet
        @student={{this.student}}
        @creditAssignments={{this.creditAssignments}}
        @updateCreditAssignments={{fn this.updateCreditAssignments}}
      />
    `);

    assert.ok(find('[data-test-credits-worksheet]'), 'worksheet table rendered');

    const unbatched = creditAssignments.filter(ca => !(ca.relationships.creditTransmittalBatch.data || ca.relationships.parentCreditAssignment.data));
    const pagination = find(`[data-test-total-count="${unbatched.length}"]`);
    assert.ok(pagination, 'the expected count was rendered');

    assert.equal(findAll('[data-test-credit-item]').length, unbatched.length, 'expected count of rows rendered');

    const creditWithChildren = unbatched.find(ca => ca.relationships.childCreditAssignments.data.length);
    const unapprovedCredit = unbatched.find(ca => !ca.attributes.districtFinalizeApprovedOn && ca.id !== creditWithChildren.id);
    const approvedCredit = unbatched.find(ca => ca.attributes.districtFinalizeApprovedOn && ca.id !== creditWithChildren.id);
    const combinableCredits = unbatched
      .filter(ca => !ca.relationships.childCreditAssignments.data.length)
      .slice(0, 2);

    // testing a credit with children, unapproved
    let item = find(`[data-test-credit-id="${creditWithChildren.id}"]`);
    assert.ok(item, 'row was found for credit combined with children');
    let checkbox = item.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, true, 'the checkbox is disabled');
    assert.ok(item.querySelector('[data-test-split-link]'), 'a split link was rendered');
    assert.ok(item.querySelector('[data-test-approve-link]'), 'a district link was rendered');
    assert.ok(item.querySelector('[data-test-district-approve]'), 'the link is shown as unapproved');

    // split operation
    await click(item.querySelector('[data-test-split-link]'));
    let request = requests.shift();
    assert.ok(request, 'a request was sent upon clicking split');
    assert.matches(request.url, /credit-assignments\/\d+/);
    assert.matches(request.options.method, /delete/i);

    // approve operation
    requests = [];
    await click(item.querySelector('[data-test-approve-link]'));
    request = requests.shift();
    assert.ok(request, 'a request was sent upon clicking approve');
    assert.matches(request.type, 'fetch', 'for a district approve request a fetch is sent');
    assert.matches(request.url, /credit-assignments\/\d+\/approve/, 'approve request was sent to correct url');
    assert.equal(request.options.model.id, creditWithChildren.id, 'the model sent with the approve command matches the model');

    // testing an approved credit
    item = find(`[data-test-credit-id="${approvedCredit.id}"]`);
    assert.ok(item, 'row was found for approved credit');
    checkbox = item.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, false, 'the checkbox is enabled');
    assert.notOk(item.querySelector('[data-test-split-link]'), 'a split link was not rendered');
    assert.ok(item.querySelector('[data-test-approve-link]'), 'an approve link was rendered');
    assert.ok(item.querySelector('[data-test-approved]'), 'the link is shown as approved');

    // unapprove for credit transmittal to district
    requests = [];
    await click(item.querySelector('[data-test-approve-link]'));
    request = requests.pop();
    assert.ok(request, 'a request was sent upon clicking unapprove');
    assert.ok(request.type, 'fetch', 'it was a fetch');
    assert.matches(request.url, /foo/, 'request was a put to unapprove the credit assignment');
    assert.equal(request.model.id, approvedCredit.id, 'the model sent with the approve request was correct');

    // testing an unapproved credit
    item = find(`[data-test-credit-id="${unapprovedCredit.id}"]`);
    assert.ok(item, 'row was found for unapproved credit');
    checkbox = item.querySelector('input[type="checkbox"]');
    assert.ok(checkbox, 'a checkbox was rendered');
    assert.equal(checkbox.disabled, false, 'the checkbox is enabled');
    assert.notOk(item.querySelector('[data-test-split-link]'), 'a split link was not rendered');
    assert.ok(item.querySelector('[data-test-approve-link]'), 'an approve link was rendered');
    assert.ok(item.querySelector('[data-test-unapproved]'), 'the link is shown as unapproved');

    // checking approve action
    requests = [];
    await click(item.querySelector('[data-test-approve-link]'));

    request = requests.pop();
    assert.ok(request, 'a request was sent upon clicking approve');
    assert.equal(request.type, 'fetch', 'fetch sent');
    assert.match(request.url, `/api/credit-assignments/${unapprovedCredit.id}/approve`, 'correct endpoint targeted for district approve');
    assert.equal(request.options.method, 'PUT', 'PUT request for district approve');

    // can trigger combine dialog
    requests = [];
    await click(`[data-test-credit-id="${combinableCredits[0].id}"] input[type="checkbox"]`);
    await click(`[data-test-credit-id="${combinableCredits[1].id}"] input[type="checkbox"]`);
    await click('[data-test-combine-credits]');

    request = requests.pop();
    assert.ok(request, 'a request was sent when combine link clicked');
    assert.equal(request.type, 'combine', 'the request was a combine action firing');
  });
});
