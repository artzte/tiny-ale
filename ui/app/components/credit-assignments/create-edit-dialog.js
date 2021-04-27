import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action, get } from '@ember/object';
import Validator from '../../utils/validator';

// credits allow a number followed by an optional, constrained decimal fraction,
// or a decimal with no whole number
//
export const creditsRegex = /(^\d+(\.(75|5|25|0{1,2}|50))?$)|(^\.(75|5|25|0{1,2}|50)$)/;

export const creditAssignmentValidationRules = {
  creditHours: {
    type: 'format',
    regex: creditsRegex,
    message: 'Invalid credit value - please override with a value having a 0.25 multiple',
  },
};

export const creditAssignmentRelationshipValidationRules = {
  credit: { type: 'required' },
};

// Credit is required
// Denormalized contract term is required if assgned to user
export default class CreditAssignmentCreateEditDialog extends Component {
  @service('tinyData') tinyData;

  @service('creditAssignment') creditAssignment;

  validator = new Validator(creditAssignmentValidationRules);

  relationshipsValidator = new Validator(creditAssignmentRelationshipValidationRules);

  constructor(...args) {
    super(...args);

    const { model } = this.args;
    const creditId = get(model, 'relationships.credit.data.id');

    if (creditId) {
      const credit = this.tinyData.get('credit', creditId);
      this.creditResult = [{ value: credit.id, name: credit.attributes.courseName }];
    }
  }

  @action close() {
    this.args.close();
  }

  @action async searchCredits(search) {
    const credits = await this.creditAssignment.searchCredits({ search });
    return credits.data.map(c => ({
      name: c.attributes.courseName,
      value: c.id,
    }));
  }
}
