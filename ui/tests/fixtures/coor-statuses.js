// GET /api/statuses?studentIds=348,349&months=2019-09-01,2019-10-01,2019-11-01,2019-12-01,2020-01-01,2020-02-01,2020-03-01,2020-04-01,2020-05-01,2020-06-01&type=student
export default {
  "data": [
    {
      "id": "146",
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
            "id": "344",
            "type": "user"
          }
        },
        "statusable": {
          "data": {
            "id": "348",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "149",
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
            "id": "344",
            "type": "user"
          }
        },
        "statusable": {
          "data": {
            "id": "348",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "147",
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
            "id": "344",
            "type": "user"
          }
        },
        "statusable": {
          "data": {
            "id": "349",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "150",
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
            "id": "344",
            "type": "user"
          }
        },
        "statusable": {
          "data": {
            "id": "349",
            "type": "user"
          }
        }
      }
    }
  ],
  "included": [
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
    "count": 4
  }
};
