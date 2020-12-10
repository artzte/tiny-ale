// GET /api/statuses?limit=-1&months=2019-09-01%2C2019-10-01%2C2019-11-01%2C2019-12-01%2C2020-01-01%2C2020-02-01%2C2020-03-01%2C2020-04-01%2C2020-05-01%2C2020-06-01&studentIds=347
export default {
  "data": [
    {
      "id": "145",
      "type": "status",
      "attributes": {
        "month": "2019-09-01",
        "createdAt": "2019-11-15T00:00:00.000Z",
        "updatedAt": "2019-11-15T00:00:00.000Z",
        "fteHours": 25,
        "metFteRequirements": true,
        "heldPeriodicCheckins": true,
        "academicStatus": "satisfactory",
        "attendanceStatus": "satisfactory"
      },
      "relationships": {
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        },
        "statusable": {
          "data": {
            "id": "347",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "148",
      "type": "status",
      "attributes": {
        "month": "2019-10-01",
        "createdAt": "2019-11-15T00:00:00.000Z",
        "updatedAt": "2019-11-15T00:00:00.000Z",
        "fteHours": 25,
        "metFteRequirements": true,
        "heldPeriodicCheckins": true,
        "academicStatus": "satisfactory",
        "attendanceStatus": "satisfactory"
      },
      "relationships": {
        "creator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        },
        "statusable": {
          "data": {
            "id": "347",
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
