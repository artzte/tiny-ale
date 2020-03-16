# frozen_string_literal: true

# spec/factories/user.rb

FactoryBot.define do
  factory :user do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    status { 1 } # active
    privilege { 1 } # student
    district_grade { 12 } # senior
  end
end
