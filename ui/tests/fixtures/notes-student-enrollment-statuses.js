// GET /api/notes?notableType=Status&notableIds=25,26,27,34,35,36
export default {
  data: [
    {
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Morissette for 2019-09-01 enrollment of Cormier in Omnis administratio ciminatio damnatio tergum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '25',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '115',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
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
    count: 1,
  },
};
