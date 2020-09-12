import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Validator from '../utils/validator';

export default class ContractEnrollmentAddForm extends Component {
  validator = new Validator({
    enrollees: [{ type: 'required', message: 'Please pick one or more enrollees' }],
  });

  @tracked enrollees = [];

  @tracked loading = false;

  @tracked isInvalid = false;

  @tracked errors = {};

  @service('user') user;

  get isDisabled() {
    return this.loading;
  }

  @action async onSearchCandidates(name) {
    const result = await this.user.searchStudents({ name, scope: `contract:${this.args.contract.id}` });
    return result.data.map(user => ({ name: user.attributes.name, value: user.id }));
  }

  @action onChangeCandidate(values) {
    this.enrollees = values;
  }

  @action async handleSubmit() {
    const result = this.validator.validate(this);

    this.isInvalid = result.isInvalid;
    this.errors = result.errors;

    if (this.isInvalid) return;

    this.loading = true;
    await this.args.addEnrollments(this.enrollees);
    this.loading = false;
    this.args.onClose();
  }
}
