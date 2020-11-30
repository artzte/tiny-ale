// GET /api/contracts?limit=20&order=name&include=term,category,facilitator&schoolYear=2019
export default {
  data: [
    {
      id: '43',
      type: 'contract',
      attributes: {
        name: 'Deputo aequitas culpa synagoga sui.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '61',
              type: 'enrollment',
            },
            {
              id: '62',
              type: 'enrollment',
            },
            {
              id: '63',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '68',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '29',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '84',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        learningRequirements: {
          data: [

          ],
        },
      },
    },
    {
      id: '42',
      type: 'contract',
      attributes: {
        name: 'Incidunt xiphias adamo pauci abeo.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '58',
              type: 'enrollment',
            },
            {
              id: '59',
              type: 'enrollment',
            },
            {
              id: '60',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '223',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '68',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '28',
            type: 'category',
          },
        },
        assignments: {
          data: [
            {
              id: '1',
              type: 'assignment',
            },
            {
              id: '2',
              type: 'assignment',
            },
            {
              id: '3',
              type: 'assignment',
            },
            {
              id: '4',
              type: 'assignment',
            },
            {
              id: '5',
              type: 'assignment',
            },
          ],
        },
        creditAssignments: {
          data: [
            {
              id: '82',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [
            {
              id: '1',
              type: 'meeting',
            },
            {
              id: '2',
              type: 'meeting',
            },
            {
              id: '3',
              type: 'meeting',
            },
            {
              id: '4',
              type: 'meeting',
            },
            {
              id: '5',
              type: 'meeting',
            },
          ],
        },
        learningRequirements: {
          data: [
            {
              id: '13',
              type: 'learningRequirement',
            },
            {
              id: '14',
              type: 'learningRequirement',
            },
            {
              id: '15',
              type: 'learningRequirement',
            },
            {
              id: '16',
              type: 'learningRequirement',
            },
          ],
        },
      },
    },
  ],
  included: [
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
    {
      id: '224',
      type: 'user',
      attributes: {
        firstName: 'Clelia',
        lastName: 'Barton',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'orlandoschinner@waelchikautzer.io',
        name: 'Clelia Barton',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '228',
              type: 'user',
            },
            {
              id: '229',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '68',
      type: 'term',
      attributes: {
        name: 'Digitized bi-directional artificial intelligence',
        schoolYear: 2019,
        creditDate: '2020-01-31',
        months: [
          '2019-09-01',
          '2019-10-01',
          '2019-11-01',
          '2019-12-01',
          '2020-01-01',
        ],
        status: 'active',
      },
      meta: null,
    },
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
      id: '223',
      type: 'user',
      attributes: {
        firstName: 'Jeremiah',
        lastName: 'Rippin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'gabriel@gleason.info',
        name: 'Jeremiah Rippin',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '227',
              type: 'user',
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
