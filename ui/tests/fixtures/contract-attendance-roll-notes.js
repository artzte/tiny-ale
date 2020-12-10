// GET /api/notes?notableType=meetingParticipant&notableIds=1,2,3
export default {
  "data": [
    {
      "id": "86",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Jones / meeting 1",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "1",
            "type": "meetingParticipant"
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
      "id": "87",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Mueller / meeting 1",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "2",
            "type": "meetingParticipant"
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
      "id": "88",
      "type": "note",
      "attributes": {
        "note": "Note by Gerhold for student Walker / meeting 1",
        "updatedAt": "2019-11-15T00:00:00.000Z"
      },
      "relationships": {
        "notable": {
          "data": {
            "id": "3",
            "type": "meetingParticipant"
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
