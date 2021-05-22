class LearningPlansController < ApiBaseController
  def show
    year = year_param
    plan = find_learning_plan

    if plan
      render json: LearningPlanSerializer.new(plan, { include: [:learning_plan_goals]})
    else
      render json: { message: "No learning plan found for year #{year}"}, status: :not_found
    end
  end

  def add_goal
    plan = LearningPlan.find(params[:learning_plan_id])

    existing_goal = plan.learning_plan_goals.find_by_id(params[:id])

    if existing_goal
      plan.errors.add(:learning_plan_goals, 'this new learning plan goal will duplicate an existing one')
      raise ActiveRecord::RecordInvalid.new(plan)
    end
    
    goal = LearningPlanGoal.find params[:id]
    plan.learning_plan_goals << goal

    render json: LearningPlanSerializer.new(plan)
  end

  def remove_goal
    plan = LearningPlan.find(params[:learning_plan_id])
  
    existing_goal = plan.learning_plan_goals.find_by_id(params[:id])

    raise ActiveRecord::RecordNotFound.new unless existing_goal
    
    plan.learning_plan_goals.destroy(existing_goal)

    head :no_content
  end

  def create
    # don't create a duplicate plan
    # TODO unique index on year, user_id
    plan = find_learning_plan
    if plan
      plan.errors.add(:user_id, 'this new learning plan will duplicate an existing one')
      raise ActiveRecord::RecordInvalid.new(plan)
    end
    
    student = User.find student_id_param
    plan = LearningPlan.create(learning_plan_attributes)
    plan.user = student
    plan.creator = current_user
    plan.save!

    active_goals = LearningPlanGoal.where(year: year_param, active: true)
    plan.learning_plan_goals << active_goals

    render json: LearningPlanSerializer.new(plan)
  end

  def update
    plan = LearningPlan.find params[:learning_plan_id]
    raise ActiveRecord::RecordNotFound unless plan
    
    active_goals = LearningPlanGoal.where(year: plan.year, active: true)
    plan.learning_plan_goals = active_goals

    plan.creator = current_user unless plan.creator

    plan.user_goals = learning_plan_attributes[:user_goals] unless learning_plan_attributes[:user_goals].nil?
    plan.weekly_hours = learning_plan_attributes[:weekly_hours] unless learning_plan_attributes[:weekly_hours].nil?
    plan.save!
  
    render json: LearningPlanSerializer.new(plan, include: [:learning_plan_goals])
  end    

protected
  def find_learning_plan
    LearningPlan
      .find_by(user_id: student_id_param, year: year_param)
  end

  def student_id_param
    params[:student_id]
  end

  def year_param
    params[:year] || params.dig(:data, :attributes, :year) || Setting.current_year
  end

  def learning_plan_attributes
    params
      .require(:data)
      .require(:attributes)
      .permit(:year, :user_goals, :weekly_hours)
  end
end
