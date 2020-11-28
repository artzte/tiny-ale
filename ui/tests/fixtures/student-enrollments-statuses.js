// GET /api/statuses?enrollmentIds=19,22
export default {
  data: [
    {
      id: '25',
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
            id: '115',
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
      id: '26',
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
            id: '115',
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
      id: '27',
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
            id: '115',
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
      id: '34',
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
            id: '116',
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
      id: '35',
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
            id: '116',
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
      id: '36',
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
            id: '116',
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
      id: '115',
      type: 'user',
      attributes: {
        firstName: 'Coy',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'leif@heaney.info',
        name: 'Coy Morissette',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '119',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '116',
      type: 'user',
      attributes: {
        firstName: 'Brittanie',
        lastName: 'Daniel',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'sharda@okeefe.biz',
        name: 'Brittanie Daniel',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '120',
              type: 'user',
            },
            {
              id: '121',
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
