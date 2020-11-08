// GET /api/profile
export default {
  data: {
    id: '322',
    type: 'user',
    attributes: {
      firstName: 'Glenda',
      lastName: 'Marquardt',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'eleonoramurphy@kautzer.io',
      name: 'Glenda Marquardt',
      status: 'active',
      role: 'administrator',
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
