// GET /api/contracts
export default {
  data: [
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Caries aegre ars dolore vestigium.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '7',
              type: 'enrollment',
            },
            {
              id: '8',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '1',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '1',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '1',
              type: 'creditAssignment',
            },
            {
              id: '13',
              type: 'creditAssignment',
            },
            {
              id: '14',
              type: 'creditAssignment',
            },
            {
              id: '15',
              type: 'creditAssignment',
            },
            {
              id: '16',
              type: 'creditAssignment',
            },
            {
              id: '17',
              type: 'creditAssignment',
            },
            {
              id: '18',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        learningRequirements: {
          data: [

          ],
        },
      },
    },
    {
      id: '2',
      type: 'contract',
      attributes: {
        name: 'Theologus canonicus architecto venustas cotidie.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '9',
              type: 'enrollment',
            },
            {
              id: '10',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '2',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '3',
              type: 'creditAssignment',
            },
            {
              id: '19',
              type: 'creditAssignment',
            },
            {
              id: '20',
              type: 'creditAssignment',
            },
            {
              id: '21',
              type: 'creditAssignment',
            },
            {
              id: '22',
              type: 'creditAssignment',
            },
            {
              id: '23',
              type: 'creditAssignment',
            },
            {
              id: '24',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        learningRequirements: {
          data: [

          ],
        },
      },
    },
    {
      id: '3',
      type: 'contract',
      attributes: {
        name: 'Ara correptius venio temperantia ultra.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '11',
              type: 'enrollment',
            },
            {
              id: '12',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '2',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '5',
              type: 'creditAssignment',
            },
            {
              id: '25',
              type: 'creditAssignment',
            },
            {
              id: '26',
              type: 'creditAssignment',
            },
            {
              id: '27',
              type: 'creditAssignment',
            },
            {
              id: '28',
              type: 'creditAssignment',
            },
            {
              id: '29',
              type: 'creditAssignment',
            },
            {
              id: '30',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        learningRequirements: {
          data: [

          ],
        },
      },
    },
    {
      id: '4',
      type: 'contract',
      attributes: {
        name: 'Arbitro depromo tripudio totus viduo.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [

          ],
        },
        facilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '2',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '6',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        learningRequirements: {
          data: [

          ],
        },
      },
    },
    {
      id: '5',
      type: 'contract',
      attributes: {
        name: 'Acidus contabesco trucido non careo.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '1',
              type: 'enrollment',
            },
            {
              id: '2',
              type: 'enrollment',
            },
            {
              id: '3',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '2',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '3',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '1',
            type: 'category',
          },
        },
        assignments: {
          data: [
            {
              id: '1',
              type: 'assignment',
            },
            {
              id: '2',
              type: 'assignment',
            },
            {
              id: '3',
              type: 'assignment',
            },
            {
              id: '4',
              type: 'assignment',
            },
            {
              id: '5',
              type: 'assignment',
            },
          ],
        },
        creditAssignments: {
          data: [
            {
              id: '2',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [
            {
              id: '1',
              type: 'meeting',
            },
            {
              id: '2',
              type: 'meeting',
            },
            {
              id: '3',
              type: 'meeting',
            },
            {
              id: '4',
              type: 'meeting',
            },
            {
              id: '5',
              type: 'meeting',
            },
          ],
        },
        learningRequirements: {
          data: [
            {
              id: '1',
              type: 'learningRequirement',
            },
            {
              id: '2',
              type: 'learningRequirement',
            },
            {
              id: '3',
              type: 'learningRequirement',
            },
            {
              id: '4',
              type: 'learningRequirement',
            },
          ],
        },
      },
    },
    {
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Vilitas cultellus articulus vereor est.',
        status: 'active',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '4',
              type: 'enrollment',
            },
            {
              id: '5',
              type: 'enrollment',
            },
            {
              id: '6',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '3',
            type: 'user',
          },
        },
        term: {
          data: {
            id: '3',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '4',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        learningRequirements: {
          data: [

          ],
        },
      },
    },
  ],
  meta: {
    count: 6,
  },
};
