import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsLearningRequirementsEditRoute extends Route {
  @service('tinyData') tinyData;

  model(params) {
    return this.tinyData.get('learningRequirement', params.id);
  }

  setupController(controller, model) {
    const [learningRequirements, categories] = this.modelFor('settings-learning-requirements');

    controller.setProperties({
      model,
      learningRequirements: learningRequirements.data,
      categories,
    });
  }
}
