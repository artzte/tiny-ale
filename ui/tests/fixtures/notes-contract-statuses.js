// GET /api/notes?notableType=Status&notableIds=61,62,63,64,65,66,67,68,69
export default {
  data: [
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-09-01 enrollment of Will in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '61',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-10-01 enrollment of Will in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '62',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-11-01 enrollment of Will in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '63',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-09-01 enrollment of Gaylord in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '64',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-10-01 enrollment of Gaylord in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '65',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '9',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-11-01 enrollment of Gaylord in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '66',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '10',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-09-01 enrollment of Murphy in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '67',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-10-01 enrollment of Murphy in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '68',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for 2019-11-01 enrollment of Murphy in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '69',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '107',
      type: 'user',
      attributes: {
        firstName: 'Tommie',
        lastName: 'Keebler',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'lupebernier@blockspencer.biz',
        name: 'Tommie Keebler',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '111',
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
