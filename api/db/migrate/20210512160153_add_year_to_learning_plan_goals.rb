class AddYearToLearningPlanGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :learning_plan_goals, :year, :integer, default: nil
  end
end
