import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { STATUS_ACTIVE } from '../utils/term-utils';
import {
  STATUS_APPROVED,
  STATUS_PROPOSED,
  STATUS_CLOSED,
} from '../utils/contract-utils';

export default class ContractAttributes extends Component {
  @service('tinyData') tinyData;

  sections = ['learningObjectives', 'competencies', 'evaluationMethods', 'instructionalMaterials'];

  @tracked isEditing = false;

  @tracked selections = null;

  @tracked pojo = {};

  @action setEdit(isEditing) {
    this.isEditing = isEditing;
  }

  @action async save(pojo) {
    const {
      args,
    } = this;

    const payload = {
      data: {
        term: {
          data: {
            id: pojo.termId,
          },
        },
        facilitator: {
          data: {
            id: pojo.facilitatorId,
          },
        },
      },
    };

    await args.updateContract(payload);

    this.setEdit(false);
  }

  @action reportError(err) {
    console.error(err);
  }

  @action
  didUpdatePojo(pojo) {
    this.pojo = pojo;
  }

  get terms() {
    return this.tinyData.get('term').filter(term => term.attributes.status === STATUS_ACTIVE);
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
    return this.detailSections.any(section => section.content && section.content.trim());
  }

  get isApproved() {
    return this.pojo.status === STATUS_APPROVED;
  }

  get isProposed() {
    return this.pojo.status === STATUS_PROPOSED;
  }

  get isClosed() {
    return this.pojo.status === STATUS_CLOSED;
  }
}
