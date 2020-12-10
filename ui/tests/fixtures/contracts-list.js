// GET /api/contracts?limit=20&order=name&include=term,category,facilitator&schoolYear=2019
export default {
  "data": [
    {
      "id": "45",
      "type": "contract",
      "attributes": {
        "name": "Est illum bellum adflicto accommodo.",
        "status": "active"
      },
      "relationships": {
        "enrollments": {
          "data": [
            {
              "id": "64",
              "type": "enrollment"
            },
            {
              "id": "65",
              "type": "enrollment"
            },
            {
              "id": "66",
              "type": "enrollment"
            }
          ]
        },
        "facilitator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        },
        "term": {
          "data": {
            "id": "89",
            "type": "term"
          }
        },
        "category": {
          "data": {
            "id": "31",
            "type": "category"
          }
        },
        "assignments": {
          "data": [
            {
              "id": "1",
              "type": "assignment"
            },
            {
              "id": "2",
              "type": "assignment"
            },
            {
              "id": "3",
              "type": "assignment"
            },
            {
              "id": "4",
              "type": "assignment"
            },
            {
              "id": "5",
              "type": "assignment"
            }
          ]
        },
        "creditAssignments": {
          "data": [
            {
              "id": "85",
              "type": "creditAssignment"
            }
          ]
        },
        "meetings": {
          "data": [
            {
              "id": "1",
              "type": "meeting"
            },
            {
              "id": "2",
              "type": "meeting"
            },
            {
              "id": "3",
              "type": "meeting"
            },
            {
              "id": "4",
              "type": "meeting"
            },
            {
              "id": "5",
              "type": "meeting"
            }
          ]
        },
        "learningRequirements": {
          "data": [
            {
              "id": "13",
              "type": "learningRequirement"
            },
            {
              "id": "14",
              "type": "learningRequirement"
            },
            {
              "id": "15",
              "type": "learningRequirement"
            },
            {
              "id": "16",
              "type": "learningRequirement"
            }
          ]
        }
      }
    },
    {
      "id": "46",
      "type": "contract",
      "attributes": {
        "name": "Subito suasoria volup amplexus quibusdam.",
        "status": "active"
      },
      "relationships": {
        "enrollments": {
          "data": [
            {
              "id": "67",
              "type": "enrollment"
            },
            {
              "id": "68",
              "type": "enrollment"
            },
            {
              "id": "69",
              "type": "enrollment"
            }
          ]
        },
        "facilitator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        },
        "term": {
          "data": {
            "id": "89",
            "type": "term"
          }
        },
        "category": {
          "data": {
            "id": "32",
            "type": "category"
          }
        },
        "assignments": {
          "data": [

          ]
        },
        "creditAssignments": {
          "data": [
            {
              "id": "87",
              "type": "creditAssignment"
            }
          ]
        },
        "meetings": {
          "data": [

          ]
        },
        "learningRequirements": {
          "data": [

          ]
        }
      }
    }
  ],
  "included": [
    {
      "id": "31",
      "type": "category",
      "attributes": {
        "name": "Category 1",
        "sequence": 0,
        "public": false,
        "reporting": "none",
        "activeContractsCount": 1,
        "homeroom": false
      },
      "relationships": {
        "contracts": {
          "data": [
            {
              "id": "41",
              "type": "contract"
            },
            {
              "id": "45",
              "type": "contract"
            }
          ]
        }
      }
    },
    {
      "id": "343",
      "type": "user",
      "attributes": {
        "firstName": "Coleman",
        "lastName": "Gerhold",
        "nickname": null,
        "dateActive": "2012-09-01",
        "dateInactive": null,
        "districtId": null,
        "districtGrade": 12,
        "email": "bridgetrath@brown.net",
        "name": "Coleman Gerhold",
        "status": "active",
        "role": "staff",
        "isStaff": true
      },
      "relationships": {
        "coordinatees": {
          "data": [
            {
              "id": "347",
              "type": "user"
            }
          ]
        }
      }
    },
    {
      "id": "89",
      "type": "term",
      "attributes": {
        "name": "Stand-alone systemic time-frame",
        "schoolYear": 2019,
        "creditDate": "2020-01-31",
        "months": [
          "2019-09-01",
          "2019-10-01",
          "2019-11-01",
          "2019-12-01",
          "2020-01-01"
        ],
        "status": "active"
      },
      "meta": null
    },
    {
      "id": "32",
      "type": "category",
      "attributes": {
        "name": "Category 2",
        "sequence": 0,
        "public": false,
        "reporting": "none",
        "activeContractsCount": 1,
        "homeroom": false
      },
      "relationships": {
        "contracts": {
          "data": [
            {
              "id": "42",
              "type": "contract"
            },
            {
              "id": "43",
              "type": "contract"
            },
            {
              "id": "44",
              "type": "contract"
            },
            {
              "id": "46",
              "type": "contract"
            }
          ]
        }
      }
    },
    {
      "id": "344",
      "type": "user",
      "attributes": {
        "firstName": "Hildegard",
        "lastName": "Yost",
        "nickname": null,
        "dateActive": "2013-02-01",
        "dateInactive": null,
        "districtId": null,
        "districtGrade": 12,
        "email": "griseldasporer@walsh.info",
        "name": "Hildegard Yost",
        "status": "active",
        "role": "staff",
        "isStaff": true
      },
      "relationships": {
        "coordinatees": {
          "data": [
            {
              "id": "348",
              "type": "user"
            },
            {
              "id": "349",
              "type": "user"
            }
          ]
        }
      }
    }
  ],
  "meta": {
    "count": 2
  }
};
