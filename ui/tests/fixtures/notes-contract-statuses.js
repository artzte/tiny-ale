// GET /api/notes?notableType=Status&notableIds=1,2,3,4,5,6,7,8,9
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
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-09-01 enrollment of Ritchie in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
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
      id: '9',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-10-01 enrollment of Ritchie in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
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
      id: '10',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-11-01 enrollment of Ritchie in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '6',
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
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-09-01 enrollment of Gutkowski in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '7',
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
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-10-01 enrollment of Gutkowski in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '8',
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
      id: '13',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for 2019-11-01 enrollment of Gutkowski in Sodalitas sollicito aer alius apud.',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '9',
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
    count: 9,
  },
};
