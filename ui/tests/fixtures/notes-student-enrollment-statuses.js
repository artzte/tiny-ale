// GET /api/notes?notableType=Status&notableIds=85,86,87,94,95,96
export default {
  data: [
    {
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Heaney for 2019-09-01 enrollment of Oberbrunner in Angulus comedo damnatio attonbitus ceno.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '85',
            type: 'status',
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
