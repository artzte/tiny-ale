// GET /api/settings
export default {
  data: [
    {
      id: '4',
      type: 'setting',
      attributes: {
        name: 'reporting_base_month',
        value: '9',
      },
    },
    {
      id: '5',
      type: 'setting',
      attributes: {
        name: 'reporting_end_month',
        value: '6',
      },
    },
    {
      id: '6',
      type: 'setting',
      attributes: {
        name: 'current_year',
        value: '2019',
      },
    },
  ],
  meta: {
    count: 3,
  },
};
