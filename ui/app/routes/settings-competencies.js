import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model(params) {
    return Promise.all([
      this.tinyData.fetch('/api/competencies'),
      this.tinyData.getCompetencyCategories(),
    ]);
  },
});
