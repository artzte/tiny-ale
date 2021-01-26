import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { contractModelFactory } from '../utils/contract-utils';

export default class ContractDetail extends contractModelFactory(Component) {
  @service('tinyData') tinyData;

  @tracked loading = false;

  @tracked contract;

  // eslint-disable-next-line class-methods-use-this
  @action cancelEditing() {}

  @action async updateContract(_model, updates) {
    this.loading = true;
    const result = await this.tinyData.fetch(`/api/contracts/${this.contract.id}`, {
      method: 'put',
      body: JSON.stringify({ data: updates }),
    });
    this.loading = false;
    this.contract = result.data;
  }

  constructor(...args) {
    super(...args);
    this.contract = this.args.contract;
  }
}
