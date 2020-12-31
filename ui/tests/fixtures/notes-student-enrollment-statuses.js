// GET /api/notes?notableType=Status&notableIds=37,38,39,46,47,48
export default {
  data: [
    {
      id: '18',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-09-01 enrollment of Klein in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '37',
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
      id: '19',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-10-01 enrollment of Klein in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '38',
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
      id: '20',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-11-01 enrollment of Klein in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '39',
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
      id: '30',
      type: 'note',
      attributes: {
        note: 'Note by Hilpert for 2019-09-01 enrollment of Klein in Demum verus sed sit valens.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '46',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
      },
    },
    {
      id: '31',
      type: 'note',
      attributes: {
        note: 'Note by Hilpert for 2019-10-01 enrollment of Klein in Demum verus sed sit valens.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '47',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
      },
    },
    {
      id: '32',
      type: 'note',
      attributes: {
        note: 'Note by Hilpert for 2019-11-01 enrollment of Klein in Demum verus sed sit valens.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '48',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '53',
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
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Hilpert',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'rico@reichel.com',
        name: 'Connie Hilpert',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '57',
              type: 'user',
            },
            {
              id: '58',
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
