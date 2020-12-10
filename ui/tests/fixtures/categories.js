// GET /api/categories
export default {
  "data": [
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
      "id": "32",
      "type": "category",
      "attributes": {
        "name": "Category 2",
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
              "id": "42",
              "type": "contract"
            },
            {
              "id": "43",
              "type": "contract"
            },
            {
              "id": "44",
              "type": "contract"
            },
            {
              "id": "46",
              "type": "contract"
            }
          ]
        }
      }
    }
  ],
  "meta": {
    "count": 2
  }
};
