// GET /api/students?coordinatorIds=344&status=reportable&order=lastName,firstName
export default {
  "data": [
    {
      "id": "348",
      "type": "user",
      "attributes": {
        "firstName": "Tawnya",
        "lastName": "Mueller",
        "nickname": null,
        "name": "Tawnya Mueller",
        "dateActive": "2018-08-01",
        "dateInactive": null,
        "districtId": "2034068301",
        "districtGrade": 10,
        "status": "active",
        "role": "student"
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
        "name": "Bruno Walker",
        "dateActive": "2018-08-01",
        "dateInactive": "2019-10-01",
        "districtId": "664959487",
        "districtGrade": 12,
        "status": "inactive",
        "role": "student"
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
    "count": 2
  }
};
