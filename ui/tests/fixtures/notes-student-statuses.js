// GET /api/notes?notableType=Status&notableIds=109,112
export default {
  data: [
    {
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by Rippin for Tromp on 2019-09-01',
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
            id: '223',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
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
    count: 1,
  },
};
