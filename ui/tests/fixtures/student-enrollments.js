// GET /api/enrollments?participantIds=323&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
export default {
  data: [
    {
      id: '53',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '33',
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
              id: '92',
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
  ],
  included: [
    {
      id: '33',
      type: 'contract',
      attributes: {
        name: 'Tendo amplexus vulgus id sumo.',
        status: 'approved',
        learningObjectives: 'Quos animadverto culpa adfero socius.',
        competencies: 'Sto caput thesaurus aeneus dolorem.',
        evaluationMethods: 'Annus utor varietas cotidie tenetur.',
        instructionalMaterials: 'Pecus argentum turba una aut.',
        location: 'Vultuosus casso ascit spargo urbanus.',
        timeslots: [
          {
            start: '8:45',
            end: '10:30',
            weekdays: '01234',
          },
        ],
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '53',
              type: 'enrollment',
            },
            {
              id: '54',
              type: 'enrollment',
            },
            {
              id: '55',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '69',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '25',
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
              id: '86',
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
      id: '320',
      type: 'user',
      attributes: {
        firstName: 'Debbi',
        lastName: 'Leffler',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'isidro@streich.org',
        name: 'Debbi Leffler',
        status: 'active',
        role: 'staff',
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
      id: '69',
      type: 'term',
      attributes: {
        name: 'Optional modular implementation',
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
      id: '92',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '75',
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
            id: '53',
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
      id: '75',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
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
      id: '32',
      type: 'contract',
      attributes: {
        name: 'Angulus comedo damnatio attonbitus ceno.',
        status: 'approved',
        learningObjectives: 'Sonitus theatrum circumvenio desidero acervus.',
        competencies: 'Peccatus curo sunt consequatur cilicium.',
        evaluationMethods: 'Ipsam currus apto neque qui.',
        instructionalMaterials: 'Tamquam aut culpa cupio fugit.',
        location: 'Abeo venio depraedor auxilium crux.',
        timeslots: [
          {
            start: '8:45',
            end: '10:30',
            weekdays: '01234',
          },
        ],
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '50',
              type: 'enrollment',
            },
            {
              id: '51',
              type: 'enrollment',
            },
            {
              id: '52',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '319',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '69',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '24',
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
              id: '84',
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
              id: '12',
              type: 'ealr',
            },
            {
              id: '13',
              type: 'ealr',
            },
            {
              id: '14',
              type: 'ealr',
            },
            {
              id: '15',
              type: 'ealr',
            },
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
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'cyrilkuhic@stoltenbergstehr.org',
        name: 'Armanda Heaney',
        status: 'active',
        role: 'staff',
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
      id: '89',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '75',
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
            id: '50',
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
