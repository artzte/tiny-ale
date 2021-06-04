import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsLearningPlansGoalsEditRoute extends Route {
  @service('tinyData') tinyData;

  model(params) {
    return this.tinyData.fetch(`/api/admin/learning-plan-goals/${params.id}`);
  }
}
