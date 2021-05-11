# frozen_string_literal: true

# spec/factories/learning_plan.rb

FactoryBot.define do
  factory :learning_plan do
    user_goals { Faker::Lorem.paragraphs.join('\n\n') }
    year { Setting.current_year }
  end
end
