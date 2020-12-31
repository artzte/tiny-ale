// GET /api/enrollments/19?include=participant,turnins,meetingParticipants,creditAssignments,creditAssignments.credit
export default {
  data: {
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
  included: [
    {
      id: '55',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '22',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        notes: {
          data: [

          ],
        },
        contractTerm: {
          data: null,
        },
        contractFacilitator: {
          data: null,
        },
        contract: {
          data: null,
        },
        user: {
          data: null,
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '19',
            type: 'enrollment',
          },
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '22',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
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
            id: '19',
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
            id: '19',
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
            id: '19',
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
            id: '19',
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
            id: '19',
            type: 'enrollment',
          },
        },
      },
    },
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
            id: '19',
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
            id: '19',
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
            id: '19',
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
            id: '19',
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
            id: '19',
            type: 'enrollment',
          },
        },
      },
    },
  ],
};
