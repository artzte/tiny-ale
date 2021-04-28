import TSelect from './t-select';
import { sortTerms } from '../utils/term-utils';

export default class TermSelect extends TSelect {
  constructor(...args) {
    super(...args);

    this.args = {
      ...this.args,
      optionsList: this.termsOptions,
    };
  }

  get termsOptions() {
    return sortTerms(this.args.terms)
      .map(term => ({
        name: term.attributes.name,
        value: term.id,
      }));
  }
}
