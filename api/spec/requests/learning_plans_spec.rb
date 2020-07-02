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

    @learning_plan = create :learning_plan, year: Setting.current_year, user: @student
    @learning_plan_from_last_year = create :learning_plan, year: Setting.current_year - 1, user: @student
  end

  describe 'GET /api/learning_plans' do
    it 'returns a student learning plan for current year' do
      get "/api/learning-plans/#{@student.id}"
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
end
