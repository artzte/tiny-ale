import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { replaceModel } from '../utils/json-api';
import { STATUS_CLOSED } from '../utils/contract-utils';

export default class ContractEnrollmentController extends Controller {
  @service('flashMessages') flashMessages;

  @service('tinyData') tinyData;

  @service('user') user;

  get contractIsDisabled() {
    const { contract } = this;

    if (contract.attributes.status === STATUS_CLOSED) {
      return true;
    }

    return !this.user.canEdit(contract);
  }

  @action
  showAddEnrollment(show) {
    this.set('showAddEnrollmentDialog', show);
  }

  @action
  async addEnrollments(userIds) {
    const { contract, tinyData } = this;

    await tinyData.fetch(`/api/contracts/${contract.id}/enrollments`, {
      method: 'POST',
      data: {
        data: {
          relationships: {
            user_ids: userIds,
          },
        },
      },
    });

    this.model = await tinyData.fetch(`/api/enrollments?contractIds=${this.contract.id}&include=credit_assignments,credit_assignments.credit,participant`);

    this.flashMessages.success(`Enrolled ${userIds.length} students`);
  }

  @action
  async updateEnrollment(enrollment, command) {
    const response = await this.tinyData.fetch(`/api/enrollments/${enrollment.id}/${command}`, {
      method: 'PATCH',
    });

    this.set('model', { ...this.model, data: replaceModel(this.model.data, response.data) });
  }

  @action
  async deleteEnrollment(enrollment) {
    await this.tinyData.fetch(`/api/enrollments/${enrollment.id}`, {
      method: 'DELETE',
    });

    this.set('model', { data: this.model.data.filter(e => e.id !== enrollment.id), meta: { count: this.model.meta.count - 1 } });
  }
}
