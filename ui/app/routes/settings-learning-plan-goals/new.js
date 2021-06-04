import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsLearningPlansGoalsNewRoute extends Route {
  @service('tinyData') tinyData;

  model(params) {
    return this.tinyData.getEmptyRecord('learningPlanGoal', {
      attributes: {
        active: true,
        year: params.year,
      },
    });
  }
}
