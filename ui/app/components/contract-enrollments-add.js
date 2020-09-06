import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import TinyForm from './t-form';

export default class ContractEnrollmentAddForm extends TinyForm {
  @service('user') user;

  @action async onSearchCandidates(name) {
    const result = await this.user.searchStudents({ name, scope: `contract:${this.contract.id}` });
    return result.data.map(user => ({ name: user.attributes.name, value: user.id }));
  }

  @action onChangeCandidate() {}

  save = pojo => console.log('got', pojo)
}
