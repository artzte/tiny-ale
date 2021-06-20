// GET /api/admin/users/51
export default {
  data: {
    id: '51',
    type: 'user',
    attributes: {
      firstName: 'Wilburn',
      lastName: 'Hirthe',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '735019319',
      districtGrade: 9,
      status: 'active',
      role: 'student',
      email: 'reid.bruen@hane-stroman.info',
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
};
