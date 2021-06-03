// GET /api/statuses/students?limit=-1&months=2019-09-01%2C2019-10-01%2C2019-11-01%2C2019-12-01%2C2020-01-01%2C2020-02-01%2C2020-03-01%2C2020-04-01%2C2020-05-01%2C2020-06-01&studentIds=6%2C7%2C8&type=student
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
            id: '2',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '6',
            type: 'user',
          },
        },
        notes: {
          data: [
            {
              id: '61',
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
            id: '2',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '6',
            type: 'user',
          },
        },
        notes: {
          data: [
            {
              id: '64',
              type: 'note',
            },
          ],
        },
      },
    },
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
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Sergio',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'caitlin.rath@weissnat.net',
        name: 'Sergio Morissette',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'user',
            },
          ],
        },
      },
    },
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
    count: 6,
  },
};
