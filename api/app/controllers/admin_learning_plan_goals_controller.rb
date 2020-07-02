class AdminLearningPlanGoalsController < ApplicationController
  def index
    result = LearningPlanGoal
      .with_counts
      .where('active = true')
      .order("position")
    count = LearningPlanGoal
      .where('active = true')
      .count
    options = { meta: { count: count } }
    render json: LearningPlanGoalSerializer.new(result, options), status: 200
  end

  def create
    requirement = LearningPlanGoal.new goal_attributes

    requirement.save!

    render json: LearningPlanGoalSerializer.new(requirement)
  end

  def update
    requirement = LearningPlanGoal.find params[:id]

    requirement.update_attributes! goal_attributes

    render json: LearningPlanGoalSerializer.new(requirement)
  end

  def destroy
    requirement = LearningPlanGoal.find params[:id]

    requirement.destroy!

    render nothing: true, status: 204
  end

  private

  def goal_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:description, :required, :active, :position)
  end
end
