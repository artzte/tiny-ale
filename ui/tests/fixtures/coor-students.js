// GET /api/students?coordinatorIds=3&status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Yesenia',
        lastName: 'Jakubowski',
        nickname: null,
        name: 'Yesenia Jakubowski',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '990519298',
        districtGrade: 10,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
      },
    },
    {
      id: '8',
      type: 'user',
      attributes: {
        firstName: 'Palmer',
        lastName: 'Willms',
        nickname: null,
        name: 'Palmer Willms',
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '4579851298',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '3',
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
