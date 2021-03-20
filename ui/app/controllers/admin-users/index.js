import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['schoolYear', 'name', 'role', 'coordinator', 'grade', 'status', 'offset', 'limit'],
  name: '',
  role: '',
  status: '',
  schoolYear: '',
  coordinator: '',
  grade: '',
  offset: '0',
  limit: '30',
});
