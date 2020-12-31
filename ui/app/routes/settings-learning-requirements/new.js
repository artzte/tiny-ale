import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { createEntity } from '../../utils/json-api';

export default class SettingsLearningRequirementsNewRoute extends Route {
  @service('tinyData') tinyData;

  // eslint-disable-next-line class-methods-use-this
  model() {
    return createEntity('learningRequirement');
  }

  async setupController(controller, model) {
    const [learningRequirements, categories] = this.modelFor('settings-learning-requirements');

    controller.setProperties({
      model,
      categories,
      learningRequirements: learningRequirements.data,
    });
  }
}
