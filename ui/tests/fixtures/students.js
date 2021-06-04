// GET /api/students
export default {
  data: [
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Mitchell',
        lastName: 'Funk',
        nickname: null,
        name: 'Mitchell Funk',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1701223197',
        districtGrade: 9,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
      },
    },
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
    count: 3,
  },
};
