// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Glennie',
        lastName: 'Gutkowski',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '5594787411',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: 'royce@stark.biz',
      },
      relationships: {
        coordinator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
      },
    },
    {
      id: '51',
      type: 'user',
      attributes: {
        firstName: 'Wilburn',
        lastName: 'Hirthe',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '735019319',
        districtGrade: 9,
        status: 'active',
        role: 'student',
        email: 'reid.bruen@hane-stroman.info',
      },
      relationships: {
        coordinator: {
          data: {
            id: '47',
            type: 'user',
          },
        },
      },
    },
    {
      id: '47',
      type: 'user',
      attributes: {
        firstName: 'Marin',
        lastName: 'Hodkiewicz',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'thuy.mcdermott@hirthe.io',
      },
      relationships: {
      },
    },
    {
      id: '49',
      type: 'user',
      attributes: {
        firstName: 'Lilliam',
        lastName: 'Lubowitz',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'claude_erdman@mckenzie.co',
      },
      relationships: {
      },
    },
    {
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
        status: 'active',
        role: 'administrator',
        email: 'forrest_stanton@kirlin-kovacek.name',
      },
      relationships: {
      },
    },
    {
      id: '48',
      type: 'user',
      attributes: {
        firstName: 'Harris',
        lastName: "O'Connell",
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'narcisa@ruecker.co',
      },
      relationships: {
      },
    },
    {
      id: '52',
      type: 'user',
      attributes: {
        firstName: 'Brittny',
        lastName: 'Ritchie',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9669838669',
        districtGrade: 10,
        status: 'active',
        role: 'student',
        email: 'sharell.nader@king.info',
      },
      relationships: {
        coordinator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
      },
    },
    {
      id: '46',
      type: 'user',
      attributes: {
        firstName: 'Georgina',
        lastName: 'Schmidt',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'zulma_zulauf@kessler.name',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '48',
      type: 'user',
      attributes: {
        firstName: 'Harris',
        lastName: "O'Connell",
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'narcisa@ruecker.co',
      },
      relationships: {
      },
    },
    {
      id: '47',
      type: 'user',
      attributes: {
        firstName: 'Marin',
        lastName: 'Hodkiewicz',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'thuy.mcdermott@hirthe.io',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
