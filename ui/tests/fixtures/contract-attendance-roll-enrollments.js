// GET /api/enrollments?contractIds=14&include=participant
export default {
  data: [
    {
      id: '19',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '14',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '56',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '55',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [
            {
              id: '1',
              type: 'turnin',
            },
            {
              id: '2',
              type: 'turnin',
            },
            {
              id: '3',
              type: 'turnin',
            },
            {
              id: '4',
              type: 'turnin',
            },
            {
              id: '5',
              type: 'turnin',
            },
          ],
        },
        meetingParticipants: {
          data: [
            {
              id: '1',
              type: 'meetingParticipant',
            },
            {
              id: '4',
              type: 'meetingParticipant',
            },
            {
              id: '7',
              type: 'meetingParticipant',
            },
            {
              id: '10',
              type: 'meetingParticipant',
            },
            {
              id: '13',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '20',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '14',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '56',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [

          ],
        },
        meetingParticipants: {
          data: [
            {
              id: '2',
              type: 'meetingParticipant',
            },
            {
              id: '5',
              type: 'meetingParticipant',
            },
            {
              id: '8',
              type: 'meetingParticipant',
            },
            {
              id: '11',
              type: 'meetingParticipant',
            },
            {
              id: '14',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '21',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '14',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '58',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '57',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [

          ],
        },
        meetingParticipants: {
          data: [
            {
              id: '3',
              type: 'meetingParticipant',
            },
            {
              id: '6',
              type: 'meetingParticipant',
            },
            {
              id: '9',
              type: 'meetingParticipant',
            },
            {
              id: '12',
              type: 'meetingParticipant',
            },
            {
              id: '15',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '56',
      type: 'user',
      attributes: {
        firstName: 'Jerold',
        lastName: 'Klein',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4809648277',
        districtGrade: 9,
        email: 'catricegislason@gottlieb.net',
        name: 'Jerold Klein',
        status: 'active',
        role: 'student',
        isStaff: false,
      },
      relationships: {
        coordinator: {
          data: {
            id: '52',
            type: 'user',
          },
        },
      },
    },
    {
      id: '57',
      type: 'user',
      attributes: {
        firstName: 'Marlin',
        lastName: 'Tremblay',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9616779893',
        districtGrade: 10,
        email: 'reginald@jacobs.co',
        name: 'Marlin Tremblay',
        status: 'active',
        role: 'student',
        isStaff: false,
      },
      relationships: {
        coordinator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
      },
    },
    {
      id: '58',
      type: 'user',
      attributes: {
        firstName: 'Milly',
        lastName: 'Tromp',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '1998684872',
        districtGrade: 12,
        email: 'kemberlyreichel@lubowitzgerhold.info',
        name: 'Milly Tromp',
        status: 'inactive',
        role: 'student',
        isStaff: false,
      },
      relationships: {
        coordinator: {
          data: {
            id: '53',
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
