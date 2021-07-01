// GET /api/contracts?limit=20&order=name&include=term,category,facilitator&schoolYear=2019
export default {
  data: [
    {
      id: '12',
      type: 'contract',
      attributes: {
        name: 'Amaritudo reprehenderit copia laboriosam decor.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '16',
              type: 'enrollment',
            },
            {
              id: '17',
              type: 'enrollment',
            },
            {
              id: '18',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '41',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '8',
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
              id: '49',
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
      id: '11',
      type: 'contract',
      attributes: {
        name: 'Sodalitas sollicito aer alius apud.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '13',
              type: 'enrollment',
            },
            {
              id: '14',
              type: 'enrollment',
            },
            {
              id: '15',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '41',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '7',
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
              id: '47',
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
              id: '12',
              type: 'learningRequirement',
            },
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
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '41',
      type: 'term',
      attributes: {
        name: 'Centralized regional model',
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
    {
      id: '48',
      type: 'user',
      attributes: {
        firstName: 'Harris',
        lastName: "O'Connell",
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'narcisa@ruecker.co',
        name: "Harris O'Connell",
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '52',
              type: 'user',
            },
            {
              id: '53',
              type: 'user',
            },
          ],
        },
      },
    },
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
      id: '47',
      type: 'user',
      attributes: {
        firstName: 'Marin',
        lastName: 'Hodkiewicz',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'thuy.mcdermott@hirthe.io',
        name: 'Marin Hodkiewicz',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '51',
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
