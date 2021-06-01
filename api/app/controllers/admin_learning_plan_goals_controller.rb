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

  # Sets the positions of learning plan goals with the provided IDs,
  # to match their ordering within the passed data array
  def reorder
    goals = []
    params.require(:data).each_with_index do |id, i|
      goal = LearningPlanGoal.find id
      return render :nothing, status: 404 unless goal

      goal.position = i
      goal.save!
      goals << goal
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
