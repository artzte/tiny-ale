// GET /api/notes?notableType=Enrollment&notableIds=59,60,58
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Altenwerth for enrollment in Incidunt xiphias adamo pauci abeo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '59',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '223',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '223',
      type: 'user',
      attributes: {
        firstName: 'Jeremiah',
        lastName: 'Rippin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'gabriel@gleason.info',
        name: 'Jeremiah Rippin',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '227',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 1,
  },
};
