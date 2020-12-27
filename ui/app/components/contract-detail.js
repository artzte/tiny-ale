import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { getRelated } from '../utils/json-api';

export default class ContractDetail extends Component {
  @service('tinyData') tinyData;

  @tracked loading = false;

  @tracked contract;

  @action async updateContract(updates) {
    this.loading = true;
    const result = await this.tinyData.fetch(`/api/contracts/${this.contract.id}`, {
      method: 'put',
      body: JSON.stringify(updates),
    });
    this.loading = false;
    this.contract = result.data;
  }

  constructor(...args) {
    super(...args);
    this.contract = this.args.contract;
  }

  get facilitator() {
    const { tinyData, contract } = this;
    const relation = getRelated(contract, 'facilitator');

    return relation && tinyData.get('user', relation.id);
  }

  get assignments() {
    const { tinyData, contract } = this;
    const relation = getRelated(contract, 'assignments') || [];

    return relation
      .map(ref => tinyData.get('assignment', ref.id));
  }

  get meetings() {
    const { tinyData, contract } = this;
    const relation = getRelated(contract, 'meetings') || [];

    return relation
      .map(ref => tinyData.get('meeting', ref.id));
  }

  get term() {
    const { tinyData, contract } = this;
    const relation = getRelated(contract, 'term');

    return relation && tinyData.get('term', contract.relationships.term.data.id);
  }

  get category() {
    const { tinyData, contract } = this;
    const relation = getRelated(contract, 'category');

    return relation && tinyData.get('category', contract.relationships.category.data.id);
  }

  get creditAssignments() {
    const { tinyData, contract } = this;
    const relation = getRelated(contract, 'creditAssignments') || [];

    return relation.map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }

  get learningRequirements() {
    const { tinyData } = this;

    return tinyData.get('learningRequirement');
  }
}
