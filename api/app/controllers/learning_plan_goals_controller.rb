class LearningPlanGoalsController < ApiBaseController
  def index
    result = LearningPlanGoal
      .where(year: params[:year], active: true)
      .order("position")
    count = LearningPlanGoal
      .where(year: params[:year], active: true)
      .count
    options = { meta: { count: count } }
    render json: LearningPlanGoalSerializer.new(result, options)
  end
end
