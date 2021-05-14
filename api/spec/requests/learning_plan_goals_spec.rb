# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Learning plan goals API', type: :request do
  before(:each) do
    @goal1 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 1
    @goal2 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 2
    @goal3 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 3
    @goal4 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, position: 4
    @goal5 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: false, required: true, position: 5
    @goal6 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, year: Setting.current_year, position: 100
    @goal7 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: true, year: Setting.current_year - 1, position: 101

    # make a little piggy-wiggy outa order
    @goal0 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, required: false, position: 0
  end

  describe 'GET /api/learning-plan-goals/:year' do
    it 'returns a 200 with the expected count of learning plan goals in the expected order' do
      get "/api/learning-plan-goals/#{Setting.current_year}", headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty

      expected_records = LearningPlanGoal.where("active = true AND (year IS NULL OR year = #{Setting.current_year})")
      expect(json['meta']['count']).to eq(expected_records.count)

      expect(json['data'].first['id']).to eq(@goal0.id.to_s)
      expect(json['data'].last['id']).to eq(@goal6.id.to_s)
    end
  end
end
