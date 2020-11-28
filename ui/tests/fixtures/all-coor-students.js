// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '121',
      type: 'user',
      attributes: {
        firstName: 'Stacia',
        lastName: 'Berge',
        nickname: null,
        name: 'Stacia Berge',
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '588825634',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '116',
            type: 'user',
          },
        },
      },
    },
    {
      id: '119',
      type: 'user',
      attributes: {
        firstName: 'Alona',
        lastName: 'Cormier',
        nickname: null,
        name: 'Alona Cormier',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '2054848287',
        districtGrade: 9,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '115',
            type: 'user',
          },
        },
      },
    },
    {
      id: '120',
      type: 'user',
      attributes: {
        firstName: 'Frank',
        lastName: 'Price',
        nickname: null,
        name: 'Frank Price',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6752258661',
        districtGrade: 10,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '116',
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
