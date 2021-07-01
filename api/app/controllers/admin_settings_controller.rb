# frozen_string_literal: true

class AdminSettingsController < AdminController
  def update
    # i am not getting something right with the scalar :periods param, so am
    # just enumerating them here rather than using strong params
    #
    settings = [:current_year, :reporting_base_month, :reporting_end_month, :new_contract_term_default, :periods]
    attributes = params[:data][:attributes]
    settings.each do |key|
      setting = Setting.find_by_name(key)

      value = attributes[key]
      setting_value = if key == :periods then
        Marshal.dump(value)
      else
        value
      end

      if setting
        setting.value = setting_value
      else
        setting = Setting.new name: key, value: setting_value
      end
      setting.save! if setting.has_changes_to_save?
    end
    render json: SettingSerializer.new(Setting.where(name: settings))
  end
end
