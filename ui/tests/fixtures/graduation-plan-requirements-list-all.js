// GET /api/graduation-plan-requirements
export default {
  data: [
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
    {
      id: '43',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General2',
        notes: 'Quasi cupiditate sunt. Quidem eius sit. Non inventore unde.\\n\\nOmnis non nisi. Rerum id rerum. Adipisci enim non.\\n\\nSit ratione alias. Modi quasi iusto. Voluptatem sapiente sit.',
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
        notes: 'Est quis minus. Voluptatem assumenda porro. Ea adipisci magni.\\n\\nNihil cumque quo. Id deleniti tempora. Consectetur corrupti earum.\\n\\nEst pariatur repudiandae. Officiis facilis excepturi. Quas neque ullam.',
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
      id: '45',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service2',
        notes: 'Possimus qui ipsum. Tempora esse voluptas. Nobis nihil ea.\\n\\nAtque animi dolorem. Voluptatibus non expedita. Dolorem sapiente qui.\\n\\nMolestiae commodi incidunt. Consequatur cupiditate fugit. Qui voluptates iure.',
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
        notes: 'Vel dolor eos. Dolor voluptatum quia. Eaque qui voluptas.\\n\\nEveniet consequatur aperiam. Corrupti non pariatur. Sapiente nulla non.\\n\\nOccaecati qui possimus. Voluptatem tempora ex. Consectetur reiciendis et.',
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
        notes: 'Consequatur quia est. Assumenda sit reprehenderit. Eligendi qui sunt.\\n\\nQui sit omnis. Voluptatem autem enim. Quam placeat reiciendis.\\n\\nIusto ea eligendi. Assumenda enim quae. Nemo placeat nihil.',
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
