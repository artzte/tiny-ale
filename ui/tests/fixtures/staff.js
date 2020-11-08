// GET /api/staff
export default {
  data: [
    {
      id: '318',
      type: 'user',
      attributes: {
        firstName: 'Delmer',
        lastName: 'Windler',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
    {
      id: '319',
      type: 'user',
      attributes: {
        firstName: 'Armanda',
        lastName: 'Heaney',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '323',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '320',
      type: 'user',
      attributes: {
        firstName: 'Debbi',
        lastName: 'Leffler',
        nickname: null,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '324',
              type: 'user',
            },
            {
              id: '325',
              type: 'user',
            },
          ],
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
      },
      relationships: {
        coordinatees: {
          data: [

          ],
        },
      },
    },
    {
      id: '322',
      type: 'user',
      attributes: {
        firstName: 'Glenda',
        lastName: 'Marquardt',
        nickname: null,
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
