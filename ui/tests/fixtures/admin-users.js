// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '319',
      type: 'user',
      attributes: {
        firstName: 'Armanda',
        lastName: 'Heaney',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'cyrilkuhic@stoltenbergstehr.org',
      },
      relationships: {
      },
    },
    {
      id: '320',
      type: 'user',
      attributes: {
        firstName: 'Debbi',
        lastName: 'Leffler',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'isidro@streich.org',
      },
      relationships: {
      },
    },
    {
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
        status: 'active',
        role: 'administrator',
        email: 'eleonoramurphy@kautzer.io',
      },
      relationships: {
      },
    },
    {
      id: '324',
      type: 'user',
      attributes: {
        firstName: 'Leisa',
        lastName: 'McDermott',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '2527013728',
        districtGrade: 10,
        status: 'active',
        role: 'student',
        email: 'teishastoltenberg@swaniawskiharvey.io',
      },
      relationships: {
        coordinator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
      },
    },
    {
      id: '323',
      type: 'user',
      attributes: {
        firstName: 'Barbera',
        lastName: 'Oberbrunner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5340139563',
        districtGrade: 9,
        status: 'active',
        role: 'student',
        email: 'kentontorphy@gislason.com',
      },
      relationships: {
        coordinator: {
          data: {
            id: '319',
            type: 'user',
          },
        },
      },
    },
    {
      id: '321',
      type: 'user',
      attributes: {
        firstName: 'Tatiana',
        lastName: 'Paucek',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'numbersvolkman@mraz.net',
      },
      relationships: {
      },
    },
    {
      id: '325',
      type: 'user',
      attributes: {
        firstName: 'Launa',
        lastName: 'Pfannerstill',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '4940633776',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: 'donovan@jacobi.biz',
      },
      relationships: {
        coordinator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
      },
    },
    {
      id: '318',
      type: 'user',
      attributes: {
        firstName: 'Delmer',
        lastName: 'Windler',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'anikachamplin@zieme.co',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '320',
      type: 'user',
      attributes: {
        firstName: 'Debbi',
        lastName: 'Leffler',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'isidro@streich.org',
      },
      relationships: {
      },
    },
    {
      id: '319',
      type: 'user',
      attributes: {
        firstName: 'Armanda',
        lastName: 'Heaney',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'cyrilkuhic@stoltenbergstehr.org',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
