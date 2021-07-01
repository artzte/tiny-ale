import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { replaceModel } from '../utils/json-api';
import { getNewCreditAssignmentForCreditable } from '../utils/credit-utils';

export default class CreditAssignmentsComponent extends Component {
  @service('tinyData') tinyData;

  @service('creditAssignment') creditAssignmentService;

  @tracked editCreditAssignment = null;

  @tracked showEditDialog = false;

  @tracked editCreditable = null;

  @tracked error = null;

  @tracked creditAssignments = [];

  constructor(...args) {
    super(...args);
    this.creditAssignments = this.args.creditAssignments;
  }

  get creditAssignmentsList() {
    const { creditAssignments } = this;

    if (!creditAssignments) return [];

    if (Array.isArray(creditAssignments)) {
      return creditAssignments;
    }

    return [creditAssignments];
  }

  @action showEdit(editCreditable, _creditAssignment) {
    let creditAssignment;

    // might be an event obj
    if (_creditAssignment instanceof Event) {
      creditAssignment = getNewCreditAssignmentForCreditable(editCreditable);
    } else {
      creditAssignment = _creditAssignment;
    }

    this.editCreditAssignment = creditAssignment;
    this.editCreditable = editCreditable;
    this.showEditDialog = true;
  }

  @action closeEdit() {
    this.showEditDialog = false;
  }

  @action async searchCredits(search) {
    const results = await this.creditAssignmentService.searchCredits({ search });
    return results
      .data
      .map(credit => {
        const name = credit.attributes.courseId
          ? `${credit.attributes.courseName} (${credit.attributes.courseId})`
          : credit.attributes.courseName;
        return {
          name,
          value: credit.id,
        };
      });
  }

  @action async saveCreditAssignment(model) {
    let result;
    try {
      result = await this.creditAssignmentService.saveCreditAssignment(this.args.creditable, model);

      this.error = null;
      this.showEditDialog = false;
      this.creditAssignments = replaceModel(this.creditAssignments, this.tinyData.get('creditAssignment', result.data.id));
    } catch (e) {
      this.error = e;
    }
  }

  @action saveCreditAssignmentError(error) {
    console.error(error);
  }

  @action async deleteCreditAssignment(creditAssignment) {
    await this.creditAssignmentService.deleteCreditAssignment(creditAssignment);

    this.creditAssignments = this.creditAssignments.filter(ca => ca.id !== creditAssignment.id)
  }
}
