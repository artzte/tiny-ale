// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '18',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Odio architecto ut. Quia aut repellat. Aut architecto enim.\\n\\nEst vel ut. Quaerat repellendus qui. Iusto enim quis.\\n\\nAccusamus incidunt totam. Possimus tempora perspiciatis. A sapiente cumque.',
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
      id: '12',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Enim sed quia. Laudantium sit est. Quia aut hic.\\n\\nProvident amet et. Et quo eveniet. Exercitationem quae voluptas.\\n\\nNostrum est voluptatem. Harum non illo. Numquam molestiae qui.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '14',
              type: 'graduationPlanRequirement',
            },
            {
              id: '15',
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
      id: '20',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Omnis hic nostrum. Ea optio ut. Quia minus alias.\\n\\nFacere optio et. Quaerat nihil sed. Rerum rerum assumenda.\\n\\nExplicabo quis rerum. Blanditiis odio officiis. Repellat natus voluptas.',
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
      id: '16',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Dolor repellendus at. Consequuntur ad dicta. Dolores labore harum.\\n\\nMollitia assumenda quos. Labore eaque sed. Aperiam tempore voluptas.\\n\\nEt delectus nesciunt. Aliquid et saepe. Possimus magnam a.',
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
      id: '13',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Pariatur necessitatibus quia. Fugiat ut sint. Alias deleniti debitis.\\n\\nAutem illo itaque. Nam enim illum. Quis et aliquid.\\n\\nEt quo quia. Nihil repellat inventore. Pariatur sunt facere.',
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
