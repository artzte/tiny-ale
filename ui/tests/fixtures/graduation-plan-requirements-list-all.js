// GET /api/graduation-plan-requirements
export default {
  "data": [
    {
      "id": "42",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "General1",
        "notes": "Dolorem ducimus officia. Vitae qui et. Tenetur dolores libero.\\n\\nHarum corporis aut. Tempora id adipisci. Qui sunt inventore.\\n\\nRerum quia officia. Harum eos id. Quia blanditiis aliquam.",
        "position": 1,
        "requirementType": "general",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": null
        }
      }
    },
    {
      "id": "39",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Language1",
        "notes": "Qui consequatur rerum. Aut cumque fugiat. Et quidem occaecati.\\n\\nUt omnis voluptatem. Cumque aut sit. Fugiat id illo.\\n\\nMaiores vitae natus. Quia qui ea. Animi ex magnam.",
        "position": 1,
        "requirementType": "credit",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": {
            "id": "37",
            "type": "graduationPlanRequirement"
          }
        }
      }
    },
    {
      "id": "36",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Math",
        "notes": "Quis sunt vero. Tempore et consectetur. Praesentium autem incidunt.\\n\\nPorro est cumque. Ducimus voluptatem repellendus. Accusamus deleniti nihil.\\n\\nUt suscipit deserunt. Aut quo optio. Quidem eaque aut.",
        "position": 1,
        "requirementType": "credit",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": null
        }
      }
    },
    {
      "id": "44",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Service1",
        "notes": "Ex possimus tempore. Quibusdam velit reiciendis. Non laudantium eaque.\\n\\nQuidem voluptatem quasi. Et ut et. Magni veniam neque.\\n\\nOmnis vel expedita. Est omnis tenetur. Enim eos reprehenderit.",
        "position": 1,
        "requirementType": "service",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": null
        }
      }
    },
    {
      "id": "43",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "General2",
        "notes": "Dolor aut vel. In excepturi eveniet. Reprehenderit et qui.\\n\\nVeritatis quo fugit. Iure et eum. Explicabo et in.\\n\\nUt quia eaque. Nihil est in. Suscipit vel qui.",
        "position": 2,
        "requirementType": "general",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": null
        }
      }
    },
    {
      "id": "37",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Language",
        "notes": "Nihil dolores quis. Necessitatibus hic minima. Sint inventore et.\\n\\nOfficia quia et. Culpa nihil officia. Qui nemo ut.\\n\\nSit asperiores quas. Et autem voluptatem. Voluptatum et labore.",
        "position": 2,
        "requirementType": "credit",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [
            {
              "id": "39",
              "type": "graduationPlanRequirement"
            },
            {
              "id": "40",
              "type": "graduationPlanRequirement"
            }
          ]
        },
        "parent": {
          "data": null
        }
      }
    },
    {
      "id": "40",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Language2",
        "notes": "Quidem provident at. Id beatae nemo. Quasi voluptatem nam.\\n\\nImpedit asperiores sint. Sed cumque et. Voluptate porro cum.\\n\\nNihil accusamus ut. Soluta nobis ratione. Sequi temporibus maxime.",
        "position": 2,
        "requirementType": "credit",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": {
            "id": "37",
            "type": "graduationPlanRequirement"
          }
        }
      }
    },
    {
      "id": "45",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Service2",
        "notes": "Quia officia necessitatibus. Sit quia autem. Ea quia est.\\n\\nOfficia saepe ratione. Ab facere cum. Asperiores possimus quaerat.\\n\\nOfficia amet repudiandae. Corporis temporibus non. In totam qui.",
        "position": 2,
        "requirementType": "service",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": null
        }
      }
    },
    {
      "id": "41",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Defunct",
        "notes": "Maxime hic voluptas. Laudantium numquam sed. Quaerat officiis quae.\\n\\nAliquid sequi possimus. Est non est. Cum nisi ut.\\n\\nAdipisci explicabo dolores. Ea et et. Voluptatem harum voluptate.",
        "position": 3,
        "requirementType": "credit",
        "status": "inactive"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": null
        }
      }
    },
    {
      "id": "38",
      "type": "graduationPlanRequirement",
      "attributes": {
        "name": "Science",
        "notes": "Sint magni eos. Minus et voluptatem. Est est at.\\n\\nQuia soluta et. Molestias et veniam. Quia sapiente quod.\\n\\nVitae fuga odio. Nihil eligendi corrupti. Earum in dolores.",
        "position": 3,
        "requirementType": "credit",
        "status": "active"
      },
      "relationships": {
        "children": {
          "data": [

          ]
        },
        "parent": {
          "data": null
        }
      }
    }
  ],
  "meta": {
    "count": 10,
    "params": {
      "status": null
    }
  }
};
