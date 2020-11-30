// GET /api/staff
export default {
  data: [
    {
      id: '222',
      type: 'user',
      attributes: {
        firstName: 'Brittanie',
        lastName: 'Metz',
        nickname: null,
        status: 'active',
        role: 'administrator',
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
    {
      id: '223',
      type: 'user',
      attributes: {
        firstName: 'Jeremiah',
        lastName: 'Rippin',
        nickname: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '227',
              type: 'user',
            },
          ],
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
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '228',
              type: 'user',
            },
            {
              id: '229',
              type: 'user',
            },
          ],
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
        status: 'inactive',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
    {
      id: '226',
      type: 'user',
      attributes: {
        firstName: 'Beula',
        lastName: 'Metz',
        nickname: null,
        status: 'active',
        role: 'administrator',
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
