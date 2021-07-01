// GET /api/profile
export default {
  data: {
    id: '50',
    type: 'user',
    attributes: {
      firstName: 'Janene',
      lastName: 'Moen',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'forrest_stanton@kirlin-kovacek.name',
      name: 'Janene Moen',
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
