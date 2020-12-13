// GET /api/notes?notableType=meetingParticipant&notableIds=1,2,3
export default {
  data: [
    {
      id: '72',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for student Will / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'meetingParticipant',
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
      id: '73',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for student Gaylord / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'meetingParticipant',
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
      id: '74',
      type: 'note',
      attributes: {
        note: 'Note by Keebler for student Murphy / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'meetingParticipant',
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
