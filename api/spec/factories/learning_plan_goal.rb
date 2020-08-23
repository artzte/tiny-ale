# frozen_string_literal: true

# spec/factories/learning_plan_requirement.rb

FactoryBot.define do
  factory :learning_plan_goal do
    description { Faker::Lorem.paragraphs.join('\n\n') }
    active { true }
    required { false }
  end
end
