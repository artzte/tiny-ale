import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsCompetenciesEditRoute extends Route {
  @service('tinyData') tinyData;

  model(params) {
    return this.tinyData.get('competency', params.id);
  }

  setupController(controller, model) {
    const [competencies, categories] = this.modelFor('settings-competencies');

    controller.setProperties({
      model,
      competencies,
      categories,
    });
  }
}
