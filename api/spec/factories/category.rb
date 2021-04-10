# frozen_string_literal: true

# spec/factories/category.rb

FactoryBot.define do
  factory :category do
    name { Faker::Lorem.sentence(word_count: 5, supplemental: 0) }
  end
end
