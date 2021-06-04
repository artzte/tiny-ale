class LearningPlanMods < ActiveRecord::Migration[5.2]
  def change
    add_column :learning_plans, :creator_id, :integer, null: false

    remove_column :learning_plan_goals, :required

    change_column :learning_plans, :weekly_hours, :string, null: false, default: Rails.configuration.constants[:DEFAULT_FTE_HOURS]
  end
end
