import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';

export default Route.extend({
  tinyData: service(),
  beforeModel() {
    const { tinyData } = this;

    return all([
      tinyData.fetch('/api/learning-requirements'),
      tinyData.fetch('/api/terms?status=active'),
    ]);
  },
  model(params) {
    return this.tinyData.fetch(`/api/contracts/${params.id}?include=category,facilitator,assignments,meetings,creditAssignments,creditAssignments.credit,term,learningRequirements`);
  },
  setupController(controller, contract) {
    this._super(controller, contract);
    controller.setProperties({
      contract: contract.data,
    });
  },
});
