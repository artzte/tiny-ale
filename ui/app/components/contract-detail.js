import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { compareUsers } from '../utils/user-utils';
import { ENROLLMENT_STATUS_ENROLLED } from '../utils/enrollment-utils';

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

    return tinyData.get('user', contract.relationships.facilitator.data.id);
  }

  get participants() {
    const { enrollments, tinyData } = this;

    return enrollments
      .map(enrollment => ({
        enrollment,
        student: tinyData.get('user', enrollment.relationships.participant.data.id),
      }))
      .sort((e1, e2) => compareUsers(e1.student, e2.student));
  }

  get activeParticipants() {
    return this.participants.filter(participant => participant.enrollment.attributes.enrollmentStatus === ENROLLMENT_STATUS_ENROLLED);
  }

  get assignments() {
    const { tinyData, contract } = this;

    return contract.relationships.assignments.data
      .map(ref => tinyData.get('assignment', ref.id));
  }

  get meetings() {
    const { tinyData, contract } = this;

    return contract.relationships.meetings.data
      .map(ref => tinyData.get('meeting', ref.id));
  }

  get term() {
    const { tinyData, contract } = this;

    return tinyData.get('term', contract.relationships.term.data.id);
  }

  get category() {
    const { tinyData, contract } = this;

    return tinyData.get('category', contract.relationships.category.data.id);
  }

  get creditAssignments() {
    const { tinyData, contract } = this;

    return contract.relationships.creditAssignments.data.map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }

  get enrollments() {
    const { tinyData, contract } = this;

    return contract.relationships.enrollments.data.map(relation => tinyData.get('enrollment', relation.id));
  }

  get learningRequirements() {
    const { tinyData } = this;

    return tinyData.get('learningRequirement');
  }
}
