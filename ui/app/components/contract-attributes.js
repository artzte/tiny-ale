import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Validator from '../utils/validator';
import { STATUS_ACTIVE } from '../utils/term-utils';
import { ROLE_ADMIN, ROLE_STAFF } from '../utils/user-utils';

export default class ContractAttributes extends Component {
  validator = new Validator({
    name: { type: 'required' },
    learningObjectives: { type: 'required' },
    location: { type: 'required' },
  });

  validateRelationships = new Validator({
    term: { type: 'required' },
    facilitator: { type: 'required' },
    category: { type: 'required' },
  });

  @service('tinyData') tinyData;

  @service('flashMessages') flashMessages;

  sections = ['learningObjectives', 'competencies', 'evaluationMethods', 'instructionalMaterials'];

  @tracked isEditing = null;

  @tracked selections = null;

  @tracked pojo = {
    attributes: {},
    relationships: {},
  };

  @action setEdit(isEditing) {
    this.isEditing = isEditing;
  }

  @action async save(model) {
    await this.args.updateContract({ data: model });

    this.setEdit(false);
  }

  @action reportError(/* errors */) {
    this.flashMessages.alert('Fix the validation messages and try again');
  }

  @action didUpdatePojo(pojo) {
    this.pojo = pojo;
  }

  constructor(...args) {
    super(...args);
    this.terms = this.tinyData.get('term').filter(term => term.attributes.status === STATUS_ACTIVE);
    this.staff = this.tinyData.get('user').filter(user => [ROLE_STAFF, ROLE_ADMIN].includes(user.attributes.role));
    this.categories = this.tinyData.get('category');
    this.isEditing = this.args.isEditing || false;
  }

  get staffOptions() {
    return this.staff.map(staff => ({
      value: staff.id,
      name: staff.attributes.lastName,
    }));
  }

  get categoryOptions() {
    return this.categories.map(category => ({
      value: category.id,
      name: category.attributes.name,
    }));
  }

  get detailSections() {
    const { args, sections } = this;
    const { contract } = args;

    return sections
      .map(section => ({
        name: section,
        content: contract.attributes[section],
      }));
  }

  get hasDetails() {
    return this.detailSections
      .any(section => section.content && section.content.trim());
  }
}
