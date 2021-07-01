// GET /api/students/51
export default {
  data: {
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
};
