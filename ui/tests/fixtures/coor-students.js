// GET /api/students?coordinatorIds=320&status=reportable&order=lastName,firstName
export default {
  data: [
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
    count: 2,
  },
};
