// GET /api/notes?notableType=Status&notableIds=1,2,3,10,11,12
export default {
  data: [
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Morissette for 2019-09-01 enrollment of Funk in Acidus contabesco trucido non careo.',
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
            id: '2',
            type: 'user',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Morissette for 2019-10-01 enrollment of Funk in Acidus contabesco trucido non careo.',
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
            id: '2',
            type: 'user',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Morissette for 2019-11-01 enrollment of Funk in Acidus contabesco trucido non careo.',
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
            id: '2',
            type: 'user',
          },
        },
      },
    },
    {
      id: '16',
      type: 'note',
      attributes: {
        note: 'Note by Raynor for 2019-09-01 enrollment of Funk in Vilitas cultellus articulus vereor est.',
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
            id: '3',
            type: 'user',
          },
        },
      },
    },
    {
      id: '17',
      type: 'note',
      attributes: {
        note: 'Note by Raynor for 2019-10-01 enrollment of Funk in Vilitas cultellus articulus vereor est.',
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
            id: '3',
            type: 'user',
          },
        },
      },
    },
    {
      id: '18',
      type: 'note',
      attributes: {
        note: 'Note by Raynor for 2019-11-01 enrollment of Funk in Vilitas cultellus articulus vereor est.',
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
            id: '3',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Sergio',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'caitlin.rath@weissnat.net',
        name: 'Sergio Morissette',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Paige',
        lastName: 'Raynor',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'patria.luettgen@langworth.name',
        name: 'Paige Raynor',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '7',
              type: 'user',
            },
            {
              id: '8',
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
