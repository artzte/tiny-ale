# frozen_string_literal: true

class LearningPlanGoalSerializer < ApplicationSerializer
  set_type :learning_plan_goal

  attributes :description, :active, :required, :plans_count, :year, :position
end
