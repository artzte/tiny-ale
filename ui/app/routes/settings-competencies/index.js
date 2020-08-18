import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class SettingsCompetenciesIndexRoute extends Route {
  @service('tinyData') tinyData;

  model() {
    return this.modelFor('settings-competencies');
  }

  setupController(controller, model) {
    const [
      competencies,
      categories,
    ] = model;

    controller.setProperties({  
      model,
      competencies,
      categories,
    });
  }
}
