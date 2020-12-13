// GET /api/profile
export default {
  data: {
    id: '110',
    type: 'user',
    attributes: {
      firstName: 'Bianca',
      lastName: 'Boyle',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'clarinebogan@senger.net',
      name: 'Bianca Boyle',
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
