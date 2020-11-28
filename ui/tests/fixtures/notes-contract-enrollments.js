// GET /api/notes?notableType=Enrollment&notableIds=21,19,20
export default {
  data: [
    {
      id: '10',
      type: 'note',
      attributes: {
        note: 'Note for Berge for enrollment in Omnis administratio ciminatio damnatio tergum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '21',
            type: 'enrollment',
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
