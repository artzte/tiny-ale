// GET /api/admin/users/347
export default {
  "data": {
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
      "status": "active",
      "role": "student",
      "email": "rashad@hyatt.org"
    },
    "relationships": {
      "coordinator": {
        "data": {
          "id": "343",
          "type": "user"
        }
      }
    }
  }
};
