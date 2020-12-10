// GET /api/enrollments?contractIds=45&include=participant
export default {
  "data": [
    {
      "id": "64",
      "type": "enrollment",
      "attributes": {
        "finalizedOn": null,
        "enrollmentStatus": "enrolled",
        "completionStatus": "incomplete"
      },
      "relationships": {
        "contract": {
          "data": {
            "id": "45",
            "type": "contract"
          }
        },
        "participant": {
          "data": {
            "id": "347",
            "type": "user"
          }
        },
        "creditAssignments": {
          "data": [
            {
              "id": "90",
              "type": "creditAssignment"
            }
          ]
        },
        "turnins": {
          "data": [
            {
              "id": "1",
              "type": "turnin"
            },
            {
              "id": "2",
              "type": "turnin"
            },
            {
              "id": "3",
              "type": "turnin"
            },
            {
              "id": "4",
              "type": "turnin"
            },
            {
              "id": "5",
              "type": "turnin"
            }
          ]
        },
        "meetingParticipants": {
          "data": [
            {
              "id": "1",
              "type": "meetingParticipant"
            },
            {
              "id": "4",
              "type": "meetingParticipant"
            },
            {
              "id": "7",
              "type": "meetingParticipant"
            },
            {
              "id": "10",
              "type": "meetingParticipant"
            },
            {
              "id": "13",
              "type": "meetingParticipant"
            }
          ]
        }
      }
    },
    {
      "id": "65",
      "type": "enrollment",
      "attributes": {
        "finalizedOn": null,
        "enrollmentStatus": "enrolled",
        "completionStatus": "incomplete"
      },
      "relationships": {
        "contract": {
          "data": {
            "id": "45",
            "type": "contract"
          }
        },
        "participant": {
          "data": {
            "id": "348",
            "type": "user"
          }
        },
        "creditAssignments": {
          "data": [
            {
              "id": "91",
              "type": "creditAssignment"
            }
          ]
        },
        "turnins": {
          "data": [

          ]
        },
        "meetingParticipants": {
          "data": [
            {
              "id": "2",
              "type": "meetingParticipant"
            },
            {
              "id": "5",
              "type": "meetingParticipant"
            },
            {
              "id": "8",
              "type": "meetingParticipant"
            },
            {
              "id": "11",
              "type": "meetingParticipant"
            },
            {
              "id": "14",
              "type": "meetingParticipant"
            }
          ]
        }
      }
    },
    {
      "id": "66",
      "type": "enrollment",
      "attributes": {
        "finalizedOn": null,
        "enrollmentStatus": "enrolled",
        "completionStatus": "incomplete"
      },
      "relationships": {
        "contract": {
          "data": {
            "id": "45",
            "type": "contract"
          }
        },
        "participant": {
          "data": {
            "id": "349",
            "type": "user"
          }
        },
        "creditAssignments": {
          "data": [
            {
              "id": "92",
              "type": "creditAssignment"
            }
          ]
        },
        "turnins": {
          "data": [

          ]
        },
        "meetingParticipants": {
          "data": [
            {
              "id": "3",
              "type": "meetingParticipant"
            },
            {
              "id": "6",
              "type": "meetingParticipant"
            },
            {
              "id": "9",
              "type": "meetingParticipant"
            },
            {
              "id": "12",
              "type": "meetingParticipant"
            },
            {
              "id": "15",
              "type": "meetingParticipant"
            }
          ]
        }
      }
    }
  ],
  "included": [
    {
      "id": "347",
      "type": "user",
      "attributes": {
        "firstName": "Claudio",
        "lastName": "Jones",
        "nickname": null,
        "dateActive": "2018-08-01",
        "dateInactive": null,
        "districtId": "806551517",
        "districtGrade": 9,
        "email": "rashad@hyatt.org",
        "name": "Claudio Jones",
        "status": "active",
        "role": "student",
        "isStaff": false
      },
      "relationships": {
        "coordinator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "348",
      "type": "user",
      "attributes": {
        "firstName": "Tawnya",
        "lastName": "Mueller",
        "nickname": null,
        "dateActive": "2018-08-01",
        "dateInactive": null,
        "districtId": "2034068301",
        "districtGrade": 10,
        "email": "terencekunze@rau.name",
        "name": "Tawnya Mueller",
        "status": "active",
        "role": "student",
        "isStaff": false
      },
      "relationships": {
        "coordinator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        }
      }
    },
    {
      "id": "349",
      "type": "user",
      "attributes": {
        "firstName": "Bruno",
        "lastName": "Walker",
        "nickname": null,
        "dateActive": "2018-08-01",
        "dateInactive": "2019-10-01",
        "districtId": "664959487",
        "districtGrade": 12,
        "email": "iris@veum.co",
        "name": "Bruno Walker",
        "status": "inactive",
        "role": "student",
        "isStaff": false
      },
      "relationships": {
        "coordinator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        }
      }
    }
  ],
  "meta": {
    "count": 3
  }
};
