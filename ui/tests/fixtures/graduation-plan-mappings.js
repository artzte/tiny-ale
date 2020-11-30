// GET /api/graduation-plan-mappings/228
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
            id: '228',
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
            id: '107',
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
            id: '228',
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
            id: '106',
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
            id: '228',
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
            id: '105',
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
            id: '228',
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
            id: '228',
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
      id: '107',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '74',
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
            id: '67',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '40',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '228',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '68',
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
      id: '74',
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
        notes: 'Qui minus magnam. Delectus nam culpa. Libero hic dolorem.\\n\\nCorrupti aut quibusdam. Dolore dolor quaerat. Natus ut consequatur.\\n\\nProvident dicta repellat. Et nobis aliquam. Illum dolore sunt.',
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
      id: '106',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '74',
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
            id: '67',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '40',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '228',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: null,
        },
        enrollment: {
          data: {
            id: '68',
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
        notes: 'Similique quia repudiandae. Odit perferendis ducimus. Voluptatem nisi autem.\\n\\nUt aut dolorem. Tempora natus magnam. Praesentium sapiente id.\\n\\nQuo eum alias. Quia doloribus veniam. Animi natus ut.',
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
      id: '105',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '73',
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
            id: '67',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '224',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '40',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '228',
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
            id: '68',
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
      id: '40',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Deleniti quia labore. Porro quo quidem. Tenetur non autem.\\n\\nEst rem quia. Molestiae tempore maxime. Itaque magni voluptatem.\\n\\nQui aut nihil. Et ex repellat. Itaque dolores qui.',
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
        notes: 'Perspiciatis blanditiis dolor. Officia distinctio similique. Officia aliquid eveniet.\\n\\nOmnis et placeat. Sint consequatur eligendi. Fugit iure natus.\\n\\nDolorem et aut. Ad et et. Perspiciatis omnis modi.',
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
        notes: 'Nulla similique accusantium. Atque aut deleniti. Qui hic impedit.\\n\\nMollitia porro odio. Voluptas cupiditate quasi. Exercitationem eveniet ipsa.\\n\\nUt aut rerum. Optio quia dolores. Sapiente minima in.',
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
