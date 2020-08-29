import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { createEntity } from '../../utils/json-api';

export default class SettingsCompetenciesNewRoute extends Route {
  @service('tinyData') tinyData;

  // eslint-disable-next-line class-methods-use-this
  model() {
    return createEntity('competency');
  }

  async setupController(controller, model) {
    const [competencies, categories] = this.modelFor('settings-competencies');

    controller.setProperties({
      model,
      categories,
      competencies: competencies.data,
    });
  }
}
