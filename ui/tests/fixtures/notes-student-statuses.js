// GET /api/notes?notableType=Status&notableIds=145,148
export default {
  "data": [
    {
      "id": "75",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for Jones on 2019-09-01",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "145",
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
      "id": "78",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for Jones on 2019-10-01",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "148",
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
    "count": 2
  }
};
