// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '228',
      type: 'user',
      attributes: {
        firstName: 'Suk',
        lastName: 'Altenwerth',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4801996158',
        districtGrade: 10,
        status: 'active',
        role: 'student',
        email: 'jackterry@ohara.info',
      },
      relationships: {
        coordinator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
      },
    },
    {
      id: '224',
      type: 'user',
      attributes: {
        firstName: 'Clelia',
        lastName: 'Barton',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'orlandoschinner@waelchikautzer.io',
      },
      relationships: {
      },
    },
    {
      id: '229',
      type: 'user',
      attributes: {
        firstName: 'Thuy',
        lastName: 'Koss',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2734166982',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: 'cicelykozey@stehrdenesik.name',
      },
      relationships: {
        coordinator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
      },
    },
    {
      id: '225',
      type: 'user',
      attributes: {
        firstName: 'Buford',
        lastName: 'Mante',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'dorian@deckowkuhic.co',
      },
      relationships: {
      },
    },
    {
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
        status: 'active',
        role: 'administrator',
        email: 'jerrold@torphyreichel.io',
      },
      relationships: {
      },
    },
    {
      id: '222',
      type: 'user',
      attributes: {
        firstName: 'Brittanie',
        lastName: 'Metz',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'darnell@shanahan.net',
      },
      relationships: {
      },
    },
    {
      id: '223',
      type: 'user',
      attributes: {
        firstName: 'Jeremiah',
        lastName: 'Rippin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'gabriel@gleason.info',
      },
      relationships: {
      },
    },
    {
      id: '227',
      type: 'user',
      attributes: {
        firstName: 'Bradly',
        lastName: 'Tromp',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7164254458',
        districtGrade: 9,
        status: 'active',
        role: 'student',
        email: 'bill@kunzeledner.co',
      },
      relationships: {
        coordinator: {
          data: {
            id: '223',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '224',
      type: 'user',
      attributes: {
        firstName: 'Clelia',
        lastName: 'Barton',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'orlandoschinner@waelchikautzer.io',
      },
      relationships: {
      },
    },
    {
      id: '223',
      type: 'user',
      attributes: {
        firstName: 'Jeremiah',
        lastName: 'Rippin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'gabriel@gleason.info',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
