# frozen_string_literal: true

class SettingSerializer < ApplicationSerializer
  set_type :setting

  attributes :name, :value

  attribute :periods do |setting|
    if setting.name == 'periods'
      Marshal.load(setting.value).as_json
    else
      nil
    end
  end
end
