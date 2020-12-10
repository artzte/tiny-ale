// GET /api/graduation-plan-mappings/348
export default {
  "data": [
    {
      "id": "17",
      "type": "graduationPlanMapping",
      "attributes": {
        "dateCompleted": null,
        "notes": null
      },
      "relationships": {
        "student": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "graduationPlanRequirement": {
          "data": {
            "id": "36",
            "type": "graduationPlanRequirement"
          }
        },
        "creditAssignment": {
          "data": {
            "id": "110",
            "type": "creditAssignment"
          }
        }
      }
    },
    {
      "id": "18",
      "type": "graduationPlanMapping",
      "attributes": {
        "dateCompleted": null,
        "notes": null
      },
      "relationships": {
        "student": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "graduationPlanRequirement": {
          "data": {
            "id": "39",
            "type": "graduationPlanRequirement"
          }
        },
        "creditAssignment": {
          "data": {
            "id": "109",
            "type": "creditAssignment"
          }
        }
      }
    },
    {
      "id": "19",
      "type": "graduationPlanMapping",
      "attributes": {
        "dateCompleted": null,
        "notes": null
      },
      "relationships": {
        "student": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "graduationPlanRequirement": {
          "data": {
            "id": "40",
            "type": "graduationPlanRequirement"
          }
        },
        "creditAssignment": {
          "data": {
            "id": "108",
            "type": "creditAssignment"
          }
        }
      }
    },
    {
      "id": "20",
      "type": "graduationPlanMapping",
      "attributes": {
        "dateCompleted": "2019-06-15",
        "notes": "It is done"
      },
      "relationships": {
        "student": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "graduationPlanRequirement": {
          "data": {
            "id": "42",
            "type": "graduationPlanRequirement"
          }
        },
        "creditAssignment": {
          "data": null
        }
      }
    },
    {
      "id": "21",
      "type": "graduationPlanMapping",
      "attributes": {
        "dateCompleted": "2019-06-15",
        "notes": "It is serviced"
      },
      "relationships": {
        "student": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "graduationPlanRequirement": {
          "data": {
            "id": "44",
            "type": "graduationPlanRequirement"
          }
        },
        "creditAssignment": {
          "data": null
        }
      }
    }
  ],
  "included": [
    {
      "id": "110",
      "type": "creditAssignment",
      "attributes": {
        "creditHours": 0.5
      },
      "relationships": {
        "credit": {
          "data": {
            "id": "77",
            "type": "credit"
          }
        },
        "graduationPlanMapping": {
          "data": {
            "id": "17",
            "type": "graduationPlanMapping"
          }
        },
        "notes": {
          "data": [

          ]
        },
        "contractTerm": {
          "data": {
            "id": "88",
            "type": "term"
          }
        },
        "contractFacilitator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        },
        "contract": {
          "data": {
            "id": "43",
            "type": "contract"
          }
        },
        "user": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "creditTransmittalBatch": {
          "data": null
        },
        "enrollment": {
          "data": {
            "id": "74",
            "type": "enrollment"
          }
        },
        "childCreditAssignments": {
          "data": [

          ]
        },
        "parentCreditAssignment": {
          "data": null
        }
      }
    },
    {
      "id": "77",
      "type": "credit",
      "attributes": {
        "courseId": "0",
        "courseName": "Course 2",
        "status": "active",
        "courseType": "none"
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
      "id": "109",
      "type": "creditAssignment",
      "attributes": {
        "creditHours": 0.5
      },
      "relationships": {
        "credit": {
          "data": {
            "id": "77",
            "type": "credit"
          }
        },
        "graduationPlanMapping": {
          "data": {
            "id": "18",
            "type": "graduationPlanMapping"
          }
        },
        "notes": {
          "data": [

          ]
        },
        "contractTerm": {
          "data": {
            "id": "88",
            "type": "term"
          }
        },
        "contractFacilitator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        },
        "contract": {
          "data": {
            "id": "43",
            "type": "contract"
          }
        },
        "user": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "creditTransmittalBatch": {
          "data": null
        },
        "enrollment": {
          "data": {
            "id": "74",
            "type": "enrollment"
          }
        },
        "childCreditAssignments": {
          "data": [

          ]
        },
        "parentCreditAssignment": {
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
      "id": "108",
      "type": "creditAssignment",
      "attributes": {
        "creditHours": 0.25
      },
      "relationships": {
        "credit": {
          "data": {
            "id": "76",
            "type": "credit"
          }
        },
        "graduationPlanMapping": {
          "data": {
            "id": "19",
            "type": "graduationPlanMapping"
          }
        },
        "notes": {
          "data": [

          ]
        },
        "contractTerm": {
          "data": {
            "id": "88",
            "type": "term"
          }
        },
        "contractFacilitator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        },
        "contract": {
          "data": {
            "id": "43",
            "type": "contract"
          }
        },
        "user": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "creditTransmittalBatch": {
          "data": {
            "id": "1",
            "type": "creditTransmittalBatch"
          }
        },
        "enrollment": {
          "data": {
            "id": "74",
            "type": "enrollment"
          }
        },
        "childCreditAssignments": {
          "data": [

          ]
        },
        "parentCreditAssignment": {
          "data": null
        }
      }
    },
    {
      "id": "76",
      "type": "credit",
      "attributes": {
        "courseId": "0",
        "courseName": "Course 1",
        "status": "active",
        "courseType": "none"
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
    }
  ],
  "meta": {
    "count": 5
  }
};
