import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { error } from '../../utils/logger';

export default class SettingsLearningRequirementsEditController extends Controller {
  @service('tinyData') tinyData;

  @service('flashMessages') flashMessages;

  @action
  async updateRequirement(model) {
    const { tinyData } = this;
    let promise;

    if (model.id) {
      promise = tinyData.fetch(`/api/admin/learning-requirements/${model.id}`, {
        method: 'PUT',
        data: {
          data: model,
        },
      });
    }

    promise = tinyData.fetch('/api/admin/learning-requirements', {
      method: 'POST',
      data: {
        data: model,
      },
    });

    promise.then(() => {
      this.flashMessages.success(`Learning requirement ${model.attributes.category} ${model.attributes.seq} saved`);
      this.transitionToRoute('settings-learning-requirements', { queryParams: { refresh: true } });
    }, (err) => {
      this.flashMessages.alert('An error was reported');
      error(err.message);
    });

    return promise;
  }

  @action
  reportError(err) {
    this.flashMessages.alert('error');
    error(err);
  }
}
