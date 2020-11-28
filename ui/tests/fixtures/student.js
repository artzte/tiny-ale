// GET /api/students/119
export default {
  data: {
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
};
