# frozen_string_literal: true

# spec/factories/contract.rb

FactoryBot.define do
  factory :contract do
    name { Faker::Lorem.sentence(word_count: 5, supplemental: 0) }
    contract_status { 1 }
    timeslots { [{ start: '8:45', end: '10:30', weekdays: '01234' }] }
    learning_objectives { "Learning objectives #{Faker::Lorem.sentence(word_count: 5, supplemental: 0)}" }
    competencies { "Competencies #{Faker::Lorem.sentence(word_count: 5, supplemental: 0)}" }
    evaluation_methods { "Evaluation methods #{Faker::Lorem.sentence(word_count: 5, supplemental: 0)}" }
    instructional_materials { "Instructional materials #{Faker::Lorem.sentence(word_count: 5, supplemental: 0)}" }
    location { "Location #{Faker::Lorem.sentence(word_count: 5, supplemental: 0)}" }
  end
end
