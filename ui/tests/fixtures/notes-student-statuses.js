// GET /api/notes?notableType=Status&notableIds=85,88
export default {
  data: [
    {
      id: '75',
      type: 'note',
      attributes: {
        note: 'Note by Torp for Klein on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '85',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '78',
      type: 'note',
      attributes: {
        note: 'Note by Torp for Klein on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '88',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
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
  ],
  meta: {
    count: 2,
  },
};
