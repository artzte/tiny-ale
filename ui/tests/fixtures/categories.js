// GET /api/categories
export default {
  data: [
    {
      id: '28',
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
              id: '38',
              type: 'contract',
            },
            {
              id: '42',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '29',
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
              id: '39',
              type: 'contract',
            },
            {
              id: '40',
              type: 'contract',
            },
            {
              id: '41',
              type: 'contract',
            },
            {
              id: '43',
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
