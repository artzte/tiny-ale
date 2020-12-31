// GET /api/graduation-plan-mappings/57
export default {
  data: [
    {
      id: '1',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '1',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '75',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '4',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '74',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '5',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '73',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '4',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is done',
      },
      relationships: {
        student: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '7',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '5',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is serviced',
      },
      relationships: {
        student: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '9',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: null,
        },
      },
    },
  ],
  included: [
    {
      id: '75',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '23',
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
            id: '11',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '12',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '29',
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
      id: '23',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '1',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Et nemo consectetur. Tempora odit ut. Voluptas tempora id.\\n\\nVoluptatem fugit atque. Aperiam fugit quo. Animi perferendis iusto.\\n\\nExplicabo ut odit. Id ut sed. Amet repellat non.',
        position: 1,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: null,
        },
      },
    },
    {
      id: '74',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '23',
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
            id: '11',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '12',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '57',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '29',
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
      id: '4',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Ut officia dignissimos. Suscipit molestiae ipsam. Commodi et dicta.\\n\\nQuaerat id molestiae. Mollitia dolorem ut. Accusamus aut illo.\\n\\nEst quos eius. Officia similique molestiae. Sed dolor voluptas.',
        position: 1,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: {
            id: '2',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '73',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '22',
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
            id: '11',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '53',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '12',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '57',
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
            id: '29',
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
      id: '5',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Cum necessitatibus iusto. Animi impedit accusantium. Quibusdam recusandae sit.\\n\\nTempore ut dolores. Ratione suscipit et. Laudantium ut voluptatem.\\n\\nDeleniti voluptatem distinctio. Alias eum rerum. Quae et placeat.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: {
            id: '2',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '7',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Aspernatur libero molestias. Quis omnis quos. Hic asperiores ea.\\n\\nEt possimus explicabo. Et recusandae suscipit. Impedit accusamus esse.\\n\\nExcepturi voluptatem quos. Quas dolores necessitatibus. Aut voluptas veniam.',
        position: 1,
        requirementType: 'general',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: null,
        },
      },
    },
    {
      id: '9',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Distinctio nobis dignissimos. Cumque dolorum aliquid. Non nihil nemo.\\n\\nEt eaque recusandae. Nihil ullam consequatur. Rem consequatur at.\\n\\nUt dignissimos architecto. Aliquid aut perspiciatis. Neque eum nostrum.',
        position: 1,
        requirementType: 'service',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: null,
        },
      },
    },
  ],
  meta: {
    count: 5,
  },
};
