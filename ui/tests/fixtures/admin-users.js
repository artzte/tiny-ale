// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  "data": [
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
        "status": "active",
        "role": "staff",
        "email": "bridgetrath@brown.net"
      },
      "relationships": {
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
    },
    {
      "id": "345",
      "type": "user",
      "attributes": {
        "firstName": "Keith",
        "lastName": "Kuvalis",
        "nickname": null,
        "dateActive": "2011-02-01",
        "dateInactive": "2018-01-01",
        "districtId": null,
        "districtGrade": 12,
        "status": "inactive",
        "role": "staff",
        "email": "bo@wehner.org"
      },
      "relationships": {
      }
    },
    {
      "id": "342",
      "type": "user",
      "attributes": {
        "firstName": "Ayanna",
        "lastName": "Larson",
        "nickname": null,
        "dateActive": "2011-07-01",
        "dateInactive": null,
        "districtId": null,
        "districtGrade": 12,
        "status": "active",
        "role": "administrator",
        "email": "ewa@wildermanmonahan.org"
      },
      "relationships": {
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
        "status": "active",
        "role": "student",
        "email": "terencekunze@rau.name"
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
        "status": "active",
        "role": "administrator",
        "email": "elwoodaltenwerth@kautzerjones.com"
      },
      "relationships": {
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
        "status": "inactive",
        "role": "student",
        "email": "iris@veum.co"
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
        "status": "active",
        "role": "staff",
        "email": "griseldasporer@walsh.info"
      },
      "relationships": {
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
        "status": "active",
        "role": "staff",
        "email": "bridgetrath@brown.net"
      },
      "relationships": {
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
        "status": "active",
        "role": "staff",
        "email": "griseldasporer@walsh.info"
      },
      "relationships": {
      }
    }
  ],
  "meta": {
    "count": 8
  }
};
