import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ContractsToolbar extends Component {
  @service('tinyData') tinyData;

  @tracked contract;

  constructor(...args) {
    super(...args);
    this.contract = this.args.contract;
    this.tinyData.registerForUpdates(this.didUpdateStore.bind(this));
  }

  didUpdateStore() {
    if (!this.contract) return;
    this.contract = this.tinyData.get('contract', this.contract.id);
  }
}
