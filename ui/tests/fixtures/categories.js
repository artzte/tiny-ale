// GET /api/categories
export default {
  data: [
    {
      id: '24',
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
              id: '28',
              type: 'contract',
            },
            {
              id: '32',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '25',
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
              id: '29',
              type: 'contract',
            },
            {
              id: '30',
              type: 'contract',
            },
            {
              id: '31',
              type: 'contract',
            },
            {
              id: '33',
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
