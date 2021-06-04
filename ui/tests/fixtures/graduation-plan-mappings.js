// GET /api/graduation-plan-mappings/7
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
            id: '7',
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
            id: '27',
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
            id: '7',
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
            id: '26',
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
            id: '7',
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
            id: '25',
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
            id: '7',
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
            id: '7',
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
      id: '1',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Facilis dolore velit. Qui nostrum qui. Quia cumque error.\\n\\nIste voluptas ea. Animi iure vitae. Quia inventore et.\\n\\nEst voluptatum harum. Quia tempore pariatur. Consectetur ut et.',
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
      id: '27',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
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
      id: '4',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Qui quia et. Nemo est quis. Ut voluptatem amet.\\n\\nQuia natus veniam. Ullam placeat est. Fugit molestias sit.\\n\\nOfficia maxime quos. In ut et. Voluptatem nemo tempora.',
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
      id: '26',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
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
      id: '5',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Enim doloribus veniam. Eos aliquam repudiandae. Et et ut.\\n\\nAperiam adipisci excepturi. Alias libero dignissimos. Atque maxime tenetur.\\n\\nVoluptatem maiores temporibus. Voluptatum reprehenderit minus. Eum non sit.',
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
      id: '25',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
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
      id: '7',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Est dolores culpa. Ea tempora accusantium. Libero facilis voluptas.\\n\\nAspernatur dolorum quod. Alias quidem laborum. Aut voluptas excepturi.\\n\\nSed tenetur et. Quidem deleniti molestias. At tenetur nam.',
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
        notes: 'Voluptas sit expedita. Reprehenderit sit sit. Pariatur ut eos.\\n\\nConsequatur eum et. Dolorem id nostrum. Consequatur quaerat ut.\\n\\nEt atque consequatur. Ut dolore distinctio. Ut recusandae minus.',
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
