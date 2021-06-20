// GET /api/notes?notableType=Status&notableIds=49,52,50,53,51,54
export default {
  data: [
    {
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for Hirthe on 2019-09-01',
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
            id: '47',
            type: 'user',
          },
        },
      },
    },
    {
      id: '63',
      type: 'note',
      attributes: {
        note: "Note by O'Connell for Ritchie on 2019-09-01",
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '50',
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
      id: '64',
      type: 'note',
      attributes: {
        note: "Note by O'Connell for Gutkowski on 2019-09-01",
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '51',
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
      id: '65',
      type: 'note',
      attributes: {
        note: 'Note by Hodkiewicz for Hirthe on 2019-10-01',
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
            id: '47',
            type: 'user',
          },
        },
      },
    },
    {
      id: '66',
      type: 'note',
      attributes: {
        note: "Note by O'Connell for Ritchie on 2019-10-01",
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '53',
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
      id: '67',
      type: 'note',
      attributes: {
        note: "Note by O'Connell for Gutkowski on 2019-10-01",
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '54',
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
