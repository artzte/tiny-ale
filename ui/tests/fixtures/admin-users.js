// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '4',
      type: 'user',
      attributes: {
        firstName: 'Kacy',
        lastName: 'Bogan',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'stefan.homenick@purdy.co',
      },
      relationships: {
      },
    },
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Mitchell',
        lastName: 'Funk',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1701223197',
        districtGrade: 9,
        status: 'active',
        role: 'student',
        email: 'val.hermann@connelly-kuvalis.io',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
      },
    },
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Yesenia',
        lastName: 'Jakubowski',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '990519298',
        districtGrade: 10,
        status: 'active',
        role: 'student',
        email: 'carolin@koelpin.info',
      },
      relationships: {
        coordinator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Sergio',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'caitlin.rath@weissnat.net',
      },
      relationships: {
      },
    },
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Paige',
        lastName: 'Raynor',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'patria.luettgen@langworth.name',
      },
      relationships: {
      },
    },
    {
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
        status: 'active',
        role: 'administrator',
        email: 'myra@ratke-lesch.name',
      },
      relationships: {
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Inga',
        lastName: 'Spinka',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'pat@reichel-prosacco.co',
      },
      relationships: {
      },
    },
    {
      id: '8',
      type: 'user',
      attributes: {
        firstName: 'Palmer',
        lastName: 'Willms',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '4579851298',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: 'gregory@jacobi-gusikowski.com',
      },
      relationships: {
        coordinator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Sergio',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'caitlin.rath@weissnat.net',
      },
      relationships: {
      },
    },
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Paige',
        lastName: 'Raynor',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'patria.luettgen@langworth.name',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
