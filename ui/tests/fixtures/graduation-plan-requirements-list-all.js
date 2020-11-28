// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '22',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Voluptas officiis aut. Non modi qui. Enim ut minus.\\n\\nSint quod tenetur. Est molestias et. Eos quia ratione.\\n\\nExercitationem omnis repellendus. Praesentium illum quia. Optio dolorem tempore.',
        position: 2,
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
      id: '16',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Sit nisi odio. Aperiam laborum ea. Soluta quia sed.\\n\\nReiciendis qui itaque. Reiciendis molestiae sed. Vel ab est.\\n\\nA non eaque. Nobis quo quasi. Corporis quibusdam labore.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '18',
              type: 'graduationPlanRequirement',
            },
            {
              id: '19',
              type: 'graduationPlanRequirement',
            },
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
      id: '24',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Iste a laudantium. Ad pariatur sunt. Omnis repudiandae atque.\\n\\nNam minima voluptatem. Corrupti cumque est. Consequatur perferendis soluta.\\n\\nDignissimos laboriosam explicabo. Ipsam accusamus perspiciatis. Nobis placeat commodi.',
        position: 2,
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
    {
      id: '20',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Velit iusto quia. Aut cum eum. Voluptates at velit.\\n\\nConsequatur et reprehenderit. Voluptatem quibusdam ducimus. Fugit corrupti perspiciatis.\\n\\nNemo et veritatis. Ullam earum nihil. Consequuntur quia dolores.',
        position: 3,
        requirementType: 'credit',
        status: 'inactive',
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
      id: '17',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Harum voluptatem odit. Voluptatem inventore eligendi. Sunt aut explicabo.\\n\\nPorro qui alias. Quaerat dignissimos nobis. Quasi recusandae qui.\\n\\nRerum est rerum. Nesciunt id omnis. Ducimus possimus quia.',
        position: 3,
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
  ],
  meta: {
    count: 10,
    params: {
      status: null,
    },
  },
};
