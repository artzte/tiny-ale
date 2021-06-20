// GET /api/learning-plans/51/2019
export default {
  data: {
    id: '1',
    type: 'learningPlan',
    attributes: {
      year: 2019,
      userGoals: 'Magni cupiditate enim. Quisquam hic qui. Harum placeat consequatur.\\n\\nEveniet dolor quo. Voluptate placeat dolor. Pariatur quidem quas.\\n\\nLaborum est nesciunt. Facere facilis et. Quae quidem fugit.',
      weeklyHours: '27.5',
    },
    relationships: {
      user: {
        data: {
          id: '51',
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
        description: 'Facere asperiores adipisci. Dolorem dicta neque.',
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
        description: 'Distinctio consequuntur et. Eos magni excepturi.',
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
        description: 'Magni iure quaerat. Iure minus eveniet.',
        active: true,
        plansCount: null,
        year: 2019,
        position: 3,
      },
    },
  ],
};
