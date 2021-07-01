// GET /api/notes?notableType=Enrollment&notableIds=15,13,14
export default {
  data: [
    {
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Hirthe for enrollment in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '13',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
      },
    },
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Ritchie for enrollment in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '14',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note for Gutkowski for enrollment in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '47',
      type: 'user',
      attributes: {
        firstName: 'Marin',
        lastName: 'Hodkiewicz',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'thuy.mcdermott@hirthe.io',
        name: 'Marin Hodkiewicz',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '51',
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
