import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SettingsCompetenciesEditController extends Controller {
  @service('tinyData') tinyData;
  @service('flashMessages') flashMessages;

  @action
  async updateCompetency(model) {
    const { tinyData } = this;
    let promise;
    
    if (model.id) {
      promise = tinyData.fetch(`/api/admin/competencies/${model.id}`, {
        method: 'PUT',
        data: {
          data: model,
        }
      });
    }
    
    promise = tinyData.fetch(`/api/admin/competencies`, {
      method: 'POST',
      data: {
        data: model,
      },
    });

    promise.then(() => {
      this.flashMessages.info('success');
      this.transitionToRoute('settings-competencies');
    }, err => {
      this.flashMessages.alert('error');
    });
  
    return promise;
  }

  @action
  reportError(error) {
    this.flashMessages.alert('error');
    console.log(error);
  }
}
