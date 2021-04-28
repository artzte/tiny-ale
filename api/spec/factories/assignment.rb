# frozen_string_literal: true

# spec/factories/assignment.rb

FactoryBot.define do
  factory :assignment do
    name { Faker::Lorem.sentence(word_count: 5, supplemental: 0) }
  end
end
