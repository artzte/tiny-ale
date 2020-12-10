// GET /api/statuses?enrollmentIds=67,64
export default {
  "data": [
    {
      "id": "97",
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
            "id": "64",
            "type": "enrollment"
          }
        }
      }
    },
    {
      "id": "98",
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
            "id": "64",
            "type": "enrollment"
          }
        }
      }
    },
    {
      "id": "99",
      "type": "status",
      "attributes": {
        "month": "2019-11-01",
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
            "id": "64",
            "type": "enrollment"
          }
        }
      }
    },
    {
      "id": "106",
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
            "id": "67",
            "type": "enrollment"
          }
        }
      }
    },
    {
      "id": "107",
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
            "id": "67",
            "type": "enrollment"
          }
        }
      }
    },
    {
      "id": "108",
      "type": "status",
      "attributes": {
        "month": "2019-11-01",
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
            "id": "67",
            "type": "enrollment"
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
