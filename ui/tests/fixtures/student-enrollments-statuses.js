// GET /api/statuses?enrollmentIds=19,22
export default {
  data: [
    {
      id: '37',
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
            id: '52',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '19',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '38',
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
            id: '52',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '19',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '39',
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
            id: '52',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '19',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '46',
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
            id: '53',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '22',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '47',
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
            id: '53',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '22',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '48',
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
            id: '53',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '22',
            type: 'enrollment',
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
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Hilpert',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'rico@reichel.com',
        name: 'Connie Hilpert',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '57',
              type: 'user',
            },
            {
              id: '58',
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
