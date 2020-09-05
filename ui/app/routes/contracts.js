import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import {
  sortedCategories,
  sortedPeople,
} from '../utils/contract-utils';

export default Route.extend({
  tinyData: service(),

  // Just preloading data service with terms and categories
  //
  model() {
    return all([
      this.tinyData.fetch('/api/categories'),
      this.tinyData.fetch('/api/staff', {
        data: {
          status: 'active',
        },
        limit: -1,
      }),
    ]);
  },

  setupController(controller, result) {
    const [
      categories,
      staff,
    ] = result;

    this._super(controller, result);

    controller.setProperties({
      schoolYears: this.tinyData.getYears().sort((y1, y2) => y2 - y1),
      categories: sortedCategories(categories.data),
      facilitators: sortedPeople(staff.data),
    });
  },
});
