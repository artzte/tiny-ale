// GET /api/statuses?enrollmentIds=58,61
export default {
  data: [
    {
      id: '61',
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
            id: '223',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '62',
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
            id: '223',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '63',
      type: 'status',
      attributes: {
        month: '2019-11-01',
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
            id: '223',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '70',
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
            id: '61',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '71',
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
            id: '61',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '72',
      type: 'status',
      attributes: {
        month: '2019-11-01',
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
            id: '61',
            type: 'enrollment',
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
    count: 6,
  },
};
