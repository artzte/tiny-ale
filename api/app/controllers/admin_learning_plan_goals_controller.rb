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
      .order("position")

    goal = goals.find{|g| g.id.to_s == params[:id]}
    render nothing, status: 404 unless goal

    if goal_attributes[:position] >= goals.count
      new_position = goals.count - 1
    else
      new_position = goal_attributes[:position]
    end

    goals = goals
      .filter{|g| g != goal}
      .insert(new_position, goal)

    goals.each_with_index do |g, i|
      next if goal.position = i
      goal.position = i
      goal.save!
    end

    options = { meta: { count: goals.length } }
    render json: LearningPlanGoalSerializer.new(goals, options)
  end

private

  def goal_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:description, :required, :active, :position)
  end

end
