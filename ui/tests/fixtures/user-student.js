// GET /api/admin/users/119
export default {
  data: {
    id: '119',
    type: 'user',
    attributes: {
      firstName: 'Alona',
      lastName: 'Cormier',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '2054848287',
      districtGrade: 9,
      status: 'active',
      role: 'student',
      email: 'albina@jacobson.biz',
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
};
