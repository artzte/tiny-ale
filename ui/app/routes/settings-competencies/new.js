import Route from '@ember/routing/route';
import { createEntity } from '../../utils/json-api';

export default class SettingsCompetenciesNewRoute extends Route {
  model() {
    return createEntity('competency');
  }

  async setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      categories: await this.tinyData.getCompetencyCategories(),
    });
  }
}
