import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model() {
    return this.tinyData.fetch('/api/staff', {
      query: {
        order: 'lastName,firstName',
        coordinators: true,
        limit: 1000,
      },
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
    const staff = model.data;
    controller.setProperties({
      staff,
      schoolYears: this.tinyData.getYears().sort((y1, y2) => (y2 - y1)),
      queryParams: {},
    });
  },
});
