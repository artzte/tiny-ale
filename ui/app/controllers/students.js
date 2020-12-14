import Controller, { inject } from '@ember/controller';

export default Controller.extend({
  'students.index': inject(),

  queryParams: (() => ({}))(),
  terms: (() => ([]))(),
  staff: (() => ([]))(),

  actions: {
    filterStudents(queryParams) {
      const studentsIndexController = this['students.index'];
      studentsIndexController.setProperties(queryParams);
    },
  },
});
