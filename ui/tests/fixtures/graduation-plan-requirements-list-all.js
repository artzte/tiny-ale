// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '43',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Iste ab enim. Atque sit est. Quis vel aut.\\n\\nConsequatur et omnis. Corporis quod porro. Inventore aliquam velit.\\n\\nAut quasi distinctio. Quia libero delectus. Sunt dolore quidem.',
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
      id: '37',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language',
        notes: 'Id aut laudantium. Sunt voluptatem non. Qui ipsam et.\\n\\nTempore tempora quam. At ut veritatis. Voluptatem quia eos.\\n\\nIllum eos necessitatibus. Aspernatur est repellat. Quidem in omnis.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [
            {
              id: '39',
              type: 'graduationPlanRequirement',
            },
            {
              id: '40',
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
      id: '45',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Ut quod eligendi. Facilis ut aliquam. Labore consequatur unde.\\n\\nEos voluptatem temporibus. Voluptatibus explicabo et. Nobis aut est.\\n\\nQuas non doloribus. Qui labore voluptatem. Eius sed eos.',
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
      id: '41',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Defunct',
        notes: 'Sunt cumque quo. Unde esse et. Voluptatem blanditiis rerum.\\n\\nDoloribus tempore itaque. Sunt dolor qui. Voluptatum nobis veniam.\\n\\nVoluptatem et est. Voluptas explicabo quia. Et non quo.',
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
      id: '38',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Science',
        notes: 'Repellendus aut impedit. Explicabo error a. Consectetur et officia.\\n\\nDoloribus consequatur dicta. Voluptas pariatur velit. Neque nihil quia.\\n\\nAb in numquam. Aliquam eos quia. Dignissimos natus laboriosam.',
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
