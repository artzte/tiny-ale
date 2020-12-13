// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '19',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Et veritatis cupiditate. Sit veritatis adipisci. Iure et rerum.\\n\\nAut recusandae quisquam. Quibusdam quod minus. Molestiae ullam maxime.\\n\\nFugiat sequi quibusdam. Et voluptate animi. Voluptatem nam quis.',
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
      id: '13',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Ut laborum dolorum. Perferendis aut ut. Sed nostrum autem.\\n\\nOccaecati laboriosam laudantium. Quisquam qui animi. Dolorum est libero.\\n\\nCommodi iste sunt. Voluptate ut itaque. Eum impedit ex.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '15',
              type: 'graduationPlanRequirement',
            },
            {
              id: '16',
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
      id: '21',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Quos vel praesentium. Voluptas fugiat cumque. Aut commodi et.\\n\\nOmnis nemo est. Minima occaecati animi. Nihil aspernatur ut.\\n\\nMaxime necessitatibus vel. Doloremque qui dolor. Iste reprehenderit eaque.',
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
      id: '17',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Quo fugiat id. Iste quis aut. Earum est voluptas.\\n\\nAssumenda dolore omnis. Veritatis qui vel. Ea necessitatibus repudiandae.\\n\\nEos ut quia. Et neque quia. Veniam iste aut.',
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
      id: '14',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Dolor enim ut. Et facilis sit. Eum sit sed.\\n\\nSunt expedita inventore. Et aliquid voluptatum. Culpa et delectus.\\n\\nAutem excepturi quod. Dolorem quia sunt. Dolorem qui dignissimos.',
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
