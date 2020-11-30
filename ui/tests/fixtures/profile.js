// GET /api/profile
export default {
  data: {
    id: '226',
    type: 'user',
    attributes: {
      firstName: 'Beula',
      lastName: 'Metz',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'jerrold@torphyreichel.io',
      name: 'Beula Metz',
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
