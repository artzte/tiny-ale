// GET /api/graduation-plan-mappings/120
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
            id: '120',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '15',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '50',
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
            id: '120',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '18',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '49',
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
            id: '120',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '19',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '48',
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
            id: '120',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '21',
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
            id: '120',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '23',
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
      id: '50',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '50',
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
            id: '18',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '116',
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
            id: '120',
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
      id: '50',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '15',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Est reprehenderit necessitatibus. Quia quas eum. Dolores et ratione.\\n\\nDolor quidem est. Ut itaque est. Animi eaque est.\\n\\nDelectus perferendis sed. Reiciendis eveniet nobis. A non est.',
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
      id: '49',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '50',
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
            id: '18',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '116',
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
            id: '120',
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
      id: '18',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Possimus inventore repellendus. Sequi minima ea. Aspernatur voluptatem laudantium.\\n\\nNostrum accusamus unde. Labore dolorum et. Tenetur autem illo.\\n\\nRepellendus dolores et. Eos non quis. Sed minima ipsa.',
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
            id: '16',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '48',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '49',
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
            id: '18',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '116',
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
            id: '120',
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
      id: '49',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '19',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Non qui veritatis. Eius voluptate soluta. Aspernatur accusantium et.\\n\\nConsequatur ipsum qui. Fugiat nulla animi. Et neque officia.\\n\\nEum explicabo possimus. Quod reiciendis consequuntur. Soluta voluptate et.',
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
            id: '16',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '21',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Rerum ea et. Quidem qui dolor. Dolores beatae nihil.\\n\\nOdio magnam adipisci. Omnis ipsa numquam. Quidem hic quisquam.\\n\\nSuscipit aliquam tenetur. Sapiente placeat molestias. Non ipsa dolore.',
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
      id: '23',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Architecto autem quis. Voluptas rem eveniet. Et amet aliquid.\\n\\nEum ullam dicta. Illo et repellendus. Consequuntur eos unde.\\n\\nAliquam quos qui. Non fugiat dolorum. Alias qui ipsa.',
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
