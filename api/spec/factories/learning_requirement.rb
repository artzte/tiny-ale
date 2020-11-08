# frozen_string_literal: true

# spec/factories/learning_requirement.rb

FactoryBot.define do
  factory :learning_requirement do
    ealr { Faker::Lorem.sentence(5, 0) }
  end
end
