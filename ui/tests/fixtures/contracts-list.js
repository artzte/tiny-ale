// GET /api/contracts?limit=20&order=name&include=term,category,facilitator&schoolYear=2019
export default {
  data: [
    {
      id: '14',
      type: 'contract',
      attributes: {
        name: 'Acidus copiose peior coruscus utpote.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '19',
              type: 'enrollment',
            },
            {
              id: '20',
              type: 'enrollment',
            },
            {
              id: '21',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '12',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '10',
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
              id: '50',
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
    {
      id: '15',
      type: 'contract',
      attributes: {
        name: 'Demum verus sed sit valens.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '22',
              type: 'enrollment',
            },
            {
              id: '23',
              type: 'enrollment',
            },
            {
              id: '24',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '12',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '11',
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
              id: '52',
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
  ],
  included: [
    {
      id: '10',
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
              id: '10',
              type: 'contract',
            },
            {
              id: '14',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '52',
      type: 'user',
      attributes: {
        firstName: 'Shayla',
        lastName: 'Torp',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'solomon@hills.name',
        name: 'Shayla Torp',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '56',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '12',
      type: 'term',
      attributes: {
        name: 'Mandatory 24/7 moratorium',
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
      id: '11',
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
              id: '11',
              type: 'contract',
            },
            {
              id: '12',
              type: 'contract',
            },
            {
              id: '13',
              type: 'contract',
            },
            {
              id: '15',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Hilpert',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'rico@reichel.com',
        name: 'Connie Hilpert',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '57',
              type: 'user',
            },
            {
              id: '58',
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
