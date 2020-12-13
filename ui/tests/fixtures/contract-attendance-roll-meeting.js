// GET /api/meetings/1?include=meetingParticipants
export default {
  data: {
    id: '1',
    type: 'meeting',
    attributes: {
      title: 'Attendance for Monday, 02 September 2019',
      meetingDate: '2019-09-02',
    },
    relationships: {
      meetingParticipants: {
        data: [
          {
            id: '1',
            type: 'meetingParticipant',
          },
          {
            id: '2',
            type: 'meetingParticipant',
          },
          {
            id: '3',
            type: 'meetingParticipant',
          },
        ],
      },
    },
  },
  included: [
    {
      id: '1',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '1',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '32',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '1',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '33',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '1',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '34',
            type: 'enrollment',
          },
        },
      },
    },
  ],
};
