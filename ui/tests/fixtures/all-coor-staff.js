// GET /api/staff?status=active&coordinators=true&order=lastName,firstName
export default {
  data: [
    {
      id: '116',
      type: 'user',
      attributes: {
        firstName: 'Brittanie',
        lastName: 'Daniel',
        nickname: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '120',
              type: 'user',
            },
            {
              id: '121',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '118',
      type: 'user',
      attributes: {
        firstName: 'Kyra',
        lastName: 'Hammes',
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
      id: '115',
      type: 'user',
      attributes: {
        firstName: 'Coy',
        lastName: 'Morissette',
        nickname: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '119',
              type: 'user',
            },
          ],
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
    count: 4,
  },
};
