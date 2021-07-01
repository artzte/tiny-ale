// GET /api/staff
export default {
  data: [
    {
      id: '46',
      type: 'user',
      attributes: {
        firstName: 'Georgina',
        lastName: 'Schmidt',
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
      id: '47',
      type: 'user',
      attributes: {
        firstName: 'Marin',
        lastName: 'Hodkiewicz',
        nickname: null,
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '51',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '48',
      type: 'user',
      attributes: {
        firstName: 'Harris',
        lastName: "O'Connell",
        nickname: null,
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '52',
              type: 'user',
            },
            {
              id: '53',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '49',
      type: 'user',
      attributes: {
        firstName: 'Lilliam',
        lastName: 'Lubowitz',
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
      id: '50',
      type: 'user',
      attributes: {
        firstName: 'Janene',
        lastName: 'Moen',
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
