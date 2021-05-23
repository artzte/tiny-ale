# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Learning plans API', type: :request do
  before(:each) do
    Setting.current_year= 2020

    @coordinator = create :user, privilege: User::PRIVILEGE_STAFF
    @student = create :user, coordinator: @coordinator

    @goals = []
    @goals_from_last_year = []
  
    (1..4).each do |i|
      @goals << create(:learning_plan_goal, description: "Learning requirement #{i}", active: true, year: Setting.current_year)
    end

    (1..4).each do |i|
      @goals_from_last_year << create(:learning_plan_goal, description: "Learning requirement #{i}", active: true, year: Setting.current_year - 1)
    end

    @learning_plan = create :learning_plan, year: Setting.current_year, user: @student, weekly_hours: 25, creator: @student.coordinator
    @learning_plan_from_last_year = create :learning_plan, year: Setting.current_year - 1, user: @student, weekly_hours: 25, creator: @student.coordinator

    @learning_plan.learning_plan_goals << @goals
    @learning_plan_from_last_year.learning_plan_goals << @goals_from_last_year
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
      goal = create(:learning_plan_goal, description: "Learning requirement new", active: true, year: Setting.current_year)

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
      goal = @goals.first
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

  describe 'PUT /api/learning_plans/:learning_plan_id' do
    it 'updates an existing learning plan and attaches the current goals' do
      @do_things_and_pass = 'Do things and pass'
      @hours = '20'
      @year = Setting.current_year
      @body = {
        data: {
          attributes: {
            year: @year,
            weeklyHours: @hours,
            userGoals: @do_things_and_pass
          }
        }
      }

      plan = create :learning_plan, user_goals: 'Hello world I am awesome', weekly_hours: '66', year: @year, user: @student, creator: @student.coordinator
      goal = @goals.first
      plan.learning_plan_goals << goal

      expect(plan.learning_plan_goals.first).to eq(goal)
      expect(plan.id).to be_present
      expect(plan.learning_plan_goals.count).to eq(1)

      put "/api/learning-plans/#{plan.id}",
        params: @body.to_json,
        headers: json_request_headers
      
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      
      expect(json['data']['id']).to eq(plan.id.to_s)
      expect(json['data']['attributes']['userGoals']).to eq(@do_things_and_pass)
      
      expect(json['data']['attributes']['weeklyHours']).to eq(@hours)
      expect(json['data']['relationships']['learningPlanGoals']['data'].size).to eq(@goals.size)
      expect(json['data']['relationships']['learningPlanGoals']['data'].map{|goal| goal['id']}.sort).to eq(@goals.map{|goal| goal[:id].to_s}.sort)

      plan = LearningPlan.find plan.id
      expect(plan.weekly_hours).to eq(@hours)
      expect(plan.user_goals).to eq(@do_things_and_pass)
    end
  end

  describe 'POST /api/learning_plans/:student_id/:year' do
    before(:each) do
      @do_things_and_pass = 'Do things and pass'
      @hours = Rails.configuration.constants[:DEFAULT_FTE_HOURS]
      @year = Setting.current_year - 2
      @year_goals = (1..4).map{|i| create(:learning_plan_goal, description: "Learning requirement #{i}", active: true, year: @year)}
    end
  
    it 'creates a student learning plan for two years ago' do
      post "/api/learning-plans/#{@student.id}/#{@year}",
        headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['attributes']['year']).to eq(@year)
      expect(json['data']['attributes']['weeklyHours']).to eq(@hours)
      expect(json["data"]["relationships"]["learningPlanGoals"]["data"].size).to eq(@year_goals.size)
    end

    it 'mistakenly creates another student learning plan for a duplicate year' do
      post "/api/learning-plans/#{@student.id}/#{@learning_plan.year}",
        headers: json_request_headers

      expect(response).to have_http_status(422)
      expect(json).not_to be_empty
    end
  end
end
