import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsLearningRequirementsIndexRoute extends Route {
  @service('tinyData') tinyData;

  model() {
    // this may seem weird instead of modelFor but it avoids all kinds of
    // of confusions around model refreshes needed when items are added.
    return this.tinyData.get('learningRequirement');
  }

  setupController(controller, learningRequirements) {
    super.setupController(controller, learningRequirements);
    const [, categories] = this.modelFor('settings-learning-requirements');

    controller.setProperties({
      learningRequirements,
      categories,
    });
  }
}
