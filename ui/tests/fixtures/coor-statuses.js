// GET /api/statuses/students?studentIds=7,8&months=2019-09-01,2019-10-01,2019-11-01,2019-12-01,2020-01-01,2020-02-01,2020-03-01,2020-04-01,2020-05-01,2020-06-01&type=student
export default {
  data: [
    {
      id: '50',
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
            id: '3',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '7',
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
      id: '53',
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
            id: '3',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '7',
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
    {
      id: '51',
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
            id: '3',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '8',
            type: 'user',
          },
        },
        notes: {
          data: [
            {
              id: '63',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '54',
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
            id: '3',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '8',
            type: 'user',
          },
        },
        notes: {
          data: [
            {
              id: '66',
              type: 'note',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Paige',
        lastName: 'Raynor',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'patria.luettgen@langworth.name',
        name: 'Paige Raynor',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '7',
              type: 'user',
            },
            {
              id: '8',
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
