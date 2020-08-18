import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SettingsCompetenciesEditController extends Controller {
  @service('tinyData') tinyData;

  @action
  async updateCompetency(data) {
    const { tinyData } = this;
    
    if (data.id) {
      return tinyData.fetch(`/api/admin/competencies/${data.id}`, {
        method: 'PUT',
        data,
      });
    }
    
    return tinyData.fetch(`/api/admin/competencies`, {
      method: 'POST',
      data,
    });
  }

  @action
  reportError(error) {
    this.flashMessages.alert('error');
    console.log(error);
  }
}
