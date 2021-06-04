// GET /api/students/6
export default {
  data: {
    id: '6',
    type: 'user',
    attributes: {
      firstName: 'Mitchell',
      lastName: 'Funk',
      nickname: null,
      name: 'Mitchell Funk',
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '1701223197',
      districtGrade: 9,
      status: 'active',
      role: 'student',
    },
    relationships: {
      coordinator: {
        data: {
          id: '2',
          type: 'user',
        },
      },
    },
  },
};
