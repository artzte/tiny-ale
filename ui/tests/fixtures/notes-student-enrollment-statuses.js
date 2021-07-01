// GET /api/notes?notableType=Status&notableIds=1,2,3,10,11,12
export default {
  data: [
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-09-01 enrollment of Hirthe in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'status',
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
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-10-01 enrollment of Hirthe in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'status',
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
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-11-01 enrollment of Hirthe in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'status',
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
      id: '17',
      type: 'note',
      attributes: {
        note: "Note by O'Connell for 2019-09-01 enrollment of Hirthe in Amaritudo reprehenderit copia laboriosam decor.",
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '10',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
      },
    },
    {
      id: '18',
      type: 'note',
      attributes: {
        note: "Note by O'Connell for 2019-10-01 enrollment of Hirthe in Amaritudo reprehenderit copia laboriosam decor.",
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '11',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
      },
    },
    {
      id: '19',
      type: 'note',
      attributes: {
        note: "Note by O'Connell for 2019-11-01 enrollment of Hirthe in Amaritudo reprehenderit copia laboriosam decor.",
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '12',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '48',
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
    {
      id: '48',
      type: 'user',
      attributes: {
        firstName: 'Harris',
        lastName: "O'Connell",
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'narcisa@ruecker.co',
        name: "Harris O'Connell",
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '52',
              type: 'user',
            },
            {
              id: '53',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 6,
  },
};
