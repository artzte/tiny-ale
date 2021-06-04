// GET /api/learning-plans/6/2019
export default {
  data: {
    id: '1',
    type: 'learningPlan',
    attributes: {
      year: 2019,
      userGoals: 'Iure maxime velit. Culpa ducimus aliquid. Quos saepe et.\\n\\nSit est veniam. Autem non doloremque. Minus qui consequatur.\\n\\nUt enim cumque. Ipsa asperiores voluptatibus. Voluptatem vel quisquam.',
      weeklyHours: '27.5',
    },
    relationships: {
      user: {
        data: {
          id: '6',
          type: 'user',
        },
      },
      learningPlanGoals: {
        data: [
          {
            id: '1',
            type: 'learningPlanGoal',
          },
          {
            id: '2',
            type: 'learningPlanGoal',
          },
          {
            id: '3',
            type: 'learningPlanGoal',
          },
        ],
      },
      notes: {
        data: [

        ],
      },
    },
  },
  included: [
    {
      id: '1',
      type: 'learningPlanGoal',
      attributes: {
        description: 'Qui tempore ratione. Deleniti ipsam suscipit.',
        active: true,
        plansCount: null,
        year: 2019,
        position: 1,
      },
    },
    {
      id: '2',
      type: 'learningPlanGoal',
      attributes: {
        description: 'Iste cumque alias. Aut sed laborum.',
        active: true,
        plansCount: null,
        year: 2019,
        position: 2,
      },
    },
    {
      id: '3',
      type: 'learningPlanGoal',
      attributes: {
        description: 'Saepe rerum iusto. Delectus doloremque repellat.',
        active: true,
        plansCount: null,
        year: 2019,
        position: 3,
      },
    },
  ],
};
