// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '56',
      type: 'user',
      attributes: {
        firstName: 'Jerold',
        lastName: 'Klein',
        nickname: null,
        name: 'Jerold Klein',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4809648277',
        districtGrade: 9,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '57',
      type: 'user',
      attributes: {
        firstName: 'Marlin',
        lastName: 'Tremblay',
        nickname: null,
        name: 'Marlin Tremblay',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9616779893',
        districtGrade: 10,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
      },
    },
    {
      id: '58',
      type: 'user',
      attributes: {
        firstName: 'Milly',
        lastName: 'Tromp',
        nickname: null,
        name: 'Milly Tromp',
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '1998684872',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '53',
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
