// GET /api/credit-assignments?studentIds=7&includeFulfilledAttributes=true&include=credit,contractTerm,contractFacilitator,contract
export default {
  data: [
    {
      id: '13',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Caries aegre ars dolore vestigium.',
        contractFacilitatorName: 'Sergio Morissette',
        districtFinalizeApprovedBy: 'Runte, Neil',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
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
            id: '1',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '1',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
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
            id: '7',
            type: 'enrollment',
          },
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: {
            id: '31',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '14',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Caries aegre ars dolore vestigium.',
        contractFacilitatorName: 'Sergio Morissette',
        districtFinalizeApprovedBy: 'Runte, Neil',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
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
            id: '1',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '1',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '7',
            type: 'enrollment',
          },
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: {
            id: '31',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '15',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Caries aegre ars dolore vestigium.',
        contractFacilitatorName: 'Sergio Morissette',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
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
            id: '1',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '1',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '7',
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
      id: '19',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Theologus canonicus architecto venustas cotidie.',
        contractFacilitatorName: 'Paige Raynor',
        districtFinalizeApprovedBy: 'Runte, Neil',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
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
            id: '2',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '2',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
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
            id: '9',
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
      id: '20',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Theologus canonicus architecto venustas cotidie.',
        contractFacilitatorName: 'Paige Raynor',
        districtFinalizeApprovedBy: 'Runte, Neil',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
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
            id: '2',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '2',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '9',
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
      id: '21',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Theologus canonicus architecto venustas cotidie.',
        contractFacilitatorName: 'Paige Raynor',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
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
            id: '2',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '2',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '9',
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
      id: '25',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Ara correptius venio temperantia ultra.',
        contractFacilitatorName: 'Paige Raynor',
        districtFinalizeApprovedBy: 'Runte, Neil',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
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
            id: '2',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '3',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
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
            id: '11',
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
      id: '26',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Ara correptius venio temperantia ultra.',
        contractFacilitatorName: 'Paige Raynor',
        districtFinalizeApprovedBy: 'Runte, Neil',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
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
            id: '2',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '3',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '11',
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
      id: '27',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Ara correptius venio temperantia ultra.',
        contractFacilitatorName: 'Paige Raynor',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
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
            id: '2',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '3',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '11',
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
      id: '31',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.75,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Combined',
        contractFacilitatorName: 'Spinka, Inga',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
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
            id: '1',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '1',
            type: 'user',
          },
        },
        contract: {
          data: null,
        },
        user: {
          data: {
            id: '7',
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
              id: '13',
              type: 'creditAssignment',
            },
            {
              id: '14',
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
      id: '1',
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
      type: 'term',
      attributes: {
        name: 'Enhanced composite framework',
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
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Sergio',
        lastName: 'Morissette',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'caitlin.rath@weissnat.net',
        name: 'Sergio Morissette',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Caries aegre ars dolore vestigium.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '7',
              type: 'enrollment',
            },
            {
              id: '8',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '1',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '1',
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
              id: '1',
              type: 'creditAssignment',
            },
            {
              id: '13',
              type: 'creditAssignment',
            },
            {
              id: '14',
              type: 'creditAssignment',
            },
            {
              id: '15',
              type: 'creditAssignment',
            },
            {
              id: '16',
              type: 'creditAssignment',
            },
            {
              id: '17',
              type: 'creditAssignment',
            },
            {
              id: '18',
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
      id: '2',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '2',
      type: 'term',
      attributes: {
        name: 'User-friendly contextually-based core',
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
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Paige',
        lastName: 'Raynor',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'patria.luettgen@langworth.name',
        name: 'Paige Raynor',
        status: 'active',
        role: 'staff',
        isStaff: true,
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '7',
              type: 'user',
            },
            {
              id: '8',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'contract',
      attributes: {
        name: 'Theologus canonicus architecto venustas cotidie.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '9',
              type: 'enrollment',
            },
            {
              id: '10',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '2',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
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
              id: '3',
              type: 'creditAssignment',
            },
            {
              id: '19',
              type: 'creditAssignment',
            },
            {
              id: '20',
              type: 'creditAssignment',
            },
            {
              id: '21',
              type: 'creditAssignment',
            },
            {
              id: '22',
              type: 'creditAssignment',
            },
            {
              id: '23',
              type: 'creditAssignment',
            },
            {
              id: '24',
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
      id: '3',
      type: 'contract',
      attributes: {
        name: 'Ara correptius venio temperantia ultra.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '11',
              type: 'enrollment',
            },
            {
              id: '12',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '2',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
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
              id: '5',
              type: 'creditAssignment',
            },
            {
              id: '25',
              type: 'creditAssignment',
            },
            {
              id: '26',
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
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Inga',
        lastName: 'Spinka',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'pat@reichel-prosacco.co',
        name: 'Inga Spinka',
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
