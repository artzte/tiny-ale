import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';

export default Route.extend({
  tinyData: service(),

  // Just preloading data service with terms and categories
  //
  model() {
    const { tinyData } = this;
    return all([
      tinyData.fetch('/api/categories'),
      tinyData.fetch('/api/staff?status=active&limit=-1'),
      tinyData.fetch('/api/learning-requirements'),
      tinyData.fetch('/api/terms?limit=-1'),
    ]);
  },
});
