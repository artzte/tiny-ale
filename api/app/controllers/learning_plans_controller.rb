class LearningPlansController < ApplicationController
  def show
    year = year_param || Setting.current_year
    plan = LearningPlan
      .where(user_id: params[:user_id], year: year)
      .first
    if plan
      render json: LearningPlanSerializer.new(plan, { include: [:learning_plan_goals ]})
    else
      render status: 404
    end
  end

  def add_goal


  end

  def remove_goal

  end

  def create
    plan = LearningPlan.create!(learning_plan_attributes)

    render json: LearningPlanSerializer.new(plan)
  end

  def update


  end

protected
  def year_param
    params.dig(:year)
  end

  def learning_plan_attributes
    params
      .require(:data)
      .require(:attributes)
      .permit(:year, :user_goals, :weekly_hours)
  end
end
