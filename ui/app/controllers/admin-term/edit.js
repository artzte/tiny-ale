import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),
  actions: {
    async saveTerm(data) {
      try {
        const result = await this.updateModel(data);

        this.flashMessages.success('Term was successfully saved.');
        this.transitionToRoute('admin-terms');
        return result;
      } catch (e) {
        this.flashMessages.alert('Server reported error');
        return e;
      }
    },
    reportError() {
      this.flashMessages.alert('Please check the values and correct any errors');
    },
  },
  updateModel(data) {
    return this.tinyData.fetch(`/api/admin/terms/${data.id}`, {
      method: 'PUT',
      data: { data },
    });
  },
});
