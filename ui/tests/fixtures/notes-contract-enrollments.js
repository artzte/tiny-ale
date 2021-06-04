// GET /api/notes?notableType=Enrollment&notableIds=1,2,3
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Funk for enrollment in Acidus contabesco trucido non careo.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
      },
    },
    {
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Jakubowski for enrollment in Acidus contabesco trucido non careo.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
      },
    },
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Willms for enrollment in Acidus contabesco trucido non careo.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Sergio',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'caitlin.rath@weissnat.net',
        name: 'Sergio Morissette',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
