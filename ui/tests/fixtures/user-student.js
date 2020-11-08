// GET /api/admin/users/323
export default {
  data: {
    id: '323',
    type: 'user',
    attributes: {
      firstName: 'Barbera',
      lastName: 'Oberbrunner',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '5340139563',
      districtGrade: 9,
      status: 'active',
      role: 'student',
      email: 'kentontorphy@gislason.com',
    },
    relationships: {
      coordinator: {
        data: {
          id: '319',
          type: 'user',
        },
      },
    },
  },
};
