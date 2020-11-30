// GET /api/statuses?studentIds=228,229&months=2019-09-01,2019-10-01,2019-11-01,2019-12-01,2020-01-01,2020-02-01,2020-03-01,2020-04-01,2020-05-01,2020-06-01&type=student
export default {
  data: [
    {
      id: '110',
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
            id: '224',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '228',
            type: 'user',
          },
        },
      },
    },
    {
      id: '113',
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
            id: '224',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '228',
            type: 'user',
          },
        },
      },
    },
    {
      id: '111',
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
            id: '224',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '229',
            type: 'user',
          },
        },
      },
    },
    {
      id: '114',
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
            id: '224',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '229',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '224',
      type: 'user',
      attributes: {
        firstName: 'Clelia',
        lastName: 'Barton',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'orlandoschinner@waelchikautzer.io',
        name: 'Clelia Barton',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '228',
              type: 'user',
            },
            {
              id: '229',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 4,
  },
};
