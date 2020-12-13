// GET /api/notes?notableType=Enrollment&notableIds=33,34,32
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Will for enrollment in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '32',
            type: 'enrollment',
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
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Gaylord for enrollment in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '33',
            type: 'enrollment',
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
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Murphy for enrollment in Error accedo clibanus aduro astrum.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '34',
            type: 'enrollment',
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
    count: 3,
  },
};
