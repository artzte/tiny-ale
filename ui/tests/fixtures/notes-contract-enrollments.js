// GET /api/notes?notableType=Enrollment&notableIds=64,65,66
export default {
  "data": [
    {
      "id": "15",
      "type": "note",
      "attributes": {
        "note": "Note for Jones for enrollment in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "64",
            "type": "enrollment"
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
      "id": "16",
      "type": "note",
      "attributes": {
        "note": "Note for Mueller for enrollment in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "65",
            "type": "enrollment"
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
      "id": "17",
      "type": "note",
      "attributes": {
        "note": "Note for Walker for enrollment in Est illum bellum adflicto accommodo.",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "66",
            "type": "enrollment"
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
    "count": 3
  }
};
