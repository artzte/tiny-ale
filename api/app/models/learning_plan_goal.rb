# frozen_string_literal: true

class LearningPlanGoal < ApplicationRecord
  include StripTagsValidator

  has_and_belongs_to_many :learning_plans, join_table: 'learning_plans_to_goals'
  validates_length_of :description, minimum: 10

  validates_inclusion_of :active, in: [true, false]
  validates_numericality_of :position

  validates_numericality_of :year

  scope :with_counts, -> {
    select('learning_plan_goals.*, COALESCE(plans.count,0) AS plans_count')
      .joins('LEFT OUTER JOIN (SELECT learning_plans_to_goals.learning_plan_goal_id, COUNT(learning_plan_id) AS count FROM learning_plans_to_goals GROUP BY learning_plan_goal_id) AS plans ON plans.learning_plan_goal_id = learning_plan_goals.id')
  }

  def plans_count
    self[:plans_count]
  end
end
