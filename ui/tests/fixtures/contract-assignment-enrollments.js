// GET /api/enrollments?contractIds=42&include=turnins,participant
export default {
  data: [
    {
      id: '59',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '42',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '228',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '88',
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
      id: '60',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '42',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '229',
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
    {
      id: '58',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '42',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '227',
            type: 'user',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '87',
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
  ],
  included: [
    {
      id: '228',
      type: 'user',
      attributes: {
        firstName: 'Suk',
        lastName: 'Altenwerth',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4801996158',
        districtGrade: 10,
        email: 'jackterry@ohara.info',
        name: 'Suk Altenwerth',
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
      },
    },
    {
      id: '229',
      type: 'user',
      attributes: {
        firstName: 'Thuy',
        lastName: 'Koss',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2734166982',
        districtGrade: 12,
        email: 'cicelykozey@stehrdenesik.name',
        name: 'Thuy Koss',
        status: 'inactive',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
      },
    },
    {
      id: '227',
      type: 'user',
      attributes: {
        firstName: 'Bradly',
        lastName: 'Tromp',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7164254458',
        districtGrade: 9,
        email: 'bill@kunzeledner.co',
        name: 'Bradly Tromp',
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '223',
            type: 'user',
          },
        },
      },
    },
    {
      id: '1',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '1',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '2',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '3',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '4',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '4',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '5',
      type: 'turnin',
      attributes: {
        status: 'complete',
      },
      relationships: {
        assignment: {
          data: {
            id: '5',
            type: 'assignment',
          },
        },
        enrollment: {
          data: {
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
