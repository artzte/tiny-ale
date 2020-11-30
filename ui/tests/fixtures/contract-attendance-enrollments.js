// GET /api/enrollments?contractIds=42&include=meetingParticipants,participant
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
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '5',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '2',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '8',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '3',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '11',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '4',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '14',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '5',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '59',
            type: 'enrollment',
          },
        },
      },
    },
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
            id: '60',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '6',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '2',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '60',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '9',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '3',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '60',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '12',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '4',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '60',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '15',
      type: 'meetingParticipant',
      attributes: {
        participation: 'absent',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '5',
            type: 'meeting',
          },
        },
        enrollment: {
          data: {
            id: '60',
            type: 'enrollment',
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
            id: '58',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '4',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '2',
            type: 'meeting',
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
      id: '7',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '3',
            type: 'meeting',
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
      id: '10',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '4',
            type: 'meeting',
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
      id: '13',
      type: 'meetingParticipant',
      attributes: {
        participation: 'present',
        contactType: 'class',
      },
      relationships: {
        meeting: {
          data: {
            id: '5',
            type: 'meeting',
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
  ],
  meta: {
    count: 3,
  },
};
