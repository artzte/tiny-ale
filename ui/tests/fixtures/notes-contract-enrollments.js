// GET /api/notes?notableType=Enrollment&notableIds=51,50,52
export default {
  data: [
    {
      id: '10',
      type: 'note',
      attributes: {
        note: 'Note for McDermott for enrollment in Angulus comedo damnatio attonbitus ceno.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '51',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '319',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '319',
      type: 'user',
      attributes: {
        firstName: 'Armanda',
        lastName: 'Heaney',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'cyrilkuhic@stoltenbergstehr.org',
        name: 'Armanda Heaney',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '323',
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
