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
  end

  describe 'GET /api/learning_plans' do
    it 'returns a student learning plan' do
      get "/api/learning-plans/#{@student.id}"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['attributes']['year']).to eq(Setting.current_year)
    end
  end
end
