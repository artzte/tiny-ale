# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Learning plans API', type: :request do
  before(:each) do
    @required = []
    @optional = []

    @coordinator = create :user, privilege: User::PRIVILEGE_STAFF
    @student = create :user, coordinator: @coordinator
  
    (1..4).each do |i|
      @required << create(:learning_plan_goal, description: "Learning requirement (required) #{i}", required: true, active: true)
      @optional << create(:learning_plan_goal, description: "Learning requirement (optional) #{i}", required: false, active: true)
    end

    @learning_plan = create :learning_plan, year: Setting.current_year, user: @student, weekly_hours: 25
    @learning_plan_from_last_year = create :learning_plan, year: Setting.current_year - 1, user: @student, weekly_hours: 25

    @learning_plan.learning_plan_goals << @required
    @learning_plan_from_last_year.learning_plan_goals << @required
  end

  after(:each) do
    DatabaseCleaner.clean
  end

  describe 'GET /api/learning_plans' do
    it 'returns a student learning plan for current year' do
      get "/api/learning-plans/#{@student.id}/#{Setting.current_year}"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['attributes']['year']).to eq(Setting.current_year)
    end

    it 'returns a student learning plan for other year' do
      get "/api/learning-plans/#{@student.id}/#{Setting.current_year - 1}"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['attributes']['year']).to eq(Setting.current_year - 1)
    end

    it 'returns a 404 for a nonexistent student learning plan' do
      get "/api/learning-plans/#{@student.id}/1900"
      expect(response).to have_http_status(404)
      expect(json).not_to be_empty
    end
  end

  describe 'POST /api/learning_plans/:student_id/goals/:learning_plan_goal_id' do
    it 'adds a new learning plan goal' do
      goal = @optional.first

      post "/api/learning-plans/#{@learning_plan.id}/goals/#{goal.id}"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      
      added_goal = @learning_plan.learning_plan_goals.reload.find { |g| g.id == goal.id }

      expect(added_goal).to be_present
      expect(json['data']['relationships']['learningPlanGoals']['data'].size).to eq(@learning_plan.learning_plan_goals.size)

      # a duplicate is refused
      post "/api/learning-plans/#{@learning_plan.id}/goals/#{goal.id}"
      expect(response).to have_http_status(422)
      expect(json).not_to be_empty
    end
  end

  describe 'DELETE /api/learning_plans/:student_id/goals/:learning_plan_goal_id' do
    it 'removes a learning plan goal' do
      goal = @optional.first
      @learning_plan.learning_plan_goals << goal

      delete "/api/learning-plans/#{@learning_plan.id}/goals/#{goal.id}"
      expect(response).to have_http_status(204)
      expect(body).to be_empty

      @learning_plan.learning_plan_goals.reload
      expect(@learning_plan.learning_plan_goals.find_by_id(goal.id)).to be_nil
      
      delete "/api/learning-plans/#{@learning_plan.id}/goals/#{goal.id}"
      expect(response).to have_http_status(404)
    end
  end

  describe 'POST /api/learning_plans/:student_id/:year' do
    before(:each) do
      @do_things_and_pass = 'Do things and pass'
      @hours = 20
      @year = Setting.current_year + 2
      @body = {
        data: {
          attributes: {
            year: @year,
            weekly_hours: @hours,
            user_goals: @do_things_and_pass
          }
        }
      }
    end
  
    it 'creates a student learning plan for next year' do
      post "/api/learning-plans/#{@student.id}/#{@year}",
        params: @body.to_json,
        headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['attributes']['year']).to eq(@year)
      expect(json['data']['attributes']['weeklyHours']).to eq(@hours)
      expect(json['data']['attributes']['userGoals']).to eq(@do_things_and_pass)
      expect(json['data']['relationships']['learningPlanGoals']['data'].size).to eq(@required.size)
    end

    it 'mistakenly creates another student learning plan for a duplicate year' do
      @body[:data][:attributes][:year] = @learning_plan.year
      post "/api/learning-plans/#{@student.id}/#{@learning_plan.year}",
        params: @body.to_json,
        headers: json_request_headers

      expect(response).to have_http_status(422)
      expect(json).not_to be_empty
    end
  end
end
