// GET /api/admin/users/56
export default {
  data: {
    id: '56',
    type: 'user',
    attributes: {
      firstName: 'Jerold',
      lastName: 'Klein',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '4809648277',
      districtGrade: 9,
      status: 'active',
      role: 'student',
      email: 'catricegislason@gottlieb.net',
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
};
