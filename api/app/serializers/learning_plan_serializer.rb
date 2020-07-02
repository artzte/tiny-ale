# frozen_string_literal: true

class LearningPlanSerializer < ApplicationSerializer
  set_type :learning_plan

  attributes :year, :user_goals, :weekly_hours

  belongs_to :user

  has_many :learning_plan_goals
  has_many :notes
end
