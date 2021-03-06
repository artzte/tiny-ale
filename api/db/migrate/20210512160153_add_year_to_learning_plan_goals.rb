class AddYearToLearningPlanGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :learning_plan_goals, :year, :integer, null: false

    reversible do |dir|
      dir.up do
        LearningPlanGoal.update_all year: Setting.current_year
      end
    end
  end
end

