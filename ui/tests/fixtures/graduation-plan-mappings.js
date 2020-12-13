// GET /api/graduation-plan-mappings/112
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
            id: '112',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '12',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '41',
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
            id: '112',
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
            id: '40',
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
            id: '112',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '16',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '39',
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
            id: '112',
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
            id: '112',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '20',
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
      id: '41',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
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
      id: '12',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Recusandae eum ipsum. Voluptates aspernatur et. Possimus ex error.\\n\\nRepellendus ipsum repudiandae. Veniam consequuntur ut. Reiciendis quo ipsam.\\n\\nCum beatae voluptas. Omnis quia reiciendis. In natus ea.',
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
      id: '40',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
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
      id: '15',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Fugiat dolorum in. In et quos. Expedita est dolorem.\\n\\nDeleniti atque sunt. Eum dignissimos iste. Iure necessitatibus dicta.\\n\\nAliquid dicta totam. Ratione nisi enim. Praesentium laudantium corrupti.',
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
            id: '13',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '39',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
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
      id: '16',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Est perspiciatis debitis. Ad beatae a. Soluta ducimus sit.\\n\\nMagni molestiae qui. Illo a quo. Debitis velit dolorum.\\n\\nPlaceat magnam ratione. Magnam nihil ipsa. Sapiente ut sequi.',
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
            id: '13',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '18',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Voluptatem dignissimos neque. Ab ipsa eos. Velit exercitationem eius.\\n\\nQuas eos et. Est id qui. Vel illo ut.\\n\\nIusto et aut. Illo nihil voluptas. Inventore voluptatem magni.',
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
      id: '20',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Quia temporibus deserunt. Qui maiores repudiandae. Nulla quasi adipisci.\\n\\nEum pariatur id. Accusantium tenetur dolorem. Porro modi consectetur.\\n\\nSed laudantium sit. Minima quos officia. Suscipit enim rerum.',
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
