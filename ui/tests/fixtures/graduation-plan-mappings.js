// GET /api/graduation-plan-mappings/324
export default {
  data: [
    {
      id: '17',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '36',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '109',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '18',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '39',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '108',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '19',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '40',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '107',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '20',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is done',
      },
      relationships: {
        student: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '42',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '21',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is serviced',
      },
      relationships: {
        student: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '44',
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
      id: '109',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '76',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '17',
            type: 'graduationPlanMapping',
          },
        },
        notes: {
          data: [

          ],
        },
        contractTerm: {
          data: {
            id: '68',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '30',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '60',
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
      id: '76',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '36',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Cumque enim quas. Aut magnam veniam. Similique officiis amet.\\n\\nVoluptas quidem voluptas. Dicta eaque autem. Aliquam aliquid accusamus.\\n\\nAut qui enim. Et quia ipsum. Sint vitae quis.',
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
      id: '108',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '76',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '18',
            type: 'graduationPlanMapping',
          },
        },
        notes: {
          data: [

          ],
        },
        contractTerm: {
          data: {
            id: '68',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '30',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '324',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '60',
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
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Earum sint assumenda. At ratione suscipit. Est vitae incidunt.\\n\\nReiciendis in magnam. Et dolorem nulla. Id qui suscipit.\\n\\nVoluptate distinctio sit. Eum deleniti incidunt. Consequatur velit qui.',
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
            id: '37',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '107',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '75',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '19',
            type: 'graduationPlanMapping',
          },
        },
        notes: {
          data: [

          ],
        },
        contractTerm: {
          data: {
            id: '68',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '320',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '30',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '324',
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
            id: '60',
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
      id: '40',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Tempora deserunt repudiandae. Pariatur libero quas. Illum dolore dolores.\\n\\nVero non inventore. Ullam sapiente repellat. Consequuntur aut aliquam.\\n\\nQui qui molestiae. Aliquid non repellendus. Cum aut unde.',
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
            id: '37',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '42',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Asperiores repellendus ut. Fugiat eveniet beatae. Quo qui autem.\\n\\nEt sapiente ipsum. Qui aliquam esse. Sed molestiae dolor.\\n\\nVoluptate dignissimos consectetur. Aut aut est. Velit similique voluptas.',
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
      id: '44',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Omnis sit illum. Est impedit ut. Ad similique qui.\\n\\nQui ipsum optio. Quis consequatur doloribus. Aut ut laudantium.\\n\\nEt libero molestiae. Facere quis expedita. Exercitationem nihil blanditiis.',
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
