import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ContractsListFilter extends Component {
  statuses = ['Active', 'Closed', 'Proposed']

  @service('tinyData') tinyData;

  @tracked queryParams = {
    schoolYear: 2000,
  };

  constructor(...args) {
    super(...args);
    this.queryParams = this.args.queryParams;
  }

  get termsPrompt() {
    const { schoolYear } = this.args.queryParams;
    return `All ${schoolYear} terms`;
  }

  get facilitatorOptions() {
    return this.args.facilitators
      .map(facilitator => ({
        id: facilitator.id,
        name: `${facilitator.attributes.lastName}, ${facilitator.attributes.firstName}`,
      }));
  }

  @action onSelect(value, name) {
    let overrides;

    switch (name) {
      case 'schoolYear':
        overrides = {
          term: '',
          status: '',
        };
        break;
      default:
        break;
    }

    return this.triggerOnChange(name, value, overrides);
  }

  triggerOnChange(key, value, overrides = {}) {
    const { queryParams } = this;
    const updatedQueryParams = { ...queryParams, ...overrides };
    updatedQueryParams[key] = value;

    this.queryParams = updatedQueryParams;

    return this.args.onchange(updatedQueryParams);
  }
}
