// GET /api/statuses?enrollmentIds=59,60,58
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
      id: '64',
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
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '65',
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
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '66',
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
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '67',
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
            id: '60',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '68',
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
            id: '60',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '69',
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
            id: '60',
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
  ],
  meta: {
    count: 9,
  },
};
