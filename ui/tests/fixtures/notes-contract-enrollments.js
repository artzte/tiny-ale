// GET /api/notes?notableType=Enrollment&notableIds=19,20,21
export default {
  data: [
    {
      id: '15',
      type: 'note',
      attributes: {
        note: 'Note for Klein for enrollment in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '19',
            type: 'enrollment',
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
      id: '16',
      type: 'note',
      attributes: {
        note: 'Note for Tremblay for enrollment in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '20',
            type: 'enrollment',
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
      id: '17',
      type: 'note',
      attributes: {
        note: 'Note for Tromp for enrollment in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '21',
            type: 'enrollment',
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
