# frozen_string_literal: true

class AddTimestamps < ActiveRecord::Migration[5.2]
  def change
    default_timestamp = DateTime.new(1900)
    add_timestamps :users
    add_timestamps :categories
    add_timestamps :contract_ealrs
    add_timestamps :credit_transmittal_batches
    add_timestamps :credits
    add_timestamps :ealrs
    add_timestamps :graduation_plan_mappings
    add_timestamps :graduation_plan_requirements
    add_timestamps :graduation_plans
    add_timestamps :learning_plan_goals
    add_timestamps :learning_plans
    add_timestamps :learning_plans_to_goals
    add_timestamps :meeting_participants
    add_timestamps :meetings
    add_timestamps :settings
    add_column :notes, :created_at, :datetime
    add_timestamps :terms
  end
end
