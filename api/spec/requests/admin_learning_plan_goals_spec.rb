# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Admin learning plan goals API', type: :request do
  before(:each) do
    Setting.current_year = 2020
    @goal1 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, position: 1, year: Setting.current_year
    @goal2 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, position: 2, year: Setting.current_year
    @goal3 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, position: 3, year: Setting.current_year
    @goal4 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, position: 4, year: Setting.current_year
    @goal5 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: false, position: 5, year: Setting.current_year

    # make a little piggy-wiggy outa order
    @goal0 = create :learning_plan_goal, description: Faker::Lorem.paragraph, active: true, position: 0, year: Setting.current_year
  end

  describe 'GET /api/admin/learning-plan-goals' do
    it 'returns a 200 with the expected count of learning plan goals in the expected order' do
      get '/api/admin/learning-plan-goals', headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty

      expect(json['meta']['count']).to eq(LearningPlanGoal.count)

      expect(json['data'].first['id']).to eq(@goal0.id.to_s)
      expect(json['data'].last['id']).to eq(@goal5.id.to_s)
    end
  end

  describe 'PUT /api/admin/learning-plan-goals/:id/reorder' do
    it 'returns a 200 with successful reordering of a group of goals' do
      body = {
        data: [@goal1.id, @goal3.id, @goal5.id, @goal2.id, @goal4.id] 
      }
      put "/api/admin/learning-plan-goals/reorder", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)

      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty

      expect(json['meta']['count']).to eq(5)

      expect(json['data'].first['id']).to eq(@goal1.id.to_s)
      expect(json['data'].first['attributes']['position']).to eq(0)

      expect(json['data'].second['id']).to eq(@goal3.id.to_s)
      expect(json['data'].second['attributes']['position']).to eq(1)

      expect(json['data'].last['id']).to eq(@goal4.id.to_s)
      expect(json['data'].last['attributes']['position']).to eq(json['data'].count-1)
    end
  end

  describe 'POST /api/admin/learning-plan-goals' do
    it 'returns a 200 with successful goal creation' do
      postBody = {
        data: {
          attributes: {
            description: Faker::Lorem.paragraph,
            active: true,
            year: Setting.current_year
          },
        }
      }

      post '/api/admin/learning-plan-goals', params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['id']).not_to be_empty

      attributes = json['data']['attributes']
      %w[description status active].each do |key|
        expect(attributes[key]).to eq(postBody[:data][:attributes][key.to_sym])
      end
    end

    it 'requires minimum input set or yields 422' do
      postBody = {
        data: {
          attributes: {
            description: 'boof'
          }
        }
      }
      post '/api/admin/learning-plan-goals', params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(422)

      expect(json).not_to be_empty

      expect(json['status']).to eq(422)
      expect(json['errors']).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
