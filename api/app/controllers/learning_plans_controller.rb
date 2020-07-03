class LearningPlansController < ApplicationController
  def show
    year = year_param || Setting.current_year
    plan = LearningPlan
      .where(user_id: student_id_param, year: year)
      .first
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
    student = User.find student_id_param
    plan = LearningPlan.create(learning_plan_attributes)
    plan.user = student
    plan.save!

    render json: LearningPlanSerializer.new(plan)
  end

  def update


  end

protected
  def student_id_param
    params[:student_id]
  end

  def year_param
    params[:year]
  end

  def learning_plan_attributes
    params
      .require(:data)
      .require(:attributes)
      .permit(:year, :user_goals, :weekly_hours)
  end
end
