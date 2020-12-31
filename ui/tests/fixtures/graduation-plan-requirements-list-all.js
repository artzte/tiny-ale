// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '8',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Est quibusdam sit. Omnis at molestiae. Sit et vel.\\n\\nIllum earum quasi. Iusto nihil blanditiis. Dolorum illo veritatis.\\n\\nQuis porro consequatur. Cupiditate accusamus beatae. Similique sit cupiditate.',
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
        notes: 'Dolorem aut voluptate. Assumenda quod distinctio. Nostrum sed quia.\\n\\nVero deleniti nisi. Quas est sit. Iusto aut sed.\\n\\nPossimus quasi corporis. Tempora voluptas quidem. Atque praesentium consequatur.',
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
      id: '10',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Molestiae id ullam. Adipisci sunt corporis. Fugit nostrum reprehenderit.\\n\\nEt et veritatis. Tempora quam esse. Hic ratione omnis.\\n\\nAut repellendus provident. Perspiciatis ad vel. Modi reprehenderit necessitatibus.',
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
        notes: 'Error non magni. Totam voluptas inventore. Reiciendis nihil rerum.\\n\\nAsperiores praesentium atque. Cumque dolorem asperiores. Est perferendis vitae.\\n\\nEst consequatur error. Facilis sint quibusdam. Harum doloribus sed.',
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
        notes: 'Ratione cum omnis. Sapiente facere cum. Autem quasi at.\\n\\nEa debitis delectus. Eos sed qui. Nihil repellendus dolor.\\n\\nQuam debitis atque. Perferendis et et. Doloribus rerum ea.',
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
