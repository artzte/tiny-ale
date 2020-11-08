// GET /api/students
export default {
  data: [
    {
      id: '323',
      type: 'user',
      attributes: {
        firstName: 'Barbera',
        lastName: 'Oberbrunner',
        nickname: null,
        name: 'Barbera Oberbrunner',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5340139563',
        districtGrade: 9,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '319',
            type: 'user',
          },
        },
      },
    },
    {
      id: '324',
      type: 'user',
      attributes: {
        firstName: 'Leisa',
        lastName: 'McDermott',
        nickname: null,
        name: 'Leisa McDermott',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '2527013728',
        districtGrade: 10,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
      },
    },
    {
      id: '325',
      type: 'user',
      attributes: {
        firstName: 'Launa',
        lastName: 'Pfannerstill',
        nickname: null,
        name: 'Launa Pfannerstill',
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '4940633776',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
