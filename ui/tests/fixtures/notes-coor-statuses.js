// GET /api/notes?notableType=Status&notableIds=133,136,134,137,135,138
export default {
  data: [
    {
      id: '69',
      type: 'note',
      attributes: {
        note: 'Note by Heaney for Oberbrunner on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '133',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '319',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '319',
      type: 'user',
      attributes: {
        firstName: 'Armanda',
        lastName: 'Heaney',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'cyrilkuhic@stoltenbergstehr.org',
        name: 'Armanda Heaney',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '323',
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
