import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model(params) {
    return this.tinyData.fetch(`/api/students/${params.id}?include=coordinator`);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      student: model.data,
    });
  },
});
