// GET /api/students?status=reportable&order=lastName,firstName
export default {
  data: [
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Glennie',
        lastName: 'Gutkowski',
        nickname: null,
        name: 'Glennie Gutkowski',
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '5594787411',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
      },
    },
    {
      id: '51',
      type: 'user',
      attributes: {
        firstName: 'Wilburn',
        lastName: 'Hirthe',
        nickname: null,
        name: 'Wilburn Hirthe',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '735019319',
        districtGrade: 9,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
      },
    },
    {
      id: '52',
      type: 'user',
      attributes: {
        firstName: 'Brittny',
        lastName: 'Ritchie',
        nickname: null,
        name: 'Brittny Ritchie',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9669838669',
        districtGrade: 10,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '48',
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
