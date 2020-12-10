// GET /api/notes?notableType=Status&notableIds=97,98,99,100,101,102,103,104,105
export default {
  "data": [
    {
      "id": "18",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-09-01 enrollment of Jones in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "97",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "19",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-10-01 enrollment of Jones in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "98",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "20",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-11-01 enrollment of Jones in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "99",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "21",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-09-01 enrollment of Mueller in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "100",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "22",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-10-01 enrollment of Mueller in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "101",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "23",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-11-01 enrollment of Mueller in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "102",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "24",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-09-01 enrollment of Walker in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "103",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "25",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-10-01 enrollment of Walker in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "104",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "26",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for 2019-11-01 enrollment of Walker in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "105",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    }
  ],
  "included": [
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
    }
  ],
  "meta": {
    "count": 9
  }
};
