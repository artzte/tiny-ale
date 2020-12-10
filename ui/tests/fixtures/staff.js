// GET /api/staff
export default {
  "data": [
    {
      "id": "342",
      "type": "user",
      "attributes": {
        "firstName": "Ayanna",
        "lastName": "Larson",
        "nickname": null,
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
    {
      "id": "343",
      "type": "user",
      "attributes": {
        "firstName": "Coleman",
        "lastName": "Gerhold",
        "nickname": null,
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
      "id": "345",
      "type": "user",
      "attributes": {
        "firstName": "Keith",
        "lastName": "Kuvalis",
        "nickname": null,
        "status": "inactive",
        "role": "staff",
        "isStaff": true
      },
      "relationships": {
        "coordinatees": {
          "data": [

          ]
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
    }
  ],
  "meta": {
    "count": 5
  }
};
