// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '106',
      type: 'user',
      attributes: {
        firstName: 'Joseph',
        lastName: 'Bartell',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'logan@okeefe.name',
      },
      relationships: {
      },
    },
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Loren',
        lastName: 'Bernhard',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'otha@leuschke.name',
      },
      relationships: {
      },
    },
    {
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
        status: 'active',
        role: 'administrator',
        email: 'clarinebogan@senger.net',
      },
      relationships: {
      },
    },
    {
      id: '112',
      type: 'user',
      attributes: {
        firstName: 'Dalton',
        lastName: 'Gaylord',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6707935524',
        districtGrade: 10,
        status: 'active',
        role: 'student',
        email: 'christin@rosenbaumstrosin.org',
      },
      relationships: {
        coordinator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
      },
    },
    {
      id: '107',
      type: 'user',
      attributes: {
        firstName: 'Tommie',
        lastName: 'Keebler',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'lupebernier@blockspencer.biz',
      },
      relationships: {
      },
    },
    {
      id: '113',
      type: 'user',
      attributes: {
        firstName: 'Dewayne',
        lastName: 'Murphy',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '7449769727',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: 'bert@zieme.org',
      },
      relationships: {
        coordinator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
      },
    },
    {
      id: '111',
      type: 'user',
      attributes: {
        firstName: 'Austin',
        lastName: 'Will',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1880173925',
        districtGrade: 9,
        status: 'active',
        role: 'student',
        email: 'tammy@homenicklubowitz.net',
      },
      relationships: {
        coordinator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
      },
    },
    {
      id: '109',
      type: 'user',
      attributes: {
        firstName: 'Jonathan',
        lastName: 'Witting',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'lezlie@waelchi.info',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Loren',
        lastName: 'Bernhard',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'otha@leuschke.name',
      },
      relationships: {
      },
    },
    {
      id: '107',
      type: 'user',
      attributes: {
        firstName: 'Tommie',
        lastName: 'Keebler',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'lupebernier@blockspencer.biz',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 8,
  },
};
