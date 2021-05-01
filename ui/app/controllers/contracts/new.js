import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContractsNewController extends Controller {
  @service('tinyData') tinyData;

  @action redirectToIndex() {
    this.transitionToRoute('contracts.index');
  }

  @action async updateContract(model) {
    this.loading = true;

    const result = await this.tinyData.fetch('/api/contracts', {
      method: 'POST',
      data: model,
    });
    this.loading = false;
    this.contract = result.data;

    this.transitionToRoute('contract.index', this.contract.id);
  }
}
