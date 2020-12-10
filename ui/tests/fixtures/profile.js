// GET /api/profile
export default {
  "data": {
    "id": "346",
    "type": "user",
    "attributes": {
      "firstName": "Donald",
      "lastName": "Sauer",
      "nickname": null,
      "dateActive": "2011-07-01",
      "dateInactive": null,
      "districtId": null,
      "districtGrade": 12,
      "email": "elwoodaltenwerth@kautzerjones.com",
      "name": "Donald Sauer",
      "status": "active",
      "role": "administrator",
      "isStaff": true
    },
    "relationships": {
      "coordinatees": {
        "data": [

        ]
      }
    }
  },
  "meta": {
    "permissions": [
      "manage:all-reporting",
      "manage:config",
      "manage:own-reporting",
      "read:config",
      "read:reporting"
    ]
  }
};
