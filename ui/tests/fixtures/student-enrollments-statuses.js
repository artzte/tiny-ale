// GET /api/statuses/enrollments?enrollmentIds=13,16
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
      id: '10',
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
            id: '48',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '16',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '17',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '11',
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
            id: '48',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '16',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '18',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '12',
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
            id: '48',
            type: 'user',
          },
        },
        statusable: {
          data: {
            id: '16',
            type: 'enrollment',
          },
        },
        notes: {
          data: [
            {
              id: '19',
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
    {
      id: '48',
      type: 'user',
      attributes: {
        firstName: 'Harris',
        lastName: "O'Connell",
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'narcisa@ruecker.co',
        name: "Harris O'Connell",
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '52',
              type: 'user',
            },
            {
              id: '53',
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
