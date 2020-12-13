// GET /api/notes?notableType=Status&notableIds=61,62,63,70,71,72
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
      id: '16',
      type: 'note',
      attributes: {
        note: 'Note by Bernhard for 2019-09-01 enrollment of Will in Vinco stultus patria provident xiphias.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '70',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
      },
    },
    {
      id: '17',
      type: 'note',
      attributes: {
        note: 'Note by Bernhard for 2019-10-01 enrollment of Will in Vinco stultus patria provident xiphias.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '71',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
      },
    },
    {
      id: '18',
      type: 'note',
      attributes: {
        note: 'Note by Bernhard for 2019-11-01 enrollment of Will in Vinco stultus patria provident xiphias.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '72',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '108',
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
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Loren',
        lastName: 'Bernhard',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'otha@leuschke.name',
        name: 'Loren Bernhard',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '112',
              type: 'user',
            },
            {
              id: '113',
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
