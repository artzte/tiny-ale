// GET /api/admin/users/6
export default {
  data: {
    id: '6',
    type: 'user',
    attributes: {
      firstName: 'Mitchell',
      lastName: 'Funk',
      nickname: null,
      dateActive: '2018-08-01',
      dateInactive: null,
      districtId: '1701223197',
      districtGrade: 9,
      status: 'active',
      role: 'student',
      email: 'val.hermann@connelly-kuvalis.io',
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
