import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ContractEnrollmentAddForm extends Component {
  @tracked selectedUserIds = [];

  @tracked loading = false;

  @service('user') user;

  get isDisabled() {
    return this.selectedUserIds.length === 0 || this.loading;
  }

  @action async onSearchCandidates(name) {
    const result = await this.user.searchStudents({ name, scope: `contract:${this.args.contract.id}` });
    return result.data.map(user => ({ name: user.attributes.name, value: user.id }));
  }

  @action onChangeCandidate(values) {
    this.selectedUserIds = values;
  }

  @action async handleSubmit() {
    const { selectedUserIds } = this;

    this.loading = true;
    await this.args.addEnrollments(selectedUserIds);
    this.loading = false;
    this.args.onClose();
  }
}
