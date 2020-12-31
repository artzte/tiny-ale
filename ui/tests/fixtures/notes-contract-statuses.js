// GET /api/notes?notableType=Status&notableIds=37,38,39,40,41,42,43,44,45
export default {
  data: [
    {
      id: '18',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-09-01 enrollment of Klein in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '37',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '19',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-10-01 enrollment of Klein in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '38',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '20',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-11-01 enrollment of Klein in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '39',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '21',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-09-01 enrollment of Tremblay in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '40',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '22',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-10-01 enrollment of Tremblay in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '41',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '23',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-11-01 enrollment of Tremblay in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '42',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '24',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-09-01 enrollment of Tromp in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '43',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '25',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-10-01 enrollment of Tromp in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '44',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '26',
      type: 'note',
      attributes: {
        note: 'Note by Torp for 2019-11-01 enrollment of Tromp in Acidus copiose peior coruscus utpote.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '45',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
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
        email: 'solomon@hills.name',
        name: 'Shayla Torp',
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
  ],
  meta: {
    count: 9,
  },
};
