// GET /api/staff
export default {
  data: [
    {
      id: '51',
      type: 'user',
      attributes: {
        firstName: 'Christopher',
        lastName: 'Lueilwitz',
        nickname: null,
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
    {
      id: '52',
      type: 'user',
      attributes: {
        firstName: 'Shayla',
        lastName: 'Torp',
        nickname: null,
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '56',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '53',
      type: 'user',
      attributes: {
        firstName: 'Connie',
        lastName: 'Hilpert',
        nickname: null,
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '57',
              type: 'user',
            },
            {
              id: '58',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '54',
      type: 'user',
      attributes: {
        firstName: 'Gonzalo',
        lastName: 'Brekke',
        nickname: null,
        status: 'inactive',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [

          ],
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
  ],
  meta: {
    count: 5,
  },
};
