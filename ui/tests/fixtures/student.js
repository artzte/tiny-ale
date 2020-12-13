// GET /api/students/111
export default {
  data: {
    id: '111',
    type: 'user',
    attributes: {
      firstName: 'Austin',
      lastName: 'Will',
      nickname: null,
      name: 'Austin Will',
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '1880173925',
      districtGrade: 9,
      status: 'active',
      role: 'student',
    },
    relationships: {
      coordinator: {
        data: {
          id: '107',
          type: 'user',
        },
      },
    },
  },
};
