class AdminLearningPlanGoalsController < AdminController
  def index
    result = LearningPlanGoal
      .with_counts
      .order("position")
    count = LearningPlanGoal
      .count
    options = { meta: { count: count } }
    render json: LearningPlanGoalSerializer.new(result, options)
  end

  def create
    goal = LearningPlanGoal.new goal_attributes

    goal.position = 100000

    goal.save!

    render json: LearningPlanGoalSerializer.new(goal)
  end

  def update
    goal = LearningPlanGoal.find params[:id]

    goal.update_attributes! goal_attributes

    render json: LearningPlanGoalSerializer.new(goal)
  end

  def destroy
    goal = LearningPlanGoal.find params[:id]

    goal.destroy!

    render nothing: true, status: 204
  end

  def reorder
    goals = LearningPlanGoal
      .where(active: true)
      .order("position")

    goal = goals.find{|goal| goal.id == params[:id]}
    old_position = goal.position
    new_position = goal_attributes[:position]

    goal.position = new_position

    goals.each do |g, i|
      next if g.id == params[:id] 
      
      next if g.position < new_position

      goal.update_attribute! position: i
    end

    index
  end

  private

  def goal_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:description, :required, :active, :position)
  end
end
