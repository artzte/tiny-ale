// GET /api/notes?notableType=Status&notableIds=49,52
export default {
  data: [
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Morissette for Funk on 2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '49',
            type: 'status',
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
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Morissette for Funk on 2019-10-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '52',
            type: 'status',
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
    count: 2,
  },
};
