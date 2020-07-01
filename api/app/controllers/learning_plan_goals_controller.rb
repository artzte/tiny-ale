class LearningPlanGoalsController < ApplicationController
  def index
    result = LearningPlanGoal
      .where('active = true')
      .order("position")
    count = LearningPlanGoal
      .where('active = true')
      .count
    options = { meta: { count: count } }
    render json: LearningPlanGoalSerializer.new(result, options), status: 200
  end
end
