// GET /api/students
export default {
  data: [
    {
      id: '227',
      type: 'user',
      attributes: {
        firstName: 'Bradly',
        lastName: 'Tromp',
        nickname: null,
        name: 'Bradly Tromp',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7164254458',
        districtGrade: 9,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '223',
            type: 'user',
          },
        },
      },
    },
    {
      id: '228',
      type: 'user',
      attributes: {
        firstName: 'Suk',
        lastName: 'Altenwerth',
        nickname: null,
        name: 'Suk Altenwerth',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4801996158',
        districtGrade: 10,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
      },
    },
    {
      id: '229',
      type: 'user',
      attributes: {
        firstName: 'Thuy',
        lastName: 'Koss',
        nickname: null,
        name: 'Thuy Koss',
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2734166982',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '224',
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
