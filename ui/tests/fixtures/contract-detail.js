// GET /api/contracts/45?include=category,facilitator,assignments,meetings,creditAssignments,creditAssignments.credit,term,ealrs
export default {
  "data": {
    "id": "45",
    "type": "contract",
    "attributes": {
      "name": "Est illum bellum adflicto accommodo.",
      "status": "active",
      "learningObjectives": "Learning objectives Tersus ea verto tubineus acer.",
      "competencies": "Competencies Denique corporis aggero constans autus.",
      "evaluationMethods": "Evaluation methods Suadeo audentia laboriosam tollo ascisco.",
      "instructionalMaterials": "Instructional materials Creo causa adulatio dedecor cupiditate.",
      "location": "Location Tamquam triduana censura color atrocitas.",
      "timeslots": [
        {
          "start": "8:45",
          "end": "10:30",
          "weekdays": "01234"
        }
      ]
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
  "included": [
    {
      "id": "1",
      "type": "assignment",
      "attributes": {
        "name": "Assignment 1",
        "description": "Here is assignment number 1",
        "dueDate": "2019-09-02"
      },
      "relationships": {
        "turnins": {
          "data": [
            {
              "id": "1",
              "type": "turnin"
            }
          ]
        }
      }
    },
    {
      "id": "2",
      "type": "assignment",
      "attributes": {
        "name": "Assignment 2",
        "description": "Here is assignment number 2",
        "dueDate": "2019-09-03"
      },
      "relationships": {
        "turnins": {
          "data": [
            {
              "id": "2",
              "type": "turnin"
            }
          ]
        }
      }
    },
    {
      "id": "3",
      "type": "assignment",
      "attributes": {
        "name": "Assignment 3",
        "description": "Here is assignment number 3",
        "dueDate": "2019-09-04"
      },
      "relationships": {
        "turnins": {
          "data": [
            {
              "id": "3",
              "type": "turnin"
            }
          ]
        }
      }
    },
    {
      "id": "4",
      "type": "assignment",
      "attributes": {
        "name": "Assignment 4",
        "description": "Here is assignment number 4",
        "dueDate": "2019-09-05"
      },
      "relationships": {
        "turnins": {
          "data": [
            {
              "id": "4",
              "type": "turnin"
            }
          ]
        }
      }
    },
    {
      "id": "5",
      "type": "assignment",
      "attributes": {
        "name": "Assignment 5",
        "description": "Here is assignment number 5",
        "dueDate": "2019-09-06"
      },
      "relationships": {
        "turnins": {
          "data": [
            {
              "id": "5",
              "type": "turnin"
            }
          ]
        }
      }
    },
    {
      "id": "31",
      "type": "category",
      "attributes": {
        "name": "Category 1",
        "sequence": 0,
        "public": false,
        "reporting": "none",
        "activeContractsCount": 1,
        "homeroom": false
      },
      "relationships": {
        "contracts": {
          "data": [
            {
              "id": "41",
              "type": "contract"
            },
            {
              "id": "45",
              "type": "contract"
            }
          ]
        }
      }
    },
    {
      "id": "85",
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
          "data": {
            "id": "45",
            "type": "contract"
          }
        },
        "user": {
          "data": null
        },
        "creditTransmittalBatch": {
          "data": null
        },
        "enrollment": {
          "data": null
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
      "id": "13",
      "type": "learningRequirement",
      "attributes": {
        "ealr": "Tertius sit corrupti veritatis decumbo.",
        "seq": "1.1",
        "category": "Category 1"
      }
    },
    {
      "id": "14",
      "type": "learningRequirement",
      "attributes": {
        "ealr": "Crastinus fuga decimus unus aperio.",
        "seq": "1.2",
        "category": "Category 1"
      }
    },
    {
      "id": "15",
      "type": "learningRequirement",
      "attributes": {
        "ealr": "Video cum tamdiu qui et.",
        "seq": "2.1",
        "category": "Category 2"
      }
    },
    {
      "id": "16",
      "type": "learningRequirement",
      "attributes": {
        "ealr": "Cruentus pax qui nam clamo.",
        "seq": "2.2",
        "category": "Category 2"
      }
    },
    {
      "id": "1",
      "type": "meeting",
      "attributes": {
        "title": "Attendance for Monday, 02 September 2019",
        "meetingDate": "2019-09-02"
      },
      "relationships": {
        "meetingParticipants": {
          "data": [
            {
              "id": "1",
              "type": "meetingParticipant"
            },
            {
              "id": "2",
              "type": "meetingParticipant"
            },
            {
              "id": "3",
              "type": "meetingParticipant"
            }
          ]
        }
      }
    },
    {
      "id": "2",
      "type": "meeting",
      "attributes": {
        "title": "Attendance for Tuesday, 03 September 2019",
        "meetingDate": "2019-09-03"
      },
      "relationships": {
        "meetingParticipants": {
          "data": [
            {
              "id": "4",
              "type": "meetingParticipant"
            },
            {
              "id": "5",
              "type": "meetingParticipant"
            },
            {
              "id": "6",
              "type": "meetingParticipant"
            }
          ]
        }
      }
    },
    {
      "id": "3",
      "type": "meeting",
      "attributes": {
        "title": "Attendance for Wednesday, 04 September 2019",
        "meetingDate": "2019-09-04"
      },
      "relationships": {
        "meetingParticipants": {
          "data": [
            {
              "id": "7",
              "type": "meetingParticipant"
            },
            {
              "id": "8",
              "type": "meetingParticipant"
            },
            {
              "id": "9",
              "type": "meetingParticipant"
            }
          ]
        }
      }
    },
    {
      "id": "4",
      "type": "meeting",
      "attributes": {
        "title": "Attendance for Thursday, 05 September 2019",
        "meetingDate": "2019-09-05"
      },
      "relationships": {
        "meetingParticipants": {
          "data": [
            {
              "id": "10",
              "type": "meetingParticipant"
            },
            {
              "id": "11",
              "type": "meetingParticipant"
            },
            {
              "id": "12",
              "type": "meetingParticipant"
            }
          ]
        }
      }
    },
    {
      "id": "5",
      "type": "meeting",
      "attributes": {
        "title": "Attendance for Friday, 06 September 2019",
        "meetingDate": "2019-09-06"
      },
      "relationships": {
        "meetingParticipants": {
          "data": [
            {
              "id": "13",
              "type": "meetingParticipant"
            },
            {
              "id": "14",
              "type": "meetingParticipant"
            },
            {
              "id": "15",
              "type": "meetingParticipant"
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
    }
  ]
};
