import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContractCreditAssignmentsComponent extends Component {
  @service('tinyData') tinyData;

  @tracked isSynchronizing = false;

  get creditAssignments() {
    const {
      args,
      tinyData,
    } = this;
    const { contract } = args;

    return contract
      .relationships
      .creditAssignments
      .data
      .map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }

  get syncIsDisabled() {
    return this.isSynchronizing || this.args.disabled;
  }

  @action async applyDefaults() {
    const { args } = this;
    const { contract } = args;
    this.isSynchronizing = true;

    await this.tinyData.fetch(`/api/contracts/${contract.id}/sync-credits`, {
      method: 'PATCH',
    });

    this.isSynchronizing = false;
    this.args.onUpdateEnrollments(contract);
  }
}
