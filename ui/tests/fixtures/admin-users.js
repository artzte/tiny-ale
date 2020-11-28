// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '121',
      type: 'user',
      attributes: {
        firstName: 'Stacia',
        lastName: 'Berge',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '588825634',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: 'mosegleichner@osinskimorar.biz',
      },
      relationships: {
        coordinator: {
          data: {
            id: '116',
            type: 'user',
          },
        },
      },
    },
    {
      id: '117',
      type: 'user',
      attributes: {
        firstName: 'Joaquina',
        lastName: 'Boyer',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'jerica@haleydaugherty.net',
      },
      relationships: {
      },
    },
    {
      id: '119',
      type: 'user',
      attributes: {
        firstName: 'Alona',
        lastName: 'Cormier',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '2054848287',
        districtGrade: 9,
        status: 'active',
        role: 'student',
        email: 'albina@jacobson.biz',
      },
      relationships: {
        coordinator: {
          data: {
            id: '115',
            type: 'user',
          },
        },
      },
    },
    {
      id: '116',
      type: 'user',
      attributes: {
        firstName: 'Brittanie',
        lastName: 'Daniel',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'sharda@okeefe.biz',
      },
      relationships: {
      },
    },
    {
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
        status: 'active',
        role: 'administrator',
        email: 'ria@kuphal.com',
      },
      relationships: {
      },
    },
    {
      id: '115',
      type: 'user',
      attributes: {
        firstName: 'Coy',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'leif@heaney.info',
      },
      relationships: {
      },
    },
    {
      id: '120',
      type: 'user',
      attributes: {
        firstName: 'Frank',
        lastName: 'Price',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6752258661',
        districtGrade: 10,
        status: 'active',
        role: 'student',
        email: 'raeannbalistreri@weberturcotte.com',
      },
      relationships: {
        coordinator: {
          data: {
            id: '116',
            type: 'user',
          },
        },
      },
    },
    {
      id: '114',
      type: 'user',
      attributes: {
        firstName: 'Chuck',
        lastName: 'Ryan',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'modestobogisich@aufderhar.biz',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '116',
      type: 'user',
      attributes: {
        firstName: 'Brittanie',
        lastName: 'Daniel',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'sharda@okeefe.biz',
      },
      relationships: {
      },
    },
    {
      id: '115',
      type: 'user',
      attributes: {
        firstName: 'Coy',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'leif@heaney.info',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
