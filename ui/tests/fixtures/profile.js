// GET /api/profile
export default {
  data: {
    id: '118',
    type: 'user',
    attributes: {
      firstName: 'Kyra',
      lastName: 'Hammes',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'ria@kuphal.com',
      name: 'Kyra Hammes',
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
