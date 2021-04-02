class FteHoursToString < ActiveRecord::Migration[5.2]
  def change
    change_column :statuses, :fte_hours, :string
  end
end
