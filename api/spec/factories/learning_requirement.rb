# frozen_string_literal: true

# spec/factories/learning_requirement.rb

FactoryBot.define do
  factory :learning_requirement do
    ealr { Faker::Lorem.sentence(word_count: 5, supplemental: 0) }
  end
end
