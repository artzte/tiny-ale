import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsCompetenciesIndexRoute extends Route {
  @service('tinyData') tinyData;

  model() {
    // this may seem weird instead of modelFor but it avoids all kinds of
    // of confusions around model refreshes needed when items are added.
    return this.tinyData.get('competency');
  }

  setupController(controller, competencies) {
    super.setupController(controller, competencies);
    const [, categories] = this.modelFor('settings-competencies');

    controller.setProperties({
      competencies,
      categories,
    });
  }
}
