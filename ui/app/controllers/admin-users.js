import Controller, { inject } from '@ember/controller';

export default Controller.extend({
  'admin-users.index': inject(),

  queryParams: (() => ({}))(),
  terms: (() => ([]))(),
  staff: (() => ([]))(),

  actions: {
    filterUsers(queryParams) {
      const adminIndexController = this['admin-users.index'];
      adminIndexController.setProperties(queryParams);
    },
  },
});
