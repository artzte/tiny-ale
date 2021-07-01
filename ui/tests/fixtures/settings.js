// GET /api/settings
export default {
  data: [
    {
      id: '25',
      type: 'setting',
      attributes: {
        name: 'reporting_base_month',
        value: '9',
        periods: null,
      },
    },
    {
      id: '26',
      type: 'setting',
      attributes: {
        name: 'reporting_end_month',
        value: '6',
        periods: null,
      },
    },
    {
      id: '27',
      type: 'setting',
      attributes: {
        name: 'current_year',
        value: '2019',
        periods: null,
      },
    },
    {
      id: '28',
      type: 'setting',
      attributes: {
        name: 'periods',
        value: '\u0004\b[\b{\u0007:\nstartI"\t8:00\u0006:\u0006ET:\bendI"\t9:00\u0006;\u0006T{\u0007;\u0000@\b;\u0007I"\n10:00\u0006;\u0006T{\u0007;\u0000@\n;\u0007I"\n11:00\u0006;\u0006T',
        periods: [
          {
            start: '8:00',
            end: '9:00',
          },
          {
            start: '9:00',
            end: '10:00',
          },
          {
            start: '10:00',
            end: '11:00',
          },
        ],
      },
    },
  ],
  meta: {
    count: 4,
  },
};
