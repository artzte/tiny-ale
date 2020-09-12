import Component from '@glimmer/component';

export default class ContractEnrollmentsController extends Component {
  get resultsCount() {
    const { count, result } = this.args;

    if (count !== undefined) return count;

    return (result && result.meta && result.meta.count) || 0;
  }

  get hasResults() {
    return this.resultsCount > 0;
  }
}
