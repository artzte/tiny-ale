// GET /api/statuses/enrollments?enrollmentIds=15,13,14
export default {
  data: [
    {
      id: '1',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '13',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '5',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '13',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '6',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '3',
      type: 'status',
      attributes: {
        month: '2019-11-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '13',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '7',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '4',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '14',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '8',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '5',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '14',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '9',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '6',
      type: 'status',
      attributes: {
        month: '2019-11-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '14',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '10',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '7',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '15',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '11',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '8',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '15',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '12',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '9',
      type: 'status',
      attributes: {
        month: '2019-11-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: '25',
        metFteRequirements: true,
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
            id: '15',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '13',
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
    count: 9,
  },
};
