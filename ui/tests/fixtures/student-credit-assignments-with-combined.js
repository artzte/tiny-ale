// GET /api/credit-assignments?studentIds=112&includeFulfilledAttributes=true&include=credit,contractTerm,contractFacilitator,contract
export default {
  data: [
    {
      id: '27',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Super curto usus facere barba.',
        contractFacilitatorName: 'Tommie Keebler',
        districtFinalizeApprovedBy: 'Boyle, Bianca',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '9',
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
          data: {
            id: '28',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '25',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: {
            id: '1',
            type: 'creditTransmittalBatch',
          },
        },
        enrollment: {
          data: {
            id: '38',
            type: 'enrollment',
          },
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: {
            id: '45',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '28',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Super curto usus facere barba.',
        contractFacilitatorName: 'Tommie Keebler',
        districtFinalizeApprovedBy: 'Boyle, Bianca',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '10',
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
          data: {
            id: '28',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '25',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '38',
            type: 'enrollment',
          },
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: {
            id: '45',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '29',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Super curto usus facere barba.',
        contractFacilitatorName: 'Tommie Keebler',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '10',
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
          data: {
            id: '28',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '25',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '38',
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
      id: '33',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Tego praesentium vetus iure aut.',
        contractFacilitatorName: 'Loren Bernhard',
        districtFinalizeApprovedBy: 'Boyle, Bianca',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '9',
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
          data: {
            id: '29',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '26',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: {
            id: '1',
            type: 'creditTransmittalBatch',
          },
        },
        enrollment: {
          data: {
            id: '40',
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
      id: '34',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Tego praesentium vetus iure aut.',
        contractFacilitatorName: 'Loren Bernhard',
        districtFinalizeApprovedBy: 'Boyle, Bianca',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '10',
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
          data: {
            id: '29',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '26',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '40',
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
      id: '35',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Tego praesentium vetus iure aut.',
        contractFacilitatorName: 'Loren Bernhard',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '10',
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
          data: {
            id: '29',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '26',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '40',
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
      id: '39',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Crux denego saepe consequatur verbera.',
        contractFacilitatorName: 'Loren Bernhard',
        districtFinalizeApprovedBy: 'Boyle, Bianca',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '9',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '3',
            type: 'graduationPlanMapping',
          },
        },
        notes: {
          data: [

          ],
        },
        contractTerm: {
          data: {
            id: '29',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '27',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: {
            id: '1',
            type: 'creditTransmittalBatch',
          },
        },
        enrollment: {
          data: {
            id: '42',
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
      id: '40',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Crux denego saepe consequatur verbera.',
        contractFacilitatorName: 'Loren Bernhard',
        districtFinalizeApprovedBy: 'Boyle, Bianca',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '10',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '2',
            type: 'graduationPlanMapping',
          },
        },
        notes: {
          data: [

          ],
        },
        contractTerm: {
          data: {
            id: '29',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '27',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '42',
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
      id: '41',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Crux denego saepe consequatur verbera.',
        contractFacilitatorName: 'Loren Bernhard',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '10',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '1',
            type: 'graduationPlanMapping',
          },
        },
        notes: {
          data: [

          ],
        },
        contractTerm: {
          data: {
            id: '29',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '27',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '42',
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
      id: '45',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.75,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Combined',
        contractFacilitatorName: 'Bartell, Joseph',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '9',
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
          data: {
            id: '28',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '106',
            type: 'user',
          },
        },
        contract: {
          data: null,
        },
        user: {
          data: {
            id: '112',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: null,
        },
        childCreditAssignments: {
          data: [
            {
              id: '27',
              type: 'creditAssignment',
            },
            {
              id: '28',
              type: 'creditAssignment',
            },
          ],
        },
        parentCreditAssignment: {
          data: null,
        },
      },
    },
  ],
  included: [
    {
      id: '25',
      type: 'contract',
      attributes: {
        name: 'Super curto usus facere barba.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '38',
              type: 'enrollment',
            },
            {
              id: '39',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '107',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '28',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '15',
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
              id: '15',
              type: 'creditAssignment',
            },
            {
              id: '27',
              type: 'creditAssignment',
            },
            {
              id: '28',
              type: 'creditAssignment',
            },
            {
              id: '29',
              type: 'creditAssignment',
            },
            {
              id: '30',
              type: 'creditAssignment',
            },
            {
              id: '31',
              type: 'creditAssignment',
            },
            {
              id: '32',
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
      id: '107',
      type: 'user',
      attributes: {
        firstName: 'Tommie',
        lastName: 'Keebler',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'lupebernier@blockspencer.biz',
        name: 'Tommie Keebler',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '111',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '28',
      type: 'term',
      attributes: {
        name: 'Pre-emptive executive attitude',
        schoolYear: 2018,
        creditDate: '2019-01-31',
        months: [
          '2018-09-01',
          '2018-10-01',
          '2018-11-01',
          '2018-12-01',
          '2019-01-01',
        ],
        status: 'active',
      },
      meta: null,
    },
    {
      id: '9',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '10',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '26',
      type: 'contract',
      attributes: {
        name: 'Tego praesentium vetus iure aut.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '40',
              type: 'enrollment',
            },
            {
              id: '41',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '29',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '16',
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
              id: '17',
              type: 'creditAssignment',
            },
            {
              id: '33',
              type: 'creditAssignment',
            },
            {
              id: '34',
              type: 'creditAssignment',
            },
            {
              id: '35',
              type: 'creditAssignment',
            },
            {
              id: '36',
              type: 'creditAssignment',
            },
            {
              id: '37',
              type: 'creditAssignment',
            },
            {
              id: '38',
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
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Loren',
        lastName: 'Bernhard',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'otha@leuschke.name',
        name: 'Loren Bernhard',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '112',
              type: 'user',
            },
            {
              id: '113',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '29',
      type: 'term',
      attributes: {
        name: 'Polarised asymmetric website',
        schoolYear: 2018,
        creditDate: '2019-06-15',
        months: [
          '2019-02-01',
          '2019-03-01',
          '2019-04-01',
          '2019-05-01',
          '2019-06-01',
        ],
        status: 'active',
      },
      meta: null,
    },
    {
      id: '27',
      type: 'contract',
      attributes: {
        name: 'Crux denego saepe consequatur verbera.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '42',
              type: 'enrollment',
            },
            {
              id: '43',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '108',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '29',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '16',
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
              id: '19',
              type: 'creditAssignment',
            },
            {
              id: '39',
              type: 'creditAssignment',
            },
            {
              id: '40',
              type: 'creditAssignment',
            },
            {
              id: '41',
              type: 'creditAssignment',
            },
            {
              id: '42',
              type: 'creditAssignment',
            },
            {
              id: '43',
              type: 'creditAssignment',
            },
            {
              id: '44',
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
      id: '106',
      type: 'user',
      attributes: {
        firstName: 'Joseph',
        lastName: 'Bartell',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'logan@okeefe.name',
        name: 'Joseph Bartell',
        status: 'active',
        role: 'administrator',
        isStaff: true,
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
    count: 10,
  },
};
