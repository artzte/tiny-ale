// GET /api/categories
export default {
  data: [
    {
      id: '15',
      type: 'category',
      attributes: {
        name: 'Category 1',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '25',
              type: 'contract',
            },
            {
              id: '29',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '16',
      type: 'category',
      attributes: {
        name: 'Category 2',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '26',
              type: 'contract',
            },
            {
              id: '27',
              type: 'contract',
            },
            {
              id: '28',
              type: 'contract',
            },
            {
              id: '30',
              type: 'contract',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
