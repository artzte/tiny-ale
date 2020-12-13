// GET /api/contracts?limit=20&order=name&include=term,category,facilitator&schoolYear=2019
export default {
  data: [
    {
      id: '29',
      type: 'contract',
      attributes: {
        name: 'Error accedo clibanus aduro astrum.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '32',
              type: 'enrollment',
            },
            {
              id: '33',
              type: 'enrollment',
            },
            {
              id: '34',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '30',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '15',
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
              id: '16',
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
            {
              id: '5',
              type: 'learningRequirement',
            },
          ],
        },
      },
    },
    {
      id: '30',
      type: 'contract',
      attributes: {
        name: 'Vinco stultus patria provident xiphias.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '35',
              type: 'enrollment',
            },
            {
              id: '36',
              type: 'enrollment',
            },
            {
              id: '37',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '30',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '16',
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
              id: '18',
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
      id: '107',
      type: 'user',
      attributes: {
        firstName: 'Tommie',
        lastName: 'Keebler',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'lupebernier@blockspencer.biz',
        name: 'Tommie Keebler',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '111',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '30',
      type: 'term',
      attributes: {
        name: 'Realigned discrete challenge',
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
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Loren',
        lastName: 'Bernhard',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'otha@leuschke.name',
        name: 'Loren Bernhard',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '112',
              type: 'user',
            },
            {
              id: '113',
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
