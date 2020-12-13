// GET /api/notes?notableType=Status&notableIds=109,112
export default {
  data: [
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for Will on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '109',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for Will on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '112',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
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
  ],
  meta: {
    count: 2,
  },
};
