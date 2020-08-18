import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SettingsCompetenciesEditRoute extends Route {
  @service('tinyData') tinyData;
  @action
  async updateCompetency(data) {
    const { tinyData } = this;
    
    if (data.id) {
      return tinyData.fetch('/api/competencies', {
        method: 'POST',
        data,
      });
    }
    
    return tinyData.fetch(`/api/competencies/${data.id}`, {
      data,
      method: 'PUT',
    });
  }

  @action
  reportError(error) {
    this.flashMessages.alert('error');
    console.log(error);
  }
  model(params) {
    return this.modelFor('settings-competencies').data.find(competency => competency.id === params.id);
  }

  async setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      categories: await this.tinyData.getCompetencyCategories(),
    });
  }
}
