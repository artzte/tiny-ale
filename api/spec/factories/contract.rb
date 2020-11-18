# frozen_string_literal: true

# spec/factories/contract.rb

FactoryBot.define do
  factory :contract do
    name { Faker::Lorem.sentence(5, 0) }
    contract_status { 1 }
    timeslots { [{ start: '8:45', end: '10:30', weekdays: '01234' }] }
    learning_objectives { "Learning objectives #{Faker::Lorem.sentence(5, 0)}" }
    competencies { "Competencies #{Faker::Lorem.sentence(5, 0)}" }
    evaluation_methods { "Evaluation methods #{Faker::Lorem.sentence(5, 0)}" }
    instructional_materials { "Instructional materials #{Faker::Lorem.sentence(5, 0)}" }
    location { "Location #{Faker::Lorem.sentence(5, 0)}" }
  end
end
