import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsLearningPlansGoalsIndexRoute extends Route {
  @service('tinyData') tinyData;

  model() {
    return this.tinyData.fetch('/api/admin/learning-plan-goals');
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.setProperties({
      learningPlanGoals: model.data,
    });
  }
}
