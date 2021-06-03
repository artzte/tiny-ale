// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '8',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Aperiam explicabo aut. Blanditiis autem debitis. Ut dolores quae.\\n\\nIpsa consectetur fugiat. Rerum dolor et. Consectetur at laborum.\\n\\nConsequuntur ipsa non. Velit quisquam repudiandae. Esse numquam iste.',
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
      id: '2',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Error sed culpa. Et ut nostrum. Numquam porro nulla.\\n\\nOdit quis et. Minima temporibus ullam. Nostrum quas excepturi.\\n\\nReiciendis reprehenderit voluptatibus. Libero dicta consequatur. Laborum non eos.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '4',
              type: 'graduationPlanRequirement',
            },
            {
              id: '5',
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
      id: '10',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Animi illum enim. Quis nobis vitae. Culpa nihil velit.\\n\\nAspernatur sit odio. Ut quis est. Est occaecati aut.\\n\\nOfficiis nihil eaque. Tenetur et sed. Eveniet totam nulla.',
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
      id: '6',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Velit et ut. Et ut vitae. Deleniti velit iure.\\n\\nUt enim dolorem. Asperiores consequatur perspiciatis. Quis enim voluptatum.\\n\\nUt qui debitis. Nostrum neque enim. Aspernatur non nihil.',
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
      id: '3',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Qui ut sit. Non et aut. Et velit quasi.\\n\\nMinima qui tempore. Dolores quisquam saepe. Dolor repellat nulla.\\n\\nPorro ut dolores. Quod ullam aut. Placeat quo ad.',
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
