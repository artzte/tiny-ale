// GET /api/profile
export default {
  data: {
    id: '55',
    type: 'user',
    attributes: {
      firstName: 'Rashad',
      lastName: 'Ziemann',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'garret@kirlin.io',
      name: 'Rashad Ziemann',
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
