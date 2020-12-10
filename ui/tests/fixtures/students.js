// GET /api/students
export default {
  "data": [
    {
      "id": "347",
      "type": "user",
      "attributes": {
        "firstName": "Claudio",
        "lastName": "Jones",
        "nickname": null,
        "name": "Claudio Jones",
        "dateActive": "2018-08-01",
        "dateInactive": null,
        "districtId": "806551517",
        "districtGrade": 9,
        "status": "active",
        "role": "student"
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
    "count": 3
  }
};
