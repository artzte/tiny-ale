// GET /api/notes?notableType=meetingParticipant&notableIds=1,2,3
export default {
  data: [
    {
      id: '86',
      type: 'note',
      attributes: {
        note: 'Note by Torp for student Klein / meeting 1',
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
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '87',
      type: 'note',
      attributes: {
        note: 'Note by Torp for student Tremblay / meeting 1',
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
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '88',
      type: 'note',
      attributes: {
        note: 'Note by Torp for student Tromp / meeting 1',
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
            id: '52',
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
  ],
  meta: {
    count: 3,
  },
};
