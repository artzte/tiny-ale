class AdminLearningPlanGoalsController < AdminController
  def index
    result = LearningPlanGoal
      .with_counts
      .order("year", "position")
    count = LearningPlanGoal
      .count
    options = { meta: { count: count } }
    render json: LearningPlanGoalSerializer.new(result, options)
  end

  def show
    result = LearningPlanGoal
      .with_counts
      .find(params[:id])
    render json: LearningPlanGoalSerializer.new(result)
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

  # Inserts the pushed learning plan goal into its designated
  # position, moving others back. Entire list of goals is returned
  def reorder
    goals = LearningPlanGoal
      .order("position")

    goal = goals.find{|g| g.id.to_s == params[:id]}
    render :nothing, status: 404 unless goal

    if goal_attributes[:position] >= goals.count
      new_position = goals.count - 1
    else
      new_position = goal_attributes[:position]
    end

    goals = goals
      .without(goal)
      .insert(new_position, goal)

    goals.each_with_index do |item, i|
      position = i
      next if item.position == position

      item.position = position
      item.save!
    end

    options = { meta: { count: goals.length } }
    render json: LearningPlanGoalSerializer.new(goals, options)
  end

private

  def goal_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:description, :required, :active,:year, :position)
  end

end
