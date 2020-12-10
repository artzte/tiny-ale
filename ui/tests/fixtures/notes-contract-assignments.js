// GET /api/notes?notableType=Turnin&notableIds=1,2,3,4,5
export default {
  "data": [
    {
      "id": "81",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Jones / assignment 1",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "1",
            "type": "turnin"
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
      "id": "82",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Jones / assignment 2",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "2",
            "type": "turnin"
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
      "id": "83",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Jones / assignment 3",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "3",
            "type": "turnin"
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
      "id": "84",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Jones / assignment 4",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "4",
            "type": "turnin"
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
      "id": "85",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Jones / assignment 5",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "5",
            "type": "turnin"
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
    "count": 5
  }
};
