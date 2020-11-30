// GET /api/students/227
export default {
  data: {
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
};
