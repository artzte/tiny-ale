// GET /api/settings
export default {
  data: [
    {
      id: '256',
      type: 'setting',
      attributes: {
        name: 'reporting_base_month',
        value: '9',
      },
    },
    {
      id: '257',
      type: 'setting',
      attributes: {
        name: 'reporting_end_month',
        value: '6',
      },
    },
    {
      id: '258',
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
