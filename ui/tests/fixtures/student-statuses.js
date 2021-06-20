// GET /api/statuses/students?limit=10000&months=2019-09-01%2C2019-10-01%2C2019-11-01%2C2019-12-01%2C2020-01-01%2C2020-02-01%2C2020-03-01%2C2020-04-01%2C2020-05-01%2C2020-06-01&studentIds=51
export default {
  data: [
    {
      id: '49',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '51',
            type: 'user',
          },
        },
        notes: {
          data: [
            {
              id: '62',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '52',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '51',
            type: 'user',
          },
        },
        notes: {
          data: [
            {
              id: '65',
              type: 'note',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '47',
      type: 'user',
      attributes: {
        firstName: 'Marin',
        lastName: 'Hodkiewicz',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'thuy.mcdermott@hirthe.io',
        name: 'Marin Hodkiewicz',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '51',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
