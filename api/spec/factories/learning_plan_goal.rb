# frozen_string_literal: true

# spec/factories/learning_plan_goal.rb

FactoryBot.define do
  factory :learning_plan_goal do
    description { Faker::Lorem.paragraph(sentence_count: 2) }
    active { true }
    required { false }
  end
end
