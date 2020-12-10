// GET /api/notes?notableType=Status&notableIds=97,98,99,106,107,108
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
      "id": "30",
      "type": "note",
      "attributes": {
        "note": "Note by Yost for 2019-09-01 enrollment of Jones in Subito suasoria volup amplexus quibusdam.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "106",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "31",
      "type": "note",
      "attributes": {
        "note": "Note by Yost for 2019-10-01 enrollment of Jones in Subito suasoria volup amplexus quibusdam.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "107",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "32",
      "type": "note",
      "attributes": {
        "note": "Note by Yost for 2019-11-01 enrollment of Jones in Subito suasoria volup amplexus quibusdam.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "108",
            "type": "status"
          }
        },
        "creator": {
          "data": {
            "id": "344",
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
    "count": 6
  }
};
