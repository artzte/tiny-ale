import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import Validator from '../../utils/validator';

export default class SettingsLearningPlanGoalsFormComponent extends Component {
  validator = new Validator({
    description: [{
      type: 'format',
      regex: /\s*(.{10,})/,
      message: 'Please type a goal description that is at least 10 characters long',
    }],
    year: [{ type: 'required' }],
  });

  @service('tinyData') tinyData;

  @service('flashMessages') flashMessages;

  @service('router') router;

  @action async onSave(model) {
    try {
      if (model.id) {
        await this.tinyData.fetch(`/api/admin/learning-plan-goals/${model.id}`, {
          method: 'PUT',
          data: model,
        });
      } else {
        await this.tinyData.fetch('/api/admin/learning-plan-goals', {
          method: 'POST',
          data: model,
        });
      }
      this.flashMessages.info('Learning plan goal was updated');
      this.router.transitionTo('settings-learning-plan-goals.index');
      return Promise.resolve();
    } catch (e) {
      this.flashMessages.alert('Learning plan goal was not updated');
      return Promise.reject(e);
    }
  }

  @action onError(/* errors */) {
    this.flashMessages.alert('Please fill in the required values, and try again.');
  }

  get yearOptions() {
    return this.tinyData.getYears();
  }
}
