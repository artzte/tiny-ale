// GET /api/enrollments?contractIds=32&include=participant
export default {
  data: [
    {
      id: '51',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '32',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '90',
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
      id: '50',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '32',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '323',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '89',
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
      id: '52',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '32',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '325',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '91',
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
      id: '324',
      type: 'user',
      attributes: {
        firstName: 'Leisa',
        lastName: 'McDermott',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '2527013728',
        districtGrade: 10,
        email: 'teishastoltenberg@swaniawskiharvey.io',
        name: 'Leisa McDermott',
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
      },
    },
    {
      id: '323',
      type: 'user',
      attributes: {
        firstName: 'Barbera',
        lastName: 'Oberbrunner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5340139563',
        districtGrade: 9,
        email: 'kentontorphy@gislason.com',
        name: 'Barbera Oberbrunner',
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '319',
            type: 'user',
          },
        },
      },
    },
    {
      id: '325',
      type: 'user',
      attributes: {
        firstName: 'Launa',
        lastName: 'Pfannerstill',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '4940633776',
        districtGrade: 12,
        email: 'donovan@jacobi.biz',
        name: 'Launa Pfannerstill',
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '320',
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
