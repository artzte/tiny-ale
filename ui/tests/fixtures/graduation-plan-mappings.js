// GET /api/graduation-plan-mappings/52
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
            id: '52',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '11',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '72',
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
            id: '52',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '14',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '71',
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
            id: '52',
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
            id: '70',
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
            id: '52',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '17',
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
            id: '52',
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
          data: null,
        },
      },
    },
  ],
  included: [
    {
      id: '11',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Provident quas veniam. Tenetur dolores repudiandae. Et ut adipisci.\\n\\nSaepe consectetur provident. Numquam voluptas quisquam. Voluptatem occaecati fugiat.\\n\\nAd eaque ut. Qui excepturi debitis. Alias omnis ut.',
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
      id: '20',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '72',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '20',
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
            id: '40',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '9',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '52',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '23',
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
      id: '14',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Sint ut tempore. Odio ea minima. Inventore est ad.\\n\\nEum quia reprehenderit. Sit omnis sed. Magni iure illum.\\n\\nEa repellat ut. Laboriosam consequatur delectus. Sequi ipsum consequatur.',
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
            id: '12',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '71',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '20',
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
            id: '40',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '9',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '52',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '23',
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
        name: 'Language2',
        notes: 'Tempora explicabo recusandae. Itaque voluptates debitis. Tenetur sit ut.\\n\\nCorporis ut non. Omnis ipsa ea. Ullam ad est.\\n\\nCorrupti quam neque. Voluptate quis laboriosam. Perspiciatis consequuntur consequatur.',
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
            id: '12',
            type: 'graduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '19',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '70',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '19',
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
            id: '40',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '48',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '9',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '52',
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
            id: '23',
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
      id: '17',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Ad numquam dolor. Natus consectetur recusandae. Odio occaecati reprehenderit.\\n\\nHic autem neque. Deserunt et molestiae. Et possimus magnam.\\n\\nNulla dolorem ea. Unde similique ex. Eum neque occaecati.',
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
      id: '19',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Cumque voluptas est. Sunt ex facere. Soluta eveniet suscipit.\\n\\nVoluptatem architecto velit. Animi adipisci sapiente. Ipsum sunt iusto.\\n\\nQui voluptatum voluptates. Dolores nobis ut. Eos eligendi ad.',
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
