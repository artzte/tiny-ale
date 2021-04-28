# frozen_string_literal: true

# spec/factories/credit.rb

FactoryBot.define do
  factory :credit do
    course_name { Faker::Lorem.sentence(word_count: 2, supplemental: 0) }
  end
end
