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

  @action showAddEnrollment(show) {
    this.set('showAddEnrollmentDialog', show);
  }

  @action async addEnrollments(userIds) {
    const { contract, tinyData } = this;

    await tinyData.fetch(`/api/contracts/${contract.id}/enrollments`, {
      method: 'POST',
      data: {
        relationships: {
          user_ids: userIds,
        },
      },
    });

    this.model = await tinyData.fetch(`/api/enrollments?contractIds=${this.contract.id}&include=credit_assignments,credit_assignments.credit,participant`);

    this.flashMessages.success(`Enrolled ${userIds.length} students`);
  }

  @action updateEnrollment(enrollment, command) {
    return this.tinyData.fetch(`/api/enrollments/${enrollment.id}/${command}`, {
      method: 'PATCH',
    });
  }

  @action async deleteEnrollment(enrollment) {
    await this.tinyData.fetch(`/api/enrollments/${enrollment.id}`, {
      method: 'DELETE',
    });

    const newModel = {
      data: this.model.data
        .filter(e => e.id !== enrollment.id)
        .map(e => this.tinyData.get('enrollment', e.id)),
      meta: { count: this.model.meta.count - 1 },
    };

    this.set('enrollments', newModel.data);
    this.set('model', newModel);
  }

  @action async updateModel(contract) {
    const { tinyData } = this;
    const enrollments = await tinyData.fetch(`/api/enrollments?contractIds=${contract.id}&include=credit_assignments,credit_assignments.credit,participant`);
    this.set('enrollments', enrollments.data);
  }
}
