// GET /api/categories
export default {
  data: [
    {
      id: '7',
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
              id: '7',
              type: 'contract',
            },
            {
              id: '11',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '8',
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
              id: '8',
              type: 'contract',
            },
            {
              id: '9',
              type: 'contract',
            },
            {
              id: '10',
              type: 'contract',
            },
            {
              id: '12',
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
