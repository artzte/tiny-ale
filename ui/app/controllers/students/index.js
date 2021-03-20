import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['schoolYear', 'name', 'coordinator', 'grade', 'offset', 'limit'],
  name: '',
  coordinator: null,
  grade: null,
  offset: '0',
  limit: '30',
});
