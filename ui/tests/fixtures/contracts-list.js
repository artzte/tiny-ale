// GET /api/contracts?limit=20&order=name&include=term,category,facilitator&schoolYear=2019
export default {
  data: [
    {
      id: '15',
      type: 'contract',
      attributes: {
        name: 'Cupiditas stabilis testimonium et auctor.',
        status: 'approved',
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
            id: '116',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '19',
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
              id: '27',
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
      id: '14',
      type: 'contract',
      attributes: {
        name: 'Omnis administratio ciminatio damnatio tergum.',
        status: 'approved',
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
            id: '115',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '19',
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
              id: '25',
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
              id: '1',
              type: 'learningRequirement',
            },
            {
              id: '2',
              type: 'learningRequirement',
            },
            {
              id: '3',
              type: 'learningRequirement',
            },
            {
              id: '4',
              type: 'learningRequirement',
            },
          ],
        },
      },
    },
  ],
  included: [
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
      id: '116',
      type: 'user',
      attributes: {
        firstName: 'Brittanie',
        lastName: 'Daniel',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'sharda@okeefe.biz',
        name: 'Brittanie Daniel',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '120',
              type: 'user',
            },
            {
              id: '121',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '19',
      type: 'term',
      attributes: {
        name: 'Stand-alone full-range hub',
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
      id: '115',
      type: 'user',
      attributes: {
        firstName: 'Coy',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'leif@heaney.info',
        name: 'Coy Morissette',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '119',
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
