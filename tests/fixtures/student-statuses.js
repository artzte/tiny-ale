// GET /api/statuses?limit=-1&months=2019-09-01%2C2019-10-01%2C2019-11-01%2C2019-12-01%2C2020-01-01%2C2020-02-01%2C2020-03-01%2C2020-04-01%2C2020-05-01%2C2020-06-01&studentIds=191
export default {
  data: [
    {
      id: '103',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '187',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '191',
            type: 'user',
          },
        },
      },
    },
    {
      id: '106',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '187',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '191',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '187',
      type: 'user',
      attributes: {
        firstName: 'Judson',
        lastName: 'Emmerich',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'hosea@kovacek.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '191',
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
