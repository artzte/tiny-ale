// GET /api/admin/users/227
export default {
  data: {
    id: '227',
    type: 'user',
    attributes: {
      firstName: 'Bradly',
      lastName: 'Tromp',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '7164254458',
      districtGrade: 9,
      status: 'active',
      role: 'student',
      email: 'bill@kunzeledner.co',
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
