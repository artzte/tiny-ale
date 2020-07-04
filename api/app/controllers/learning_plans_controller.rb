class LearningPlansController < ApplicationController
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


  end

  def remove_goal

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
    plan.save!

    active_goals = LearningPlanGoal.where(active: true, required: true)
    plan.learning_plan_goals << active_goals

    render json: LearningPlanSerializer.new(plan)
  end

  def update


  end

protected
  def find_learning_plan
    LearningPlan.find_by_user_id_and_year(student_id_param,  year_param)
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
