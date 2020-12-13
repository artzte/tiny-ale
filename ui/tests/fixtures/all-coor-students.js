// GET /api/students?status=reportable&order=lastName,firstName&limit=-1
export default {
  data: [
    {
      id: '112',
      type: 'user',
      attributes: {
        firstName: 'Dalton',
        lastName: 'Gaylord',
        nickname: null,
        name: 'Dalton Gaylord',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '6707935524',
        districtGrade: 10,
        status: 'active',
        role: 'student',
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
      id: '113',
      type: 'user',
      attributes: {
        firstName: 'Dewayne',
        lastName: 'Murphy',
        nickname: null,
        name: 'Dewayne Murphy',
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '7449769727',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
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
        name: 'Austin Will',
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '1880173925',
        districtGrade: 9,
        status: 'active',
        role: 'student',
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
  ],
  meta: {
    count: 3,
  },
};
