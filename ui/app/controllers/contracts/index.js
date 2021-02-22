import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['schoolYear', 'term', 'facilitator', 'category', 'status', 'offset', 'limit'],

  schoolYear: '',
  term: '',
  facilitator: '',
  category: '',
  status: '',
  offset: '0',
  limit: '30',

  actions: {
    filterContracts(queryParams) {
      this.setProperties(queryParams);
    },
  },
});
