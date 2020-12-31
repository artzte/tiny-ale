// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '54',
      type: 'user',
      attributes: {
        firstName: 'Gonzalo',
        lastName: 'Brekke',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'jaeskiles@purdy.net',
      },
      relationships: {
      },
    },
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Hilpert',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'rico@reichel.com',
      },
      relationships: {
      },
    },
    {
      id: '56',
      type: 'user',
      attributes: {
        firstName: 'Jerold',
        lastName: 'Klein',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4809648277',
        districtGrade: 9,
        status: 'active',
        role: 'student',
        email: 'catricegislason@gottlieb.net',
      },
      relationships: {
        coordinator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '51',
      type: 'user',
      attributes: {
        firstName: 'Christopher',
        lastName: 'Lueilwitz',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'mel@heller.com',
      },
      relationships: {
      },
    },
    {
      id: '52',
      type: 'user',
      attributes: {
        firstName: 'Shayla',
        lastName: 'Torp',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'solomon@hills.name',
      },
      relationships: {
      },
    },
    {
      id: '57',
      type: 'user',
      attributes: {
        firstName: 'Marlin',
        lastName: 'Tremblay',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9616779893',
        districtGrade: 10,
        status: 'active',
        role: 'student',
        email: 'reginald@jacobs.co',
      },
      relationships: {
        coordinator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
      },
    },
    {
      id: '58',
      type: 'user',
      attributes: {
        firstName: 'Milly',
        lastName: 'Tromp',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '1998684872',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: 'kemberlyreichel@lubowitzgerhold.info',
      },
      relationships: {
        coordinator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
      },
    },
    {
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
        status: 'active',
        role: 'administrator',
        email: 'garret@kirlin.io',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '52',
      type: 'user',
      attributes: {
        firstName: 'Shayla',
        lastName: 'Torp',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'solomon@hills.name',
      },
      relationships: {
      },
    },
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Hilpert',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'rico@reichel.com',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
