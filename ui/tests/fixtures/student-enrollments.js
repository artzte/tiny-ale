// GET /api/enrollments?participantIds=227&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
export default {
  data: [
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
    {
      id: '61',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '43',
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

          ],
        },
      },
    },
  ],
  included: [
    {
      id: '42',
      type: 'contract',
      attributes: {
        name: 'Incidunt xiphias adamo pauci abeo.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '58',
              type: 'enrollment',
            },
            {
              id: '59',
              type: 'enrollment',
            },
            {
              id: '60',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '223',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '68',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '28',
            type: 'category',
          },
        },
        assignments: {
          data: [
            {
              id: '1',
              type: 'assignment',
            },
            {
              id: '2',
              type: 'assignment',
            },
            {
              id: '3',
              type: 'assignment',
            },
            {
              id: '4',
              type: 'assignment',
            },
            {
              id: '5',
              type: 'assignment',
            },
          ],
        },
        creditAssignments: {
          data: [
            {
              id: '82',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [
            {
              id: '1',
              type: 'meeting',
            },
            {
              id: '2',
              type: 'meeting',
            },
            {
              id: '3',
              type: 'meeting',
            },
            {
              id: '4',
              type: 'meeting',
            },
            {
              id: '5',
              type: 'meeting',
            },
          ],
        },
        learningRequirements: {
          data: [
            {
              id: '13',
              type: 'learningRequirement',
            },
            {
              id: '14',
              type: 'learningRequirement',
            },
            {
              id: '15',
              type: 'learningRequirement',
            },
            {
              id: '16',
              type: 'learningRequirement',
            },
          ],
        },
      },
    },
    {
      id: '223',
      type: 'user',
      attributes: {
        firstName: 'Jeremiah',
        lastName: 'Rippin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'gabriel@gleason.info',
        name: 'Jeremiah Rippin',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '227',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '68',
      type: 'term',
      attributes: {
        name: 'Digitized bi-directional artificial intelligence',
        schoolYear: 2019,
        creditDate: '2020-01-31',
        months: [
          '2019-09-01',
          '2019-10-01',
          '2019-11-01',
          '2019-12-01',
          '2020-01-01',
        ],
        status: 'active',
      },
      meta: null,
    },
    {
      id: '87',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '73',
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
            id: '58',
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
      id: '73',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
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
      id: '43',
      type: 'contract',
      attributes: {
        name: 'Deputo aequitas culpa synagoga sui.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '61',
              type: 'enrollment',
            },
            {
              id: '62',
              type: 'enrollment',
            },
            {
              id: '63',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '68',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '29',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '84',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        learningRequirements: {
          data: [

          ],
        },
      },
    },
    {
      id: '224',
      type: 'user',
      attributes: {
        firstName: 'Clelia',
        lastName: 'Barton',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'orlandoschinner@waelchikautzer.io',
        name: 'Clelia Barton',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '228',
              type: 'user',
            },
            {
              id: '229',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '90',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '73',
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
            id: '61',
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
  ],
  meta: {
    count: 2,
  },
};
