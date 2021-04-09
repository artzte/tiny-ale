import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model(params) {
    return this.tinyData.fetch(`/api/enrollments/${params.enrollment_id}?include=participant,turnins,meetingParticipants,creditAssignments,creditAssignments.credit`);
  },

  async afterModel(enrollmentResult) {
    this.statuses = await this.tinyData.fetch(`/api/statuses/enrollments?enrollmentIds=${enrollmentResult.data.id}`);
  },

  setupController(controller, enrollmentResult) {
    this._super(controller, enrollmentResult);
    const contract = this.modelFor('contract').data;
    const term = this.tinyData.get('term', contract.relationships.term.data.id);
    controller.setProperties({
      enrollment: enrollmentResult.data,
      contract,
      statuses: this.statuses.data,
      term,
    });
  },
});
