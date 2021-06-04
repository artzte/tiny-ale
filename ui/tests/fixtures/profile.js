// GET /api/profile
export default {
  data: {
    id: '5',
    type: 'user',
    attributes: {
      firstName: 'Neil',
      lastName: 'Runte',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'myra@ratke-lesch.name',
      name: 'Neil Runte',
      status: 'active',
      role: 'administrator',
      isStaff: true,
    },
    relationships: {
      coordinatees: {
        data: [

        ],
      },
    },
  },
  meta: {
    permissions: [
      'manage:all-reporting',
      'manage:config',
      'manage:own-reporting',
      'read:config',
      'read:reporting',
    ],
  },
};
