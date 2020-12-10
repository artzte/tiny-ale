// GET /api/enrollments?participantIds=347&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
export default {
  "data": [
    {
      "id": "67",
      "type": "enrollment",
      "attributes": {
        "finalizedOn": null,
        "enrollmentStatus": "enrolled",
        "completionStatus": "incomplete"
      },
      "relationships": {
        "contract": {
          "data": {
            "id": "46",
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
              "id": "93",
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

          ]
        }
      }
    },
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
    }
  ],
  "included": [
    {
      "id": "46",
      "type": "contract",
      "attributes": {
        "name": "Subito suasoria volup amplexus quibusdam.",
        "status": "active"
      },
      "relationships": {
        "enrollments": {
          "data": [
            {
              "id": "67",
              "type": "enrollment"
            },
            {
              "id": "68",
              "type": "enrollment"
            },
            {
              "id": "69",
              "type": "enrollment"
            }
          ]
        },
        "facilitator": {
          "data": {
            "id": "344",
            "type": "user"
          }
        },
        "term": {
          "data": {
            "id": "89",
            "type": "term"
          }
        },
        "category": {
          "data": {
            "id": "32",
            "type": "category"
          }
        },
        "assignments": {
          "data": [

          ]
        },
        "creditAssignments": {
          "data": [
            {
              "id": "87",
              "type": "creditAssignment"
            }
          ]
        },
        "meetings": {
          "data": [

          ]
        },
        "learningRequirements": {
          "data": [

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
    },
    {
      "id": "89",
      "type": "term",
      "attributes": {
        "name": "Stand-alone systemic time-frame",
        "schoolYear": 2019,
        "creditDate": "2020-01-31",
        "months": [
          "2019-09-01",
          "2019-10-01",
          "2019-11-01",
          "2019-12-01",
          "2020-01-01"
        ],
        "status": "active"
      },
      "meta": null
    },
    {
      "id": "93",
      "type": "creditAssignment",
      "attributes": {
        "creditHours": 1.0
      },
      "relationships": {
        "credit": {
          "data": {
            "id": "76",
            "type": "credit"
          }
        },
        "graduationPlanMapping": {
          "data": null
        },
        "notes": {
          "data": [

          ]
        },
        "contractTerm": {
          "data": null
        },
        "contractFacilitator": {
          "data": null
        },
        "contract": {
          "data": null
        },
        "user": {
          "data": null
        },
        "creditTransmittalBatch": {
          "data": null
        },
        "enrollment": {
          "data": {
            "id": "67",
            "type": "enrollment"
          }
        },
        "childCreditAssignments": {
          "data": [

          ]
        },
        "parentCreditAssignment": {
          "data": null
        }
      }
    },
    {
      "id": "76",
      "type": "credit",
      "attributes": {
        "courseId": "0",
        "courseName": "Course 1",
        "status": "active",
        "courseType": "none"
      }
    },
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
      "id": "45",
      "type": "contract",
      "attributes": {
        "name": "Est illum bellum adflicto accommodo.",
        "status": "active"
      },
      "relationships": {
        "enrollments": {
          "data": [
            {
              "id": "64",
              "type": "enrollment"
            },
            {
              "id": "65",
              "type": "enrollment"
            },
            {
              "id": "66",
              "type": "enrollment"
            }
          ]
        },
        "facilitator": {
          "data": {
            "id": "343",
            "type": "user"
          }
        },
        "term": {
          "data": {
            "id": "89",
            "type": "term"
          }
        },
        "category": {
          "data": {
            "id": "31",
            "type": "category"
          }
        },
        "assignments": {
          "data": [
            {
              "id": "1",
              "type": "assignment"
            },
            {
              "id": "2",
              "type": "assignment"
            },
            {
              "id": "3",
              "type": "assignment"
            },
            {
              "id": "4",
              "type": "assignment"
            },
            {
              "id": "5",
              "type": "assignment"
            }
          ]
        },
        "creditAssignments": {
          "data": [
            {
              "id": "85",
              "type": "creditAssignment"
            }
          ]
        },
        "meetings": {
          "data": [
            {
              "id": "1",
              "type": "meeting"
            },
            {
              "id": "2",
              "type": "meeting"
            },
            {
              "id": "3",
              "type": "meeting"
            },
            {
              "id": "4",
              "type": "meeting"
            },
            {
              "id": "5",
              "type": "meeting"
            }
          ]
        },
        "learningRequirements": {
          "data": [
            {
              "id": "13",
              "type": "learningRequirement"
            },
            {
              "id": "14",
              "type": "learningRequirement"
            },
            {
              "id": "15",
              "type": "learningRequirement"
            },
            {
              "id": "16",
              "type": "learningRequirement"
            }
          ]
        }
      }
    },
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
      "id": "90",
      "type": "creditAssignment",
      "attributes": {
        "creditHours": 1.0
      },
      "relationships": {
        "credit": {
          "data": {
            "id": "76",
            "type": "credit"
          }
        },
        "graduationPlanMapping": {
          "data": null
        },
        "notes": {
          "data": [

          ]
        },
        "contractTerm": {
          "data": null
        },
        "contractFacilitator": {
          "data": null
        },
        "contract": {
          "data": null
        },
        "user": {
          "data": null
        },
        "creditTransmittalBatch": {
          "data": null
        },
        "enrollment": {
          "data": {
            "id": "64",
            "type": "enrollment"
          }
        },
        "childCreditAssignments": {
          "data": [

          ]
        },
        "parentCreditAssignment": {
          "data": null
        }
      }
    }
  ],
  "meta": {
    "count": 2
  }
};
